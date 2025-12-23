
import React from 'react';
import { Calendar, MapPin, Users, ArrowUpRight, Info } from 'lucide-react';
import { MedicalEventExtended } from '../constants';
import { useApp } from '../App';

interface EventCardProps {
  event: MedicalEventExtended;
  onViewDetails: (event: MedicalEventExtended) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onViewDetails }) => {
  const { t } = useApp();
  
  return (
    <div className="group relative bg-white dark:bg-[#001E3C] rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(14,165,233,0.15)] flex flex-col h-full">
      {/* Image Area with Zoom */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001E3C]/80 via-transparent to-transparent opacity-60"></div>
        
        {/* Floating Badges */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center pointer-events-none">
          <span className="px-4 py-2 bg-white/90 dark:bg-[#001E3C]/90 backdrop-blur-md rounded-2xl text-[10px] font-black text-[#001E3C] dark:text-sky-400 tracking-[0.1em] uppercase border border-white/20 shadow-xl">
            {event.type}
          </span>
          <span className="px-4 py-2 bg-sky-500 rounded-2xl text-[10px] font-black text-white tracking-[0.1em] uppercase shadow-lg shadow-sky-500/30">
            {event.price}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-10 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-sky-500"></span>
          <span className="text-sky-500 font-black text-[10px] uppercase tracking-[0.3em]">
            {event.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-extrabold text-[#001E3C] dark:text-white leading-tight mb-4 group-hover:text-sky-600 transition-colors line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 font-medium">
          {event.description}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 gap-4 mt-auto">
          <div className="flex items-center group/meta">
            <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mr-4 transition-colors group-hover/meta:bg-sky-50 dark:group-hover/meta:bg-sky-900/20">
              <Calendar size={18} className="text-slate-400 transition-colors group-hover/meta:text-sky-500" />
            </div>
            <span className="text-slate-600 dark:text-slate-300 text-sm font-semibold">{event.date}</span>
          </div>
          
          <div className="flex items-center group/meta">
            <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mr-4 transition-colors group-hover/meta:bg-sky-50 dark:group-hover/meta:bg-sky-900/20">
              <MapPin size={18} className="text-slate-400 transition-colors group-hover/meta:text-sky-500" />
            </div>
            <span className="text-slate-600 dark:text-slate-300 text-sm font-semibold truncate capitalize">{event.location}</span>
          </div>

          <div className="flex items-center group/meta">
            <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mr-4 transition-colors group-hover/meta:bg-sky-50 dark:group-hover/meta:bg-sky-900/20">
              <Users size={18} className="text-slate-400 transition-colors group-hover/meta:text-sky-500" />
            </div>
            <span className="text-slate-600 dark:text-slate-300 text-sm font-semibold">{event.attendees.toLocaleString()}+ {t('participants')}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex gap-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
           <button 
             onClick={() => onViewDetails(event)}
             className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-[1.5rem] font-bold text-sm hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
           >
             <Info size={18} />
             {t('viewDetails')}
           </button>
           <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#001E3C] dark:bg-sky-600 text-white rounded-[1.5rem] font-bold text-sm shadow-xl shadow-blue-900/20 active:scale-95">
             {t('secureSpot')}
             <ArrowUpRight size={18} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
