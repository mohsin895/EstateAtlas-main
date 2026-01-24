"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CircleCheck, CreditCard, Globe, Headset, Sparkles } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/Pricing/FAQ";
import actionbg from "../../../public/actionbg.png";

const Pricing = () => {
    const router = useRouter();
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const handleClick = (plan: "basic" | "premium" | "enterprise") => {
        router.push(`/auth/subscribe?plan=${plan}&isYearly=${billingCycle === "yearly"}`);
    };

    const getPrices = () => {
        const prices = {
            professional: { monthly: 29, yearly: 290 },
            premium: { monthly: 49, yearly: 490 },
        };
        return {
            professionalPrice: prices.professional[billingCycle],
            premiumPrice: prices.premium[billingCycle],
        };
    };

    const { professionalPrice, premiumPrice } = getPrices();

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <section className="bg-[#0A1532] pt-28 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Transparent Pricing for Global Investors
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                        Choose the data depth that matches your investment strategy.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <span className="text-sm font-medium text-white">Monthly</span>
                        <button
                            type="button"
                            onClick={() =>
                                setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
                            }
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors
                ${billingCycle === "monthly" ? "bg-input" : "bg-[#3CABDD]"}`}
                        >
              <span
                  className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg transform transition-transform ${
                      billingCycle === "monthly" ? "translate-x-0" : "translate-x-5"
                  }`}
              ></span>
                        </button>
                        <span className="text-sm font-medium text-white">Yearly</span>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16 -mt-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
                        {/* Professional Card */}
                        <div className="rounded-lg border bg-card text-card-foreground relative flex flex-col border-border shadow-md">
                            <div className="flex flex-col space-y-1.5 p-6 text-center pt-6">
                                <h3 className="tracking-tight text-2xl font-bold text-foreground">Professional</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Individual investors & digital nomads.
                                </p>
                            </div>
                            <div className="p-6 pt-0 flex-1">
                                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${professionalPrice}
                  </span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                                <ul className="space-y-3">
                                    {["Global Market Analysis", "Rental Yield Data", "Standard Support"].map(
                                        (item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CircleCheck className="w-5 h-5 text-[#3CABDD] mt-0.5" />
                                                <span className="text-sm text-foreground">{item}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="flex items-center p-6 pt-4">
                                <button
                                    onClick={() => handleClick("basic")}
                                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 w-full border bg-background text-[#0A1532] hover:text-[#3CABDD] hover:bg-[#0A1532]/5 transition"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>

                        {/* Premium Card */}
                        <div className="rounded-lg bg-card text-card-foreground relative flex flex-col border-[#3CABDD] border-2 shadow-xl scale-105 z-10">
                            <div className="inline-flex items-center rounded-full border text-xs font-semibold absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3CABDD] text-white px-4 py-1">
                                MOST POPULAR
                            </div>
                            <div className="flex flex-col space-y-1.5 p-6 text-center pt-8">
                                <h3 className="tracking-tight text-2xl font-bold text-foreground">Premium</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Serious buyers requiring deep diligence.
                                </p>
                            </div>
                            <div className="p-6 pt-0 flex-1">
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold text-foreground">${premiumPrice}</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Everything in Professional +",
                                        "Full Historical Data (10-Year)",
                                        "Neighborhood Heat Maps",
                                        "Investment Calculator (Smart Fill)",
                                        "Priority Support (<12 Hours)",
                                        "Unlimited Watchlist",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CircleCheck className="w-5 h-5 text-[#3CABDD] mt-0.5" />
                                            <span className="text-sm text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center p-6 pt-4">
                                <button
                                    onClick={() => handleClick("premium")}
                                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 w-full bg-[#0A1532] text-white hover:bg-[#0A1532]/90 transition"
                                >
                                    Start Premium Trial
                                </button>
                            </div>
                        </div>

                        {/* Enterprise / Custom Card */}
                        <div className="rounded-lg border bg-card text-card-foreground relative flex flex-col border-border shadow-md">
                            <div className="flex flex-col space-y-1.5 p-6 text-center pt-6">
                                <h3 className="tracking-tight text-2xl font-bold text-foreground">API & Enterprise</h3>
                                <p className="text-sm text-muted-foreground mt-2">Funds, PropTechs & Agencies.</p>
                            </div>
                            <div className="p-6 pt-0 flex-1">
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold text-foreground">Custom</span>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Everything in Premium +",
                                        "Commercial Usage License",
                                        "JSON API Access",
                                        "Team Seats (5+ Users)",
                                        "Dedicated Account Manager",
                                        "Invoicing & POs",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CircleCheck className="w-5 h-5 text-[#3CABDD] mt-0.5" />
                                            <span className="text-sm text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center p-6 pt-4">
                                <button
                                    onClick={() => handleClick("enterprise")}
                                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 w-full bg-background text-[#0A1532] hover:text-[#3CABDD] hover:bg-[#0A1532]/5 transition"
                                >
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                        Compare Plans
                    </h2>
                    <div className="max-w-5xl mx-auto bg-card rounded-xl shadow-md overflow-hidden">
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 bg-[#0A1532]">
                                    <th className="h-12 px-4 text-left align-middle text-white font-semibold w-1/3">
                                        Feature
                                    </th>
                                    <th className="h-12 px-4 align-middle text-white font-semibold text-center">
                                        Professional
                                    </th>
                                    <th className="h-12 px-4 align-middle text-white font-semibold text-center">
                                        Premium
                                    </th>
                                    <th className="h-12 px-4 align-middle text-white font-semibold text-center">
                                        API
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                {[
                                    { name: "Global Market Analysis", pro: true, premium: true, api: true },
                                    { name: "Rental Yield Data", pro: true, premium: true, api: true },
                                    { name: "Standard Support", pro: true, premium: true, api: true },
                                    { name: "Full Historical Data (10-Year)", pro: false, premium: true, api: true },
                                    { name: "Neighborhood Heat Maps", pro: false, premium: true, api: true },
                                    { name: "Investment Calculator (Smart Fill)", pro: false, premium: true, api: true },
                                    { name: "Priority Support (<12 Hours)", pro: false, premium: true, api: true },
                                    { name: "Unlimited Watchlist", pro: false, premium: true, api: true },
                                    { name: "Commercial Usage License", pro: false, premium: false, api: true },
                                    { name: "JSON API Access", pro: false, premium: false, api: true },
                                    { name: "Team Seats (5+ Users)", pro: false, premium: false, api: true },
                                    { name: "Dedicated Account Manager", pro: false, premium: false, api: true },
                                    { name: "Invoicing & POs", pro: false, premium: false, api: true },
                                ].map((row, index) => {
                                    const bg = index % 2 === 0 ? "bg-card" : "bg-muted/20";
                                    const renderIcon = (value: boolean) =>
                                        value ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-check w-5 h-5 text-[#3CABDD] mx-auto"
                                            >
                                                <path d="M20 6 9 17l-5-5" />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-x w-5 h-5 text-muted-foreground/40 mx-auto"
                                            >
                                                <path d="M18 6 6 18" />
                                                <path d="M6 6 18 18" />
                                            </svg>
                                        );

                                    return (
                                        <tr key={index} className={`border-b transition-colors hover:bg-muted/50 ${bg}`}>
                                            <td className="p-4 align-middle font-medium text-foreground">{row.name}</td>
                                            <td className="p-4 align-middle text-center">{renderIcon(row.pro)}</td>
                                            <td className="p-4 align-middle text-center">{renderIcon(row.premium)}</td>
                                            <td className="p-4 align-middle text-center">{renderIcon(row.api)}</td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {/* Action / CTA Section */}


            {/* FAQ */}
            <FAQ />

            <Footer />
        </div>
    );
};

export default Pricing;
