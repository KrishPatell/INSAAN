import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
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
            <p className="mt-6 text-gray-400 max-w-sm text-[17px]" style={{ lineHeight: '1.7' }}>
              We find the right people and put them in the right place. Insaan Global is a leader in workforce solutions, building stronger teams through smarter workforce strategy.
            </p>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 md:col-start-7">
          <h4 className="text-[#59CBE8] font-bold text-base tracking-widest uppercase mb-6">Company</h4>
          <ul className="space-y-4 text-base text-gray-300">
            <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
            <li><a href="#" onClick={(e) => handleLinkClick(e, '#')} className="hover:text-white transition-colors cursor-pointer">News</a></li>
            <li>
              <button 
                onClick={onContactClick}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2">
          <h4 className="text-[#59CBE8] font-bold text-base tracking-widest uppercase mb-6">Solutions</h4>
          <ul className="space-y-4 text-base text-gray-300">
            <li><a href="#companies" onClick={(e) => handleLinkClick(e, '#companies')} className="hover:text-white transition-colors cursor-pointer">CORETech</a></li>
            <li><a href="#companies" onClick={(e) => handleLinkClick(e, '#companies')} className="hover:text-white transition-colors cursor-pointer">Bettermint</a></li>
            <li><a href="/company-presentation.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">Company Presentation</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-2">
          <h4 className="text-[#59CBE8] font-bold text-base tracking-widest uppercase mb-6">Connect</h4>
          <ul className="space-y-4 text-base text-gray-300">
            <li>
              <a href="https://www.linkedin.com/company/insaanglobal/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="mailto:Info@insaanglobal.com"
                className="text-white font-medium hover:text-[#59CBE8] transition-colors cursor-pointer"
              >
                Info@insaanglobal.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-content mx-auto pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-start md:justify-between items-center text-sm text-gray-500 gap-2 md:gap-6">
        <div className="flex flex-row gap-2 text-left md:text-center">
          <p>&copy; {new Date().getFullYear()} Insaan Global. All rights reserved.</p>
          <p className="hidden md:inline">|</p>
          <p>Built by <a href="https://blitzstudio.xyz" target="_blank" rel="noopener noreferrer" className="text-[#59CBE8] hover:text-white transition-colors">Blitz Studio</a></p>
        </div>
      </div>
    </footer>
  );
};
