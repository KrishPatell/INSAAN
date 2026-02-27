import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import coretechLogo from '../../assets/coretech-logo.png';
import bettermintLogo from '../../assets/bettermint-logo.png';

const COMPANIES = [
  {
    name: 'Bettermint Healthcare',
    logo: coretechLogo,
    description:
      'Staffing solutions for construction, engineering, aerospace, maintenance, and other critical industries — supporting safe, consistent operations and the skilled teams that keep projects moving forward.',
    accent: '#59CBE8',
  },
  {
    name: 'CORETech',
    logo: bettermintLogo,
    description:
      'Providing workforce support and opportunities for travel nurses and allied health professionals across diverse healthcare environments.',
    accent: '#2CD5C4',
  },
];

export const H2Companies: React.FC = () => {
  return (
    <section id="companies" className="w-full py-28 md:py-40 scroll-mt-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Section header */}
        <RevealOnScroll>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-insaan-black/40 mb-5">
            Our Portfolio
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <h2 className="text-[32.4px] md:text-6xl lg:text-[4.2rem] font-bold text-insaan-black leading-[1] md:leading-[0.95] tracking-tightest mb-16 md:mb-20 max-w-3xl">
            Solutions ready for
            <br />
            <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
              the world.
            </span>
          </h2>
        </RevealOnScroll>

        {/* Company cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {COMPANIES.map((company, i) => (
            <RevealOnScroll key={i} delay={160 + i * 120}>
              <div
                className="group relative rounded-3xl border border-insaan-black/[0.06] p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-insaan-black/[0.04] hover:-translate-y-1 overflow-hidden h-full flex flex-col"
                style={{
                  backgroundColor: '#FFFFFF',
                  isolation: 'isolate',
                  backgroundClip: 'padding-box',
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(to right, ${company.accent}, ${company.accent}00)`,
                  }}
                />

                {/* Logo — pure white, isolated so page gradient doesn't blend through */}
                <div
                  className="company-logo-box flex items-center justify-center h-[140px] md:h-[200px] mb-8 flex-shrink-0 rounded-2xl p-4"
                  style={{
                    backgroundColor: '#FFFFFF',
                    isolation: 'isolate',
                    backgroundClip: 'padding-box',
                  }}
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-full max-w-[448px] md:max-w-[576px] object-contain"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>

                {/* Description */}
                <p className="text-insaan-black/55 text-[14.4px] md:text-lg leading-relaxed mb-8 flex-grow">
                  {company.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-insaan-black font-semibold text-[15px] group/link cursor-pointer mt-auto">
                  <span className="border-b border-transparent group-hover/link:border-insaan-black transition-colors">
                    Visit Company
                  </span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom text */}
        <RevealOnScroll delay={400}>
          <div className="max-w-3xl">
            <p className="text-insaan-black/50 text-[16.2px] md:text-xl leading-relaxed">
              Each company under Insaan Global is purpose-built to identify, attract, and deploy
              exceptional individuals who create measurable value inside the organizations we serve.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
