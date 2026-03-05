import React from 'react';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mz-brown text-white" data-testid="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/f5pdgnlq_logo%20mezzora.png" 
              alt="Mezzora Pizza" 
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Depuis 1997, Mezzora Pizza régale Rueil-Malmaison avec des pizzas artisanales 
              préparées avec passion et des ingrédients frais.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-bold text-base mb-5">Horaires d'ouverture</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-white/40" />
                <div>
                  <p className="font-semibold text-sm">Lundi - Samedi</p>
                  <p className="text-white/60 text-sm">11h00 - 14h30</p>
                  <p className="text-white/60 text-sm">18h00 - 22h30</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-white/40" />
                <div>
                  <p className="font-semibold text-sm">Dimanche</p>
                  <p className="text-white/60 text-sm">18h00 - 22h30</p>
                  <p className="text-white/40 text-xs italic">(fermé le midi)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:0147494904" 
                className="flex items-center gap-3 hover:text-yellow-200 transition-colors group"
              >
                <Phone className="w-4 h-4 text-white/40 group-hover:text-yellow-200" />
                <span className="font-bold text-sm">01 47 49 49 04</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-white/40" />
                <p className="text-white/60 text-sm">
                  4-6 Av. du Président Georges Pompidou<br />
                  92500 Rueil-Malmaison
                </p>
              </div>
              <a 
                href="mailto:contact@mezzorapizza.fr" 
                className="flex items-center gap-3 hover:text-yellow-200 transition-colors group"
              >
                <Mail className="w-4 h-4 text-white/40 group-hover:text-yellow-200" />
                <span className="text-white/60 text-sm group-hover:text-yellow-200">contact@mezzorapizza.fr</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
            <p>&copy; 2025 Mezzora Pizza. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
