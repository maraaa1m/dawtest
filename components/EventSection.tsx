
import React from 'react';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';
import { FilterState, EventType } from '../types';
import { MedicalEventExtended } from '../constants';
import EventCard from './EventCard';
import { useApp } from '../App';

interface EventSectionProps {
  events: MedicalEventExtended[];
  filterState: FilterState;
  onClearSearch: () => void;
  onTypeChange: (type: EventType | 'All') => void;
  showSeeMore?: boolean;
}

const EventSection: React.FC<EventSectionProps> = ({ 
  events, 
  filterState, 
  onClearSearch,
  onTypeChange,
  showSeeMore = false
}) => {
  const { t, setSelectedEvent, setView } = useApp();
  
  return (
    <section id="events" className="pb-32 bg-[#f1f5f9] dark:bg-[#001428] transition-colors duration-500 relative z-30 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Simplified Header Card */}
        <div className="bg-white dark:bg-[#001E3C] rounded-[2.5rem] p-8 md:p-12 mb-16 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-slate-100 dark:border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#001E3C] dark:text-white tracking-tighter italic">
                {t('upcomingEvents')}
              </h2>
            </div>
            
            {/* Displaying active search indicator if applicable */}
            {filterState.searchQuery && (
              <div className="flex items-center gap-3 animate-in fade-in slide-in-from-right-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('activeSearch')}</span>
                <div className="flex items-center gap-2 px-4 py-2 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-full text-sm font-black border border-sky-500/20">
                  "{filterState.searchQuery}"
                  <button onClick={onClearSearch} className="hover:text-red-500 transition-colors">
                    <X size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3-Column Responsive Grid */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event, idx) => (
              <div key={event.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                <EventCard event={event} onViewDetails={setSelectedEvent} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-white dark:bg-white/5 rounded-full flex items-center justify-center text-slate-300 dark:text-white/10 mb-6 shadow-xl">
              <SearchIcon size={40} />
            </div>
            <h3 className="text-2xl font-black text-[#001E3C] dark:text-white mb-2">{t('noMatches')}</h3>
            <p className="text-slate-400 mb-8">{t('noMatchesSub')}</p>
            <button onClick={onClearSearch} className="px-8 py-4 bg-[#001E3C] text-white font-black rounded-2xl hover:bg-[#003366] transition-all uppercase tracking-widest text-xs">
              {t('reset')}
            </button>
          </div>
        )}

        {showSeeMore && (
          <div className="mt-20 flex justify-center">
            <button 
              onClick={() => setView('directory')}
              className="flex items-center gap-4 px-12 py-5 bg-white dark:bg-[#001E3C] border border-slate-200 dark:border-white/10 rounded-full text-[#003366] dark:text-white font-black text-sm uppercase tracking-[0.2em] hover:border-sky-500 hover:text-sky-500 transition-all shadow-xl"
            >
              {t('seeMoreEvents')}
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventSection;
