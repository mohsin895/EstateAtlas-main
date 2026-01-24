"use client";

import React from "react";
import Image from "next/image";
import story from "../../../public/OurStory.png";
import actionbg from "../../../public/actionbg.png";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const About = () => {
    return (
        <div className="mx-auto flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] overflow-hidden pt-20">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
                    }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0A1532]/80"></div>

                {/* Content */}
                <div className="container relative z-10 flex flex-col items-start justify-center text-left pt-20 pb-24">
                    <div className="border-l-4 border-sky pl-6 max-w-5xl">
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-8">
                            The New Standard In International Real Estate Data
                        </h1>
                        <p className="font-sans text-lg md:text-xl text-light-gray max-w-2xl leading-relaxed">
                            We are removing the guesswork from global investing. Estate Atlas empowers
                            investors, analysts, and professionals with the data-driven insights
                            needed to build borderless portfolios.
                        </p>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2">
                {/* Mission */}
                <div className="bg-[#071636] p-12 md:p-16">
    <span className="text-sky text-sm font-heading tracking-widest uppercase mb-4 block">
      Our Mission
    </span>
                    <p className="text-primary-foreground text-lg leading-relaxed">
                        As one of the world's most comprehensive international real estate data platforms, our mission is to democratize access to institutional-grade market intelligence. We believe that informed investors make better decisions, and better decisions lead to more efficient, transparent global real estate markets.
                    </p>
                </div>

                {/* Vision */}
                <div className="bg-[#3BAADD] p-12 md:p-16">
    <span className="text-primary-foreground/80 text-sm font-heading tracking-widest uppercase mb-4 block">
      Our Vision
    </span>
                    <p className="text-primary-foreground text-lg leading-relaxed">
                        To be the world's leading source of international real estate data, setting the standard for accuracy, coverage, and accessibility. We envision a future where geographical barriers no longer limit investment opportunities, and every investor has the tools to build truly global portfolios.
                    </p>
                </div>
            </section>

            <section className="bg-background py-20 md:py-28">
                <div className="container max-w-4xl mx-auto text-left">
                    <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8 text-center text-balance">
                        Bridging the Information Gap
                    </h2>
                    <div className="font-sans text-dark-gray text-lg leading-relaxed space-y-6">
                        <p>
                            For too long, international real estate investing has been a black box. Fragmented data sources, inconsistent methodologies, and language barriers have made cross-border analysis a time-consuming and error-prone process.
                        </p>
                        <p>
                            Institutional investors spend millions on proprietary research, while individual investors and smaller firms are left navigating a maze of unreliable information. This asymmetry creates inefficiencies and missed opportunities on both sides.
                        </p>
                        <p>
                            Estate Atlas was built to solve this problem. By aggregating, standardizing, and analyzing data from markets around the world, we provide a single source of truth for international real estate intelligence.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#E5E5E5] py-20 md:py-28">
                <div className="container">
                    <h2 className="font-heading text-3xl md:text-4xl text-navy text-center mb-16">
                        Our Core Values
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">

                        {/* Accuracy */}
                        <div className="bg-background p-8 rounded-md shadow-sm w-full md:w-[350px]">
                            <div className="w-14 h-14 bg-[#E6E7EA] rounded-md flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-target w-7 h-7 text-navy"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl text-navy mb-3">Accuracy</h3>
                            <p className="font-sans text-dark-gray leading-relaxed">
                                We provide data-backed insights, rigorously verified to ensure you make decisions based on reality, not estimates.
                            </p>
                        </div>

                        {/* Transparency */}
                        <div className="bg-background p-8 rounded-md shadow-sm w-full md:w-[350px]">
                            <div className="w-14 h-14 bg-[#E6E7EA] rounded-md flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-search w-7 h-7 text-navy"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl text-navy mb-3">Transparency</h3>
                            <p className="font-sans text-dark-gray leading-relaxed">
                                In a market full of estimates, we deal in facts. Every data point is sourced, dated, and traceable.
                            </p>
                        </div>

                        {/* Accessibility */}
                        <div className="bg-background p-8 rounded-md shadow-sm w-full md:w-[350px]">
                            <div className="w-14 h-14 bg-[#E6E7EA] rounded-md flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-lock-open w-7 h-7 text-navy"
                                >
                                    <rect width={18} height={11} x={3} y={11} rx={2} ry={2}></rect>
                                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl text-navy mb-3">Accessibility</h3>
                            <p className="font-sans text-dark-gray leading-relaxed">
                                Complex metrics shouldn't require a PhD. We translate institutional-grade data into actionable intelligence.
                            </p>
                        </div>

                        {/* Innovation */}
                        <div className="bg-background p-8 rounded-md shadow-sm w-full md:w-[350px]">
                            <div className="w-14 h-14 bg-[#E6E7EA] rounded-md flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-lightbulb w-7 h-7 text-navy"
                                >
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                                    <path d="M9 18h6"></path>
                                    <path d="M10 22h4"></path>
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl text-navy mb-3">Innovation</h3>
                            <p className="font-sans text-dark-gray leading-relaxed">
                                Leveraging technology to simplify analysis. We continuously evolve our platform to stay ahead of market needs.
                            </p>
                        </div>

                        {/* Global Reach */}
                        <div className="bg-background p-8 rounded-md shadow-sm w-full md:w-[350px]">
                            <div className="w-14 h-14 bg-[#E6E7EA] rounded-md flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-globe w-7 h-7 text-navy"
                                >
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl text-navy mb-3">Global Reach</h3>
                            <p className="font-sans text-dark-gray leading-relaxed">
                                Insights that transcend borders. Our coverage spans key markets across continents for truly global portfolios.
                            </p>
                        </div>

                        {/* Reliability */}
                        <div className="bg-background p-8 rounded-md shadow-sm w-full md:w-[350px]">
                            <div className="w-14 h-14 bg-[#E6E7EA] rounded-md flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-shield w-7 h-7 text-navy"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl text-navy mb-3">Reliability</h3>
                            <p className="font-sans text-dark-gray leading-relaxed">
                                Count on consistent, up-to-date information. Our platform delivers dependable data you can trust for critical decisions.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#0A1532] py-24">
                <div className="container text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-6 text-balance">
                        Ready to look beyond borders?
                    </h2>
                    <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
                        Join thousands of investors using Estate Atlas to make smarter, data-driven decisions.
                    </p>
                    <a href="/dashboard">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-sky hover:bg-sky/90 text-primary font-semibold px-8 py-6 text-lg">
                            Get Started Today
                        </button>
                    </a>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default About;
