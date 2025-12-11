import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-serif text-white mb-6">SR <span className="text-gold-500">Interiors</span></h2>
            <p className="text-gray-500 text-sm leading-loose">
              Crafting ultra-luxury environments since 2008. We merge architectural precision with interior elegance.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-serif mb-6">Explore</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-gold-500 cursor-pointer">Residential</li>
              <li className="hover:text-gold-500 cursor-pointer">Commercial</li>
              <li className="hover:text-gold-500 cursor-pointer">Civil Construction</li>
              <li className="hover:text-gold-500 cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-gold-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-gold-500 cursor-pointer">Terms of Service</li>
              <li className="hover:text-gold-500 cursor-pointer">Disclaimer</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <Instagram className="text-gray-400 hover:text-gold-500 cursor-pointer" />
              <Facebook className="text-gray-400 hover:text-gold-500 cursor-pointer" />
              <Linkedin className="text-gray-400 hover:text-gold-500 cursor-pointer" />
              <Twitter className="text-gray-400 hover:text-gold-500 cursor-pointer" />
            </div>
            <p className="text-gray-500 text-sm">Mumbai • Dubai • London</p>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} SR Interiors & Constructions. All Rights Reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};
