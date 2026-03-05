import React, { useState } from 'react';
import { Send, Phone, MapPin, Clock } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'contact',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await axios.post(`${BACKEND_URL}/api/contact/`, formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: 'contact', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-warm" id="contact" data-testid="contact-section">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-mz-red font-semibold text-sm uppercase tracking-widest mb-2">Nous contacter</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-mz-brown mb-4">
            Contactez-nous
          </h2>
          <div className="w-16 h-1 bg-mz-red mx-auto rounded-full"></div>
        </div>

        {/* Phone CTA banner */}
        <div className="bg-mz-red rounded-2xl p-6 md:p-8 text-white text-center mb-10 max-w-2xl mx-auto" data-testid="phone-cta-banner">
          <p className="text-red-200 text-sm mb-2">Pour commander ou réserver</p>
          <a
            href="tel:0147494904"
            data-testid="contact-phone-cta"
            className="text-3xl md:text-4xl font-black hover:text-yellow-200 transition-colors inline-flex items-center gap-3"
          >
            <Phone className="w-8 h-8" />
            01 47 49 49 04
          </a>
          <p className="text-red-200 text-sm mt-2">Du lundi au samedi 11h-14h30 / 18h-22h30</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <div className="warm-card rounded-2xl p-6 md:p-8" data-testid="contact-form-card">
            <h3 className="font-bold text-lg text-mz-brown mb-5">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-mz-muted mb-1.5">Nom complet *</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    data-testid="contact-name-input"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-mz-red focus:ring-1 focus:ring-red-100 transition-colors text-sm"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-mz-muted mb-1.5">Email *</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    data-testid="contact-email-input"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-mz-red focus:ring-1 focus:ring-red-100 transition-colors text-sm"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-mz-muted mb-1.5">Téléphone</label>
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  data-testid="contact-phone-input"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-mz-red focus:ring-1 focus:ring-red-100 transition-colors text-sm"
                  placeholder="01 23 45 67 89"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-mz-muted mb-1.5">Sujet *</label>
                <select
                  name="subject" value={formData.subject} onChange={handleChange} required
                  data-testid="contact-subject-select"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-mz-red focus:ring-1 focus:ring-red-100 transition-colors text-sm"
                >
                  <option value="contact">Question générale</option>
                  <option value="reclamation">Réclamation</option>
                  <option value="avis">Laisser un avis</option>
                  <option value="commande">Question sur une commande</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-mz-muted mb-1.5">Message *</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} required rows="4"
                  data-testid="contact-message-textarea"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-mz-red focus:ring-1 focus:ring-red-100 transition-colors resize-none text-sm"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-xl text-sm" data-testid="contact-success-msg">
                  Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-sm" data-testid="contact-error-msg">
                  Une erreur est survenue. Appelez-nous au 01 47 49 49 04
                </div>
              )}

              <button
                type="submit" disabled={isSubmitting}
                data-testid="contact-submit-btn"
                className="w-full bg-mz-red hover:bg-red-800 text-white py-3 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? 'Envoi en cours...' : (<><Send className="w-4 h-4" /> Envoyer le message</>)}
              </button>
            </form>
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="warm-card rounded-2xl p-6">
              <h3 className="font-bold text-lg text-mz-brown mb-4">Informations pratiques</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-mz-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-mz-brown text-sm">Adresse</p>
                    <p className="text-mz-muted text-sm">4-6 Avenue du Président Georges Pompidou<br/>92500 Rueil-Malmaison</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-mz-brown text-sm">Horaires</p>
                    <p className="text-mz-muted text-sm">Lun-Sam : 11h-14h30 / 18h-22h30</p>
                    <p className="text-mz-muted text-sm">Dimanche : 18h-22h30</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-mz-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-mz-brown text-sm">Téléphone</p>
                    <a href="tel:0147494904" className="text-mz-red font-bold text-sm hover:text-red-800">01 47 49 49 04</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="warm-card rounded-2xl overflow-hidden" data-testid="google-maps-embed">
              <iframe
                title="Mezzora Pizza - Localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.8!2d2.1789!3d48.8774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzM4LjYiTiAywrAxMCc0NC4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
