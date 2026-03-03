/* ═══════════════════════════════════════════════════════════════
   INSAAN GLOBAL — Blog Data Layer
   All blog post content, types, and utilities
   ═══════════════════════════════════════════════════════════════ */

// ─── TYPES ──────────────────────────────────────────────────────

export type BlogCategory =
  | 'Workforce Insights'
  | 'Industry Trends'
  | 'Company News'
  | 'Healthcare Staffing'
  | 'Industrial Solutions';

interface ParagraphBlock { type: 'paragraph'; text: string }
interface HeadingBlock   { type: 'heading'; level: 2 | 3; text: string }
interface QuoteBlock     { type: 'quote'; text: string; attribution?: string }
interface ImageBlock     { type: 'image'; alt: string; caption?: string; gradient: string }
interface ListBlock      { type: 'list'; style: 'bullet' | 'numbered'; items: string[] }

export type ContentBlock = ParagraphBlock | HeadingBlock | QuoteBlock | ImageBlock | ListBlock;

export interface BlogAuthor {
  name: string;
  role: string;
  initials: string;
  avatarGradient: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: BlogAuthor;
  publishedDate: string;
  coverGradient: string;
  coverImage?: string;
  content: ContentBlock[];
  tags: string[];
  featured?: boolean;
}

// ─── CONSTANTS ──────────────────────────────────────────────────

export const BLOG_CATEGORIES: BlogCategory[] = [
  'Workforce Insights',
  'Industry Trends',
  'Company News',
  'Healthcare Staffing',
  'Industrial Solutions',
];

export const CATEGORY_COLORS: Record<BlogCategory, { bg: string; text: string; border: string }> = {
  'Workforce Insights':  { bg: 'bg-[#59CBE8]/10', text: 'text-[#59CBE8]',    border: 'border-[#59CBE8]/20' },
  'Industry Trends':     { bg: 'bg-[#2CD5C4]/10', text: 'text-[#2CD5C4]',    border: 'border-[#2CD5C4]/20' },
  'Company News':        { bg: 'bg-amber-500/10',  text: 'text-amber-600',    border: 'border-amber-500/20' },
  'Healthcare Staffing': { bg: 'bg-purple-500/10', text: 'text-purple-500',   border: 'border-purple-500/20' },
  'Industrial Solutions':{ bg: 'bg-emerald-500/10',text: 'text-emerald-500',  border: 'border-emerald-500/20' },
};

// ─── UTILITIES ──────────────────────────────────────────────────

export function calculateReadTime(content: ContentBlock[]): number {
  let words = 0;
  for (const b of content) {
    if (b.type === 'paragraph' || b.type === 'heading') words += b.text.split(/\s+/).length;
    if (b.type === 'quote') { words += b.text.split(/\s+/).length; if (b.attribution) words += b.attribution.split(/\s+/).length; }
    if (b.type === 'list') for (const item of b.items) words += item.split(/\s+/).length;
  }
  return Math.max(1, Math.ceil(words / 230));
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// ─── AUTHORS ────────────────────────────────────────────────────

const SARAH: BlogAuthor = { name: 'Ari Hassan', role: 'VP of Operations', initials: 'SK', avatarGradient: 'from-[#59CBE8] to-[#2CD5C4]' };
const MARCUS: BlogAuthor = { name: 'Ari Hassan', role: 'VP of Operations', initials: 'MC', avatarGradient: 'from-[#2CD5C4] to-[#59CBE8]' };

// ─── BLOG POSTS ─────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  /* ── POST 1 (Featured) ────────────────────────────────────── */
  {
    slug: 'the-hidden-cost-of-unfilled-positions',
    coverImage: '/images/blog/blog1-unfilled-positions.webp',
    title: 'The Hidden Cost of Unfilled Positions in Industrial Operations',
    excerpt: 'Vacant roles do more than slow production. They erode morale, inflate overtime budgets, and compound quality issues that surface months down the line.',
    category: 'Workforce Insights',
    author: SARAH,
    publishedDate: '2026-02-20',
    coverGradient: 'from-[#59CBE8]/30 via-[#2CD5C4]/20 to-[#59CBE8]/10',
    featured: true,
    tags: ['staffing', 'operations', 'cost analysis', 'workforce planning'],
    content: [
      { type: 'paragraph', text: 'When a critical role sits empty on a factory floor or a construction site, the immediate impact is obvious: work slows down. But the real damage is far less visible, and far more expensive. Companies that track only time-to-fill are missing the full picture of what workforce gaps actually cost.' },
      { type: 'heading', level: 2, text: 'The Domino Effect of a Single Vacancy' },
      { type: 'paragraph', text: 'One unfilled welder position on a fabrication line does not simply mean one less welder. It means the surrounding team absorbs the extra load, overtime budgets balloon, and experienced workers burn out faster. Within weeks, you are not dealing with one vacancy — you are dealing with three, because two more workers have left.' },
      { type: 'image', alt: 'Workforce impact visualization', caption: 'The cascading cost of a single unfilled industrial position', gradient: 'from-[#59CBE8]/15 to-[#111]/5' },
      { type: 'heading', level: 2, text: 'Quantifying the Real Cost' },
      { type: 'paragraph', text: 'Research from the Society for Human Resource Management puts the average cost of a vacant position at roughly 50 percent of that role\'s annual salary — per month. For a skilled trades position paying $65,000 per year, that translates to roughly $32,500 in lost productivity, overtime, and quality rework for every month the seat stays empty.' },
      { type: 'list', style: 'bullet', items: [
        'Overtime premiums for existing staff covering the gap — often 1.5x to 2x the base hourly rate',
        'Quality defects from fatigued or undertrained workers stepping into unfamiliar tasks',
        'Project delays that trigger contractual penalties and client relationship damage',
        'Recruitment costs that escalate the longer a position remains open',
        'Institutional knowledge loss when experienced workers leave due to burnout',
      ]},
      { type: 'heading', level: 2, text: 'Why Traditional Hiring Cannot Keep Up' },
      { type: 'paragraph', text: 'The average time-to-fill for a skilled industrial position is 42 days. In sectors like energy and aerospace, where certifications and clearances add complexity, that number stretches past 60. During that window, every day compounds the losses outlined above.' },
      { type: 'quote', text: 'The companies that win are the ones that treat staffing as infrastructure, not as a reaction to problems.', attribution: 'Ari Hassan, VP of Operations at Insaan Global' },
      { type: 'heading', level: 2, text: 'Building a Proactive Staffing Strategy' },
      { type: 'paragraph', text: 'The fix is not simply hiring faster. It is building a staffing model that anticipates demand before it becomes urgent. At Insaan Global, our CORETech division maintains pre-vetted talent pools across 12 industrial sectors. When a client needs three certified pipefitters by Monday, we do not start sourcing on Friday — the candidates are already in our pipeline, screened, verified, and ready.' },
      { type: 'paragraph', text: 'This is the difference between reactive staffing and strategic workforce planning. One treats people as a line item. The other treats them as infrastructure — because that is exactly what they are.' },
      { type: 'heading', level: 3, text: 'The Bottom Line' },
      { type: 'paragraph', text: 'Every unfilled position is a compounding liability. The organizations that recognize this — and partner with staffing firms that operate proactively rather than reactively — are the ones consistently outperforming their competitors. The question is not whether you can afford strategic staffing. It is whether you can afford not to have it.' },
    ],
  },

  /* ── POST 2 ────────────────────────────────────────────────── */
  {
    slug: 'travel-nursing-trends-2026',
    coverImage: '/images/blog/blog2-travel-nursing.webp',
    title: 'Travel Nursing in 2026: What Healthcare Facilities Need to Know',
    excerpt: 'The travel nursing market has matured well beyond pandemic-era spikes. Here is what facilities should understand about today\'s landscape and how to compete for top clinical talent.',
    category: 'Healthcare Staffing',
    author: MARCUS,
    publishedDate: '2026-02-12',
    coverGradient: 'from-purple-500/25 via-[#59CBE8]/15 to-purple-400/10',
    tags: ['healthcare', 'travel nursing', 'clinical staffing', 'talent acquisition'],
    content: [
      { type: 'paragraph', text: 'Travel nursing is no longer the crisis-driven, premium-rate proposition it was during the pandemic years. The market has normalized, but the underlying dynamics — a national nursing shortage, aging populations, and rural access gaps — have not gone away. For healthcare facilities, understanding the 2026 travel nursing landscape is critical to maintaining staffing levels without hemorrhaging budgets.' },
      { type: 'heading', level: 2, text: 'The New Normal: Lower Rates, Higher Expectations' },
      { type: 'paragraph', text: 'Weekly pay packages for travel nurses have stabilized at 20 to 30 percent above permanent staff rates — down significantly from the 2x to 3x premiums seen during peak pandemic demand. But travel nurses in 2026 are more selective than ever. They evaluate assignments based on facility culture, scheduling flexibility, housing support, and career development opportunities — not just compensation.' },
      { type: 'image', alt: 'Travel nursing market trends', caption: 'Travel nursing compensation trends, 2020-2026', gradient: 'from-purple-400/20 to-[#2CD5C4]/10' },
      { type: 'heading', level: 2, text: 'What Top Facilities Are Doing Differently' },
      { type: 'list', style: 'bullet', items: [
        'Offering transparent scheduling with at least 4 weeks of advance notice on shift assignments',
        'Providing furnished housing or competitive housing stipends that reflect local market rates',
        'Integrating travel nurses into unit culture — not treating them as temporary outsiders',
        'Building long-term relationships with staffing partners who pre-screen for clinical competency and cultural fit',
        'Creating pathways for travel-to-permanent conversion with retention bonuses',
      ]},
      { type: 'heading', level: 2, text: 'Compliance Is Non-Negotiable' },
      { type: 'paragraph', text: 'Multi-state licensing through the Nurse Licensure Compact has simplified deployment, but compliance requirements have simultaneously become more complex. Joint Commission standards, state-specific scope-of-practice rules, and facility-level credentialing all demand meticulous documentation. The best staffing partners handle this end-to-end so facility administrators can focus on patient care.' },
      { type: 'quote', text: 'The facilities that treat travel nurses as valued team members — not just warm bodies filling slots — are the ones that get first pick of the best clinical talent.', attribution: 'Ari Hassan, VP of Operations at Insaan Global' },
      { type: 'heading', level: 2, text: 'How Bettermint Approaches Healthcare Staffing' },
      { type: 'paragraph', text: 'Through our Bettermint division, Insaan Global manages the full lifecycle of healthcare placements — from credential verification and compliance management to onboarding support and ongoing performance check-ins. We do not just place nurses. We ensure they succeed, which means our client facilities see higher retention, better patient outcomes, and fewer last-minute gaps.' },
      { type: 'heading', level: 3, text: 'Looking Ahead' },
      { type: 'paragraph', text: 'The healthcare staffing market will continue evolving as telehealth, AI-assisted diagnostics, and shifting demographics reshape demand patterns. Facilities that build flexible, partnership-based staffing models now will be best positioned to adapt. Those still relying on reactive, agency-by-agency hiring will fall further behind.' },
    ],
  },

  /* ── POST 3 ────────────────────────────────────────────────── */
  {
    slug: 'insaan-global-launches-rapid-deploy',
    coverImage: '/images/blog/blog3-rapid-deploy.webp',
    title: 'Insaan Global Launches Rapid Deploy Program for Emergency Staffing',
    excerpt: 'A new program designed to place pre-vetted industrial and healthcare workers within 24 to 48 hours of an emergency staffing request.',
    category: 'Company News',
    author: SARAH,
    publishedDate: '2026-01-28',
    coverGradient: 'from-amber-400/25 via-[#59CBE8]/15 to-amber-300/10',
    tags: ['company news', 'rapid deploy', 'emergency staffing', 'CORETech', 'Bettermint'],
    content: [
      { type: 'paragraph', text: 'Today, Insaan Global is announcing the launch of Rapid Deploy — a dedicated emergency staffing program designed to place qualified, pre-vetted workers on-site within 24 to 48 hours of a critical staffing request. The program operates across both our CORETech (industrial) and Bettermint (healthcare) divisions.' },
      { type: 'heading', level: 2, text: 'Why Rapid Deploy Exists' },
      { type: 'paragraph', text: 'Every operations leader has experienced it: a key crew member is injured on a job site, a healthcare facility faces a sudden census spike, or a project timeline accelerates without warning. In these moments, the difference between a 48-hour placement and a two-week search can mean hundreds of thousands of dollars in project delays or compromised patient care.' },
      { type: 'image', alt: 'Rapid Deploy program overview', caption: 'The Rapid Deploy pipeline: from request to on-site in 24-48 hours', gradient: 'from-amber-400/20 to-[#59CBE8]/10' },
      { type: 'heading', level: 2, text: 'How It Works' },
      { type: 'list', style: 'numbered', items: [
        'Client submits an emergency staffing request through their dedicated account manager or the Insaan Global portal',
        'Our operations team cross-references the request against our pre-vetted Rapid Deploy talent pool — workers who have already cleared background checks, skills assessments, and certification verification',
        'Qualified candidates are presented to the client within 4 to 8 hours with full documentation packages',
        'Upon client approval, the selected worker is mobilized and on-site within 24 to 48 hours, including travel coordination and onboarding documentation',
      ]},
      { type: 'heading', level: 2, text: 'The Talent Pool Behind the Program' },
      { type: 'paragraph', text: 'Rapid Deploy is powered by a standing pool of over 2,000 pre-qualified workers across both divisions. These are not passive candidates sitting in a database. They are active professionals who have opted into the Rapid Deploy network, confirmed their availability windows, and maintained current certifications and compliance documentation.' },
      { type: 'quote', text: 'Speed without quality is just chaos. Rapid Deploy delivers both because the vetting happens before the emergency, not during it.', attribution: 'Ari Hassan, VP of Operations at Insaan Global' },
      { type: 'heading', level: 2, text: 'Sectors Covered' },
      { type: 'paragraph', text: 'On the industrial side, Rapid Deploy covers manufacturing, construction, energy, oil and gas, aerospace, logistics, and marine operations. On the healthcare side, coverage includes registered nurses, licensed practical nurses, certified nursing assistants, allied health professionals, and specialized clinical roles.' },
      { type: 'heading', level: 3, text: 'Getting Started' },
      { type: 'paragraph', text: 'Rapid Deploy is available immediately to all current Insaan Global clients at no additional program fee — standard placement rates apply. New clients can onboard into the program within 48 hours. Contact your account manager or reach out through our website to learn more.' },
    ],
  },

  /* ── POST 4 ────────────────────────────────────────────────── */
  {
    slug: 'skilled-trades-gap-solutions',
    coverImage: '/images/blog/blog4-skilled-trades.webp',
    title: 'Bridging the Skilled Trades Gap: Strategies That Actually Work',
    excerpt: 'The skilled trades shortage is not a future problem — it is today\'s reality. Here are practical strategies that leading companies are using to close the gap.',
    category: 'Industrial Solutions',
    author: MARCUS,
    publishedDate: '2026-01-15',
    coverGradient: 'from-emerald-400/25 via-[#2CD5C4]/15 to-emerald-300/10',
    tags: ['skilled trades', 'workforce development', 'industrial staffing', 'training'],
    content: [
      { type: 'paragraph', text: 'The numbers are stark: the United States will face a shortage of over 500,000 skilled trades workers by 2028, according to projections from the Bureau of Labor Statistics. Electricians, welders, pipefitters, HVAC technicians, and CNC machinists are among the most in-demand and hardest-to-fill roles in the industrial economy. And the retirement wave is just beginning.' },
      { type: 'heading', level: 2, text: 'Why the Gap Keeps Growing' },
      { type: 'paragraph', text: 'Three decades of cultural messaging that prioritized four-year degrees over vocational training created a generational blind spot. Trade schools saw enrollment decline by 30 percent between 2000 and 2020. Meanwhile, the infrastructure that these workers build and maintain — power plants, bridges, manufacturing facilities, pipelines — continued to age and expand.' },
      { type: 'list', style: 'bullet', items: [
        'Average age of a skilled trades worker in the US is now 55, with mass retirements accelerating through 2030',
        'Only 26 percent of Gen Z workers report considering a trade career, despite median trade salaries exceeding $60,000',
        'Immigration policy changes have reduced the pipeline of internationally trained tradespeople',
        'Apprenticeship completion rates hover around 50 percent nationally, meaning half of those who start do not finish',
      ]},
      { type: 'image', alt: 'Skilled trades workforce data', caption: 'Projected skilled trades shortage by sector, 2024-2030', gradient: 'from-emerald-400/15 to-[#111]/5' },
      { type: 'heading', level: 2, text: 'Strategies That Are Working Right Now' },
      { type: 'heading', level: 3, text: '1. Partner-Funded Apprenticeships' },
      { type: 'paragraph', text: 'Companies like those in CORETech\'s client network are co-funding apprenticeship programs with local trade schools, covering tuition in exchange for a two-year employment commitment post-graduation. This model has produced completion rates above 80 percent — nearly double the national average.' },
      { type: 'heading', level: 3, text: '2. Upskilling Existing Workforces' },
      { type: 'paragraph', text: 'Rather than competing for scarce experienced talent, forward-thinking companies are investing in cross-training programs that help general laborers transition into specialized roles. A warehouse worker with mechanical aptitude can become a maintenance technician in 6 to 12 months with the right training path.' },
      { type: 'heading', level: 3, text: '3. Strategic Staffing Partnerships' },
      { type: 'paragraph', text: 'Maintaining an internal pipeline for every trade specialty is unrealistic for most companies. This is where strategic staffing partners fill the gap — maintaining pre-vetted pools of certified tradespeople who can deploy within days rather than weeks.' },
      { type: 'quote', text: 'You cannot solve a workforce crisis by posting more job ads. You solve it by building systems — training, partnerships, and talent pipelines — that produce workers before you need them.', attribution: 'Ari Hassan, VP of Operations at Insaan Global' },
      { type: 'heading', level: 2, text: 'The Path Forward' },
      { type: 'paragraph', text: 'Bridging the skilled trades gap requires a combination of cultural change, training investment, and operational strategy. Companies that treat workforce development as a core business function — not an HR afterthought — are the ones building the teams they need for the next decade. The rest are still posting job ads and wondering why no one applies.' },
    ],
  },

  /* ── POST 5 ────────────────────────────────────────────────── */
  {
    slug: 'ai-workforce-planning',
    coverImage: '/images/blog/blog5-ai-workforce.webp',
    title: 'How AI Is Reshaping Workforce Planning Without Replacing People',
    excerpt: 'Artificial intelligence is transforming how companies forecast demand, match talent, and manage deployments — but the human element remains irreplaceable.',
    category: 'Industry Trends',
    author: SARAH,
    publishedDate: '2026-01-05',
    coverGradient: 'from-[#2CD5C4]/25 via-[#59CBE8]/15 to-[#2CD5C4]/10',
    tags: ['artificial intelligence', 'workforce planning', 'technology', 'future of work'],
    content: [
      { type: 'paragraph', text: 'The conversation around AI and employment too often defaults to a binary: either AI replaces workers or it does not. The reality in workforce planning is far more nuanced. AI is fundamentally changing how companies forecast staffing needs, match candidates to roles, and optimize deployment schedules — but it is doing so in ways that amplify human judgment rather than replace it.' },
      { type: 'heading', level: 2, text: 'Where AI Adds Genuine Value' },
      { type: 'heading', level: 3, text: 'Demand Forecasting' },
      { type: 'paragraph', text: 'Traditional workforce planning relies on historical headcount data and manager intuition. AI-powered forecasting models ingest dozens of additional signals — project pipeline data, seasonal patterns, economic indicators, client growth trajectories, and even weather forecasts for outdoor operations — to predict staffing needs with significantly greater accuracy and lead time.' },
      { type: 'heading', level: 3, text: 'Candidate Matching' },
      { type: 'paragraph', text: 'Matching a candidate to a role involves far more variables than a keyword search can capture. Modern AI matching systems evaluate certification combinations, geographic preferences, project history, team compatibility indicators, and career trajectory patterns to surface candidates that a human recruiter might overlook — or might take days to identify manually.' },
      { type: 'image', alt: 'AI workforce planning diagram', caption: 'How AI augments — rather than replaces — human decision-making in staffing', gradient: 'from-[#2CD5C4]/20 to-[#59CBE8]/10' },
      { type: 'heading', level: 3, text: 'Schedule Optimization' },
      { type: 'paragraph', text: 'For companies managing hundreds or thousands of contingent workers across multiple sites, scheduling is a combinatorial nightmare. AI optimization engines can balance worker preferences, compliance constraints, travel logistics, and client requirements simultaneously — producing schedules that would take a human coordinator weeks to assemble.' },
      { type: 'heading', level: 2, text: 'Where AI Falls Short' },
      { type: 'list', style: 'bullet', items: [
        'Assessing cultural fit and soft skills — still requires human interview and intuition',
        'Navigating complex client relationships where context and history matter more than data',
        'Making ethical judgment calls about worker safety, accommodation requests, or fairness concerns',
        'Handling edge cases and novel situations that fall outside training data patterns',
        'Building trust with candidates — people want to talk to people about their careers',
      ]},
      { type: 'quote', text: 'AI gives us better data faster. But the decision about whether to place a person in a role — that is still fundamentally a human judgment, and it should stay that way.', attribution: 'Ari Hassan, VP of Operations at Insaan Global' },
      { type: 'heading', level: 2, text: 'How Insaan Global Uses AI Responsibly' },
      { type: 'paragraph', text: 'At Insaan Global, we use AI tools to accelerate candidate identification, improve demand forecasting for our clients, and optimize deployment logistics. But every placement decision is made by an experienced recruiter who knows the client, understands the role context, and has spoken directly with the candidate. Technology handles the scale. People handle the judgment.' },
      { type: 'heading', level: 3, text: 'The Human-First Approach' },
      { type: 'paragraph', text: 'The staffing industry exists because work is fundamentally human. Companies need people, and people need opportunities. AI makes us faster and more precise at connecting the two — but it will never replace the relationships, trust, and contextual understanding that define great workforce partnerships. That is the approach we will continue to take as the technology evolves.' },
    ],
  },
];
