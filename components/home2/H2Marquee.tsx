import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const INDUSTRIES = [
  'Healthcare',
  'Construction',
  'Engineering',
  'Aerospace',
  'Energy',
  'Manufacturing',
  'Technology',
  'Defense',
  'Pharmaceuticals',
  'Logistics',
];

export const H2Marquee: React.FC = () => {
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <RevealOnScroll as="section" className="w-full bg-insaan-black py-6 md:py-7 overflow-hidden select-none">
      <div className="flex animate-marquee" style={{ width: 'max-content' }}>
        {items.map((industry, i) => (
          <React.Fragment key={i}>
            <span className="text-white/80 text-sm md:text-base font-medium tracking-wide px-6 md:px-10 uppercase">
              {industry}
            </span>
            <span className="text-[#59CBE8]/50 text-lg">&bull;</span>
          </React.Fragment>
        ))}
      </div>
    </RevealOnScroll>
  );
};
