import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../components/home2/RevealOnScroll';
import { SEOHead } from '../components/shared/SEOHead';
import { H2Footer } from '../components/home2/H2Footer';
import coretechLogo from '../assets/coretech-logo.png';
import bettermintLogo from '../assets/bettermint-logo.png';

interface CompaniesPageProps {
  onContactClick: () => void;
}

/* ──────────────────────────── DATA ──────────────────────────── */

const CORETECH_SECTORS = [
  'Construction',
  'Automotive',
  'Aviation & Airport Ops',
  'Facilities & Maintenance',
  'Engineering',
  'Industrial & Manufacturing',
  'Skilled Trades',
  'Transportation & Warehousing',
  'Office & Administrative',
  'Sales',
  'Entry-level IT',
  'Human Resources',
];

const BETTERMINT_SERVICES = [
  'Travel Nursing',
  'Allied Health',
  'Per Diem Staffing',
  'Crisis Response',
  'Permanent Placement',
  'Compliance Management',
];

const CORETECH_DIFFERENTIATORS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '48-Hour Placement',
    text: 'Qualified candidates presented within 48 hours. Same-day placements available for urgent operational needs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Safety-First Screening',
    text: 'Every worker verified for OSHA, EPA, AWS, and ASE certifications. Background checks standard. No exceptions.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    text: 'Clear rates upfront. Weekly paychecks for workers. No hidden fees. You know exactly what the engagement costs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Worker-First Values',
    text: 'Benefits from Day 1. Career support and training. Respect for skilled labor. Workers are professionals, not line items.',
  },
];

const BETTERMINT_DIFFERENTIATORS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Rapid Response',
    text: 'Fast placements when you need them most — crisis staffing, seasonal surges, and immediate vacancy fills for healthcare facilities.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Full Compliance',
    text: 'Licensing verification, credential management, and regulatory compliance handled end-to-end so facilities stay audit-ready.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Personal Support',
    text: 'Dedicated recruiters who understand healthcare. 24/7 support for traveling professionals. We know this work is personal.',
  },
];

const COMPANIES_FAQ = [
  {
    q: 'What\'s the difference between CORETech and Bettermint?',
    a: 'CORETech focuses on industrial staffing across 12 sectors — construction, manufacturing, skilled trades, automotive, and more. Bettermint Healthcare specializes in travel nursing and allied health professional placement. Each brand has dedicated recruiters who understand the specific demands of their industry.',
  },
  {
    q: 'What certifications does CORETech verify?',
    a: 'Every CORETech candidate is screened for relevant certifications including OSHA safety, EPA environmental compliance, AWS welding, ASE automotive, and other industry-specific credentials. Background checks are standard on every placement.',
  },
  {
    q: 'Does Bettermint handle licensing and compliance?',
    a: 'Yes. Bettermint manages end-to-end compliance including nursing license verification, credential management, background checks, and regulatory documentation — ensuring healthcare facilities stay audit-ready at all times.',
  },
  {
    q: 'Can I work with both brands at the same time?',
    a: 'Absolutely. Many organizations have both industrial and healthcare staffing needs. Working with Insaan Global gives you access to both CORETech and Bettermint through a single point of contact, with consistent service quality across all placements.',
  },
  {
    q: 'What types of positions does CORETech fill?',
    a: 'CORETech fills temporary (1-12 weeks), temp-to-hire, permanent, and contract (3-12 months) positions across all 12 industrial sectors — from general laborers and machine operators to skilled tradespeople, technicians, and supervisors.',
  },
];

/* ──────────────────────────── COMPONENT ──────────────────────────── */

export const CompaniesPage: React.FC<CompaniesPageProps> = ({ onContactClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Our Companies — CORETech & Bettermint Healthcare | Insaan Global"
        description="Insaan Global operates two specialized workforce brands: CORETech for industrial staffing across 12 sectors, and Bettermint Healthcare for travel nursing and allied health professionals."
        path="/companies"
        keywords="CORETech staffing, Bettermint Healthcare, industrial staffing, healthcare staffing, travel nursing, workforce brands, Insaan Global companies"
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative w-full pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 left-[20%] w-[500px] h-[500px] rounded-full bg-[#59CBE8]/[0.05] blur-[120px]" />
          <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full bg-[#2CD5C4]/[0.04] blur-[120px]" />
        </div>

        <div className="relative max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-insaan-black/10 bg-white/70 backdrop-blur-sm text-xs font-semibold tracking-[0.15em] uppercase text-insaan-black/60 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2CD5C4]" />
              Our Companies
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <h1 className="text-[36px] md:text-6xl lg:text-[4.8rem] font-bold leading-[37px] md:leading-[1] tracking-tightest mb-8 max-w-5xl">
              Specialized brands,
              <br />
              <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                one standard.
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <p className="max-w-2xl text-insaan-black/60 text-[15px] md:text-[17px] leading-relaxed font-medium">
              Each company under Insaan Global is purpose-built for its industry. Focused expertise means deeper talent pools, faster placements, and people who understand the work from day one.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={220}>
            <div className="mt-10">
              <a
                href="/company-presentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 md:px-8 md:py-4 border border-insaan-black/15 text-insaan-black text-[13.5px] md:text-[15px] font-bold rounded-xl md:rounded-2xl hover:border-insaan-black/30 hover:bg-insaan-black/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Company Presentation
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ CORETECH SECTION ═══════ */}
      <section className="w-full bg-insaan-black text-white py-28 md:py-40">
        <div className="max-w-content mx-auto px-4 md:px-8">
          {/* Logo + Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20 md:mb-28">
            <div>
              <RevealOnScroll>
                <div className="bg-white rounded-2xl p-8 md:p-10 inline-block mb-8">
                  <img
                    src={coretechLogo}
                    alt="CORETech logo"
                    className="h-12 md:h-16 object-contain"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={80}>
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#59CBE8]/60 mb-4">
                  Industrial Staffing
                </span>
                <h2 className="text-[32px] md:text-5xl font-bold leading-[1.05] tracking-tightest mb-6">
                  Skilled workers.{' '}
                  <span className="text-[#59CBE8]">Real operations.</span>
                </h2>
              </RevealOnScroll>

              <RevealOnScroll delay={160}>
                <p className="text-white/50 text-base md:text-lg leading-relaxed mb-6">
                  CORETech connects employers — construction sites, manufacturing plants, warehouses, automotive facilities — with skilled workers for temporary, contract, and permanent positions across 12 industrial sectors.
                </p>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">
                  We don't send warm bodies. We learn how your facility operates, understand your production requirements, and match workers to your operational needs. Every candidate is screened for safety compliance and verified for industry certifications.
                </p>
              </RevealOnScroll>
            </div>

            {/* Differentiators */}
            <div className="space-y-4">
              {CORETECH_DIFFERENTIATORS.map((diff, i) => (
                <RevealOnScroll key={i} delay={200 + i * 80}>
                  <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-7 transition-all duration-300 hover:bg-white/[0.07] hover:border-[#59CBE8]/20">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#59CBE8]/10 flex items-center justify-center text-[#59CBE8] shrink-0 mt-0.5">
                        {diff.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold tracking-tight mb-2">{diff.title}</h4>
                        <p className="text-white/40 text-[15px] leading-relaxed">{diff.text}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* 12 Sectors Grid */}
          <RevealOnScroll>
            <span className="inline-block text-[13px] font-semibold tracking-[0.2em] uppercase text-white mb-8">
              12 Industrial Sectors
            </span>
          </RevealOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {CORETECH_SECTORS.map((sector, i) => (
              <RevealOnScroll key={i} delay={80 + i * 40}>
                <div className="h-full min-h-[88px] rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-5 md:py-6 flex items-center justify-center text-center transition-all duration-300 hover:bg-white/[0.07] hover:border-[#59CBE8]/20 group">
                  <span className="text-sm md:text-[15px] font-semibold text-white/70 group-hover:text-white transition-colors">
                    {sector}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BETTERMINT SECTION ═══════ */}
      <section className="w-full py-24 md:py-36">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-16 md:mb-20">
            <div>
              <RevealOnScroll>
                <div className="bg-white rounded-2xl p-8 md:p-10 inline-block mb-8 border border-insaan-black/[0.06]">
                  <img
                    src={bettermintLogo}
                    alt="Bettermint Healthcare logo"
                    className="h-12 md:h-16 object-contain"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={80}>
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-insaan-black/40 mb-4">
                  Healthcare Staffing
                </span>
                <h2 className="text-[32px] md:text-5xl font-bold text-insaan-black leading-[1.05] tracking-tightest mb-6">
                  Healthcare professionals.{' '}
                  <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                    Placed with care.
                  </span>
                </h2>
              </RevealOnScroll>

              <RevealOnScroll delay={160}>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  Bettermint Healthcare provides workforce support and opportunities for travel nurses and allied health professionals across diverse healthcare environments.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  From crisis response to permanent placement, Bettermint connects healthcare facilities with credentialed professionals who deliver quality patient care — with full compliance management handled end-to-end.
                </p>
              </RevealOnScroll>
            </div>

            {/* Differentiators */}
            <div className="space-y-4">
              {BETTERMINT_DIFFERENTIATORS.map((diff, i) => (
                <RevealOnScroll key={i} delay={200 + i * 80}>
                  <div className="group rounded-2xl border border-insaan-black/[0.06] bg-white p-6 md:p-7 transition-all duration-500 hover:shadow-lg hover:shadow-insaan-black/[0.04] hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#2CD5C4]/10 flex items-center justify-center text-[#2CD5C4] shrink-0 mt-0.5">
                        {diff.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-insaan-black tracking-tight mb-2">{diff.title}</h4>
                        <p className="text-insaan-black/50 text-[15px] leading-relaxed">{diff.text}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Service Tags */}
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-insaan-black/40 mb-6">
              Service Areas
            </span>
          </RevealOnScroll>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {BETTERMINT_SERVICES.map((service, i) => (
              <span
                key={i}
                className="px-5 py-3 rounded-full border border-insaan-black/10 bg-white text-insaan-black text-sm md:text-[15px] font-semibold transition-all duration-300 hover:border-[#2CD5C4]/40 hover:shadow-md hover:-translate-y-0.5"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ THE INSAAN GLOBAL DIFFERENCE ═══════ */}
      <section className="w-full bg-insaan-black text-white py-28 md:py-40">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
              The Difference
            </span>
            <h2 className="text-[32px] md:text-5xl lg:text-[3.8rem] font-bold leading-[1] tracking-tightest mb-8 max-w-4xl">
              Why companies choose{' '}
              <span className="text-[#59CBE8]">Insaan Global brands.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <p className="max-w-3xl text-white/40 text-base md:text-lg leading-relaxed mb-16">
              Both CORETech and Bettermint Healthcare share the same operating principles — operational understanding, transparent communication, and a commitment to placing professionals who perform. The industry expertise is specialized. The standard is universal.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Industry-Specific Expertise',
                text: 'Each brand is built for its sector. Our recruiters understand the certifications, the work environments, and the day-to-day demands of the industries they serve.',
              },
              {
                num: '02',
                title: 'Operational Alignment',
                text: 'We don\'t just match resumes to job descriptions. We learn how your operation runs and place people who fit your workflows, your standards, and your culture.',
              },
              {
                num: '03',
                title: 'Post-Placement Accountability',
                text: 'The relationship doesn\'t end at placement. Regular check-ins, performance monitoring, and responsive support ensure every placement delivers lasting value.',
              },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={160 + i * 100}>
                <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-1 h-full">
                  <span className="block text-[#59CBE8]/40 text-sm md:text-[15px] font-mono font-medium tracking-widest mb-6 group-hover:text-[#59CBE8]/70 transition-colors">
                    {item.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">{item.title}</h3>
                  <p className="text-white/40 text-[15px] md:text-base leading-relaxed group-hover:text-white/55 transition-colors">
                    {item.text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
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
                  Learn more about our specialized workforce brands and how they serve your industry.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right — Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {COMPANIES_FAQ.map((item, i) => (
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
                      aria-controls={`faq-panel-companies-${i}`}
                      id={`faq-btn-companies-${i}`}
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
                      id={`faq-panel-companies-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-companies-${i}`}
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
                Partner With Us
              </span>
              <h2 className="text-[34px] md:text-5xl lg:text-[4rem] font-bold text-insaan-black leading-[1] tracking-tightest mb-4">
                Find the talent{' '}
                <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">your operation needs.</span>
              </h2>
              <p className="text-gray-600 text-[14px] md:text-lg leading-relaxed max-w-[600px] mb-10">
                Whether it's industrial staffing through CORETech or healthcare professionals through Bettermint, we deliver talent that performs.
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
                  Explore Solutions
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
