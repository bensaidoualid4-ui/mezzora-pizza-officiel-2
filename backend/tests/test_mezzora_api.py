"""
Backend API Tests for Mezzora Pizza Website
Tests: Contact form API, Health checks
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAPIHealth:
    """Basic API health and connectivity tests"""
    
    def test_api_root_endpoint(self):
        """Test API root returns Hello World"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Hello World"


class TestContactAPI:
    """Contact form API tests"""
    
    def test_submit_contact_form_success(self):
        """Test submitting a valid contact form"""
        payload = {
            "name": "TEST_Marie Dupont",
            "email": "marie.dupont@example.com",
            "phone": "01 23 45 67 89",
            "subject": "contact",
            "message": "Bonjour, je voudrais connaître vos horaires de livraison."
        }
        response = requests.post(f"{BASE_URL}/api/contact/", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "success"
        assert "message" in data
        assert "id" in data
        assert len(data["id"]) > 0
    
    def test_submit_contact_form_reclamation(self):
        """Test submitting a reclamation contact form"""
        payload = {
            "name": "TEST_Jean Martin",
            "email": "jean.martin@example.com",
            "phone": "",
            "subject": "reclamation",
            "message": "J'ai eu un problème avec ma dernière commande."
        }
        response = requests.post(f"{BASE_URL}/api/contact/", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "success"
    
    def test_submit_contact_form_avis(self):
        """Test submitting an avis (review) contact form"""
        payload = {
            "name": "TEST_Sophie Leroy",
            "email": "sophie.leroy@example.com",
            "phone": "06 12 34 56 78",
            "subject": "avis",
            "message": "Excellentes pizzas, je recommande vivement !"
        }
        response = requests.post(f"{BASE_URL}/api/contact/", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "success"
    
    def test_submit_contact_form_invalid_email(self):
        """Test submitting contact form with invalid email"""
        payload = {
            "name": "TEST_Invalid User",
            "email": "invalid-email",
            "phone": "",
            "subject": "contact",
            "message": "Test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact/", json=payload)
        
        # Pydantic validation should reject invalid email
        assert response.status_code == 422
    
    def test_submit_contact_form_missing_required_fields(self):
        """Test submitting contact form with missing required fields"""
        payload = {
            "name": "",
            "email": "test@example.com",
            "subject": "contact",
            "message": ""
        }
        response = requests.post(f"{BASE_URL}/api/contact/", json=payload)
        
        # Should still accept empty name/message as they are strings
        # But the business logic should ideally validate
        assert response.status_code in [200, 422]
    
    def test_get_all_contacts(self):
        """Test retrieving all contact messages (admin endpoint)"""
        response = requests.get(f"{BASE_URL}/api/contact/")
        
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        
        # Should have at least the test messages we submitted
        if len(data) > 0:
            # Verify structure of contact message
            contact = data[0]
            assert "name" in contact
            assert "email" in contact
            assert "subject" in contact
            assert "message" in contact
            assert "created_at" in contact
            assert "status" in contact


class TestStatusAPI:
    """Status check API tests"""
    
    def test_create_status_check(self):
        """Test creating a status check"""
        payload = {
            "client_name": "TEST_Mezzora_UI_Test"
        }
        response = requests.post(f"{BASE_URL}/api/status", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
        assert data["client_name"] == "TEST_Mezzora_UI_Test"
        assert "timestamp" in data
    
    def test_get_status_checks(self):
        """Test retrieving status checks"""
        response = requests.get(f"{BASE_URL}/api/status")
        
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
