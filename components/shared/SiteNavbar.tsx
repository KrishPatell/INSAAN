import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';

interface SiteNavbarProps {
  onContactClick?: () => void;
}

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Companies', to: '/companies' },
  { label: 'Solutions', to: '/solutions' },
];

export const SiteNavbar: React.FC<SiteNavbarProps> = ({ onContactClick }) => {
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

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    if (to.startsWith('#')) return false;
    return location.pathname.startsWith(to);
  };

  const renderLink = (link: typeof NAV_LINKS[0], isMobile = false) => {
    const active = isActive(link.to);
    const className = isMobile
      ? `animate-menu-slide-in text-4xl font-bold tracking-tight py-3 ${active ? 'text-[#59CBE8]' : 'text-insaan-black'}`
      : `text-[15px] font-semibold transition-colors duration-200 ${active ? 'text-[#59CBE8]' : 'text-insaan-black hover:text-insaan-black/80'}`;

    if (link.isAnchor && isHomePage) {
      // Anchor link on homepage - scroll to section
      return (
        <a
          key={link.to}
          href={link.to}
          onClick={(e) => handleAnchorClick(e, link.to)}
          className={className}
          style={isMobile ? { animationDelay: `${NAV_LINKS.indexOf(link) * 60}ms` } : undefined}
        >
          {link.label}
        </a>
      );
    }

    // Page link
    return (
      <Link
        key={link.to}
        to={link.to}
        className={className}
        style={isMobile ? { animationDelay: `${NAV_LINKS.indexOf(link) * 60}ms` } : undefined}
      >
        {link.label}
      </Link>
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
          <Link to="/" className="shrink-0" aria-label="Insaan Global — Home">
            <Logo variant="dark" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => renderLink(link))}
            <Link
              to="/contact"
              className={`text-[15px] font-semibold transition-colors duration-200 ${
                isActive('/contact')
                  ? 'text-[#59CBE8]'
                  : 'text-insaan-black hover:text-insaan-black/80'
              }`}
            >
              Contact
            </Link>
            <button
              onClick={onContactClick}
              className="ml-2 px-7 py-2.5 bg-insaan-black text-white text-[15px] font-semibold rounded-full hover:bg-[#59CBE8] hover:text-insaan-black transition-all duration-300"
            >
              Get in Touch
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
        <div role="dialog" aria-modal="true" aria-label="Navigation menu" className="fixed inset-0 z-40 bg-insaan-bg flex flex-col pt-24 px-8 pb-12">
          <div className="flex-1 flex flex-col justify-center gap-2">
            {NAV_LINKS.map((link) => renderLink(link, true))}
            <Link
              to="/contact"
              className={`animate-menu-slide-in text-4xl font-bold tracking-tight py-3 ${
                isActive('/contact') ? 'text-[#59CBE8]' : 'text-insaan-black'
              }`}
              style={{ animationDelay: `${NAV_LINKS.length * 60}ms` }}
            >
              Contact
            </Link>
          </div>
          <button
            onClick={() => { setMobileOpen(false); onContactClick?.(); }}
            className="animate-menu-slide-in w-full py-5 bg-insaan-black text-white text-lg font-bold rounded-2xl"
            style={{ animationDelay: '300ms' }}
          >
            Get in Touch
          </button>
        </div>
      )}
    </>
  );
};
