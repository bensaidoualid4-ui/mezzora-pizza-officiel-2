from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/contact", tags=["contact"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    subject: str
    message: str


@router.post("/")
async def submit_contact(contact: ContactMessage):
    """Receive and store contact form submissions"""
    try:
        contact_data = {
            **contact.dict(),
            "created_at": datetime.utcnow(),
            "status": "new",
        }
        
        result = await db.contact_messages.insert_one(contact_data)
        
        logger.info(f"Contact message received from {contact.email}")
        
        return {
            "status": "success",
            "message": "Votre message a bien été envoyé. Nous vous répondrons rapidement.",
            "id": str(result.inserted_id)
        }
    
    except Exception as e:
        logger.error(f"Error saving contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur lors de l'envoi du message")


@router.get("/")
async def get_all_contacts():
    """Get all contact messages (for admin)"""
    try:
        messages = await db.contact_messages.find(
            {},
            {"_id": 0}
        ).sort("created_at", -1).to_list(1000)
        return messages
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
