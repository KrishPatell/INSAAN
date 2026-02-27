import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { RevealOnScroll } from '../components/home2/RevealOnScroll';
import { SEOHead } from '../components/shared/SEOHead';
import { SiteFooter } from '../components/shared/SiteFooter';

interface ContactPageProps {
  onContactClick: () => void;
}

/* ──────────────────────────── DATA ──────────────────────────── */

const NEXT_STEPS = [
  {
    num: '01',
    title: 'Submit Your Inquiry',
    text: 'Fill out the form with your details. Tell us whether you\'re hiring or looking for work — we\'ll route you to the right team.',
  },
  {
    num: '02',
    title: 'Initial Conversation',
    text: 'A member of our team will reach out within one business day to discuss your specific needs, timelines, and requirements.',
  },
  {
    num: '03',
    title: 'Tailored Approach',
    text: 'We build a staffing plan aligned with your operation — whether that\'s a single placement or an enterprise-wide program.',
  },
  {
    num: '04',
    title: 'Talent Delivered',
    text: 'Qualified, screened candidates presented to you. Ongoing support and check-ins ensure every placement performs.',
  },
];

const FAQ = [
  {
    q: 'How quickly can you provide workers?',
    a: 'For most industrial and healthcare positions, we can present qualified candidates within 48 hours. Same-day placements are available for urgent needs.',
  },
  {
    q: 'What industries do you serve?',
    a: 'Through CORETech, we staff 12 industrial sectors including construction, manufacturing, skilled trades, and transportation. Through Bettermint, we support healthcare facilities with travel nurses and allied health professionals.',
  },
  {
    q: 'Do you handle certifications and compliance?',
    a: 'Yes. Every candidate is screened for relevant certifications (OSHA, EPA, AWS, ASE, nursing licenses, etc.) and undergoes background checks before placement.',
  },
  {
    q: 'What types of staffing arrangements do you offer?',
    a: 'We offer temporary (1-12 weeks), temp-to-hire, permanent placement, and contract (3-12 months) arrangements. For larger operations, we provide RPO, MSP, and VMS solutions.',
  },
  {
    q: 'Is there a minimum number of workers I need to hire?',
    a: 'No minimum. We handle everything from a single placement to hundreds of workers for large-scale projects. The engagement scales to your needs.',
  },
];

/* ──────────────────────────── COMPONENT ──────────────────────────── */

export const ContactPage: React.FC<ContactPageProps> = ({ onContactClick }) => {
  const [state, handleSubmit] = useForm('xgolpvnb');
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', type: '', message: '' });
      }, 4000);
    }
  }, [state.succeeded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEOHead
        title="Contact Us — Insaan Global | Get in Touch for Workforce Solutions"
        description="Contact Insaan Global for workforce solutions across healthcare, engineering, construction, energy, and aerospace. Reach out for staffing needs, job opportunities, or partnership inquiries."
        path="/contact"
        keywords="contact Insaan Global, workforce solutions contact, staffing inquiry, hire workers, job seekers, CORETech contact, Bettermint Healthcare contact"
      />

      {/* ═══════ HERO + FORM ═══════ */}
      <section className="relative w-full pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 left-[30%] w-[500px] h-[500px] rounded-full bg-[#59CBE8]/[0.05] blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#2CD5C4]/[0.04] blur-[120px]" />
        </div>

        <div className="relative max-w-content mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Copy */}
            <div>
              <RevealOnScroll>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-insaan-black/10 bg-white/70 backdrop-blur-sm text-xs font-semibold tracking-[0.15em] uppercase text-insaan-black/60 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2CD5C4]" />
                  Contact Us
                </span>
              </RevealOnScroll>

              <RevealOnScroll delay={80}>
                <h1 className="text-[36px] md:text-5xl lg:text-[3.8rem] font-bold leading-[37px] md:leading-[1] tracking-tightest mb-8">
                  Let's talk about{' '}
                  <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                    what<br className="md:hidden" /> you need.
                  </span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={160}>
                <p className="text-insaan-black/60 text-[15px] md:text-lg leading-relaxed mb-10">
                  Whether you're an employer looking for skilled workers or a professional looking for your next opportunity — we're ready to help. Fill out the form and our team will be in touch within one business day.
                </p>
              </RevealOnScroll>

              {/* Contact details */}
              <div className="space-y-6">
                <RevealOnScroll delay={240}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-insaan-black/5 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-insaan-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-insaan-black/40 mb-1">Email</p>
                      <a href="mailto:Info@insaanglobal.com" className="text-insaan-black font-semibold hover:text-[#59CBE8] transition-colors">
                        Info@insaanglobal.com
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-insaan-black/5 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-insaan-black/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-insaan-black/40 mb-1">LinkedIn</p>
                      <a href="https://www.linkedin.com/company/insaanglobal/" target="_blank" rel="noopener noreferrer" className="text-insaan-black font-semibold hover:text-[#59CBE8] transition-colors">
                        @insaanglobal
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={360}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-insaan-black/5 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-insaan-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-insaan-black/40 mb-1">Service Area</p>
                      <p className="text-insaan-black font-semibold">United States &amp; International</p>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>

            {/* Right — Form */}
            <RevealOnScroll delay={120}>
              <div className="relative rounded-3xl bg-white border border-insaan-black/[0.06] shadow-xl shadow-insaan-black/[0.04] overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4]" />

                {isSubmitted ? (
                  <div className="p-10 md:p-14 flex flex-col items-center justify-center text-center min-h-[500px]">
                    <div className="w-16 h-16 bg-[#2CD5C4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-[#2CD5C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-insaan-black mb-3">Message Sent</h3>
                    <p className="text-insaan-black/50 text-base">Our team will be in touch within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-5">
                    <h3 className="text-xl md:text-2xl font-bold text-insaan-black mb-2">Send a Message</h3>
                    <p className="text-insaan-black/40 text-sm mb-6">All fields marked with * are required.</p>

                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-insaan-black/70 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-insaan-black/10 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/10 outline-none transition-all text-base bg-insaan-bg/50"
                        placeholder="John Doe"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-insaan-black/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-insaan-black/10 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/10 outline-none transition-all text-base bg-insaan-bg/50"
                        placeholder="john@company.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-semibold text-insaan-black/70 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-insaan-black/10 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/10 outline-none transition-all text-base bg-insaan-bg/50"
                        placeholder="+1 (555) 000-0000"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>

                    {/* Type */}
                    <div>
                      <label htmlFor="contact-type" className="block text-sm font-semibold text-insaan-black/70 mb-2">
                        I am an... *
                      </label>
                      <select
                        id="contact-type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-insaan-black/10 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/10 outline-none transition-all text-base bg-insaan-bg/50"
                      >
                        <option value="">Select an option</option>
                        <option value="employer">Employer looking to hire</option>
                        <option value="jobseeker">Professional looking for work</option>
                        <option value="partner">Partnership inquiry</option>
                      </select>
                      <ValidationError prefix="Type" field="type" errors={state.errors} />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold text-insaan-black/70 mb-2">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3.5 rounded-xl border border-insaan-black/10 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/10 outline-none transition-all text-base bg-insaan-bg/50 resize-none"
                        placeholder="Tell us about your staffing needs or the type of work you're looking for..."
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full py-4 bg-insaan-black text-white text-base font-bold rounded-xl hover:bg-[#59CBE8] hover:text-insaan-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT HAPPENS NEXT ═══════ */}
      <section className="w-full bg-insaan-black text-white py-28 md:py-40">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
              What Happens Next
            </span>
            <h2 className="text-[32px] md:text-5xl lg:text-[3.8rem] font-bold leading-[1] tracking-tightest mb-16 md:mb-24 max-w-3xl">
              From inquiry to{' '}
              <span className="text-[#59CBE8]">impact.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEXT_STEPS.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-1 h-full">
                  <span className="block text-[#59CBE8]/40 text-[15px] font-mono tracking-widest mb-6 group-hover:text-[#59CBE8]/70 transition-colors">
                    {step.num}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight mb-3">{step.title}</h3>
                  <p className="text-white/40 text-[15px] leading-relaxed group-hover:text-white/55 transition-colors">
                    {step.text}
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
                  If you don't see your question here, reach out directly — we're happy to talk through specifics.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right — Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {FAQ.map((item, i) => (
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
                      aria-controls={`faq-panel-contact-${i}`}
                      id={`faq-btn-contact-${i}`}
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
                      id={`faq-panel-contact-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-contact-${i}`}
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

      <SiteFooter onContactClick={onContactClick} />
    </>
  );
};
