
import React from 'react';
import { useApp } from '../App';
import { Layout, Microscope, Users, PieChart, Award, CheckCircle2, FlaskConical, Globe, Scale, ChevronDown, Zap } from 'lucide-react';

const AboutView: React.FC = () => {
  const { t } = useApp();

  const stats = [
    { label: t('statsLabel1'), value: '450+', icon: <Layout className="text-sky-400" /> },
    { label: t('statsLabel2'), value: '12K+', icon: <FlaskConical className="text-sky-400" /> },
    { label: t('statsLabel3'), value: '850', icon: <Users className="text-sky-400" /> },
    { label: t('statsLabel4'), value: '32', icon: <Globe className="text-sky-400" /> },
  ];

  const values = [
    { title: t('value1Title'), desc: t('value1Desc'), icon: <Scale size={32} /> },
    { title: t('value2Title'), desc: t('value2Desc'), icon: <Globe size={32} /> },
    { title: t('value3Title'), desc: t('value3Desc'), icon: <Zap size={32} /> },
  ];

  const modules = [
    {
      icon: <Layout className="text-sky-500" size={32} />,
      title: t('mod1Title'),
      desc: t('mod1Desc')
    },
    {
      icon: <Microscope className="text-sky-500" size={32} />,
      title: t('mod2Title'),
      desc: t('mod2Desc')
    },
    {
      icon: <Users className="text-sky-500" size={32} />,
      title: t('mod3Title'),
      desc: t('mod3Desc')
    },
    {
      icon: <PieChart className="text-sky-500" size={32} />,
      title: t('mod4Title'),
      desc: t('mod4Desc')
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#001428] transition-colors duration-500 overflow-x-hidden">
      {/* Immersive Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=2400")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.25)'
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent)] z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001428]/80 to-[#001428] z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 font-black text-[10px] uppercase tracking-[0.4em] mb-8 animate-in fade-in slide-in-from-top-12 duration-1000">
            <Globe size={14} />
            {t('aboutVision')}
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter italic mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            {t('aboutHeroTitle').split('Expertise')[0]} <span className="text-sky-500">Expertise</span> {t('aboutHeroTitle').split('Expertise')[1]}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl md:text-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            {t('aboutHeroSub')}
          </p>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={40} className="text-white/20 mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-30 -mt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 backdrop-blur-3xl shadow-2xl">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#001E3C]/80 p-10 flex flex-col items-center text-center group hover:bg-sky-500/10 transition-colors">
                <div className="mb-4 p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white mb-2 tracking-tighter italic">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-sky-400 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Content Section */}
      <section className="py-40 px-6 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <span className="text-sky-500 font-black text-xs uppercase tracking-[0.4em] block">{t('missionTitle')}</span>
                <h2 className="text-4xl md:text-6xl font-black text-[#001E3C] dark:text-white italic leading-none tracking-tighter">
                   {t('missionMainTitle').split('Expert Oversight')[0]} <span className="text-sky-500">Expert Oversight.</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed font-medium">
                {t('missionMainDesc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[t('feat1'), t('feat2'), t('feat3'), t('feat4')].map((feat) => (
                  <div key={feat} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-[#001E3C] dark:text-slate-300 font-black text-sm uppercase tracking-wider">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/5">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" alt="Lab" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 bg-white dark:bg-[#001E3C] p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/10 hidden md:block">
                <Award className="text-sky-500 mb-4" size={32} />
                <div className="text-2xl font-black text-[#001E3C] dark:text-white italic">{t('accredited')}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{t('globalFMC')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-white dark:bg-[#001428] border-y border-slate-200 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#001E3C] dark:text-white mb-6 italic tracking-tighter">{t('coreValues')}</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                <div className="w-24 h-24 bg-slate-50 dark:bg-white/5 rounded-[2rem] flex items-center justify-center text-sky-500 border border-slate-100 dark:border-white/5 group-hover:bg-sky-500 group-hover:text-white transition-all group-hover:shadow-2xl group-hover:shadow-sky-500/20 group-hover:-translate-y-2">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black text-[#001E3C] dark:text-white italic">{v.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modular Ecosystem Grid */}
      <section className="py-40 bg-slate-50 dark:bg-[#001E3C]/10 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 text-[20vw] font-black text-slate-200 dark:text-white/5 select-none -translate-x-1/4 -translate-y-1/4 italic leading-none opacity-20 uppercase">MODULAR</div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-black text-[#001E3C] dark:text-white mb-8 italic tracking-tighter leading-none">{t('modularTitle')}</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
               {t('modularSub')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((m, i) => (
              <div key={i} className="group glass-card dark:bg-[#001E3C]/60 p-12 rounded-[3.5rem] border border-slate-200 dark:border-white/5 hover:border-sky-500 hover:shadow-2xl transition-all hover:-translate-y-4">
                <div className="w-16 h-16 bg-slate-100 dark:bg-[#001428] rounded-2xl flex items-center justify-center mb-10 border border-slate-200 dark:border-white/10 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-md group-hover:rotate-6">
                  {m.icon}
                </div>
                <h3 className="text-2xl font-black text-[#001E3C] dark:text-white mb-6 italic leading-none">{m.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-base">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Collaboration Section */}
      <section className="py-40 px-6 bg-white dark:bg-[#001428]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
           <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-8">
                    <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-white/5">
                      <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Medical Lab" />
                    </div>
                    <div className="bg-sky-500 p-10 rounded-[3rem] text-white shadow-2xl shadow-sky-500/20 relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform"><Award size={100} /></div>
                       <Award size={48} className="mb-8" />
                       <h4 className="text-3xl font-black italic mb-4 leading-none tracking-tighter">{t('value1Title')}</h4>
                       <p className="text-sky-100 text-sm font-medium leading-relaxed">{t('value1Desc')}</p>
                    </div>
                 </div>
                 <div className="space-y-8 pt-16">
                    <div className="bg-[#003366] p-10 rounded-[3rem] text-white shadow-2xl shadow-blue-900/40 relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform"><Users size={100} /></div>
                       <Users size={48} className="mb-8 text-sky-400" />
                       <h4 className="text-3xl font-black italic mb-4 leading-none tracking-tighter">{t('value2Title')}</h4>
                       <p className="text-slate-300 text-sm font-medium leading-relaxed">{t('value2Desc')}</p>
                    </div>
                    <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-white/5">
                      <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Conference Room" />
                    </div>
                 </div>
              </div>
           </div>
           <div className="flex-1 space-y-12 order-1 lg:order-2">
              <div className="space-y-6">
                <span className="text-sky-500 font-black text-xs uppercase tracking-[0.4em] block">{t('profStandards')}</span>
                <h2 className="text-5xl md:text-7xl font-black text-[#001E3C] dark:text-white italic leading-[0.9] tracking-tighter">
                   {t('fullControlTitle').split('Global Impact')[0]} <span className="text-sky-500">Global Impact.</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed">
                 {t('fullControlDesc')}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   t('feat5'),
                   t('feat6'),
                   t('feat7'),
                   t('feat8')
                 ].map((item) => (
                    <li key={item} className="flex items-center gap-4 py-6 px-8 bg-slate-50 dark:bg-[#001E3C]/60 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-sky-500 transition-colors shadow-sm">
                       <div className="w-2 h-2 rounded-full bg-sky-500 shrink-0"></div>
                       <span className="font-black text-[#001E3C] dark:text-slate-300 text-sm uppercase tracking-tight leading-tight">{item}</span>
                    </li>
                 ))}
              </ul>
              <div className="pt-8">
                 <button className="bg-[#001E3C] dark:bg-sky-500 text-white px-12 py-6 rounded-full font-black text-lg shadow-2xl transition-all active:scale-95 uppercase tracking-widest hover:bg-sky-600">
                    {t('getStarted')}
                 </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
