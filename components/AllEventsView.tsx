
import React, { useState } from 'react';
import { Search, ChevronLeft, LayoutGrid, Filter, Plus, Users as UsersIcon, History, CalendarDays, FileText } from 'lucide-react';
import { useApp } from '../App';
import { MedicalEventExtended } from '../constants';
import { FilterState } from '../types';
import EventCard from './EventCard';

interface AllEventsViewProps {
  events: MedicalEventExtended[];
  filterState: FilterState;
  onSearch: (query: string) => void;
}

const AllEventsView: React.FC<AllEventsViewProps> = ({ events, filterState, onSearch }) => {
  const { t, setView, setSelectedEvent, setAuthIntent, user } = useApp();
  const [localQuery, setLocalQuery] = useState(filterState.searchQuery);
  const [status, setStatus] = useState<'upcoming' | 'archived'>('upcoming');

  const filteredByStatus = events.filter(e => status === 'upcoming' ? !e.isArchived : e.isArchived);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localQuery);
  };

  const handleAuthRedirect = () => {
    setView('auth');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitWorkRedirect = () => {
    if (!user) {
      setAuthIntent('author_required');
    }
    setView('auth');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#001428] pt-32 pb-24 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-slate-400 hover:text-sky-500 font-bold text-sm uppercase tracking-widest mb-12 transition-colors group"
        >
          <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          {t('backToHome')}
        </button>

        {/* Directory Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black text-[#001E3C] dark:text-white tracking-tighter mb-4 italic">
              {t('allEvents')}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
              {t('allEventsSub')}
            </p>
          </div>

          {/* Inline Filter Search */}
          <div className="w-full lg:max-w-md">
            <form onSubmit={handleSearchSubmit} className="relative group">
              <input 
                type="text" 
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full bg-white dark:bg-[#001E3C] border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 font-bold text-slate-700 dark:text-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all shadow-lg shadow-slate-200/50 dark:shadow-none"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
            </form>
          </div>
        </div>

        {/* Status Toggle Bar */}
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={() => setStatus('upcoming')}
            className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-wider transition-all ${status === 'upcoming' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'bg-white dark:bg-[#001E3C] text-slate-500 dark:text-slate-400 hover:text-sky-500'}`}
          >
            <CalendarDays size={18} />
            {t('upcoming')}
          </button>
          <button 
            onClick={() => setStatus('archived')}
            className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-wider transition-all ${status === 'archived' ? 'bg-slate-400 text-white shadow-lg shadow-slate-400/20' : 'bg-white dark:bg-[#001E3C] text-slate-500 dark:text-slate-400 hover:text-slate-500'}`}
          >
            <History size={18} />
            {t('archived')}
          </button>
        </div>

        {/* Full Grid */}
        {filteredByStatus.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {filteredByStatus.map((event, idx) => (
              <div key={event.id} className="animate-in fade-in slide-in-from-bottom-8 duration-500" style={{ animationDelay: `${idx * 50}ms` }}>
                <EventCard event={event} onViewDetails={setSelectedEvent} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 flex flex-col items-center justify-center text-center mb-20">
            <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-3xl flex items-center justify-center text-slate-300 dark:text-white/10 mb-8">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-black text-[#001E3C] dark:text-white mb-2">{t('noMatches')}</h3>
            <p className="text-slate-400 max-w-sm mb-10">{t('noMatchesSub')}</p>
            <button 
              onClick={() => { setLocalQuery(''); onSearch(''); }}
              className="px-10 py-4 bg-[#001E3C] dark:bg-sky-600 text-white font-black rounded-2xl hover:bg-sky-600 transition-all"
            >
              {t('reset')}
            </button>
          </div>
        )}

        {/* Actions Section */}
        <div className="mt-32 pt-20 border-t border-slate-200 dark:border-white/5">
          <div className="glass-card dark:bg-[#001E3C]/50 rounded-[3.5rem] p-12 md:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-3xl relative z-10 mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#001E3C] dark:text-white mb-8 italic tracking-tighter leading-none">
                {t('directoryCtaTitle')}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                {t('directoryCtaSub')}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full relative z-10">
              <button 
                onClick={handleAuthRedirect}
                className="group flex items-center justify-center gap-4 bg-[#0EA5E9] hover:bg-[#38B6FF] text-white px-10 py-5 rounded-[2.5rem] font-black text-sm shadow-2xl shadow-sky-500/20 transition-all active:scale-95 w-full md:w-auto uppercase tracking-wider"
              >
                <Plus size={20} className="transition-transform group-hover:rotate-90" />
                {t('createYours')}
              </button>
              <button 
                onClick={handleSubmitWorkRedirect}
                className="group flex items-center justify-center gap-4 bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/20 text-[#001E3C] dark:text-white px-10 py-5 rounded-[2.5rem] font-black text-sm shadow-2xl transition-all active:scale-95 w-full md:w-auto uppercase tracking-wider border border-slate-200 dark:border-white/10 backdrop-blur-md"
              >
                <FileText size={20} className="transition-transform group-hover:scale-110" />
                {t('submitWork')}
              </button>
              <button 
                onClick={handleAuthRedirect}
                className="group flex items-center justify-center gap-4 bg-[#001E3C] dark:bg-white/5 hover:bg-[#003366] dark:hover:bg-white/10 text-white px-10 py-5 rounded-[2.5rem] font-black text-sm transition-all active:scale-95 w-full md:w-auto uppercase tracking-wider border border-white/5"
              >
                <UsersIcon size={20} className="transition-transform group-hover:scale-110" />
                {t('joinUs')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEventsView;
