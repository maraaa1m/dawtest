
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Globe, Settings, LogOut, UserCircle2 } from 'lucide-react';
import Logo from './Logo';
import { useApp } from '../App';

const Header: React.FC = () => {
  const { lang, setLang, theme, setTheme, t, resetFilters, setView, user, logoutUser } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    resetFilters();
    setView('home');
    setIsMobileMenuOpen(false);
  };

  const handleGoEvents = (e: React.MouseEvent) => {
    e.preventDefault();
    setView('directory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleGoAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    setView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t('home'), href: '#', onClick: handleGoHome },
    { name: t('events'), href: '#', onClick: handleGoEvents },
    { name: t('about'), href: '#', onClick: handleGoAbout },
  ];

  const toggleLang = () => setLang(lang === 'en' ? 'fr' : 'en');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const navItemClass = isScrolled 
    ? 'text-slate-600 dark:text-slate-300 hover:text-[#0EA5E9]' 
    : 'text-white/90 hover:text-white';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none">
      <header 
        className={`pointer-events-auto transition-all duration-500 ease-in-out mt-4 w-full max-w-7xl flex items-center justify-between rounded-full px-8 shadow-xl ${
          isScrolled 
            ? 'bg-white/95 dark:bg-[#001E3C]/95 backdrop-blur-md py-3 border border-slate-200 dark:border-white/10' 
            : 'bg-white/10 backdrop-blur-sm py-4 border border-white/10'
        }`}
      >
        {/* Logo */}
        <a href="#" onClick={handleGoHome}>
          <Logo isScrolled={isScrolled} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={link.onClick}
              className={`font-semibold text-sm transition-all duration-300 ${navItemClass}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative" ref={settingsRef}>
            <button 
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-400 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-white/5' 
                  : 'text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              <Settings size={20} className={`transition-transform duration-500 ${isSettingsOpen ? 'rotate-90 text-sky-500' : ''}`} />
            </button>

            {isSettingsOpen && (
              <div className="absolute right-0 mt-4 w-64 bg-white dark:bg-[#001E3C] rounded-[2rem] shadow-2xl border border-slate-100 dark:border-white/10 p-4 animate-in fade-in zoom-in-95 duration-300 ring-4 ring-black/5 dark:ring-white/5">
                <div className="space-y-2">
                  <div className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{t('preferences')}</div>
                  <button 
                    onClick={toggleLang}
                    className="w-full flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <span className="flex items-center gap-3"><Globe size={18} className="text-sky-500" /> {t('language')}</span>
                    <span className="text-[10px] bg-sky-100 dark:bg-sky-900/40 text-sky-600 px-3 py-1 rounded-lg uppercase font-black">{lang}</span>
                  </button>
                  <button 
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      {theme === 'light' ? <Moon size={18} className="text-sky-500" /> : <Sun size={18} className="text-sky-500" />} 
                      {t('theme_label')}
                    </span>
                    <span className="text-[10px] bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-lg uppercase font-black">{theme}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {!user ? (
            <>
              <button 
                onClick={() => setView('auth')}
                className={`font-bold text-sm transition-all ${
                  isScrolled ? 'text-slate-600 dark:text-slate-300 hover:text-[#0EA5E9]' : 'text-white/90 hover:text-white'
                }`}
              >
                {t('login')}
              </button>
              <button 
                onClick={() => setView('auth')}
                className="bg-[#0EA5E9] hover:bg-[#38B6FF] text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-sky-500/20 transition-all active:scale-95"
              >
                {t('register')}
              </button>
            </>
          ) : (
            <div className="relative" ref={userRef}>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`flex items-center gap-3 p-1 pl-4 rounded-full transition-all ${
                  isScrolled ? 'bg-slate-50 dark:bg-white/5' : 'bg-white/10'
                }`}
              >
                <span className={`text-xs font-black uppercase tracking-widest ${isScrolled ? 'text-slate-700 dark:text-white' : 'text-white'}`}>
                  {user.name.split(' ')[0]}
                </span>
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                  <img src={user.profile.photo} alt={user.name} className="w-full h-full object-cover" />
                </div>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-4 w-64 bg-white dark:bg-[#001E3C] rounded-[2rem] shadow-2xl border border-slate-100 dark:border-white/10 p-4 animate-in fade-in zoom-in-95 duration-300 ring-4 ring-black/5 dark:ring-white/5">
                  <div className="space-y-2">
                    <button 
                      onClick={() => { setView('profile'); setIsUserMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors"
                    >
                      <UserCircle2 size={18} className="text-sky-500" />
                      {t('profile')}
                    </button>
                    <button 
                      onClick={() => { logoutUser(); setIsUserMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/10 text-sm font-bold text-red-600 transition-colors"
                    >
                      <LogOut size={18} />
                      {t('logout')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
            <button 
              className={`p-2 transition-colors ${isScrolled ? 'text-[#001E3C] dark:text-white' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden pointer-events-auto">
            <div className="absolute right-4 top-4 h-[calc(100vh-32px)] w-[calc(100vw-32px)] max-sm bg-white dark:bg-[#001E3C] rounded-3xl shadow-2xl p-8 flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <Logo isScrolled={true} />
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={28} className="text-slate-500 dark:text-slate-400" />
                </button>
              </div>
              <nav className="flex flex-col space-y-8 overflow-y-auto">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={link.onClick}
                    className="text-2xl font-bold text-slate-800 dark:text-white hover:text-[#0EA5E9]"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="pt-8 border-t border-slate-100 dark:border-white/10 flex flex-col space-y-4">
                  <div className="flex gap-4">
                    <button onClick={toggleLang} className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-bold">
                      <Globe size={18}/> {lang.toUpperCase()}
                    </button>
                    <button onClick={toggleTheme} className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-bold">
                      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                  </div>
                  
                  {!user ? (
                    <>
                      <button onClick={() => { setView('auth'); setIsMobileMenuOpen(false); }} className="w-full py-4 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold text-lg">
                        {t('login')}
                      </button>
                      <button onClick={() => { setView('auth'); setIsMobileMenuOpen(false); }} className="w-full bg-[#0EA5E9] py-4 rounded-full text-white font-bold text-lg">
                        {t('register')}
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => { setView('profile'); setIsMobileMenuOpen(false); }} className="w-full py-4 rounded-full bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-bold text-lg">
                        {t('profile')}
                      </button>
                      <button onClick={() => { logoutUser(); setIsMobileMenuOpen(false); }} className="w-full py-4 rounded-full bg-red-50 dark:bg-red-900/10 text-red-600 font-bold text-lg">
                        {t('logout')}
                      </button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
