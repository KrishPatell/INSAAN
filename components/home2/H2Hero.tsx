import React from 'react';
import heroWorldMap from '../../assets/hero-world-map.webp';

interface H2HeroProps {
  onContactClick?: () => void;
}

export const H2Hero: React.FC<H2HeroProps> = ({ onContactClick }) => {
  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full flex flex-col overflow-hidden">
      {/* World map hero — centerline approach */}
      <div
        className="relative w-full aspect-[16/9] min-h-[100svh] md:min-h-[90svh] bg-cover bg-center bg-[#E0DDD5]"
        style={{ backgroundImage: `url(${heroWorldMap})` }}
      >
        {/* Subtle gradient orbs on top of map */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="animate-float-slow absolute -top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-[#59CBE8]/[0.06] blur-[120px]" />
          <div className="animate-float-slower absolute bottom-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#2CD5C4]/[0.05] blur-[120px]" />
        </div>

        {/* Mobile glassmorphism overlay — bottom portion */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] md:h-[45%] z-10 bg-gradient-to-t from-[#F9F8F2] via-[#F9F8F2]/80 to-transparent" />

        {/* Content overlay — positioned at bottom of map */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-10 md:pb-16">
          <div className="max-w-content mx-auto px-4 md:px-8">
            {/* Label */}
            <div className="reveal is-visible mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-insaan-black/10 bg-white/70 backdrop-blur-sm text-xs font-semibold tracking-[0.15em] uppercase text-insaan-black/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2CD5C4]" />
                Workforce Solutions
              </span>
            </div>

            {/* Headline */}
            <div className="reveal is-visible mb-6 md:mb-8" style={{ transitionDelay: '100ms' }}>
              <h1 className="text-[40px] md:text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1] tracking-tightest text-insaan-black">
                The right{' '}
                <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                  people
                </span>
                ,
                <br />
                the right place.
              </h1>
            </div>

            {/* Subtitle */}
            <div className="reveal is-visible" style={{ transitionDelay: '200ms' }}>
              <p className="max-w-xl text-insaan-black/60 text-[14px] md:text-lg leading-relaxed mb-8 md:mb-10 font-medium">
                Insaan Global delivers precision workforce solutions across healthcare,
                engineering, construction, and energy — connecting exceptional talent
                with organizations that move the world forward.
              </p>
            </div>

            {/* CTAs */}
            <div className="reveal is-visible flex flex-col sm:flex-row gap-4" style={{ transitionDelay: '300ms' }}>
              <button
                onClick={scrollToServices}
                className="px-7 py-3.5 md:px-8 md:py-4 bg-insaan-black text-white text-[13.5px] md:text-[15px] font-bold rounded-2xl hover:bg-[#59CBE8] hover:text-insaan-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Our Solutions
              </button>
              <button
                onClick={() => onContactClick?.()}
                className="px-7 py-3.5 md:px-8 md:py-4 border-2 border-insaan-black/15 text-insaan-black text-[13.5px] md:text-[15px] font-bold rounded-2xl hover:border-insaan-black/40 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — sits below the map */}
      <div className="hidden md:flex flex-col items-center gap-3 py-6 bg-gradient-to-b from-[#F9F8F2] to-transparent">
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-insaan-black/30">Scroll</span>
        <div className="animate-scroll-down">
          <svg className="w-5 h-5 text-insaan-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};
