import React from 'react';
import leaderOffice from '../assets/leader-office.png';

export const SectionLeader: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 md:px-8 py-24 md:py-32 max-w-content mx-auto scroll-mt-24">
      <h2 className="section-reveal text-[40px] md:text-6xl lg:text-[5.5rem] font-bold text-insaan-black leading-[0.92] tracking-tightest mb-16 md:mb-20">
        leader in workforce solutions
      </h2>

      <div className="w-full mb-16 md:mb-20 section-reveal section-reveal-delay-1">
        <div className="rounded-2xl overflow-hidden shadow-md w-full">
          <img
            src={leaderOffice}
            alt="Modern office with people working"
            className="w-full h-auto aspect-[16/6] object-cover grayscale-[15%]"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-16 section-reveal section-reveal-delay-2">
        <p className="max-w-3xl text-xl text-gray-700 font-normal leading-relaxed flex-1">
          we are more than just a staffing and recruiting business, we learn from how your business operates and help make decisions centered around your operation.
        </p>

        <button 
          onClick={() => {
            const element = document.getElementById('services');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="border-2 border-insaan-black px-10 py-2 md:px-10 md:py-6 rounded-full text-[17px] md:text-base font-semibold tracking-widest hover:bg-insaan-black hover:text-white transition-all duration-300 uppercase whitespace-nowrap cursor-pointer flex flex-col justify-center items-center h-[11px]"
        >
          Discover How
        </button>
      </div>
    </section>
  );
};
