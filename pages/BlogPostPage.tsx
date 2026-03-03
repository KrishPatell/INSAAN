import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { RevealOnScroll } from '../components/home2/RevealOnScroll';
import { SEOHead } from '../components/shared/SEOHead';
import { SiteFooter } from '../components/shared/SiteFooter';
import {
  BLOG_POSTS,
  CATEGORY_COLORS,
  calculateReadTime,
  formatDate,
  type ContentBlock,
  type BlogPost,
} from '../data/blogPosts';

/* ═══════════════════════════════════════════════════════════════
   INSIGHTS POST PAGE — /insights/:slug
   ═══════════════════════════════════════════════════════════════ */

/* ─── Content Block Renderer ─────────────────────────────────── */

const RenderBlock: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <RevealOnScroll>
          <p className="text-insaan-black/65 text-[16px] md:text-[17px] leading-[1.9] mb-6">
            {block.text}
          </p>
        </RevealOnScroll>
      );

    case 'heading':
      return block.level === 2 ? (
        <RevealOnScroll>
          <h2 className="text-[24px] md:text-[28px] font-bold text-insaan-black leading-[1.15] tracking-tight mt-14 mb-6">
            {block.text}
          </h2>
        </RevealOnScroll>
      ) : (
        <RevealOnScroll>
          <h3 className="text-[20px] md:text-[22px] font-bold text-insaan-black leading-[1.2] tracking-tight mt-10 mb-4">
            {block.text}
          </h3>
        </RevealOnScroll>
      );

    case 'quote':
      return (
        <RevealOnScroll>
          <blockquote className="border-l-[3px] border-[#59CBE8] pl-6 md:pl-8 my-10 md:my-12">
            <p className="text-insaan-black text-[18px] md:text-xl font-semibold leading-[1.5] tracking-tight">
              &ldquo;{block.text}&rdquo;
            </p>
            {block.attribution && (
              <cite className="block mt-4 text-insaan-black/40 text-sm font-medium not-italic">
                &mdash; {block.attribution}
              </cite>
            )}
          </blockquote>
        </RevealOnScroll>
      );

    case 'image':
      return (
        <RevealOnScroll>
          <figure className="my-10 md:my-14">
            <div className={`w-full h-[200px] md:h-[320px] rounded-2xl bg-gradient-to-br ${block.gradient}`} />
            {block.caption && (
              <figcaption className="text-center text-insaan-black/35 text-[13px] font-medium mt-4">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </RevealOnScroll>
      );

    case 'list':
      return (
        <RevealOnScroll>
          {block.style === 'numbered' ? (
            <ol className="space-y-3.5 my-8 pl-1">
              {block.items.map((item, i) => (
                <li key={i} className="text-insaan-black/65 text-[16px] md:text-[17px] leading-relaxed flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-insaan-black/[0.06] flex items-center justify-center text-[12px] font-bold text-insaan-black/50 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          ) : (
            <ul className="space-y-3.5 my-8 pl-1">
              {block.items.map((item, i) => (
                <li key={i} className="text-insaan-black/65 text-[16px] md:text-[17px] leading-relaxed flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59CBE8] mt-[10px] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </RevealOnScroll>
      );

    default:
      return null;
  }
};

/* ─── Related Posts Helper ───────────────────────────────────── */

function getRelatedPosts(current: BlogPost, count: number): BlogPost[] {
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== current.slug && p.category === current.category
  );
  const others = BLOG_POSTS.filter(
    (p) => p.slug !== current.slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}

/* ─── Page Component ─────────────────────────────────────────── */

interface BlogPostPageProps { onContactClick: () => void }

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onContactClick }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/insights" replace />;

  const readTime = calculateReadTime(post.content);
  const colors = CATEGORY_COLORS[post.category];
  const related = getRelatedPosts(post, 3);

  return (
    <>
      <SEOHead
        title={`${post.title} — Insaan Global Insights`}
        description={post.excerpt}
        path={`/insights/${post.slug}`}
        keywords={post.tags.join(', ')}
        ogType="article"
      />

      {/* ═══════ ARTICLE HERO ═══════ */}
      <section className="relative w-full pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-[15%] w-[500px] h-[500px] rounded-full bg-[#59CBE8]/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-[#2CD5C4]/[0.04] blur-[120px]" />
        </div>
        <div className="relative max-w-[900px] mx-auto px-4 md:px-8">
          {/* Back link */}
          <RevealOnScroll>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-insaan-black/40 text-sm font-semibold hover:text-insaan-black/70 transition-colors mb-8 group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              Back to Insights
            </Link>
          </RevealOnScroll>

          {/* Category badge */}
          <RevealOnScroll delay={60}>
            <span className={`inline-flex px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide border ${colors.bg} ${colors.text} ${colors.border} mb-6`}>
              {post.category}
            </span>
          </RevealOnScroll>

          {/* Title */}
          <RevealOnScroll delay={120}>
            <h1 className="text-[30px] md:text-[44px] lg:text-[52px] font-bold text-insaan-black leading-[1.08] tracking-tightest mb-8">
              {post.title}
            </h1>
          </RevealOnScroll>

          {/* Author + meta row */}
          <RevealOnScroll delay={180}>
            <div className="flex items-center gap-4 pb-2">
              <div aria-hidden="true" className={`w-11 h-11 rounded-full bg-gradient-to-br ${post.author.avatarGradient} flex items-center justify-center text-white text-xs font-bold`}>
                {post.author.initials}
              </div>
              <div>
                <p className="text-insaan-black font-semibold text-[15px]">{post.author.name}</p>
                <div className="flex items-center gap-2 text-insaan-black/40 text-[13px] font-medium">
                  <span>{formatDate(post.publishedDate)}</span>
                  <span>·</span>
                  <span>{readTime} min read</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ COVER IMAGE ═══════ */}
      <section className="w-full pb-4 md:pb-8">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <RevealOnScroll>
            {post.coverImage ? (
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-[220px] md:h-[400px] rounded-3xl object-cover"
              />
            ) : (
              <div className={`w-full h-[220px] md:h-[400px] rounded-3xl bg-gradient-to-br ${post.coverGradient}`} />
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ ARTICLE BODY ═══════ */}
      <section className="w-full py-12 md:py-20">
        <div className="max-w-[720px] mx-auto px-4 md:px-8">
          {post.content.map((block, i) => (
            <RenderBlock key={i} block={block} />
          ))}
        </div>
      </section>

      {/* ═══════ TAGS ═══════ */}
      <section className="w-full pb-10 md:pb-16">
        <div className="max-w-[720px] mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <div className="border-t border-insaan-black/[0.06] pt-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-insaan-black/[0.03] text-insaan-black/40 text-[13px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ AUTHOR BIO ═══════ */}
      <section className="w-full pb-20 md:pb-28">
        <div className="max-w-[720px] mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <div className="rounded-3xl border border-insaan-black/[0.06] bg-white p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6">
              <div aria-hidden="true" className={`w-16 h-16 rounded-full bg-gradient-to-br ${post.author.avatarGradient} flex items-center justify-center text-white text-lg font-bold shrink-0`}>
                {post.author.initials}
              </div>
              <div>
                <h4 className="text-xl font-bold text-insaan-black mb-1">{post.author.name}</h4>
                <p className="text-insaan-black/55 text-[15px] leading-relaxed">
                  {post.author.name} brings years of experience in workforce strategy
                  and operations to Insaan Global, helping organizations build stronger
                  teams through data-driven staffing solutions.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ RELATED POSTS (dark) ═══════ */}
      {related.length > 0 && (
        <section className="w-full bg-insaan-black text-white py-28 md:py-40">
          <div className="max-w-content mx-auto px-4 md:px-8">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2CD5C4]" />
                Keep Reading
              </span>
              <h2 className="text-[28px] md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tightest mb-14 md:mb-20">
                More insights from{' '}
                <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                  Insaan Global.
                </span>
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {related.map((rp, i) => {
                const rc = CATEGORY_COLORS[rp.category];
                return (
                  <RevealOnScroll key={rp.slug} delay={i * 100}>
                    <Link
                      to={`/insights/${rp.slug}`}
                      className="group block rounded-3xl border border-white/[0.08] bg-white/[0.03] overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1"
                    >
                      <div className={`h-[180px] md:h-[200px] bg-gradient-to-br ${rp.coverGradient} opacity-80`} />
                      <div className="p-6 md:p-7">
                        <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border ${rc.bg} ${rc.text} ${rc.border} mb-4`}>
                          {rp.category}
                        </span>
                        <h3 className="text-lg font-bold text-white leading-snug tracking-tight mb-3 group-hover:text-[#59CBE8] transition-colors duration-300 line-clamp-2">
                          {rp.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-white/30 text-[13px] font-medium">
                          <span>{formatDate(rp.publishedDate)}</span>
                          <span>·</span>
                          <span>{calculateReadTime(rp.content)} min read</span>
                        </div>
                      </div>
                    </Link>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ CTA (Partner With Us) ═══════ */}
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
                <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                  your operation needs.
                </span>
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

      <SiteFooter onContactClick={onContactClick} />
    </>
  );
};
