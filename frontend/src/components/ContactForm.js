import React, { useState } from 'react';
import { Send, Phone, MapPin, Clock } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'contact', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true); setStatus(null);
    try {
      await axios.post(`${BACKEND_URL}/api/contact/`, form);
      setStatus('ok');
      setForm({ name: '', email: '', phone: '', subject: 'contact', message: '' });
    } catch { setStatus('err'); }
    finally { setSending(false); }
  };

  const inputCls = "w-full bg-transparent border-b border-white/15 focus:border-[var(--gold)] py-3 text-[var(--cream)] text-sm outline-none placeholder:text-white/20 transition-colors";

  return (
    <section className="py-24 md:py-32 border-t border-white/5" id="contact" data-testid="contact-section">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Nous contacter</p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal italic text-[var(--cream)] mb-3">Contact</h2>
          <div className="sep mt-6"></div>
        </div>

        {/* Phone */}
        <div className="text-center mb-16" data-testid="phone-cta-banner">
          <p className="text-[var(--cream-muted)] text-sm mb-3">Pour commander ou réserver</p>
          <a href="tel:0147494904" data-testid="contact-phone-cta"
            className="font-serif text-3xl md:text-4xl text-[var(--cream)] hover:text-[var(--gold)] transition-colors inline-flex items-center gap-4">
            <Phone className="w-7 h-7" /> 01 47 49 49 04
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <div data-testid="contact-form-card">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" name="name" value={form.name} onChange={onChange} required placeholder="Nom" data-testid="contact-name-input" className={inputCls} />
                <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="Email" data-testid="contact-email-input" className={inputCls} />
              </div>
              <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="Téléphone" data-testid="contact-phone-input" className={inputCls} />
              <select name="subject" value={form.subject} onChange={onChange} data-testid="contact-subject-select"
                className="w-full bg-transparent border-b border-white/15 focus:border-[var(--gold)] py-3 text-[var(--cream)] text-sm outline-none transition-colors">
                <option value="contact" className="bg-[#141414]">Question générale</option>
                <option value="reclamation" className="bg-[#141414]">Réclamation</option>
                <option value="commande" className="bg-[#141414]">Question commande</option>
              </select>
              <textarea name="message" value={form.message} onChange={onChange} required rows="4" placeholder="Votre message..." data-testid="contact-message-textarea"
                className={`${inputCls} resize-none`}></textarea>

              {status === 'ok' && <p className="text-green-400 text-sm" data-testid="contact-success-msg">Merci, message envoyé.</p>}
              {status === 'err' && <p className="text-red-400 text-sm" data-testid="contact-error-msg">Erreur. Appelez-nous.</p>}

              <button type="submit" disabled={sending} data-testid="contact-submit-btn"
                className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--cream)] text-sm tracking-[0.15em] uppercase font-light transition-colors border-b border-[var(--gold)]/30 pb-1 disabled:opacity-40">
                <Send className="w-3.5 h-3.5" /> {sending ? 'Envoi...' : 'Envoyer'}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[var(--gold)] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[var(--cream)] text-sm font-medium mb-1">Adresse</p>
                <p className="text-[var(--cream-muted)] text-sm leading-relaxed">4-6 Avenue du Président Georges Pompidou<br/>92500 Rueil-Malmaison</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-[var(--gold)] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[var(--cream)] text-sm font-medium mb-1">Horaires</p>
                <p className="text-[var(--cream-muted)] text-sm">Lun-Sam : 11h-14h30 / 18h-22h30</p>
                <p className="text-[var(--cream-muted)] text-sm">Dimanche : 18h-22h30</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-[var(--gold)] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[var(--cream)] text-sm font-medium mb-1">Téléphone</p>
                <a href="tel:0147494904" className="text-[var(--gold)] text-sm hover:text-[var(--cream)] transition-colors">01 47 49 49 04</a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden mt-4" data-testid="google-maps-embed">
              <iframe title="Mezzora Pizza" src="https://www.google.com/maps?q=4-6+Avenue+du+Pr%C3%A9sident+Georges+Pompidou+92500+Rueil-Malmaison&output=embed"
                width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="w-full opacity-80"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
