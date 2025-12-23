
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useApp } from '../App.tsx';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const { t } = useApp();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 overflow-hidden bg-[#001E3C]">
      {/* Immersive Dark Background with Low-Opacity Conference Image */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2400")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Dark Gradient Overlays for Integration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001E3C]/80 via-[#001E3C] to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#f1f5f9] dark:from-[#001428] via-transparent to-transparent z-10"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Pill Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
           <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
           <span className="text-sky-400 font-black text-[10px] uppercase tracking-widest">{t('heroBadge')}</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tighter italic animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {t('heroTitle').split('Medical Career')[0]} <br />
          <span className="text-sky-400">Medical Career</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000">
          {t('heroSub')}
        </p>

        {/* Central Focus Search Bar */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-[#001E3C]/90 rounded-3xl p-2 shadow-2xl backdrop-blur-md border border-white/10 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center w-full gap-2">
            <div className="flex-1 flex items-center px-6 py-1 w-full">
              <Search className="text-slate-400" size={24} />
              <input 
                type="text" 
                placeholder={t('searchPlaceholder')} 
                className="w-full bg-transparent outline-none text-slate-800 dark:text-white placeholder:text-slate-500 font-bold text-lg py-4 ml-4"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="w-full md:w-auto bg-sky-500 hover:bg-sky-400 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-sky-500/20 active:scale-95 whitespace-nowrap uppercase tracking-widest"
            >
              {t('findEvents')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
