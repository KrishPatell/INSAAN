import React from 'react';
import heroWorldMap from '../assets/hero-world-map.png';

export const SectionHero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col pt-24 md:pt-0">
      {/* Full-bleed background - flows end to end */}
      <div
        className="relative w-full aspect-[16/9] bg-cover bg-center bg-[#E0DDD5]"
        style={{ backgroundImage: `url(${heroWorldMap})` }}
      >
        {/* Content overlay - constrained to max-w-content */}
        <div className="absolute bottom-12 left-0 right-0 md:bottom-16 z-10">
          <div className="max-w-content mx-auto px-4 md:px-8">
            <div className="section-reveal section-reveal-delay-2">
              <p className="text-white text-[16px] md:text-[22px] font-light leading-relaxed drop-shadow-lg opacity-95">
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
