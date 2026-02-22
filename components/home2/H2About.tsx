import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import leaderOffice from '../../assets/leader-office.png';

interface H2AboutProps {
  onContactClick?: () => void;
}

export const H2About: React.FC<H2AboutProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="w-full py-28 md:py-40 scroll-mt-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Section label */}
        <RevealOnScroll>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-insaan-black/40 mb-6">
            About Insaan Global
          </span>
        </RevealOnScroll>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Text */}
          <div className="min-w-0">
            <RevealOnScroll delay={80}>
              <h2 className="text-[32.4px] md:text-6xl lg:text-[3.86rem] font-bold text-insaan-black leading-[1] tracking-tightest mb-8">
                Leader in{' '}
                <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">workforce</span>
                <br />
                <span className="lg:whitespace-nowrap">
                  <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">solutions</span>
                  {' '}building
                </span>
                <br />
                <span className="block">stronger teams.</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={160}>
              <p className="text-gray-700 text-[16.2px] md:text-xl leading-relaxed mb-8">
                We are more than a traditional staffing and recruiting firm. Insaan Global — "Human Global" — is the parent company behind a portfolio of specialized workforce brands. We take the time to understand how your business operates and use that insight to guide workforce decisions aligned with your operational goals.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={240}>
              <p className="text-gray-700 text-[16.2px] md:text-xl leading-relaxed mb-10">
                Each company under Insaan Global is purpose-built to identify, attract, and deploy exceptional talent. By focusing on how your organization functions day to day, we help ensure every hire supports performance, efficiency, and long-term growth.
              </p>
            </RevealOnScroll>

            {/* Pull quote accent */}
            <RevealOnScroll delay={300}>
              <div className="border-l-[3px] border-[#59CBE8] pl-6 mb-12 md:w-[614px]">
                <p className="text-insaan-black text-xl md:text-2xl font-semibold leading-snug tracking-tight">
                  "Talent, when properly aligned, drives global impact."
                </p>
              </div>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll delay={360}>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 text-insaan-black font-bold text-sm md:text-base group whitespace-nowrap"
              >
                <span className="border-b-2 border-insaan-black/20 group-hover:border-insaan-black transition-colors pb-0.5">
                  Find Talent
                </span>
                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </RevealOnScroll>
          </div>

          {/* Right — Image */}
          <div>
            <RevealOnScroll delay={200}>
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={leaderOffice}
                  alt="Insaan Global office"
                  className="w-full h-[350px] md:h-[480px] object-cover transition-all duration-700"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
