'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchInput from '@/components/Article/search-input';
import Image from 'next/image';
import abanner from '../../../public/ArticleBanner.jpg';

interface WordPressPost {
  id: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: [
      {
        source_url: string;
      }
    ];
  };
}


type Article = {
    title: string;
    date: string;
    image: string;
    categories: string[];
    alt: string;
};

const articles: Article[] = [
    {
        title: "Germany's 2026 Property Tax Reform: What Foreign Investors Need to Know",
        date: "Oct 24, 2025",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
        categories: ["TAX LAW", "GERMANY"],
        alt: "Germany's 2026 Property Tax Reform",
    },
    {
        title: "Dubai Marina vs. Palm Jumeirah: A 10-Year Rental Yield Comparison",
        date: "Oct 18, 2025",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
        categories: ["YIELD ANALYSIS"],
        alt: "Dubai Marina vs. Palm Jumeirah",
    },
    {
        title: "How One Investor Built a €2M Portfolio Across 4 Countries",
        date: "Oct 12, 2025",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
        categories: ["CASE STUDY"],
        alt: "Investor Portfolio Case Study",
    },
    {
        title: "The 60/40 Rule for International Real Estate Portfolios",
        date: "Oct 5, 2025",
        image: "https://images.unsplash.com/photo-1464938050520-ef2571c93e3e?w=600&q=80",
        categories: ["STRATEGY", "DIVERSIFICATION"],
        alt: "60/40 Real Estate Rule",
    },
    {
        title: "Singapore's Cooling Measures: Impact on Foreign Ownership",
        date: "Sep 28, 2025",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
        categories: ["MARKET REPORT", "ASIA"],
        alt: "Singapore Cooling Measures",
    },
    {
        title: "Portugal's Golden Visa Alternative: New Pathways for 2026",
        date: "Sep 20, 2025",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
        categories: ["EMERGING MARKETS"],
        alt: "Portugal Golden Visa Alternative",
    },
];

const Articles = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<WordPressPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://peru-stork-399467.hostingersite.com/wp-json/wp/v2/posts?_embed'
        );

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        setPosts(data);
        setFilteredPosts(data); // by default all posts
      } catch (error: unknown) {
        setError('Failed to load posts');
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // 🔍 Filter when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const q = searchQuery.toLowerCase();
      const filtered = posts.filter(
        (post) =>
          post.title.rendered.toLowerCase().includes(q) ||
          post.excerpt.rendered.toLowerCase().includes(q)
      );
      setFilteredPosts(filtered);
    }
  }, [searchQuery, posts]);

  return (
    <section>
      <Navbar />

      <div className="min-h-screen mb-5  ">
          <section className="bg-[#0a1532] pt-32 pb-16 ">
              <div className="container mx-auto text-center">
                  {/* Heading */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
                      Global Market Intelligence
                  </h1>

                  {/* Subheading */}
                  <p className="text-lg md:text-xl text-[#ffffffb3] max-w-2xl mx-auto mb-10">
                      Analysis, regulatory updates, and yield forecasts from our data team.
                  </p>

                  {/* Search Bar */}
                  <div className="max-w-2xl mx-auto relative">
                      {/* Background glow / border */}
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20" />

                      {/* Input wrapper */}
                      <div className="relative flex items-center">
                          {/* Search icon */}
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="absolute left-5 h-5 w-5 text-white/60"
                          >
                              <circle cx="11" cy="11" r="8" />
                              <path d="m21 21-4.3-4.3" />
                          </svg>

                          {/* Input field */}
                          <input
                              type="text"
                              placeholder="Search insights, reports, and analysis..."
                              className="w-full py-4 pl-14 pr-6 bg-transparent text-white placeholder:text-white/50 focus:outline-none rounded-full"
                          />
                      </div>
                  </div>
              </div>
          </section>
          <section className="bg-[#0d1a3d] border-b border-white/10 sticky top-[72px] z-40">
              <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-wrap justify-center gap-3">
                      <button className="px-5 py-2 rounded-full text-sm font-medium transition-all bg-[#3CABDD] text-primary">
                          All Insights
                      </button>
                      <button className="px-5 py-2 rounded-full text-sm font-medium transition-all bg-white/10 text-white/70 hover:bg-white/20 hover:text-white">
                          Market Reports
                      </button>
                      <button className="px-5 py-2 rounded-full text-sm font-medium transition-all bg-white/10 text-white/70 hover:bg-white/20 hover:text-white">
                          Regulatory Alerts
                      </button>
                      <button className="px-5 py-2 rounded-full text-sm font-medium transition-all bg-white/10 text-white/70 hover:bg-white/20 hover:text-white">
                          Investment Strategy
                      </button>
                      <button className="px-5 py-2 rounded-full text-sm font-medium transition-all bg-white/10 text-white/70 hover:bg-white/20 hover:text-white">
                          Case Studies
                      </button>
                  </div>
              </div>
          </section>
          <section className="py-12 md:py-16 px-4 bg-muted/30">
              <div className="container mx-auto">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border">
                      <div className="grid md:grid-cols-2">
                          <div className="aspect-video md:aspect-auto">
                              <img
                                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                                  alt="Emerging Yield Hotspots: Why Southeast Asia is Beating Europe"
                                  className="w-full h-full object-cover"
                              />
                          </div>
                          <div className="p-8 md:p-12 flex flex-col justify-center">
          <span className="inline-block px-3 py-1 bg-sky text-primary text-xs font-bold rounded-full mb-4 w-fit">
            Q3 2026 REPORT
          </span>
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                                  Emerging Yield Hotspots: Why Southeast Asia is Beating Europe
                              </h2>
                              <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
                                  Our latest data shows a 15% shift in capital flow towards Vietnam and Thailand, driven by favorable demographics and regulatory reforms...
                              </p>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span className="font-medium text-foreground">By Sarah Jenks, Chief Analyst</span>
                                  <span>•</span>
                                  <span>5 min read</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="py-12 md:py-16 px-4">
              <div className="container mx-auto">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {articles.map((article, index) => (
                          <article
                              key={index}
                              className="group bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                          >
                              <div className="relative aspect-video overflow-hidden">
                                  <Image
                                      src={article.image}
                                      alt={article.alt}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                      fill
                                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                  />
                                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                      {article.categories.map((category, idx) => (
                                          <span
                                              key={idx}
                                              className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded backdrop-blur-sm"
                                          >
                      {category}
                    </span>
                                      ))}
                                  </div>
                              </div>
                              <div className="p-5">
                                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-sky transition-colors">
                                      {article.title}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">{article.date}</p>
                              </div>
                          </article>
                      ))}
                  </div>
              </div>
          </section>



        {/*  <div className="mx-auto container">*/}

        {/*  <div className="mt-10">*/}
        {/*    {loading ? (*/}
        {/*      <div className="grid md:grid-cols-3 gap-6">*/}
        {/*        {[...Array(6)].map((_, i) => (*/}
        {/*          <div*/}
        {/*            key={i}*/}
        {/*            className="animate-pulse border rounded-2xl p-4 shadow-sm"*/}
        {/*          >*/}
        {/*            <div className="bg-gray-300 h-40 w-full rounded-xl mb-4"></div>*/}
        {/*            <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>*/}
        {/*            <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>*/}
        {/*            <div className="h-3 bg-gray-200 rounded w-5/6"></div>*/}
        {/*          </div>*/}
        {/*        ))}*/}
        {/*      </div>*/}
        {/*    ) : error ? (*/}
        {/*      <p className="text-red-600">{error}</p>*/}
        {/*    ) : filteredPosts.length > 0 ? (*/}
        {/*      <div className="grid md:grid-cols-3 gap-8">*/}
        {/*        {filteredPosts.map((post) => {*/}
        {/*          const imageUrl =*/}
        {/*            post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;*/}

        {/*          return (*/}
        {/*            <div*/}
        {/*              key={post.id}*/}
        {/*              className="bg-white rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden border"*/}
        {/*            >*/}
        {/*              <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">*/}
        {/*                {imageUrl ? (*/}
        {/*                  <Image*/}
        {/*                    src={imageUrl}*/}
        {/*                    alt={post.title.rendered}*/}
        {/*                    fill*/}
        {/*                    className="object-cover"*/}
        {/*                  />*/}
        {/*                ) : (*/}
        {/*                  <span className="text-gray-500 text-sm">No Image</span>*/}
        {/*                )}*/}
        {/*              </div>*/}
        {/*              <div className="p-5">*/}
        {/*                <h2 className="text-xl font-semibold mb-3 line-clamp-2">*/}
        {/*                  <Link href={`/articles/${post.id}`}>*/}
        {/*                    {post.title.rendered}*/}
        {/*                  </Link>*/}
        {/*                </h2>*/}
        {/*                <div*/}
        {/*                  className="text-gray-600 text-sm line-clamp-3"*/}
        {/*                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}*/}
        {/*                />*/}
        {/*                <Link*/}
        {/*                  href={`/articles/${post.id}`}*/}
        {/*                  className="text-[#308fd9] hover:underline mt-4 block font-medium"*/}
        {/*                >*/}
        {/*                  Read More →*/}
        {/*                </Link>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          );*/}
        {/*        })}*/}
        {/*      </div>*/}
        {/*    ) : (*/}
        {/*      <p className='text-2xl font-bold text-center'>No posts found.</p>*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

      <Footer />
    </section>
  );
};

export default Articles;
