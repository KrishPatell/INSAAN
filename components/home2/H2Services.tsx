import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const SERVICES = [
  {
    num: '01',
    title: 'Healthcare & Life Sciences',
    description:
      'Clinical staff, research professionals, and regulatory experts who understand compliance, patient care standards, and the critical nature of healthcare delivery.',
  },
  {
    num: '02',
    title: 'Engineering & Technology',
    description:
      'From software development to infrastructure projects, we connect you with engineers and technical talent who bring both expertise and practical problem-solving to complex challenges.',
  },
  {
    num: '03',
    title: 'Construction & Infrastructure',
    description:
      'Project managers, skilled trades, and site professionals who know how to deliver on time and within budget, even when conditions change.',
  },
  {
    num: '04',
    title: 'Energy & Aerospace',
    description:
      'Specialized talent for power generation, renewable energy projects, and aerospace operations where precision, safety, and technical excellence are non-negotiable.',
  },
];

export const H2Services: React.FC = () => {
  return (
    <section id="services" className="w-full bg-insaan-black text-white py-28 md:py-40 scroll-mt-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
              What We Do
            </span>
            <h2 className="text-[30.6px] md:text-6xl lg:text-[3.86rem] font-bold leading-[1] md:leading-[0.95] tracking-tightest max-w-4xl lg:max-w-5xl">
              Building stronger teams through
              <br className="hidden lg:block" />
              {' '}<span className="text-[#59CBE8] md:whitespace-nowrap">smarter workforce strategy.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <p className="max-w-md text-white/40 text-[16.2px] md:text-lg leading-relaxed lg:text-left">
              Redefining workforce solutions by integrating advanced data intelligence with a human-centered approach — combining precision analytics with genuine understanding to deliver stronger, more aligned talent outcomes.
            </p>
          </RevealOnScroll>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {SERVICES.map((service, i) => {
            const isWide = i === 0 || i === 3;
            return (
              <RevealOnScroll
                key={i}
                delay={i * 100}
                className={isWide ? 'md:col-span-7' : 'md:col-span-5'}
              >
                <div className="group relative h-full rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.07] hover:border-[#59CBE8]/30 hover:-translate-y-1">
                  {/* Number */}
                  <span className="block text-[#59CBE8]/40 text-sm font-mono tracking-widest mb-6 transition-colors duration-300 group-hover:text-[#59CBE8]/70">
                    {service.num}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 text-[14.4px] md:text-lg leading-relaxed transition-colors duration-300 group-hover:text-white/55">
                    {service.description}
                  </p>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#59CBE8]/0 via-[#59CBE8]/40 to-[#2CD5C4]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
