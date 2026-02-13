import React, { useState } from 'react';

const IMAGE_SOURCES = [
  'https://octagonits.com/images/contract-staffing-services-222(1).png',
  'https://rubiconstaffing.org/wp-content/uploads/2021/06/Staffing-Solutions.jpg ',
  'https://www.bluebixinc.com/services/images/Comprehensive-Staffing-Solutions.jpg',
  'https://www.neeco.com/files/4644-employee-sourcing-and-workforce-management.jpg',
];

const features = [
  {
    title: "Intelligent Sourcing",
    description: "Using proprietary AI to identify potential where others see data points."
  },
  {
    title: "Human-Centric Technology",
    description: "Technology that amplifies human potential rather than replacing it."
  },
  {
    title: "Global Scalability",
    description: "Seamlessly expanding workforce capabilities across borders."
  },
  {
    title: "Contract & Temporary Staffing",
    description: "Flexible workforce solutions for project-based and seasonal needs."
  }
];

export const SectionDrivingChange: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="w-full bg-insaan-black text-white py-32 md:py-40 scroll-mt-24">
      <div className="max-w-content mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-28 gap-12 section-reveal">
          <h2 className="text-[40px] md:text-7xl lg:text-[4.5rem] font-bold tracking-tightest leading-[0.92]">
            driving change<br />
            <span className="text-gray-500">with intelligence.</span>
          </h2>
          <p className="max-w-md text-gray-400 text-lg md:text-xl leading-relaxed mb-2">
            Redefining workforce solutions through the fusion of advanced neural algorithms and human empathy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[400px] border border-white/10 group section-reveal section-reveal-delay-1">
            <div className="relative w-full h-full">
              {IMAGE_SOURCES.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={features[index]?.title ?? `Workforce Solutions ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === activeTab ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1 border border-white/30 rounded-full text-xs font-mono tracking-widest text-white/80 uppercase backdrop-blur-sm">
                Neural Architecture
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            {features.map((feature, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden section-reveal ${
                    index === 0 ? 'section-reveal-delay-2' : index === 1 ? 'section-reveal-delay-3' : index === 2 ? 'section-reveal-delay-4' : 'section-reveal-delay-5'
                  } ${
                    isActive
                      ? 'bg-white/10 border-[#59CBE8]/40'
                      : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="p-6 md:p-8 flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <span
                      className={`text-[#59CBE8] transition-transform duration-300 shrink-0 ml-3 ${
                        isActive ? 'rotate-180' : ''
                      }`}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed px-6 md:px-8 pb-6 md:pb-8 pt-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
