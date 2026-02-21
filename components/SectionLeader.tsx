import React from 'react';
import leaderOffice from '../assets/leader-office.png';

interface SectionLeaderProps {
  onContactClick?: () => void;
}

export const SectionLeader: React.FC<SectionLeaderProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="w-full px-4 md:px-8 py-16 md:py-32 max-w-content mx-auto scroll-mt-24">
      <h2 className="section-reveal text-[28px] md:text-6xl lg:text-[5.5rem] font-bold text-insaan-black leading-[1] md:leading-[0.92] tracking-tightest mb-6 md:mb-20">
        leader in workforce solutions
      </h2>

      <div className="w-full mb-6 md:mb-20 section-reveal section-reveal-delay-1">
        <div className="rounded-2xl overflow-hidden shadow-md w-full">
          <img
            src={leaderOffice}
            alt="Modern office with people working"
            className="w-full h-auto block aspect-[16/6] object-cover grayscale-[15%]"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-16 section-reveal section-reveal-delay-2">
        <p className="max-w-3xl text-base md:text-xl text-gray-700 font-normal leading-relaxed">
          We are more than a traditional staffing and recruiting firm. We take the time to understand how your business operates and use that insight to guide workforce decisions aligned with your operational goals. By focusing on how your organization functions day to day, we help ensure every hire supports performance, efficiency, and long-term growth.
        </p>

        <button 
          onClick={onContactClick}
          className="bg-insaan-black text-white border-2 border-insaan-black px-6 py-3 md:px-8 md:py-4 rounded-2xl text-[14px] md:text-base font-semibold tracking-widest transition-all duration-300 uppercase cursor-pointer inline-flex items-center justify-center gap-2 w-full md:w-auto mt-2 md:mt-0 md:bg-transparent md:text-insaan-black"
        >
          Discover How
        </button>
      </div>
    </section>
  );
};
