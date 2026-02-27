import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../components/home2/RevealOnScroll';
import { SEOHead } from '../components/shared/SEOHead';
import { H2Footer } from '../components/home2/H2Footer';
import leaderOffice from '../assets/leader-office.png';
//import diversityHero from '../assets/Improving-the-Employee-Experience-Through-Diversity_699854.jpg';

interface AboutPageProps {
  onContactClick: () => void;
}

/* ──────────────────────────── DATA ──────────────────────────── */

const STATS = [
  { value: '12', label: 'Industries Served' },
  { value: '2', label: 'Specialized Brands' },
  { value: '48hr', label: 'Avg. Placement Speed' },
  { value: '100%', label: 'Safety Compliance' },
];

const VALUES = [
  {
    num: '01',
    title: 'People Over Process',
    text: 'Every workforce decision starts with understanding the people involved — their skills, their goals, and how they fit within the teams they join. Process supports people, not the other way around.',
  },
  {
    num: '02',
    title: 'Operational Understanding',
    text: 'We learn how your facility runs before we recommend a single candidate. Staffing without operational context is just guessing — and that costs you time and money.',
  },
  {
    num: '03',
    title: 'Transparency at Every Step',
    text: 'Clear rates, honest timelines, straightforward communication. No hidden fees, no surprises. You know exactly what you\'re getting and when you\'re getting it.',
  },
  {
    num: '04',
    title: 'Long-Term Thinking',
    text: 'Quick fills matter, but so does retention. We focus on placements that perform months and years down the line — not just the first week on the job.',
  },
];

const TIMELINE = [
  {
    year: 'Foundation',
    title: 'Built on a Simple Idea',
    text: 'Insaan Global was founded on the belief that workforce solutions should be grounded in genuine understanding — of industries, of operations, and above all, of people.',
  },
  {
    year: 'Growth',
    title: 'Specialized Brands, Deeper Expertise',
    text: 'Rather than trying to be everything to everyone, we built purpose-specific companies. CORETech for industrial staffing. Bettermint for healthcare. Each one focused, each one accountable.',
  },
  {
    year: 'Today',
    title: 'Serving Essential Industries Worldwide',
    text: 'Across 12 industrial sectors, Insaan Global brands connect skilled professionals with the organizations that need them — placing talent that drives measurable performance.',
  },
];

const ABOUT_FAQ = [
  {
    q: 'What does "Insaan" mean?',
    a: 'Insaan translates to "Human" in several languages. The name reflects our core belief — that people are the foundation of every successful operation, and workforce solutions must start with genuine understanding of the people involved.',
  },
  {
    q: 'How is Insaan Global different from traditional staffing agencies?',
    a: 'We take the time to understand how your operation runs before recommending a single candidate. Traditional agencies match resumes to job descriptions. We match people to operational needs — workflows, team dynamics, safety requirements, and production goals.',
  },
  {
    q: 'What industries does Insaan Global serve?',
    a: 'Through CORETech, we staff 12 industrial sectors including construction, manufacturing, skilled trades, engineering, automotive, aviation, and transportation. Through Bettermint Healthcare, we support healthcare facilities with travel nurses and allied health professionals.',
  },
  {
    q: 'How do CORETech and Bettermint work together?',
    a: 'Both brands operate independently with industry-specific expertise, but share the same operating standards — transparent pricing, safety-first screening, and post-placement accountability. Organizations that need both industrial and healthcare staffing benefit from a single relationship with consistent quality.',
  },
  {
    q: 'Where does Insaan Global operate?',
    a: 'We serve clients across the United States and internationally. Our reach extends wherever skilled workforce solutions are needed, with the infrastructure to support both local placements and large-scale distributed programs.',
  },
];

/* ──────────────────────────── COMPONENT ──────────────────────────── */

export const AboutPage: React.FC<AboutPageProps> = ({ onContactClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="About Us — Insaan Global | Workforce Solutions Built on Understanding"
        description="Insaan Global is the parent company behind CORETech and Bettermint Healthcare. We deliver structured workforce solutions across 12 industries, grounded in operational understanding and a people-first approach."
        path="/about"
        keywords="about Insaan Global, workforce solutions company, staffing parent company, CORETech, Bettermint Healthcare, industrial staffing, healthcare staffing"
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative w-full pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        {/* Background image with linear gradient overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img 
            src={leaderOffice} 
            alt="" 
            className="absolute right-0 top-0 h-full w-[80%] md:w-[70%] object-cover opacity-30 md:opacity-40"
          />
          <div className="absolute right-0 top-0 h-full w-[80%] md:w-[70%] bg-gradient-to-r from-[#F9F8F2]/95 via-[#F9F8F2]/70 to-transparent" />
          {/* Subtle gradient orbs for depth */}
          <div className="absolute -top-32 right-[15%] w-[500px] h-[500px] rounded-full bg-[#59CBE8]/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-[#2CD5C4]/[0.04] blur-[120px]" />
        </div>

        <div className="relative max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-insaan-black/10 bg-white/70 backdrop-blur-sm text-xs font-semibold tracking-[0.15em] uppercase text-insaan-black/60 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2CD5C4]" />
              About Insaan Global
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <h1 className="text-[36px] md:text-6xl lg:text-[4.8rem] font-bold leading-[37px] md:leading-[1] tracking-tightest mb-8 max-w-5xl">
              The right talent,
              <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                placed with purpose.
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <p className="max-w-2xl text-insaan-black/60 text-[15px] md:text-[17px] leading-relaxed font-medium">
              Insaan Global — translating to "Human Global" — is the parent company overseeing specialized workforce brands. The name reflects our core belief: people are the foundation of every successful operation, and talent, when properly aligned, drives measurable global impact.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 md:px-10 md:py-4 bg-insaan-black text-white text-[13.5px] md:text-[15px] font-bold rounded-xl md:rounded-2xl hover:bg-[#59CBE8] hover:text-insaan-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
              <Link
                to="/companies"
                className="inline-flex items-center justify-center px-7 py-3.5 md:px-10 md:py-4 border-2 border-insaan-black/15 text-insaan-black text-[13.5px] md:text-[15px] font-bold rounded-xl md:rounded-2xl hover:border-insaan-black/30 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Our Companies
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <RevealOnScroll as="section" className="w-full bg-insaan-black py-12 md:py-16">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center gap-0 w-[85vw] max-w-full mx-auto">
            {STATS.map((stat, i) => (
              <RevealOnScroll key={i} delay={i * 80} className="text-center md:text-left">
                <div className="text-3xl md:text-5xl font-bold text-white tracking-tightest mb-2">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* ═══════ OUR STORY ═══════ */}
      <section className="w-full py-24 md:py-36">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Image */}
            <RevealOnScroll>
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={leaderOffice}
                  alt="Insaan Global office environment"
                  className="w-full h-[350px] md:h-[520px] object-cover"
                />
              </div>
            </RevealOnScroll>

            {/* Right — Story */}
            <div>
              <RevealOnScroll delay={80}>
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-insaan-black/40 mb-6">
                  Our Story
                </span>
              </RevealOnScroll>

              <RevealOnScroll delay={120}>
                <h2 className="text-[32px] md:text-5xl font-bold text-insaan-black leading-[1.05] tracking-tightest mb-8">
                  More than staffing.{' '}
                  <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                    Workforce partnership.
                  </span>
                </h2>
              </RevealOnScroll>

              <RevealOnScroll delay={180}>
                <p className="text-gray-700 text-[16px] md:text-lg leading-relaxed mb-6">
                  We are more than a traditional staffing and recruiting firm. Insaan Global takes the time to understand how your business operates and uses that insight to guide workforce decisions aligned with your operational goals.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={240}>
                <p className="text-gray-700 text-[16px] md:text-lg leading-relaxed mb-8">
                  Each company under Insaan Global is purpose-built to identify, attract, and deploy exceptional talent. By focusing on how your organization functions day to day, we help ensure every hire supports performance, efficiency, and long-term growth.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <div className="border-l-[3px] border-[#59CBE8] pl-6">
                  <p className="text-insaan-black text-lg md:text-xl font-semibold leading-snug tracking-tight">
                    "We don't just fill roles. We learn your operation, understand your standards, and deliver people who meet them."
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TIMELINE / JOURNEY ═══════ */}
      <section className="w-full bg-insaan-black text-white py-28 md:py-40">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
              Our Journey
            </span>
            <h2 className="text-[32px] md:text-5xl lg:text-[3.8rem] font-bold leading-[1] tracking-tightest mb-16 md:mb-24 max-w-3xl">
              From a single idea to a{' '}
              <span className="text-[#59CBE8]">global workforce platform.</span>
            </h2>
          </RevealOnScroll>

          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 120}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 ${
                  i < TIMELINE.length - 1 ? 'border-b border-white/[0.08]' : ''
                }`}>
                  <div className="md:col-span-3">
                    <span className="text-[#59CBE8]/60 text-sm font-mono tracking-widest uppercase">
                      {item.year}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-white/40 text-base md:text-lg leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ VALUES ═══════ */}
      <section className="w-full py-28 md:py-40">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-insaan-black/40 mb-5">
              What Drives Us
            </span>
          </RevealOnScroll>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
            <RevealOnScroll delay={80}>
              <h2 className="text-[32px] md:text-5xl lg:text-[3.8rem] font-bold text-insaan-black leading-[1] tracking-tightest max-w-3xl">
                Principles that shape{' '}
                <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                  every decision.
                </span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {VALUES.map((value, i) => (
              <RevealOnScroll key={i} delay={160 + i * 100}>
                <div className="group relative rounded-3xl border border-insaan-black/[0.06] bg-white p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-insaan-black/[0.04] hover:-translate-y-1 h-full">
                  <span className="block text-[#4B727C]/50 text-[15px] font-semibold tracking-widest mb-5 transition-colors duration-300 group-hover:text-[#4B727C]/80">
                    {value.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-insaan-black tracking-tight mb-4">
                    {value.title}
                  </h3>
                  <p className="text-insaan-black/55 text-[15px] md:text-base leading-relaxed">
                    {value.text}
                  </p>
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#59CBE8]/0 via-[#59CBE8]/30 to-[#2CD5C4]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BRANDS OVERVIEW ═══════ */}
      <section className="w-full bg-insaan-black text-white py-28 md:py-40">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
              Our Brands
            </span>
            <h2 className="text-[32px] md:text-5xl lg:text-[3.8rem] font-bold leading-[1] tracking-tightest mb-16 md:mb-20 max-w-4xl">
              Two companies. One standard:{' '}
              <span className="text-[#59CBE8]">excellence.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealOnScroll delay={120}>
              <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.07] hover:border-[#59CBE8]/30 h-full">
                <span className="block text-[#59CBE8] text-sm font-semibold tracking-widest uppercase mb-4">
                  Industrial Staffing
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">CORETech</h3>
                <p className="text-white/40 text-base md:text-lg leading-relaxed mb-8">
                  Staffing solutions for construction, engineering, aerospace, maintenance, and other critical industries — supporting safe, consistent operations and the skilled teams that keep projects on track.
                </p>
                <Link
                  to="/companies"
                  className="inline-flex items-center gap-2 text-[#59CBE8] font-semibold text-sm group/link"
                >
                  <span className="border-b border-[#59CBE8]/30 group-hover/link:border-[#59CBE8] transition-colors pb-0.5">
                    Learn More
                  </span>
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={240}>
              <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.07] hover:border-[#2CD5C4]/30 h-full">
                <span className="block text-[#2CD5C4] text-sm font-semibold tracking-widest uppercase mb-4">
                  Healthcare Staffing
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Bettermint Healthcare</h3>
                <p className="text-white/40 text-base md:text-lg leading-relaxed mb-8">
                  Providing workforce support and opportunities for travel nurses and allied health professionals across diverse healthcare environments. Fast response, compliant placements, personal support.
                </p>
                <Link
                  to="/companies"
                  className="inline-flex items-center gap-2 text-[#2CD5C4] font-semibold text-sm group/link"
                >
                  <span className="border-b border-[#2CD5C4]/30 group-hover/link:border-[#2CD5C4] transition-colors pb-0.5">
                    Learn More
                  </span>
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="w-full py-24 md:py-36">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left — Header */}
            <div className="lg:col-span-5">
              <RevealOnScroll>
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-insaan-black/40 mb-5">
                  FAQ
                </span>
                <h2 className="text-[32px] md:text-5xl font-bold text-insaan-black leading-[1] tracking-tightest mb-6">
                  Common{' '}
                  <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                    questions.
                  </span>
                </h2>
                <p className="text-insaan-black/50 text-base md:text-lg leading-relaxed">
                  Everything you need to know about Insaan Global and how we work.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right — Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {ABOUT_FAQ.map((item, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      openFaq === i
                        ? 'border-insaan-black/15 bg-white shadow-lg shadow-insaan-black/[0.04]'
                        : 'border-insaan-black/[0.06] bg-white hover:border-insaan-black/10'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-panel-about-${i}`}
                      id={`faq-btn-about-${i}`}
                      className="w-full p-6 md:p-7 flex items-center justify-between text-left"
                    >
                      <h4 className="text-base md:text-lg font-bold text-insaan-black tracking-tight pr-4">
                        {item.q}
                      </h4>
                      <span
                        aria-hidden="true"
                        className={`text-[#59CBE8] transition-transform duration-300 shrink-0 ${
                          openFaq === i ? 'rotate-180' : ''
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`faq-panel-about-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-about-${i}`}
                      className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                      style={{ gridTemplateRows: openFaq === i ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden min-h-0">
                        <p className="text-insaan-black/55 text-[15px] md:text-base leading-relaxed px-6 md:px-7 pb-6 md:pb-7">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="w-full px-4 md:px-8 py-24 md:py-36">
        <RevealOnScroll>
          <div className="relative max-w-[1100px] mx-auto rounded-3xl overflow-hidden bg-white border border-insaan-black/10 shadow-xl shadow-insaan-black/5">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#59CBE8]/25 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#2CD5C4]/20 blur-3xl" />
            </div>
            <div className="relative px-6 md:px-20 py-14 md:py-20 flex flex-col items-center text-center">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-gray-700 border border-gray-300 bg-gray-100/90 mb-6">
                Work With Us
              </span>
              <h2 className="text-[34px] md:text-5xl lg:text-[4rem] font-bold text-insaan-black leading-[1] tracking-tightest mb-4">
                Ready to build a{' '}
                <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">stronger team?</span>
              </h2>
              <p className="text-gray-600 text-[14px] md:text-lg leading-relaxed max-w-[600px] mb-10">
                Whether you need skilled workers tomorrow or a long-term workforce strategy, we're ready to talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-insaan-black text-white rounded-2xl font-bold text-[15px] hover:bg-[#59CBE8] hover:text-insaan-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get in Touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 border border-insaan-black/15 text-insaan-black text-[15px] font-bold rounded-2xl hover:border-insaan-black/30 hover:bg-insaan-black/5 transition-all duration-300"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <H2Footer onContactClick={onContactClick} />
    </>
  );
};
