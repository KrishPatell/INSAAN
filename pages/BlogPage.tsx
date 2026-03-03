import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../components/home2/RevealOnScroll';
import { SEOHead } from '../components/shared/SEOHead';
import { SiteFooter } from '../components/shared/SiteFooter';
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  CATEGORY_COLORS,
  calculateReadTime,
  formatDate,
  type BlogCategory,
} from '../data/blogPosts';

/* ═══════════════════════════════════════════════════════════════
   INSIGHTS HUB PAGE — /insights
   ═══════════════════════════════════════════════════════════════ */

interface BlogPageProps { onContactClick: () => void }

export const BlogPage: React.FC<BlogPageProps> = ({ onContactClick }) => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All'>('All');

  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  const gridPosts = BLOG_POSTS
    .filter((p) => activeCategory === 'All' ? !p.featured : true)
    .filter((p) => activeCategory === 'All' || p.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Insights — Insaan Global | Workforce Insights, Staffing Trends & Industry News"
        description="Expert insights on workforce strategy, staffing trends, healthcare staffing, and industrial solutions from the Insaan Global team."
        path="/insights"
        keywords="workforce insights, staffing insights, healthcare staffing trends, industrial workforce, talent acquisition, Insaan Global insights"
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative w-full pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-[15%] w-[500px] h-[500px] rounded-full bg-[#59CBE8]/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-[#2CD5C4]/[0.04] blur-[120px]" />
        </div>
        <div className="relative max-w-content mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-insaan-black/10 bg-white/70 backdrop-blur-sm text-xs font-semibold tracking-[0.15em] uppercase text-insaan-black/60 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2CD5C4]" />
              Insights &amp; Updates
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h1 className="text-[36px] md:text-6xl lg:text-[4.8rem] font-bold text-insaan-black leading-[1] tracking-tightest mb-8 max-w-5xl">
              Expert insights for{' '}
              <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                smarter workforce decisions.
              </span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
            <p className="max-w-2xl text-insaan-black/60 text-[15px] md:text-xl leading-relaxed font-medium">
              Actionable strategies, industry analysis, and company news from the team
              building the future of workforce solutions.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ FEATURED POST ═══════ */}
      {featuredPost && (
        <section className="w-full pb-10 md:pb-20">
          <div className="max-w-content mx-auto px-4 md:px-8">
            <RevealOnScroll>
              <Link
                to={`/insights/${featuredPost.slug}`}
                className="group block rounded-3xl border border-insaan-black/[0.06] bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-insaan-black/[0.06] hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Cover */}
                  <div className={`relative h-[260px] md:h-[380px] lg:h-full min-h-[320px] ${featuredPost.coverImage ? '' : 'bg-gradient-to-br ' + featuredPost.coverGradient}`}>
                    {featuredPost.coverImage && (
                      <img src={featuredPost.coverImage} alt={featuredPost.title} className="w-full h-full object-cover" />
                    )}
                    <div className="absolute top-6 left-6">
                      <span className={`inline-flex px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide border ${CATEGORY_COLORS[featuredPost.category].bg} ${CATEGORY_COLORS[featuredPost.category].text} ${CATEGORY_COLORS[featuredPost.category].border}`}>
                        {featuredPost.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-flex px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-xs font-bold text-insaan-black/70">
                        Featured Article
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                    <h2 className="text-[24px] md:text-[32px] lg:text-4xl font-bold text-insaan-black leading-[1.1] tracking-tight mb-5 group-hover:text-[#59CBE8] transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="text-insaan-black/55 text-[15px] md:text-[17px] leading-relaxed mb-8 max-w-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <div aria-hidden="true" className={`w-10 h-10 rounded-full bg-gradient-to-br ${featuredPost.author.avatarGradient} flex items-center justify-center text-white text-xs font-bold`}>
                        {featuredPost.author.initials}
                      </div>
                      <div className="flex items-center gap-2 text-insaan-black/40 text-sm font-medium">
                        <span className="text-insaan-black/70 font-semibold">{featuredPost.author.name}</span>
                        <span>·</span>
                        <span>{formatDate(featuredPost.publishedDate)}</span>
                        <span>·</span>
                        <span>{calculateReadTime(featuredPost.content)} min read</span>
                      </div>
                    </div>
                    <div className="mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-[#59CBE8] group-hover:gap-3 transition-all duration-300">
                      Read Article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* ═══════ CATEGORY TABS + POST GRID ═══════ */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-content mx-auto px-4 md:px-8">
          {/* Section header */}
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-insaan-black/10 bg-white/70 backdrop-blur-sm text-xs font-semibold tracking-[0.15em] uppercase text-insaan-black/60 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59CBE8]" />
                  All Articles
                </span>
                <h2 className="text-[28px] md:text-4xl lg:text-5xl font-bold text-insaan-black leading-[1.05] tracking-tightest">
                  Browse by{' '}
                  <span className="bg-gradient-to-r from-[#59CBE8] to-[#2CD5C4] bg-clip-text text-transparent">
                    topic.
                  </span>
                </h2>
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => setActiveCategory('All')}
                  aria-pressed={activeCategory === 'All'}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === 'All'
                      ? 'bg-insaan-black text-white'
                      : 'border border-insaan-black/10 text-insaan-black/50 hover:border-insaan-black/20 hover:text-insaan-black/70'
                  }`}
                >
                  All
                </button>
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeCategory === cat
                        ? 'bg-insaan-black text-white'
                        : 'border border-insaan-black/10 text-insaan-black/50 hover:border-insaan-black/20 hover:text-insaan-black/70'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Post grid */}
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {gridPosts.map((post, i) => {
                const colors = CATEGORY_COLORS[post.category];
                return (
                  <RevealOnScroll key={post.slug} delay={i * 100}>
                    <Link
                      to={`/insights/${post.slug}`}
                      className="group relative block rounded-3xl border border-insaan-black/[0.06] bg-white overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-insaan-black/[0.04] hover:-translate-y-1"
                    >
                      {/* Cover gradient */}
                      <div className={`relative h-[200px] md:h-[220px] ${post.coverImage ? '' : 'bg-gradient-to-br ' + post.coverGradient}`}>
                        {post.coverImage && (
                          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                        )}
                        <div className="absolute top-5 left-5">
                          <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border ${colors.bg} ${colors.text} ${colors.border}`}>
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6 md:p-8">
                        <h3 className="text-[18px] md:text-xl font-bold text-insaan-black leading-snug tracking-tight mb-3 group-hover:text-[#59CBE8] transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-insaan-black/50 text-[14px] md:text-[15px] leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3">
                          <div aria-hidden="true" className={`w-8 h-8 rounded-full bg-gradient-to-br ${post.author.avatarGradient} flex items-center justify-center text-white text-[10px] font-bold`}>
                            {post.author.initials}
                          </div>
                          <div className="flex items-center gap-1.5 text-insaan-black/35 text-[13px] font-medium">
                            <span className="text-insaan-black/60 font-semibold">{post.author.name}</span>
                            <span>·</span>
                            <span>{formatDate(post.publishedDate)}</span>
                            <span>·</span>
                            <span>{calculateReadTime(post.content)} min</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover gradient line */}
                      <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#59CBE8]/0 via-[#59CBE8]/40 to-[#2CD5C4]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </Link>
                  </RevealOnScroll>
                );
              })}
            </div>
          ) : (
            <RevealOnScroll>
              <div className="text-center py-20">
                <p className="text-insaan-black/40 text-lg font-medium">No articles in this category yet. Check back soon.</p>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

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
