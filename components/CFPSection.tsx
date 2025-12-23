
import React from 'react';
import { useApp } from '../App';
import { FileText, Send, UserCheck, Microscope, ArrowRight, ShieldCheck, Award } from 'lucide-react';

const CFPSection: React.FC = () => {
  const { t, setView, setAuthIntent, user } = useApp();

  const handleCFPSubmit = () => {
    if (!user) {
      setAuthIntent('author_required');
    }
    setView('auth');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    { 
      icon: <FileText size={24} />, 
      text: t('cfpStep1'),
      desc: 'Browse through our directory of world-class medical symposiums.'
    },
    { 
      icon: <Send size={24} />, 
      text: t('cfpStep2'),
      desc: 'Upload your abstract using our standardized submission module.'
    },
    { 
      icon: <Microscope size={24} />, 
      text: t('cfpStep3'),
      desc: 'Rigorous manual peer-review by the Scientific Committee.'
    },
    { 
      icon: <UserCheck size={24} />, 
      text: t('cfpStep4'),
      desc: 'Receive your invitation to present at the live event.'
    },
  ];

  return (
    <section className="py-32 bg-[#001428] relative overflow-hidden transition-colors duration-500">
      {/* Immersive Background Particles (Visual Decor) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side: Editorial Content */}
          <div className="flex-1 text-center lg:text-left space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-black text-[10px] uppercase tracking-[0.4em]">
                <Microscope size={14} className="animate-bounce" />
                {t('cfpBadge')}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter italic leading-[0.95] mb-6">
                {t('cfpTitle')}
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('cfpSub')}
              </p>
            </div>

            {/* Scientific Merit Highlights */}
            <div className="flex flex-col sm:flex-row gap-8 py-8 border-y border-white/5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-2xl text-sky-400 border border-white/10">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1">{t('feat1')}</h4>
                  <p className="text-slate-500 text-[11px] font-bold">{t('feat2')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-2xl text-sky-400 border border-white/10">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1">{t('accredited')}</h4>
                  <p className="text-slate-500 text-[11px] font-bold">{t('globalFMC')}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button 
                onClick={handleCFPSubmit}
                className="group flex items-center gap-4 bg-[#0EA5E9] hover:bg-[#38B6FF] text-white px-12 py-6 rounded-3xl font-black text-lg transition-all active:scale-95 shadow-2xl shadow-sky-500/30 uppercase tracking-wider"
              >
                {t('cfpCTA')}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </button>
              <button 
                onClick={() => setView('directory')}
                className="group text-white/60 hover:text-white font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center gap-2 border-b-2 border-white/10 hover:border-sky-500 pb-1"
              >
                {t('cfpBrowse')}
              </button>
            </div>
          </div>

          {/* Right Side: Enhanced Process Cards */}
          <div className="flex-1 w-full max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Connector Gradient Overlay */}
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="group glass-card dark:bg-[#001E3C]/40 p-10 rounded-[3rem] border border-white/5 hover:border-sky-500/40 transition-all hover:-translate-y-3 relative z-10 shadow-2xl overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors"></div>
                  
                  <div className="w-16 h-16 bg-white/5 dark:bg-[#001428] text-sky-400 rounded-2xl flex items-center justify-center mb-8 shadow-xl border border-white/5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-white font-black text-sm uppercase tracking-[0.15em] leading-tight mb-4 group-hover:text-sky-400 transition-colors">
                    {step.text}
                  </h3>
                  
                  <p className="text-slate-500 text-xs font-medium leading-relaxed group-hover:text-slate-300 transition-colors mb-8">
                    {step.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Stage 0{idx + 1}</span>
                    <div className="w-8 h-[2px] bg-sky-500/20 group-hover:w-16 group-hover:bg-sky-500 transition-all"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFPSection;
