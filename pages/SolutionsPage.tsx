import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../components/home2/RevealOnScroll';
import { SEOHead } from '../components/shared/SEOHead';
import { H2Footer } from '../components/home2/H2Footer';

interface SolutionsPageProps {
  onContactClick: () => void;
}

/* ──────────────────────────── DATA ──────────────────────────── */

const SERVICE_TYPES = [
  {
    num: '01',
    title: 'Temporary Staffing',
    subtitle: '1–12 Week Assignments',
    description: 'Scale your workforce quickly with reliable, pre-vetted workers for seasonal demand, project-based work, or filling critical gaps that can\'t wait. Our temporary talent is ready to contribute from day one.',
    features: ['Seasonal demand coverage', 'Project-based scaling', 'Critical gap filling', 'Fast deployment — often 48 hours'],
    accent: '#59CBE8',
  },
  {
    num: '02',
    title: 'Temp-to-Hire',
    subtitle: 'Evaluate Before Committing',
    description: 'Test-drive workers before making a permanent commitment. Evaluate performance, attitude, and cultural fit during the trial period, then transition top performers to permanent roles with confidence.',
    features: ['Risk-free evaluation period', 'Performance-based transitions', 'Reduced mis-hire costs', 'Seamless onboarding to permanent'],
    accent: '#2CD5C4',
  },
  {
    num: '03',
    title: 'Permanent Placement',
    subtitle: 'Full-Time Hires',
    description: 'Build your core team with full-time hires who bring specialized skills, reliability, and long-term commitment. We source, screen, and present candidates who align with your operational needs and culture.',
    features: ['Deep candidate screening', 'Skills & culture alignment', 'Industry-specific sourcing', 'Post-placement follow-up'],
    accent: '#59CBE8',
  },
  {
    num: '04',
    title: 'Contract Workers',
    subtitle: '3–12 Month Projects',
    description: 'Deploy skilled tradespeople and professionals for defined project timelines. Ideal for construction phases, facility expansions, maintenance shutdowns, and long-duration operational support.',
    features: ['Defined project timelines', 'Skilled trades deployment', 'Facility expansion support', 'Maintenance & shutdown coverage'],
    accent: '#2CD5C4',
  },
];

const ENTERPRISE_SOLUTIONS = [
  {
    title: 'RPO',
    full: 'Recruitment Process Outsourcing',
    text: 'Outsource all or part of your recruitment function. We embed within your operation to manage sourcing, screening, and hiring at scale — delivering consistent quality across high-volume needs.',
  },
  {
    title: 'MSP',
    full: 'Managed Service Provider',
    text: 'Centralized management of your contingent workforce program. Vendor consolidation, spend visibility, compliance oversight, and performance reporting — all under one accountability layer.',
  },
  {
    title: 'VMS',
    full: 'Vendor Management System',
    text: 'Technology-enabled workforce procurement. Automated requisition workflows, rate management, time tracking, and analytics that give you real-time visibility into your extended workforce.',
  },
];

const INDUSTRIES = [
  { name: 'Construction', roles: 'Carpenters, electricians, plumbers, equipment operators, general laborers', image: '/assets/stock-images-compressed/2026-02-27-19-28-00-construction-worker-usa.webp' },
  { name: 'Automotive', roles: 'Mechanics, assembly workers, quality inspectors, parts specialists', image: '/assets/stock-images-compressed/2026-02-27-19-29-00-automotive-garage.webp' },
  { name: 'Aviation & Airport Ops', roles: 'Ramp agents, baggage handlers, ground support', image: '/assets/stock-images-compressed/2026-02-27-19-30-00-aviation-airport.webp' },
  { name: 'Facilities & Maintenance', roles: 'HVAC techs, maintenance mechanics, building engineers', image: '/assets/stock-images-compressed/2026-02-27-19-31-00-engineering.webp' },
  { name: 'Engineering', roles: 'CAD technicians, junior engineers, drafters', image: '/assets/stock-images-compressed/2026-02-27-19-31-00-engineering.webp' },
  { name: 'Human Resources', roles: 'HR coordinators, recruiters, benefits administrators', image: '/assets/stock-images-compressed/2026-02-27-19-32-00-human-resources.webp' },
  { name: 'Industrial & Manufacturing', roles: 'Production workers, machine operators, QC inspectors', image: '/assets/stock-images-compressed/2026-02-27-19-33-00-industrial-it-support.webp' },
  { name: 'IT Support', roles: 'Help desk, IT support, network technicians', image: '/assets/stock-images-compressed/2026-02-27-19-33-00-industrial-it-support.webp' },
  { name: 'Office & Admin', roles: 'Data entry, office coordinators, admin assistants', image: '/assets/stock-images-compressed/2026-02-27-19-34-00-office-admin.webp' },
  { name: 'Sales', roles: 'Inside sales, account managers, sales coordinators', image: '/assets/stock-images-compressed/2026-02-27-19-35-00-sales.webp' },
  { name: 'Skilled Trades', roles: 'Welders, millwrights, pipefitters, HVAC specialists', image: '/assets/stock-images-compressed/2026-02-27-19-36-00-skilled-trades.webp' },
  { name: 'Transportation & Warehousing', roles: 'CDL drivers, forklift operators, warehouse associates', image: '/assets/stock-images-compressed/2026-02-27-19-37-00-transport-warehousing.webp' },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Understand Your Operation',
    text: 'We start by learning how your facility runs — production schedules, team dynamics, safety protocols, and the specific demands of each role.',
  },
  {
    num: '02',
    title: 'Source & Screen',
    text: 'Targeted recruitment from our verified talent network. Every candidate is screened for skills, certifications, safety compliance, and work history.',
  },
  {
    num: '03',
    title: 'Present Qualified Candidates',
    text: 'Within 48 hours, you receive vetted candidates matched to your operational requirements — not just job descriptions, but actual workflow needs.',
  },
  {
    num: '04',
    title: 'Place & Support',
    text: 'Workers arrive ready. We handle onboarding logistics, manage compliance documentation, and provide ongoing support with regular check-ins.',
  },
];

const SOLUTIONS_FAQ = [
  {
    q: 'Which staffing model is right for my business?',
    a: 'It depends on your needs. Temporary staffing works best for seasonal demand or short-term projects. Temp-to-hire lets you evaluate before committing. Permanent placement builds your core team. Contract arrangements suit defined project timelines. Our team can recommend the right mix based on your operation.',
  },
  {
    q: 'How fast can you fill a position?',
    a: 'For most industrial and healthcare positions, we present qualified candidates within 48 hours. Same-day placements are available for urgent needs. Enterprise programs with ongoing requirements benefit from pre-vetted talent pools for even faster deployment.',
  },
  {
    q: 'What does the screening process include?',
    a: 'Every candidate undergoes skills assessment, certification verification (OSHA, EPA, AWS, ASE, nursing licenses, etc.), background checks, and work history validation. We also evaluate cultural fit and reliability based on your operational requirements.',
  },
  {
    q: 'Do you offer enterprise workforce management programs?',
    a: 'Yes. For organizations managing large contingent workforces, we offer RPO (Recruitment Process Outsourcing), MSP (Managed Service Provider), and VMS (Vendor Management System) solutions that centralize procurement, standardize quality, and provide real-time workforce analytics.',
  },
  {
    q: 'What happens after a worker is placed?',
    a: 'The relationship doesn\'t end at placement. We manage onboarding logistics, handle compliance documentation, and provide ongoing support with regular check-ins. Performance monitoring and responsive issue resolution ensure every placement delivers lasting value.',
  },
];

/* ──────────────────────────── COMPONENT ──────────────────────────── */

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onContactClick }) => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Solutions — Workforce Staffing Services | Insaan Global"
        description="Temporary staffing, temp-to-hire, permanent placement, and contract workers across 12 industrial sectors. RPO, MSP, and VMS solutions for enterprise workforce management."
        path="/solutions"
        keywords="temporary staffing, temp to hire, permanent placement, contract workers, RPO, MSP, VMS, workforce solutions, industrial staffing, construction staffing, manufacturing staffing"
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative w-full pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-[5%] w-[500px] h-[500px] rounded-full bg-[#59CBE8]/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-[15%] w-[400px] h-[400px] rounded-full bg-[#2CD5C4]/[0.04] blur-[120px]" />
        </div>

        <div className="relative max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-insaan-black/10 bg-white/70 backdrop-blur-sm text-xs font-semibold tracking-[0.15em] uppercase text-insaan-black/60 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2CD5C4]" />
              Workforce Solutions
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <h1 className="text-[36px] md:text-6xl lg:text-[4.8rem] font-bold leading-[37px] md:leading-[1] tracking-tightest mb-8 max-w-5xl">
              The right solution for{' '}
              <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                every workforce need.
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <p className="max-w-2xl text-insaan-black/60 text-[15px] md:text-[17px] leading-relaxed font-medium">
              From a single temporary placement to enterprise-wide workforce management, Insaan Global delivers structured staffing solutions that keep your operations running at full capacity.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/company-presentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 md:px-10 md:py-4 bg-insaan-black text-white text-[13.5px] md:text-[15px] font-bold rounded-xl md:rounded-2xl hover:bg-[#59CBE8] hover:text-insaan-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                View Presentation
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ SERVICE TYPES ═══════ */}
      <section className="w-full bg-insaan-black text-white py-28 md:py-40">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
              Staffing Models
            </span>
            <h2 className="text-[32px] md:text-5xl lg:text-[3.8rem] font-bold leading-[1] tracking-tightest mb-16 md:mb-24 max-w-4xl">
              Flexible engagement.{' '}
              <span className="text-[#59CBE8]">Consistent quality.</span>
            </h2>
          </RevealOnScroll>

          <div className="space-y-6">
            {SERVICE_TYPES.map((service, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-12 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/15">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left — Info */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-[15px] font-mono tracking-widest" style={{ color: `${service.accent}60` }}>
                          {service.num}
                        </span>
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full border" style={{ borderColor: `${service.accent}30`, color: `${service.accent}` }}>
                          {service.subtitle}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-5">
                        {service.title}
                      </h3>
                      <p className="text-white/40 text-base md:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Right — Features */}
                    <div className="lg:col-span-5">
                      <div className="space-y-3">
                        {service.features.map((feature, fi) => (
                          <div key={fi} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${service.accent}15` }}>
                              <svg className="w-3 h-3" style={{ color: service.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-white/60 text-[15px] font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ENTERPRISE SOLUTIONS ═══════ */}
      <section className="w-full py-24 md:py-36">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-insaan-black/40 mb-5">
              Enterprise
            </span>
            <h2 className="text-[32px] md:text-5xl lg:text-[3.8rem] font-bold text-insaan-black leading-[1] tracking-tightest mb-6 max-w-4xl">
              Large-scale workforce{' '}
              <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                programs.
              </span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <p className="max-w-2xl text-insaan-black/55 text-base md:text-lg leading-relaxed mb-16 md:mb-20">
              For organizations managing large contingent workforces, Insaan Global provides structured program solutions that centralize procurement, standardize quality, and deliver measurable cost efficiency.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENTERPRISE_SOLUTIONS.map((solution, i) => (
              <RevealOnScroll key={i} delay={160 + i * 100}>
                <div className="group relative rounded-3xl border border-insaan-black/[0.06] bg-white p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-insaan-black/[0.04] hover:-translate-y-1 h-full">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />
                  <h3 className="text-3xl md:text-4xl font-bold text-insaan-black tracking-tightest mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-[#59CBE8] text-sm font-semibold tracking-wide mb-5">
                    {solution.full}
                  </p>
                  <p className="text-insaan-black/55 text-[15px] md:text-base leading-relaxed">
                    {solution.text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ INDUSTRIES GRID ═══════ */}
      <section className="w-full bg-insaan-black text-white py-28 md:py-40">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
            <RevealOnScroll>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
                Industries
              </span>
              <h2 className="text-[32px] md:text-5xl lg:text-[3.8rem] font-bold leading-[1] tracking-tightest max-w-4xl">
                12 sectors.{' '}
                <span className="text-[#59CBE8]">Thousands of placements.</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <p className="max-w-md text-white/40 text-base md:text-lg leading-relaxed lg:text-right">
                Click any industry to see the types of roles we fill. Every sector has dedicated recruiters who understand the work.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
            {/* Industry list */}
            <div className="md:col-span-5 lg:col-span-4 space-y-2">
              {INDUSTRIES.map((industry, i) => (
                <RevealOnScroll key={i} delay={i * 40}>
                  <button
                    onClick={() => setActiveIndustry(i)}
                    aria-pressed={activeIndustry === i}
                    className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                      activeIndustry === i
                        ? 'bg-white/10 border border-[#59CBE8]/40'
                        : 'border border-transparent hover:bg-white/[0.05]'
                    }`}
                  >
                    <span className={`text-base md:text-lg font-semibold tracking-tight transition-colors ${
                      activeIndustry === i ? 'text-white' : 'text-white/50'
                    }`}>
                      {industry.name}
                    </span>
                  </button>
                </RevealOnScroll>
              ))}
            </div>

            {/* Detail panel */}
            <div className="md:col-span-7 lg:col-span-8" aria-live="polite">
              <RevealOnScroll delay={200}>
                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-12 h-full flex flex-col justify-center min-h-[300px]">
                  <span className="text-[#59CBE8]/50 text-sm font-mono tracking-widest mb-4">
                    {String(activeIndustry + 1).padStart(2, '0')} / 12
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    {INDUSTRIES[activeIndustry].name}
                  </h3>
                  <p className="text-white/30 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                    Roles We Fill
                  </p>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
                    {INDUSTRIES[activeIndustry].roles}
                  </p>
                  {/* Industry image */}
                  <img 
                    src={INDUSTRIES[activeIndustry].image} 
                    alt={INDUSTRIES[activeIndustry].name}
                    className="w-full h-48 md:h-[450px] object-cover rounded-2xl mt-4 mb-6"
                  />
                  <button
                    onClick={onContactClick}
                    className="inline-flex items-center gap-2 text-[#59CBE8] font-semibold text-sm group/link self-start"
                  >
                    <span className="border-b border-[#59CBE8]/30 group-hover/link:border-[#59CBE8] transition-colors pb-0.5">
                      Hire for {INDUSTRIES[activeIndustry].name}
                    </span>
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROCESS ═══════ */}
      <section className="w-full py-28 md:py-40">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-insaan-black/40 mb-5">
              How It Works
            </span>
            <h2 className="text-[32px] md:text-5xl lg:text-[3.8rem] font-bold text-insaan-black leading-[1] tracking-tightest mb-16 md:mb-24 max-w-3xl">
              From first call to{' '}
              <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                first day.
              </span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 120}>
                <div className="relative h-full">
                  {/* Connector line (desktop) */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(100%+4px)] w-[calc(100%-8px)] h-[1px] bg-gradient-to-r from-insaan-black/10 to-insaan-black/5 z-0" style={{ width: 'calc(24px)' }} />
                  )}
                  <div className="group rounded-3xl border border-insaan-black/[0.06] bg-white p-8 md:p-8 transition-all duration-500 hover:shadow-lg hover:shadow-insaan-black/[0.04] hover:-translate-y-1 h-full relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#59CBE8]/15 to-[#2CD5C4]/10 flex items-center justify-center mb-6">
                      <span className="text-[#59CBE8] font-bold text-lg">{step.num}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-insaan-black tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-insaan-black/50 text-[15px] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
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
                  Answers about our staffing models, process, and how we deliver results.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right — Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {SOLUTIONS_FAQ.map((item, i) => (
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
                      aria-controls={`faq-panel-solutions-${i}`}
                      id={`faq-btn-solutions-${i}`}
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
                      id={`faq-panel-solutions-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-solutions-${i}`}
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
      <section className="w-full px-4 md:px-8 py-10 md:py-20 pb-24 md:pb-36">
        <RevealOnScroll>
          <div className="relative max-w-[1100px] mx-auto rounded-3xl overflow-hidden bg-white border border-insaan-black/10 shadow-xl shadow-insaan-black/5">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#59CBE8]/25 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#2CD5C4]/20 blur-3xl" />
            </div>
            <div className="relative px-6 md:px-20 py-14 md:py-20 flex flex-col items-center text-center">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-gray-700 border border-gray-300 bg-gray-100/90 mb-6">
                Get Started
              </span>
              <h2 className="text-[34px] md:text-5xl lg:text-[4rem] font-bold text-insaan-black leading-[1] tracking-tightest mb-4">
                Need workers{' '}
                <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">this week?</span>
              </h2>
              <p className="text-gray-600 text-[14px] md:text-lg leading-relaxed max-w-[600px] mb-10">
                Tell us what you need. We'll have qualified candidates presented within 48 hours — screened, certified, and ready to work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-insaan-black text-white rounded-2xl font-bold text-[15px] hover:bg-[#59CBE8] hover:text-insaan-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Request Workers
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a
                  href="/company-presentation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-insaan-black/15 text-insaan-black text-[15px] font-bold rounded-2xl hover:border-insaan-black/30 hover:bg-insaan-black/5 transition-all duration-300"
                >
                  View Presentation
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <H2Footer onContactClick={onContactClick} />
    </>
  );
};
