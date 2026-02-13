import React from 'react';
import coretechLogo from '../assets/coretech-logo.png';
import bettermintLogo from '../assets/bettermint-logo.png';

export const SectionSolutions: React.FC = () => {
  const handleCardClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="companies" className="w-full px-4 md:px-8 py-24 md:py-32 max-w-content mx-auto scroll-mt-24">
      <h2 className="section-reveal text-[40px] md:text-6xl lg:text-[5.5rem] font-bold text-insaan-black leading-[0.92] tracking-tightest mb-16 md:mb-20">
        solutions ready for<br />
        the world
      </h2>

      <div className="mb-20 section-reveal section-reveal-delay-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 w-full">
        <div 
          onClick={() => handleCardClick('companies')}
          className="border-[3px] border-insaan-black rounded-[60px] px-6 md:px-8 bg-transparent flex items-center justify-center h-[184px] hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <img
            src={coretechLogo}
            alt="CORETech logo"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain bg-transparent"
            style={{ backgroundColor: 'transparent', background: 'none' }}
          />
        </div>

        <div 
          onClick={() => handleCardClick('companies')}
          className="border-[3px] border-insaan-black rounded-[60px] px-6 md:px-8 bg-transparent flex items-center justify-center h-[184px] hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <img
            src={bettermintLogo}
            alt="bettermint healthcare logo"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain bg-transparent"
            style={{ backgroundColor: 'transparent', background: 'none' }}
          />
        </div>
        </div>
      </div>

      <div className="max-w-3xl text-xl text-gray-700 font-normal leading-relaxed section-reveal section-reveal-delay-2 mt-4">
        <p>
          We own these companies under Insaan Global, which translates to human global. Our companies are set up to find exceptional people and deliver effective results to your organization.
        </p>
      </div>
    </section>
  );
};
