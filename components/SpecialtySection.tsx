
import React from 'react';
import { SPECIALTIES } from '../constants';
import { Layers } from 'lucide-react';
import { useApp } from '../App';

interface SpecialtySectionProps {
  onSpecialtySelect: (specialty: string) => void;
}

const SpecialtySection: React.FC<SpecialtySectionProps> = ({ onSpecialtySelect }) => {
  const { t } = useApp();
  
  return (
    <section id="specialties" className="py-32 bg-white dark:bg-[#001E3C] transition-colors duration-500 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001E3C 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
          <div className="max-w-2xl text-center md:text-left animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 text-sky-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4">
              <Layers size={14} />
              {t('specialization')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#001E3C] dark:text-white tracking-tighter mb-4 italic">{t('expertise')}</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
              {t('expertiseSub')}
            </p>
          </div>
          <div className="hidden lg:block animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="w-16 h-16 rounded-full border border-slate-100 dark:border-white/5 flex items-center justify-center text-slate-200 dark:text-white/5">
               <Layers size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {SPECIALTIES.map((specialty, idx) => (
            <button
              key={specialty}
              onClick={() => {
                onSpecialtySelect(specialty);
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative h-40 flex flex-col items-center justify-center rounded-[2.5rem] bg-slate-50 dark:bg-[#001428] border border-slate-100 dark:border-white/5 p-6 transition-all duration-500 hover:bg-white dark:hover:bg-white/10 hover:border-sky-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.1)] overflow-hidden animate-in fade-in zoom-in-95"
              style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'both' }}
            >
              {/* Decorative Number */}
              <span className="absolute -top-2 -right-2 text-6xl font-black text-slate-100 dark:text-white opacity-50 dark:opacity-[0.02] transition-opacity group-hover:opacity-10 pointer-events-none">{String(idx + 1).padStart(2, '0')}</span>
              
              <span className="text-[#001E3C] dark:text-slate-300 font-black text-sm tracking-tight text-center relative z-10 group-hover:text-sky-600 transition-colors">
                {specialty}
              </span>
              <div className="mt-4 w-6 h-1 bg-slate-200 dark:bg-white/10 rounded-full transition-all group-hover:w-12 group-hover:bg-sky-500"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;
