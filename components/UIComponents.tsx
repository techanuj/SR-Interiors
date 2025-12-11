import React, { useEffect, useRef, useState } from 'react';

// --- Scroll Animation Hook ---
export const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

// --- FadeUp Wrapper ---
export const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0,
  className = "" 
}) => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Buttons ---
export const GoldButton: React.FC<{ children: React.ReactNode; onClick?: () => void; className?: string }> = ({ 
  children, onClick, className = '' 
}) => (
  <button 
    onClick={onClick}
    className={`relative px-8 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-serif font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] ${className}`}
  >
    {children}
  </button>
);

export const OutlineButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="px-8 py-3 border border-gold-500 text-gold-400 font-serif tracking-wider uppercase transition-all duration-300 hover:bg-gold-500 hover:text-black"
  >
    {children}
  </button>
);

// --- Section Header ---
export const SectionHeader: React.FC<{ title?: string; subtitle?: string; center?: boolean }> = ({ title, subtitle, center }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <FadeUp>
        <span className="text-gold-500 tracking-[0.2em] uppercase text-sm font-bold mb-2 block">
          {subtitle}
        </span>
      </FadeUp>
    )}
    {title && (
      <FadeUp delay={100}>
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          {title}
        </h2>
        <div className={`h-1 w-24 bg-gold-500 mt-6 ${center ? 'mx-auto' : ''}`} />
      </FadeUp>
    )}
  </div>
);
