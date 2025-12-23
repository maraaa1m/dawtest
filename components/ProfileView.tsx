
import React, { useState } from 'react';
import { Camera, Mail, Briefcase, GraduationCap, FileText, Save, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useApp } from '../App';
import { UserProfile } from '../types';

const ProfileView: React.FC = () => {
  const { user, t, updateProfile } = useApp();
  const [profile, setProfile] = useState<UserProfile>(user?.profile || {
    institution: '',
    researchField: '',
    biography: ''
  });
  const [isSaved, setIsSaved] = useState(false);

  if (!user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profile);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#001428] pt-32 pb-24 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#001E3C] dark:text-white italic tracking-tighter mb-4">
            User <span className="text-sky-500">{t('profile')}</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed">
            {t('profileSub')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Main Card */}
          <div className="glass-card dark:bg-[#001E3C]/50 rounded-[3rem] p-10 md:p-16 border border-slate-200 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none">
            
            {/* Header Section: Photo and Basic Info */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16 pb-16 border-b border-slate-100 dark:border-white/5">
              <div className="relative group">
                <div className="w-32 h-32 rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-white/5 border-4 border-white dark:border-white/10 shadow-2xl relative">
                  <img 
                    src={user.profile.photo || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200"} 
                    alt={user.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-sky-500 text-white p-2 rounded-xl shadow-lg">
                  <ShieldCheck size={16} />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-3xl font-black text-[#001E3C] dark:text-white mb-2">{user.name}</h2>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-sky-500 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                    {user.role}
                  </span>
                  <span className="text-slate-400 font-bold text-sm flex items-center gap-2">
                    <Mail size={16} /> {user.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">{t('institution')}</label>
                <div className="relative group">
                  <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-sky-500 transition-colors" size={20} />
                  <input 
                    type="text" 
                    value={profile.institution}
                    onChange={(e) => setProfile({ ...profile, institution: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-[#001428] border border-slate-200 dark:border-white/10 rounded-2xl py-5 pl-14 pr-6 font-bold text-[#001E3C] dark:text-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">{t('researchField')}</label>
                <div className="relative group">
                  <GraduationCap className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-sky-500 transition-colors" size={20} />
                  <input 
                    type="text" 
                    value={profile.researchField}
                    onChange={(e) => setProfile({ ...profile, researchField: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-[#001428] border border-slate-200 dark:border-white/10 rounded-2xl py-5 pl-14 pr-6 font-bold text-[#001E3C] dark:text-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">{t('biography')}</label>
                <div className="relative group">
                  <FileText className="absolute left-5 top-8 text-slate-300 group-focus-within:text-sky-500 transition-colors" size={20} />
                  <textarea 
                    rows={6}
                    value={profile.biography}
                    onChange={(e) => setProfile({ ...profile, biography: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-[#001428] border border-slate-200 dark:border-white/10 rounded-3xl py-7 pl-14 pr-6 font-bold text-[#001E3C] dark:text-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 font-medium max-w-sm text-center md:text-left">
              {t('profilePermissions')}
            </p>
            <button 
              type="submit"
              className={`flex items-center justify-center gap-3 px-12 py-5 rounded-[2rem] font-black text-xl shadow-2xl transition-all active:scale-95 w-full md:w-auto uppercase tracking-wider ${
                isSaved 
                  ? 'bg-green-500 text-white shadow-green-500/30' 
                  : 'bg-[#0EA5E9] hover:bg-sky-400 text-white shadow-sky-500/30'
              }`}
            >
              {isSaved ? (
                <>
                  <CheckCircle2 size={24} />
                  {t('saved')}
                </>
              ) : (
                <>
                  <Save size={24} />
                  {t('saveProfile')}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileView;
