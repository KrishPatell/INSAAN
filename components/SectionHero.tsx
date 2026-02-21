import React from 'react';
import heroWorldMap from '../assets/hero-world-map.webp';

export const SectionHero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col pt-24 md:pt-0">
      {/* Full-bleed background - flows end to end */}
      <div
        className="relative w-full aspect-[16/9] bg-cover bg-center bg-[#E0DDD5]"
        style={{ backgroundImage: `url(${heroWorldMap})` }}
      >
        {/* Mobile glassmorphism overlay - bottom 25% */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 md:hidden z-10 bg-gradient-to-t from-white/70 via-white/50 to-transparent backdrop-blur-lg" />
        
        {/* Content overlay - constrained to max-w-content */}
        <div className="absolute bottom-6 md:bottom-12 left-0 right-0 md:bottom-16 z-20">
          <div className="max-w-content mx-auto px-4 md:px-8">
            <div className="section-reveal section-reveal-delay-2">
              {/* Mobile: text within glassmorphism zone, Desktop: original positioning */}
              <div className="md:hidden px-4 py-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50">
                <p className="text-black text-[16px] font-bold leading-relaxed">
                  finding the right people and putting<br />
                  them in the right place.
                </p>
              </div>
              {/* Desktop: original text styling */}
              <p className="hidden md:block text-black text-[22px] font-bold leading-relaxed opacity-95">
                finding the right people and putting them in<br />
                the right place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
