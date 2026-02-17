from fastapi import APIRouter, HTTPException, Request, Header
from pydantic import BaseModel, EmailStr, Field
from typing import Dict, List, Optional
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from emergentintegrations.payments.stripe.checkout import (
    StripeCheckout,
    CheckoutSessionResponse,
    CheckoutStatusResponse,
    CheckoutSessionRequest
)

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/orders", tags=["orders"])

# Environment variables
STRIPE_API_KEY = os.environ.get('STRIPE_API_KEY')
RESEND_API_KEY = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Initialize Resend
resend.api_key = RESEND_API_KEY


# Pydantic Models
class CustomerInfo(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    phone: str
    address: Optional[str] = ""
    city: Optional[str] = ""
    postalCode: Optional[str] = ""
    notes: Optional[str] = ""


class OrderItem(BaseModel):
    id: str
    name: str
    price: float
    quantity: int
    size: str
    category: str
    ingredients: Optional[str] = ""
    description: Optional[str] = ""


class OrderData(BaseModel):
    customer: CustomerInfo
    items: List[OrderItem]
    deliveryMethod: str
    subtotal: float
    discount: float
    deliveryFee: float
    total: float


class CreateCheckoutRequest(BaseModel):
    orderData: OrderData
    originUrl: str


async def send_order_confirmation_email(customer_email: str, order_data: dict):
    """Send order confirmation email using Resend"""
    try:
        items_html = ""
        for item in order_data['items']:
            items_html += f"""
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                    {item['name']} {f"({item['size']})" if item['size'] != 'standard' else ''}
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">
                    {item['quantity']}
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">
                    {item['price']:.2f} €
                </td>
            </tr>
            """

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background-color: #22c55e; color: white; padding: 20px; text-align: center; }}
                .content {{ background-color: #f9f9f9; padding: 20px; }}
                .order-details {{ background-color: white; padding: 20px; margin: 20px 0; border-radius: 8px; }}
                table {{ width: 100%; border-collapse: collapse; }}
                .total {{ font-weight: bold; font-size: 18px; color: #22c55e; }}
                .footer {{ text-align: center; padding: 20px; color: #666; font-size: 12px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🍕 Mezzora Pizza</h1>
                    <h2>Confirmation de commande</h2>
                </div>
                
                <div class="content">
                    <p>Bonjour {order_data['customer']['firstName']} {order_data['customer']['lastName']},</p>
                    
                    <p>Merci pour votre commande ! Nous avons bien reçu votre paiement et nous préparons déjà votre commande avec soin.</p>
                    
                    <div class="order-details">
                        <h3>Détails de votre commande</h3>
                        <p><strong>Numéro de commande:</strong> {order_data['order_id']}</p>
                        <p><strong>Mode de retrait:</strong> {order_data['deliveryMethod']}</p>
                        
                        <table>
                            <thead>
                                <tr style="background-color: #f3f4f6;">
                                    <th style="padding: 10px; text-align: left;">Article</th>
                                    <th style="padding: 10px; text-align: center;">Quantité</th>
                                    <th style="padding: 10px; text-align: right;">Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items_html}
                            </tbody>
                        </table>
                        
                        <table style="margin-top: 20px;">
                            <tr>
                                <td><strong>Sous-total:</strong></td>
                                <td style="text-align: right;">{order_data['subtotal']:.2f} €</td>
                            </tr>
                            {f'''
                            <tr style="color: #22c55e;">
                                <td><strong>Réduction (2+1 offert):</strong></td>
                                <td style="text-align: right;">-{order_data['discount']:.2f} €</td>
                            </tr>
                            ''' if order_data['discount'] > 0 else ''}
                            {f'''
                            <tr>
                                <td><strong>Frais de livraison:</strong></td>
                                <td style="text-align: right;">{order_data['deliveryFee']:.2f} €</td>
                            </tr>
                            ''' if order_data['deliveryFee'] > 0 else ''}
                            <tr class="total">
                                <td><strong>TOTAL:</strong></td>
                                <td style="text-align: right;">{order_data['total']:.2f} €</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; border-radius: 4px;">
                        <p style="margin: 0;"><strong>⏱ Temps de préparation:</strong> Votre commande sera prête dans environ 20-30 minutes.</p>
                        <p style="margin: 10px 0 0 0;">Nous vous appellerons au <strong>{order_data['customer']['phone']}</strong> dès qu'elle sera prête.</p>
                    </div>
                    
                    {f'''
                    <div style="background-color: #e0f2fe; padding: 15px; border-left: 4px solid #0284c7; margin: 20px 0; border-radius: 4px;">
                        <p style="margin: 0;"><strong>📍 Adresse de livraison:</strong></p>
                        <p style="margin: 5px 0 0 0;">{order_data['customer']['address']}<br/>{order_data['customer']['postalCode']} {order_data['customer']['city']}</p>
                    </div>
                    ''' if order_data['deliveryMethod'] == 'livraison' else ''}
                    
                    <p>À très bientôt chez Mezzora Pizza !</p>
                    
                    <p style="margin-top: 30px;">
                        <strong>Mezzora Pizza</strong><br/>
                        4-6 Avenue du Président Georges Pompidou<br/>
                        92500 Rueil-Malmaison<br/>
                        📞 01.47.49.49.04
                    </p>
                </div>
                
                <div class="footer">
                    <p>© 2025 Mezzora Pizza - 28 ans de passion pour la pizza artisanale</p>
                </div>
            </div>
        </body>
        </html>
        """

        params = {
            "from": SENDER_EMAIL,
            "to": [customer_email],
            "subject": f"Confirmation de commande #{order_data['order_id']} - Mezzora Pizza",
            "html": html_content
        }

        email_result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email de confirmation envoyé à {customer_email}: {email_result}")
        return True

    except Exception as e:
        logger.error(f"Erreur lors de l'envoi de l'email: {str(e)}")
        return False


@router.post("/create-checkout")
async def create_checkout_session(request: CreateCheckoutRequest, http_request: Request):
    """Create Stripe checkout session for order"""
    try:
        # Generate order ID
        order_id = f"MEZ-{datetime.utcnow().strftime('%Y%m%d%H%M%S')}"

        # Prepare metadata
        metadata = {
            "order_id": order_id,
            "customer_email": request.orderData.customer.email,
            "customer_name": f"{request.orderData.customer.firstName} {request.orderData.customer.lastName}",
            "customer_phone": request.orderData.customer.phone,
            "deliveryMethod": request.orderData.deliveryMethod,
            "subtotal": str(request.orderData.subtotal),
            "discount": str(request.orderData.discount),
            "deliveryFee": str(request.orderData.deliveryFee),
        }

        # Initialize Stripe checkout
        host_url = request.originUrl
        webhook_url = f"{str(http_request.base_url)}api/webhook/stripe"
        stripe_checkout = StripeCheckout(api_key=STRIPE_API_KEY, webhook_url=webhook_url)

        # Create checkout session URLs
        success_url = f"{host_url}/order-confirmation?session_id={{CHECKOUT_SESSION_ID}}"
        cancel_url = f"{host_url}/checkout"

        # Create checkout request
        checkout_request = CheckoutSessionRequest(
            amount=float(request.orderData.total),
            currency="eur",
            success_url=success_url,
            cancel_url=cancel_url,
            metadata=metadata
        )

        # Create Stripe checkout session
        session: CheckoutSessionResponse = await stripe_checkout.create_checkout_session(checkout_request)

        # Save pending transaction in database
        transaction_data = {
            "order_id": order_id,
            "session_id": session.session_id,
            "customer": request.orderData.customer.dict(),
            "items": [item.dict() for item in request.orderData.items],
            "deliveryMethod": request.orderData.deliveryMethod,
            "subtotal": request.orderData.subtotal,
            "discount": request.orderData.discount,
            "deliveryFee": request.orderData.deliveryFee,
            "total": request.orderData.total,
            "payment_status": "pending",
            "status": "initiated",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow(),
        }

        await db.payment_transactions.insert_one(transaction_data)
        logger.info(f"Transaction créée: {order_id} - Session: {session.session_id}")

        return {"url": session.url, "session_id": session.session_id, "order_id": order_id}

    except Exception as e:
        logger.error(f"Erreur lors de la création de la session de paiement: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Erreur lors de la création de la commande: {str(e)}")


@router.get("/payment-status/{session_id}")
async def get_payment_status(session_id: str):
    """Check payment status and update database"""
    try:
        # Initialize Stripe checkout
        stripe_checkout = StripeCheckout(api_key=STRIPE_API_KEY, webhook_url="")

        # Get checkout status from Stripe
        checkout_status: CheckoutStatusResponse = await stripe_checkout.get_checkout_status(session_id)

        # Find transaction in database
        transaction = await db.payment_transactions.find_one({"session_id": session_id})
        
        if not transaction:
            raise HTTPException(status_code=404, detail="Transaction non trouvée")

        # Update transaction if payment is successful and not already processed
        if checkout_status.payment_status == "paid" and transaction.get("payment_status") != "paid":
            update_data = {
                "payment_status": checkout_status.payment_status,
                "status": "completed",
                "updated_at": datetime.utcnow(),
            }
            
            await db.payment_transactions.update_one(
                {"session_id": session_id},
                {"$set": update_data}
            )

            # Send confirmation email
            order_data = {
                "order_id": transaction["order_id"],
                "customer": transaction["customer"],
                "items": transaction["items"],
                "deliveryMethod": transaction["deliveryMethod"],
                "subtotal": transaction["subtotal"],
                "discount": transaction["discount"],
                "deliveryFee": transaction["deliveryFee"],
                "total": transaction["total"],
            }
            
            await send_order_confirmation_email(
                transaction["customer"]["email"],
                order_data
            )

            logger.info(f"Paiement confirmé pour la commande {transaction['order_id']}")

        return {
            "status": checkout_status.status,
            "payment_status": checkout_status.payment_status,
            "amount_total": checkout_status.amount_total,
            "currency": checkout_status.currency,
            "order_id": transaction["order_id"],
            "metadata": checkout_status.metadata,
        }

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Erreur lors de la vérification du statut de paiement: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Erreur lors de la vérification du paiement: {str(e)}")


@router.post("/webhook/stripe")
async def stripe_webhook(request: Request, stripe_signature: str = Header(None)):
    """Handle Stripe webhooks"""
    try:
        webhook_request_body = await request.body()
        
        stripe_checkout = StripeCheckout(api_key=STRIPE_API_KEY, webhook_url="")
        webhook_response = await stripe_checkout.handle_webhook(
            webhook_request_body,
            stripe_signature
        )

        logger.info(f"Webhook reçu: {webhook_response.event_type} - Session: {webhook_response.session_id}")

        # Update transaction based on webhook event
        if webhook_response.event_type == "checkout.session.completed" and webhook_response.payment_status == "paid":
            transaction = await db.payment_transactions.find_one({"session_id": webhook_response.session_id})
            
            if transaction and transaction.get("payment_status") != "paid":
                await db.payment_transactions.update_one(
                    {"session_id": webhook_response.session_id},
                    {"$set": {
                        "payment_status": "paid",
                        "status": "completed",
                        "updated_at": datetime.utcnow()
                    }}
                )
                logger.info(f"Transaction mise à jour via webhook: {transaction['order_id']}")

        return {"status": "success"}

    except Exception as e:
        logger.error(f"Erreur webhook: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/")
async def get_all_orders():
    """Get all orders (for admin dashboard)"""
    try:
        orders = await db.payment_transactions.find(
            {},
            {"_id": 0}
        ).sort("created_at", -1).to_list(1000)
        return orders
    except Exception as e:
        logger.error(f"Erreur lors de la récupération des commandes: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/{order_id}")
async def get_order_by_id(order_id: str):
    """Get order by order ID"""
    try:
        order = await db.payment_transactions.find_one(
            {"order_id": order_id},
            {"_id": 0}
        )
        if not order:
            raise HTTPException(status_code=404, detail="Commande non trouvée")
        return order
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Erreur lors de la récupération de la commande: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
