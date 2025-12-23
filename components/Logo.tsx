
import React from 'react';
import { useApp } from '../App';

interface LogoProps {
  isScrolled?: boolean;
  forceWhite?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false, forceWhite = false, className = "" }) => {
  const { theme } = useApp();
  
  // LOGIC: 
  // 1. If forceWhite (used in Footer or Mobile Menu), it's always white.
  // 2. If NOT scrolled (on the dark Hero background), it's white.
  // 3. If Scrolled AND Theme is Dark, it's white (against the navy header).
  // 4. Otherwise (Scrolled AND Light Theme), it's dark blue.
  const isWhite = forceWhite || !isScrolled || theme === 'dark';
  
  const textColor = isWhite ? 'text-white' : 'text-[#001E3C]';
  const accentColor = isWhite ? 'text-sky-300' : 'text-[#0EA5E9]';
  const iconStrokeColor = isWhite ? '#38B6FF' : '#003366';
  const iconBgColor = isWhite ? 'rgba(255, 255, 255, 0.1)' : 'rgba(14, 165, 233, 0.05)';

  return (
    <div className={`flex items-center space-x-3 group transition-colors duration-500 ${className}`}>
      {/* High-Fidelity Podium SVG Logo */}
      <div 
        className="relative w-12 h-12 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-lg"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Circles */}
          <circle cx="50" cy="50" r="45" stroke={iconStrokeColor} strokeWidth="2.5" />
          <circle cx="50" cy="50" r="40" stroke={iconStrokeColor} strokeWidth="1.5" strokeOpacity="0.5" />
          
          {/* Lectern / Podium */}
          <path 
            d="M35 48H65V52H35V48Z" 
            fill={iconStrokeColor} 
          />
          <path 
            d="M38 52L42 78H58L62 52H38Z" 
            stroke={iconStrokeColor} 
            strokeWidth="3" 
            strokeLinejoin="round"
          />
          
          {/* Microphone */}
          <path 
            d="M48 48V42C48 40.8954 48.8954 40 50 40C51.1046 40 52 40.8954 52 42V48" 
            stroke={iconStrokeColor} 
            strokeWidth="2.5" 
            strokeLinecap="round"
          />
          <circle cx="50" cy="38" r="3" fill={iconStrokeColor} />
          
          {/* Front Emblem Circle */}
          <circle cx="50" cy="63" r="4.5" stroke={iconStrokeColor} strokeWidth="2" />
        </svg>

        {/* Ambient Glow */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" 
          style={{ backgroundColor: iconStrokeColor }}
        ></div>
      </div>

      {/* Vertical Divider */}
      <div className={`h-8 w-[2px] rounded-full opacity-20 transition-all duration-500 bg-sky-500`}></div>

      {/* Brand Name */}
      <span className={`font-black text-xl md:text-2xl tracking-tighter transition-colors duration-500 ${textColor}`}>
        Med<span className={accentColor}>Symposium</span>
      </span>
    </div>
  );
};

export default Logo;
