
import React from 'react';
import { Twitter, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { useApp } from '../App';

const Footer: React.FC = () => {
  const { t, resetFilters } = useApp();
  const currentYear = new Date().getFullYear();

  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    resetFilters();
  };

  return (
    <footer className="bg-[#001E3C] text-slate-400 pt-24 pb-10 px-4 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Column */}
        <div className="space-y-8">
          <a href="#" onClick={handleGoHome} className="inline-block">
            <Logo forceWhite={true} />
          </a>
          <p className="text-sm leading-relaxed max-w-xs text-slate-300">
            {t('footerDesc')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white transition-all border border-white/5">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white transition-all border border-white/5">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white transition-all border border-white/5">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Discover */}
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">{t('discover')}</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Conferences</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Symposiums</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Workshops</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Virtual Events</a></li>
          </ul>
        </div>

        {/* Organizer */}
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">{t('organizers')}</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition-colors">List an Event</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Promote Your Event</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ticketing Solutions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">{t('contact')}</h4>
          <ul className="space-y-6 text-sm font-medium">
            <li className="flex items-start">
              <Mail size={18} className="mr-4 text-[#0EA5E9] shrink-0" />
              <span>contact@medsymposium.dz</span>
            </li>
            <li className="flex items-start">
              <MapPin size={18} className="mr-4 text-[#0EA5E9] shrink-0" />
              <span>Sidi Abdellah IT Park<br />Algiers, Algeria 16000</span>
            </li>
            <li className="flex items-start">
              <Phone size={18} className="mr-4 text-[#0EA5E9] shrink-0" />
              <span>+213 (0) 23 45 67 89</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">
          <p>&copy; {currentYear} MedSymposium Dz. All Rights Reserved.</p>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex space-x-8 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">
            <a href="#" className="hover:text-[#0EA5E9] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#0EA5E9] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#0EA5E9] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
