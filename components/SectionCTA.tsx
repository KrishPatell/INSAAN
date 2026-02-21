import React from 'react';

interface SectionCTAProps {
  onContactClick?: () => void;
}

export const SectionCTA: React.FC<SectionCTAProps> = ({ onContactClick }) => {
  return (
    <section className="w-full px-0 md:px-8 py-28 md:py-40">
      <div className="relative max-w-[1100px] mx-auto rounded-3xl overflow-hidden bg-white border border-insaan-black/10 shadow-xl shadow-insaan-black/5 section-reveal">
          {/* Gradient inside the card */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#59CBE8]/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#2CD5C4]/20 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-gradient-to-br from-[#59CBE8]/15 via-[#2CD5C4]/10 to-transparent blur-3xl" />
          </div>

          <div className="relative px-3 md:px-20 py-14 md:py-20 flex flex-col items-center text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-gray-700 border border-gray-300 bg-gray-100/90 mb-6">
              Get started
            </span>

            <h2 className="text-[56px] md:text-[68px] lg:text-[5.25rem] font-bold text-insaan-black leading-[1] md:leading-[0.95] tracking-tightest mb-4 w-full px-2 md:px-0">
              Looking for<br />
              <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">your next role?</span>
            </h2>

            <p className="text-gray-600 text-[15px] md:text-lg leading-[1.4] md:leading-relaxed max-w-[650px] w-full px-0 mb-10">
              Browse open positions and submit your information to be considered for contract, contract-to-direct, and direct hire opportunities across our network.
            </p>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-8 py-4 md:px-10 md:py-5 bg-insaan-black text-white rounded-2xl font-bold text-base md:text-lg tracking-wide hover:bg-[#59CBE8] hover:text-insaan-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
    </section>
  );
};
