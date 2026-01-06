"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const DataDesclaimer = () => {
    return (
        <div className="bg-white text-gray-800">
            <Navbar/>
            <div className=" p-6 max-w-4xl mx-auto space-y-12">

                <section>
                    <h1 className="text-3xl font-bold mb-4">Data Methodology & Disclaimer</h1>
                    <p>Effective Date: June 30, 2025</p>

                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Our Commitment to Accuracy</h2>
                    <p className="mt-4">At Estate Atlas, our mission is to empower investors, analysts, and professionals with accurate, transparent, and actionable property data. We strive to be the world's leading source of international real estate intelligence, helping you build global portfolios with confidence.</p>
                    <p className="mt-4">
                        However, real estate markets are dynamic. While we employ rigorous data cleaning and verification standards, the insights provided on this platform are for informational and research purposes only. They do not constitute certified financial advice, legal counsel, or a guaranteed appraisal of value.
                    </p>

                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Data Sourcing Ecosystem</h2>

                    <p className="mt-4">
                        Our "Global Reach" relies on a sophisticated hybrid of official records and proprietary aggregation. To ensure our insights transcend borders, we source data from:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Official Registries: Direct feeds from government land registries, central banks, and census bureaus where available.</li>
                        <li>Strategic Partnerships: Collaborations with reputable real estate investment firms and financial institutions to validate local market nuances.</li>
                        <li>Market Aggregation: We analyze thousands of active listings across international markets to derive "Median Price," "Rental Yield," and "Demand" metrics.</li>
                    </ul>

                    <p className="mt-4">Note: While we vet our sources for credibility, Estate Atlas cannot guarantee the real-time accuracy of third-party public records or external feeds.</p>
                </section>

                <section>

                    <h2 className="text-2xl font-bold mb-4">3. Methodology & Metric Definitions</h2>

                    <p className="mt-4">
                        To maintain Transparency, we define our core metrics as follows to help you make consistent cross-border comparisons:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Rental Yields: Unless otherwise stated, yields are calculated on a Gross basis (Annual Rental Income / Purchase Price). Investors should independently account for local taxes, management fees, and maintenance costs in their net yield calculations.</li>
                        <li>Capital Appreciation: Historical growth rates are based on 1, 5, and 10-year trend lines. Past performance is not indicative of future results.</li>
                        <li>Currency Normalization: To facilitate global comparison, local currency figures may be normalized to USD or EUR. Currency exchange rate fluctuations may impact actual investment returns.</li>
                    </ul>
                </section>

                <section>
                    <h1 className="text-2xl font-bold mb-4">4. Predictive Analytics & AI Disclosure</h1>
                    <p className="mt-4">Estate Atlas leverages Innovation and advanced technology to simplify complex market analysis.</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Algorithmic Insights: Certain "Growth Scores," heat maps, and "Investment Potential" ratings are generated using proprietary algorithms and predictive modeling. These are probabilistic estimates based on historical patterns, not guarantees of future value.</li>
                        <li>Automated Valuation Models (AVM): Any estimated property values shown are computer-generated estimates and should be verified by a licensed local appraiser before purchase.</li>
                        <li>No Reverse Engineering: Users are strictly prohibited from attempting to reverse-engineer, decompile, or scrape these algorithms for the purpose of training third-party Artificial Intelligence (AI) or Machine Learning (LLM) models.</li>
                    </ul>
                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">5. Limitation of Liability</h1>
                    <p className="mt-4">By using Estate Atlas, you acknowledge that you are solely responsible for your investment decisions. Estate Atlas, its officers, and partners will not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our data.</p>
                    <p className="mt-4">Real estate investments carry risks, including illiquidity and loss of capital. Always consult with a qualified solicitor, tax advisor, or real estate professional in the specific jurisdiction where you intend to invest.</p>
                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">6. Data Quality Reporting</h1>
                    <p className="mt-4">We are committed to Accuracy. If you spot an anomaly in our datasets, please help us improve the ecosystem by reporting it to our data team. Contact: support@estateatlas.com</p>

                </section>


            </div>
            <Footer/>
        </div>
    );
};

export default DataDesclaimer;