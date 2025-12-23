
import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Users, Clock, FileText, Share2, Heart, Mail, Phone, UserCheck, Mic2 } from 'lucide-react';
import { MedicalEventExtended } from '../constants.tsx';
import { useApp } from '../App.tsx';

interface EventDetailsModalProps {
  event: MedicalEventExtended;
  onClose: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ event, onClose }) => {
  const { t } = useApp();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-12 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#001E3C]/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-6xl max-h-full bg-white dark:bg-[#001428] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/40 rounded-full text-white backdrop-blur-md transition-all active:scale-90"
        >
          <X size={24} />
        </button>

        {/* Left Column: Media & Quick Info */}
        <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden bg-[#001E3C]">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001E3C] via-[#001E3C]/20 to-transparent"></div>
          
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <span className="px-3 py-1 bg-sky-500 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
              {event.type}
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight mb-6 italic">
              {event.title}
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sky-200">
                <Calendar size={20} className="shrink-0" />
                <span className="font-bold text-sm">{t('date')}: {event.date}</span>
              </div>
              <div className="flex items-center gap-3 text-sky-200">
                <MapPin size={20} className="shrink-0" />
                <span className="font-bold text-sm">{t('location')}: {event.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sky-200">
                <Users size={20} className="shrink-0" />
                <span className="font-bold text-sm">{event.attendees.toLocaleString()}+ {t('participants')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 bg-slate-50 dark:bg-[#001428]">
          <div className="max-w-3xl">
            {/* Header Actions */}
            <div className="flex items-center justify-between mb-12">
               <div className="flex items-center gap-2">
                 <span className="w-3 h-3 rounded-full bg-sky-500 animate-pulse"></span>
                 <span className="text-sky-500 font-black text-xs uppercase tracking-[0.3em]">{t('theme')}: {event.category}</span>
               </div>
               <div className="flex gap-4">
                 <button className="p-3 bg-slate-100 dark:bg-white/5 rounded-2xl text-slate-400 hover:text-sky-500 transition-colors">
                   <Share2 size={20} />
                 </button>
                 <button className="p-3 bg-slate-100 dark:bg-white/5 rounded-2xl text-slate-400 hover:text-red-500 transition-colors">
                   <Heart size={20} />
                 </button>
               </div>
            </div>

            <section className="mb-12">
              <h3 className="text-2xl font-black text-[#001E3C] dark:text-white mb-6 tracking-tight flex items-center gap-3">
                <FileText className="text-sky-500" />
                {t('description')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                {event.description}
              </p>
            </section>

            {/* Guest Speakers Section */}
            <section className="mb-12">
              <h3 className="text-xl font-black text-[#001E3C] dark:text-white mb-8 tracking-tight flex items-center gap-3">
                <Mic2 className="text-sky-500" />
                {t('speakers')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {event.speakers.map((speaker, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-[#001E3C] rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
                    <img src={speaker.image} alt={speaker.name} className="w-14 h-14 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-black text-[#001E3C] dark:text-white text-sm">{speaker.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{speaker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Scientific Committee Section */}
            <section className="mb-12 bg-white dark:bg-[#001E3C] rounded-[2.5rem] p-8 md:p-10 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/40 dark:shadow-none">
              <h3 className="text-xl font-black text-[#001E3C] dark:text-white mb-8 tracking-tight flex items-center gap-3">
                <UserCheck className="text-sky-500" />
                {t('committee')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {event.committee.map((member, i) => (
                  <span key={i} className="px-5 py-2.5 bg-slate-50 dark:bg-[#001428] text-slate-700 dark:text-slate-300 rounded-full font-bold text-sm border border-slate-100 dark:border-white/10">
                    {member}
                  </span>
                ))}
              </div>
            </section>

            {/* Sessions & Schedule Section */}
            <section className="mb-12">
              <h3 className="text-xl font-black text-[#001E3C] dark:text-white mb-8 tracking-tight flex items-center gap-3">
                <Clock className="text-sky-500" />
                {t('sessions')}
              </h3>
              <div className="space-y-4">
                {event.sessions.map((session, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <div className="text-sky-500 font-black text-sm whitespace-nowrap">{session.time}</div>
                    <div className="h-8 w-[2px] bg-slate-200 dark:bg-white/10"></div>
                    <div>
                      <h4 className="font-bold text-[#001E3C] dark:text-white text-sm">{session.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{session.room}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="mb-12">
              <h3 className="text-xl font-black text-[#001E3C] dark:text-white mb-8 tracking-tight flex items-center gap-3">
                <Mail className="text-sky-500" />
                {t('contactInfo')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-[#001E3C] rounded-2xl border border-slate-100 dark:border-white/5">
                  <Mail className="text-sky-500" size={18} />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{event.contactEmail}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-[#001E3C] rounded-2xl border border-slate-100 dark:border-white/5">
                  <Phone className="text-sky-500" size={18} />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{event.contactPhone}</span>
                </div>
              </div>
            </section>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-10 border-t border-slate-100 dark:border-white/5">
              {!event.isArchived ? (
                <button className="flex-1 py-5 bg-[#001E3C] dark:bg-sky-600 text-white font-black rounded-[2rem] text-lg shadow-2xl shadow-blue-900/20 active:scale-95 transition-all">
                  {t('register')} — {event.price}
                </button>
              ) : (
                <div className="flex-1 py-5 bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400 font-black rounded-[2rem] text-lg text-center cursor-not-allowed">
                  {t('archived')}
                </div>
              )}
              <button className="py-5 px-10 bg-slate-100 dark:bg-white/5 text-[#001E3C] dark:text-white font-black rounded-[2rem] text-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
                {t('brochure')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
