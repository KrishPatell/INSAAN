import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';

interface H2NavbarProps {
  onContactClick?: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '#services' },
  { label: 'Companies', href: '/companies' },
];

export const H2Navbar: React.FC<H2NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Don't prevent default for page links
    if (href.startsWith('/')) return;
    e.preventDefault();
    setMobileOpen(false);
    if (href === '#' || href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderLink = (link: typeof NAV_LINKS[0], isMobile = false) => {
    const isPageLink = link.href.startsWith('/');
    const className = isMobile 
      ? `animate-menu-slide-in text-4xl font-bold tracking-tight py-3 ${isPageLink ? '' : 'text-insaan-black'}`
      : 'text-[15px] font-semibold text-insaan-black hover:text-insaan-black/80 transition-colors duration-200';

    if (isPageLink) {
      return (
        <Link
          key={link.href}
          to={link.href}
          className={className}
          onClick={() => setMobileOpen(false)}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a
        key={link.href}
        href={link.href}
        onClick={(e) => handleNavClick(e, link.href)}
        className={className}
        style={isMobile ? { animationDelay: `${NAV_LINKS.indexOf(link) * 60}ms` } : undefined}
      >
        {link.label}
      </a>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-insaan-bg/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <Logo variant="dark" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => renderLink(link))}
            <button
              onClick={onContactClick}
              className="ml-2 px-7 py-2.5 bg-insaan-black text-white text-[15px] font-semibold rounded-full hover:bg-[#59CBE8] hover:text-insaan-black transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`block h-[2px] bg-insaan-black rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`block h-[2px] bg-insaan-black rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-[2px] bg-insaan-black rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-insaan-bg flex flex-col pt-24 px-8 pb-12">
          <div className="flex-1 flex flex-col justify-center gap-2">
            {NAV_LINKS.map((link) => renderLink(link, true))}
          </div>
          <button
            onClick={() => { setMobileOpen(false); onContactClick?.(); }}
            className="animate-menu-slide-in w-full py-5 bg-insaan-black text-white text-lg font-bold rounded-2xl"
            style={{ animationDelay: '200ms' }}
          >
            Contact Us
          </button>
        </div>
      )}
    </>
  );
};
