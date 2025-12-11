import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface Props {
  activePage: string;
  onNavigate: (id: string) => void;
}

export const Navigation: React.FC<Props> = ({ activePage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-2xl font-serif font-bold text-white cursor-pointer"
            onClick={() => handleNav('home')}
          >
            SR <span className="text-gold-500">Interiors</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.pageId}
                onClick={() => handleNav(item.pageId)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                  activePage === item.pageId ? 'text-gold-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-gold-500" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transform transition-transform duration-500 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.pageId}
              onClick={() => handleNav(item.pageId)}
              className={`text-2xl font-serif ${
                activePage === item.pageId ? 'text-gold-500' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <button className="bg-green-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform text-white">
        <Phone size={24} />
      </button>
      <button className="bg-gold-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform text-black">
        <User size={24} />
      </button>
    </div>
  );
};
