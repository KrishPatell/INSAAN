import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Companies', href: '#companies' },
  ];

  return (
    <nav
      className={`fixed left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-insaan-bg/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-content mx-auto px-4 md:px-8 flex justify-between items-center relative">
        <a href="#" aria-label="Home">
          <Logo variant="dark" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-insaan-black text-base font-medium hover:text-[#59CBE8] transition-colors tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-insaan-black/20 rounded cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden w-9 h-9 inline-flex flex-col justify-center items-center gap-1.5 rounded-full border border-insaan-black/15 bg-insaan-bg/80 backdrop-blur-sm shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-insaan-black/20"
          aria-label="Toggle navigation"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-5 bg-insaan-black transition-transform duration-300 ${
              isMobileOpen ? 'translate-y-1 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-4 bg-insaan-black transition-opacity duration-300 ${
              isMobileOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-insaan-black transition-transform duration-300 ${
              isMobileOpen ? '-translate-y-1 -rotate-45' : ''
            }`}
          />
        </button>

        {/* Mobile dropdown menu */}
        {isMobileOpen && (
          <div className="md:hidden absolute right-0 top-full mt-3 w-56 rounded-2xl border border-insaan-black/10 bg-insaan-bg shadow-lg py-3 z-40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-5 py-2.5 text-base font-medium text-insaan-black hover:bg-black/5 hover:text-[#59CBE8] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
