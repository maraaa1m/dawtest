
import React, { useState, useMemo, useEffect, createContext, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventSection from './components/EventSection';
import SpecialtySection from './components/SpecialtySection';
import CFPSection from './components/CFPSection';
import AllEventsView from './components/AllEventsView';
import AboutView from './components/AboutView';
import AuthView from './components/AuthView';
import ProfileView from './components/ProfileView';
import ImpactSection from './components/ImpactSection';
import EventDetailsModal from './components/EventDetailsModal';
import Footer from './components/Footer';
import { MOCK_EVENTS, MedicalEventExtended } from './constants';
import { FilterState, Language, Theme, User, UserProfile, EventType } from './types';
import { translations } from './translations';
import { ChevronUp } from 'lucide-react';

export type AppView = 'home' | 'directory' | 'about' | 'auth' | 'profile';

interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: (key: keyof typeof translations.en) => string;
  resetFilters: () => void;
  selectedEvent: MedicalEventExtended | null;
  setSelectedEvent: (event: MedicalEventExtended | null) => void;
  currentView: AppView;
  setView: (view: AppView) => void;
  authIntent: string | null;
  setAuthIntent: (intent: string | null) => void;
  user: User | null;
  loginUser: (user: User) => void;
  logoutUser: () => void;
  updateProfile: (profile: UserProfile) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('lang') as Language) || 'en');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'light');
  const [user, setUser] = useState<User | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<MedicalEventExtended | null>(null);
  const [currentView, setView] = useState<AppView>('home');
  const [authIntent, setAuthIntent] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [filterState, setFilterState] = useState<FilterState>({
    type: 'All',
    searchQuery: '',
    specialty: null,
    status: 'upcoming'
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
      setShowBackToTop(currentScroll > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const t = (key: keyof typeof translations.en) => translations[lang][key] || key;

  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter((event) => {
      const matchesType = filterState.type === 'All' || event.type === filterState.type;
      
      const searchLower = filterState.searchQuery.toLowerCase();
      const matchesSearch = !filterState.searchQuery || 
        event.title.toLowerCase().includes(searchLower) ||
        event.category.toLowerCase().includes(searchLower) ||
        event.location.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower);

      const matchesSpecialty = !filterState.specialty || event.category === filterState.specialty;

      return matchesType && matchesSearch && matchesSpecialty;
    });
  }, [filterState]);

  const handleSearch = (query: string) => {
    setFilterState(prev => ({ 
      ...prev, 
      searchQuery: query, 
      specialty: null,
      type: 'All' 
    }));
  };

  const handleTypeChange = (type: EventType | 'All') => {
    setFilterState(prev => ({ ...prev, type }));
  };

  const handleSpecialtySelect = (specialty: string) => {
    setFilterState({
      type: 'All',
      searchQuery: '',
      specialty,
      status: 'upcoming'
    });
  };

  const handleClearFilters = () => {
    setFilterState({
      type: 'All',
      searchQuery: '',
      specialty: null,
      status: 'upcoming'
    });
    setSelectedEvent(null);
    setView('home');
  };

  const handleDirectorySearch = (query: string) => {
     setFilterState(prev => ({ ...prev, searchQuery: query }));
  };

  const loginUser = (userData: User) => {
    setUser(userData);
    setAuthIntent(null);
  };

  const logoutUser = () => {
    setUser(null);
    setView('home');
  };

  const updateProfile = (newProfile: UserProfile) => {
    if (user) {
      setUser({ ...user, profile: newProfile });
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'auth':
        return (
          <div className="animate-in fade-in duration-500">
            <AuthView />
          </div>
        );
      case 'profile':
        return (
          <div className="animate-in slide-in-from-bottom-12 duration-500">
            <ProfileView />
          </div>
        );
      case 'directory':
        return (
          <div className="animate-in slide-in-from-right-12 duration-500">
            <AllEventsView 
              events={filteredEvents}
              filterState={filterState}
              onSearch={handleDirectorySearch}
            />
          </div>
        );
      case 'about':
        return (
          <div className="animate-in slide-in-from-bottom-12 duration-500">
            <AboutView />
          </div>
        );
      case 'home':
      default:
        return (
          <div className="animate-in fade-in duration-700">
            <Hero onSearch={handleSearch} />
            
            <SpecialtySection onSpecialtySelect={handleSpecialtySelect} />
            
            <EventSection 
              events={filteredEvents.filter(e => !e.isArchived)} 
              filterState={filterState}
              onClearSearch={handleClearFilters}
              onTypeChange={handleTypeChange}
              showSeeMore={filteredEvents.filter(e => !e.isArchived).length > 3}
            />

            <CFPSection />

            <ImpactSection />
          </div>
        );
    }
  };

  return (
    <AppContext.Provider value={{ 
      lang, 
      setLang, 
      theme, 
      setTheme, 
      t, 
      resetFilters: handleClearFilters,
      selectedEvent,
      setSelectedEvent,
      currentView,
      setView,
      authIntent,
      setAuthIntent,
      user,
      loginUser,
      logoutUser,
      updateProfile
    }}>
      <div className={`min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-[#001428]`}>
        {/* Scroll Progress Bar */}
        <div 
          className="fixed top-0 left-0 h-[3px] bg-sky-500 z-[100] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        {currentView !== 'auth' && <Header />}
        
        <main className="pt-0">
          {renderContent()}
        </main>

        {currentView !== 'auth' && <Footer />}

        {/* Floating Back to Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-10 right-10 z-50 p-4 rounded-full bg-white dark:bg-[#001E3C] shadow-2xl border border-slate-200 dark:border-white/10 text-sky-500 transition-all duration-500 ${showBackToTop && currentView !== 'auth' ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:bg-sky-500 hover:text-white group`}
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Global Event Modal */}
        {selectedEvent && (
          <EventDetailsModal 
            event={selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
          />
        )}
      </div>
    </AppContext.Provider>
  );
};

export default App;
