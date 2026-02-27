import React from 'react';
import { Logo } from '../Logo';
import { RevealOnScroll } from './RevealOnScroll';

interface H2FooterProps {
  onContactClick?: () => void;
}

export const H2Footer: React.FC<H2FooterProps> = ({ onContactClick }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <RevealOnScroll as="footer" id="contact" className="w-full bg-black text-white scroll-mt-24">
      {/* Main footer content */}
      <div className="max-w-content mx-auto px-4 md:px-8 pt-24 md:pt-[85px] pb-[75px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-8 mb-20 md:mb-28">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 text-white/70 max-w-sm text-[16px] leading-[1.8]">
              We identify the right talent and place them where they create the most value. Insaan Global delivers structured workforce solutions focused on strengthening teams and supporting operational performance across industries.
            </p>
          </div>

          {/* Company links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[15px] font-bold tracking-[0.5px] uppercase text-white/25 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-[15px] md:text-[17px] font-medium text-white/50 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-[15px] md:text-[17px] font-medium text-white/50 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/companies"
                  className="text-[15px] md:text-[17px] font-medium text-white/50 hover:text-white transition-colors"
                >
                  Companies
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  className="text-[15px] md:text-[17px] font-medium text-white/50 hover:text-white transition-colors"
                >
                  Solutions
                </a>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-[15px] md:text-[17px] font-medium text-white/50 hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions links */}
          <div className="md:col-span-2">
            <h4 className="text-[15px] font-bold tracking-[0.5px] uppercase text-white/25 mb-6">
              Brands
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#companies"
                  onClick={(e) => handleLinkClick(e, '#companies')}
                  className="text-[15px] md:text-[17px] font-medium text-white/50 hover:text-white transition-colors"
                >
                  CORETech
                </a>
              </li>
              <li>
                <a
                  href="#companies"
                  onClick={(e) => handleLinkClick(e, '#companies')}
                  className="text-[15px] md:text-[17px] font-medium text-white/50 hover:text-white transition-colors"
                >
                  Bettermint
                </a>
              </li>
              <li>
                <a
                  href="/company-presentation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] md:text-[17px] font-medium text-white/50 hover:text-white transition-colors"
                >
                  Presentation
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="text-[15px] font-bold tracking-[0.5px] uppercase text-white/25 mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.linkedin.com/company/insaanglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] md:text-[17px] font-medium text-white/50 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@insaanglobal.com"
                  className="text-[15px] md:text-[17px] font-medium text-white/70 hover:text-[#59CBE8] transition-colors"
                >
                  Info@insaanglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[14.5px] text-white/25">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Insaan Global. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span className="text-white/40">
              Built by{'  '}
              <a
                href="https://blitzstudio.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#59CBE8]/60 hover:text-[#59CBE8] transition-colors"
              >
                Blitz Studio
              </a>
            </span>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};
