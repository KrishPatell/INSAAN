import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const IMAGE_SOURCES = [
  'https://octagonits.com/images/contract-staffing-services-222(1).png',
  'https://rubiconstaffing.org/wp-content/uploads/2021/06/Staffing-Solutions.jpg',
  'https://www.bluebixinc.com/services/images/Comprehensive-Staffing-Solutions.jpg',
  'https://www.neeco.com/files/4644-employee-sourcing-and-workforce-management.jpg',
];

const FEATURES = [
  {
    title: 'Simple Recruiting',
    description:
      'A focused, efficient approach to delivering contract, contract-to-direct, and direct hire talent — placing the right people where they create immediate impact.',
  },
  {
    title: 'Special Situations',
    description:
      'Dedicated rapid response teams deployed quickly to stabilize operations, support urgent projects, and deliver immediate on-site impact when timing matters most.',
  },
  {
    title: 'People Management',
    description:
      'Structured workforce solutions through RPO, MSP, and VMS deployment — aligning talent strategy with operational performance.',
  },
  {
    title: 'People Solutions',
    description:
      'Evaluating operational needs and growth targets to deliver a tailored mix of recruiting, workforce management, and project-based support aligned with the desired outcome.',
  },
];

export const H2Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-insaan-black text-white py-28 md:py-40">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
              How We Deliver
            </span>
            <h2 className="text-[32.4px] md:text-6xl lg:text-[4.2rem] font-bold leading-[1] md:leading-[0.95] tracking-tightest max-w-3xl">
              Precision at every{' '}
              <span className="text-[#59CBE8]">stage</span> of the process.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <p className="max-w-md text-white/40 text-lg leading-relaxed lg:text-right">
              Integrating advanced data intelligence with a human-centered
              approach — combining precision analytics with genuine understanding.
            </p>
          </RevealOnScroll>
        </div>

        {/* Interactive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Image panel */}
          <RevealOnScroll className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden min-h-[350px] md:min-h-[500px] h-full border border-white/10 group">
              <div className="relative w-full h-full">
                {IMAGE_SOURCES.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={FEATURES[index]?.title ?? `Workforce Solutions ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === activeTab ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-insaan-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Badge */}
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-1.5 border border-white/25 rounded-full text-xs font-semibold tracking-[0.15em] uppercase text-white/80 backdrop-blur-md bg-white/5">
                  Data Intelligence
                </span>
              </div>

              {/* Step indicator */}
              <div className="absolute top-6 right-6 flex gap-2">
                {FEATURES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeTab
                        ? 'bg-[#59CBE8] w-6'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`View feature ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Accordion tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {FEATURES.map((feature, index) => {
              const isActive = activeTab === index;
              return (
                <RevealOnScroll key={index} delay={160 + index * 80}>
                  <div
                    onClick={() => setActiveTab(index)}
                    className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? 'bg-white/10 border-[#59CBE8]/40'
                        : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.07] hover:border-white/20'
                    }`}
                  >
                    {/* Tab header */}
                    <div className="p-6 md:p-8 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-sm font-mono tracking-widest transition-colors duration-300 ${
                            isActive ? 'text-[#59CBE8]' : 'text-white/25'
                          }`}
                        >
                          0{index + 1}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                          {feature.title}
                        </h3>
                      </div>
                      <span
                        className={`text-[#59CBE8] transition-transform duration-300 shrink-0 ml-3 ${
                          isActive ? 'rotate-180' : ''
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>

                    {/* Expandable content */}
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                      style={{
                        gridTemplateRows: isActive ? '1fr' : '0fr',
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-white/45 text-base md:text-lg leading-relaxed px-6 md:px-8 pb-6 md:pb-8 pt-0">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
