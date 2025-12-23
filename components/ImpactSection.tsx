
import React from 'react';
import { useApp } from '../App.tsx';
import { Plus, FileText } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const { t, setView, setAuthIntent, user } = useApp();

  const handleCreateEvent = () => {
    setView('auth');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitWork = () => {
    setView('auth');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#001428] overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Final CTA Section */}
        <div className="relative">
          <div className="max-w-5xl mx-auto rounded-[4rem] bg-[#003366] dark:bg-[#001E3C] p-12 md:p-24 relative overflow-hidden text-center border border-white/5 shadow-2xl">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full -mr-32 -mt-32 blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full -ml-32 -mb-32 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic leading-none">
                {t('ctaTitle')}
              </h2>
              <p className="text-sky-200/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                {t('ctaSub')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <button 
                  onClick={handleCreateEvent}
                  className="group flex items-center gap-3 bg-[#0EA5E9] hover:bg-[#38B6FF] text-white px-10 py-6 rounded-[2.5rem] font-black text-lg shadow-2xl shadow-sky-500/30 transition-all active:scale-95 uppercase tracking-wider w-full sm:w-auto justify-center"
                >
                  <Plus size={28} className="group-hover:rotate-90 transition-transform" />
                  {t('ctaStart')}
                </button>
                <button 
                  onClick={handleSubmitWork}
                  className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-10 py-6 rounded-[2.5rem] font-black text-lg shadow-2xl transition-all active:scale-95 uppercase tracking-wider border border-white/10 w-full sm:w-auto justify-center backdrop-blur-md"
                >
                  <FileText size={28} className="transition-transform group-hover:scale-110" />
                  {t('submitWork')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
