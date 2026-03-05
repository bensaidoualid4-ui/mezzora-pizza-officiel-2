import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/f5pdgnlq_logo%20mezzora.png" alt="Mezzora" className="h-10 w-auto rounded" />

          <div className="flex flex-col md:flex-row items-center gap-6 text-[var(--cream-muted)] text-xs tracking-wider">
            <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Rueil-Malmaison</span>
            <a href="tel:0147494904" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors"><Phone className="w-3 h-3" /> 01 47 49 49 04</a>
          </div>

          <p className="text-white/20 text-xs">&copy; 2025 Mezzora Pizza</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
