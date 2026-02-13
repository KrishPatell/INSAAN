import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <footer id="contact" className="w-full bg-black text-white pt-28 pb-16 px-4 md:px-8 scroll-mt-24">
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-28">
        
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <Logo variant="light" />
            <p className="mt-6 text-gray-400 max-w-sm text-[17px] leading-relaxed">
              We find the right people and put them in the right place. Insaan Global is a leader in workforce solutions, driving change through technology and human connection.
            </p>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 md:col-start-7">
          <h4 className="text-[#59CBE8] font-bold text-base tracking-widest uppercase mb-6">Company</h4>
          <ul className="space-y-4 text-base text-gray-300">
            <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
            <li><a href="#companies" onClick={(e) => handleLinkClick(e, '#companies')} className="hover:text-white transition-colors cursor-pointer">Our Companies</a></li>
            <li><a href="#" onClick={(e) => handleLinkClick(e, '#')} className="hover:text-white transition-colors cursor-pointer">News</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2">
          <h4 className="text-[#59CBE8] font-bold text-base tracking-widest uppercase mb-6">Solutions</h4>
          <ul className="space-y-4 text-base text-gray-300">
            <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-white transition-colors cursor-pointer">Staffing</a></li>
            <li><a href="#companies" onClick={(e) => handleLinkClick(e, '#companies')} className="hover:text-white transition-colors cursor-pointer">CORETech</a></li>
            <li><a href="#companies" onClick={(e) => handleLinkClick(e, '#companies')} className="hover:text-white transition-colors cursor-pointer">Bettermint</a></li>
            <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-white transition-colors cursor-pointer">Consulting</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-2">
          <h4 className="text-[#59CBE8] font-bold text-base tracking-widest uppercase mb-6">Connect</h4>
          <ul className="space-y-4 text-base text-gray-300">
            <li><a href="https://www.linkedin.com/company/insaanglobal/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">LinkedIn</a></li>
            <li className="pt-4 text-white font-medium">hello@insaanglobal.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-content mx-auto pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-start md:justify-between items-center text-sm text-gray-500 gap-6">
        <div className="flex flex-col md:flex-row gap-2 text-left md:text-center">
          <p>&copy; {new Date().getFullYear()} Insaan Global. All rights reserved.</p>
          <p>Built by <a href="https://blitzstudio.xyz" target="_blank" rel="noopener noreferrer" className="text-[#59CBE8] hover:text-white transition-colors">Blitz Studio</a></p>
        </div>
      </div>
    </footer>
  );
};