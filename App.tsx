import React, { useState, useEffect } from 'react';
import { PAGES } from './constants';
import { Navigation, FloatingActions } from './components/Navigation';
import { SectionRenderer } from './components/SectionRenderer';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activePageId, setActivePageId] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initial Preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const activePageData = PAGES[activePageId];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100]">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 animate-pulse">
          SR <span className="text-gold-500">Interiors</span>
        </h1>
        <div className="w-24 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gold-500 animate-marquee w-1/2"></div>
        </div>
        <p className="text-gold-500/50 mt-4 text-xs tracking-[0.3em] uppercase">Loading Luxury</p>
      </div>
    );
  }

  return (
    <div className="bg-obsidian min-h-screen text-white font-sans selection:bg-gold-500 selection:text-black">
      <Navigation 
        activePage={activePageId} 
        onNavigate={setActivePageId} 
      />

      <main className="min-h-screen">
        {/* Render sections based on active page data */}
        {activePageData && activePageData.sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;
