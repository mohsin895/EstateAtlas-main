"use client";
import React from "react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#0A1532] py-16">
            <div className="container mx-auto px-4">
                {/* CTA Section */}
                <div className="text-center mb-12 pb-12 border-b border-primary-foreground/10">
                    <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
                        Ready to build your portfolio?
                    </h2>
                    <p className="text-primary-foreground/70 mb-6">
                        Start your analysis today with institutional-grade data.
                    </p>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-sky hover:bg-sky/90 text-accent-foreground font-heading rounded-md">
                        Get Started
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4 ml-2"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Main Footer Links */}
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Logo + Description */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-sky rounded-md flex items-center justify-center">
                <span className="font-heading text-primary-foreground font-bold text-sm">
                  EA
                </span>
                            </div>
                            <span className="font-heading text-lg text-primary-foreground">
                Estate Atlas
              </span>
                        </div>
                        <p className="text-primary-foreground/60 text-sm">
                            Institutional-grade real estate analytics for the global investor.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-heading text-primary-foreground mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#about"
                                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#insights"
                                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                                >
                                    Market Insights
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-heading text-primary-foreground mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                                >
                                    Cookies Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                                >
                                    Data Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-primary-foreground mb-4">Connect</h4>
                        <p className="text-primary-foreground/60 text-sm mb-4">
                            Have questions? We're here to help.
                        </p>
                        <a
                            href="mailto:support@estateatlas.com"
                            className="text-[#2D8DA2] hover:text-[#2D8DA2] text-sm transition-colors"
                        >
                            support@estateatlas.com
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between pt-8 border-t border-primary-foreground/10">
                    <p className="text-primary-foreground/50 text-sm">
                        © 2026 Estate Atlas. All rights reserved.
                    </p>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-sky transition-colors"
                        aria-label="LinkedIn"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-linkedin w-5 h-5"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width={4} height={12} x={2} y={9} />
                            <circle cx={4} cy={4} r={2} />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
