import React from 'react';
import coretechLogo from '../assets/coretech-logo.png';
import bettermintLogo from '../assets/bettermint-logo.png';

const companies = [
  {
    name: 'Bettermint Healthcare',
    logo: bettermintLogo,
    description: 'Providing workforce support and opportunities for travel nurses and allied health professionals across diverse healthcare environments.',
    website: '#',
  },
  {
    name: 'CORETech',
    logo: coretechLogo,
    description: 'Effective staffing solutions for construction, engineering, aerospace, maintenance, and other critical industries — ensuring operations run efficiently, safely, and without disruption.',
    website: '#',
  },
];

export const SectionSolutions: React.FC = () => {
  return (
    <section id="companies" className="w-full px-4 md:px-8 py-24 md:py-32 max-w-content mx-auto scroll-mt-24">
      <h2 className="section-reveal text-[40px] md:text-6xl lg:text-[5.5rem] font-bold text-insaan-black leading-[1] md:leading-[0.92] tracking-tightest mb-16 md:mb-20">
        solutions ready for<br />
        the world
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 section-reveal section-reveal-delay-1 items-stretch">
        {companies.map((company, index) => (
          <div 
            key={index}
            className="border-2 border-insaan-black rounded-3xl p-6 md:p-8 bg-transparent hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex items-center justify-center h-[150px] md:h-[220px] mb-6 flex-shrink-0 bg-white rounded-2xl p-4">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full max-w-[300px] md:max-w-[400px] object-contain"
              />
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 flex-grow">
              {company.description}
            </p>
            <a
              href={company.website}
              className="inline-flex items-center gap-2 text-insaan-black font-semibold text-sm md:text-base hover:text-[#59CBE8] transition-colors mt-auto"
            >
              Visit Company
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      <div className="max-w-4xl text-xl text-gray-700 font-normal leading-relaxed section-reveal section-reveal-delay-2">
        <p>
          Insaan Global — translating to "Human Global" — is the parent company overseeing a portfolio of specialized workforce solution brands. The name reflects our core belief that people are the foundation of every successful enterprise, and that talent, when properly aligned, drives global impact. Each company under Insaan Global is purpose-built to identify, attract, and deploy exceptional individuals who create measurable value inside the organizations we serve.
        </p>
      </div>
    </section>
  );
};
