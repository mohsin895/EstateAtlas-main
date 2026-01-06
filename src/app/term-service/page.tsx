"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const TermService = () => {
    return (
        <div className="bg-white text-gray-800">
            <Navbar/>
            <div className=" p-6 max-w-4xl mx-auto space-y-12">

                <section>
                    <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
                    <p>Last Updated: June 30, 2025</p>

                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>

                    <p className="mt-4">
                        Welcome to Estate Atlas. By accessing our website, dashboard, API, or data services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you are accessing these Services on behalf of an organization, you confirm that you have the authority to bind that organization to these terms.
                    </p>

                    <p className="mt-4">
                        These Terms constitute a legally binding agreement between you and Estate Atlas regarding your use of our global real estate intelligence platform.
                    </p>

                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Account Registration & Security</h2>


                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Accuracy: You agree to provide accurate, current, and complete information during registration.</li>
                        <li>Seat Licenses: Unless you are subscribed to an Enterprise Plan, your account is a single-seat license for one individual. Sharing login credentials with colleagues, clients, or third parties is strictly prohibited and is grounds for immediate account termination.</li>
                        <li>Security: You are responsible for safeguarding your password. Estate Atlas is not liable for any loss or damage arising from your failure to protect your account.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. Subscription, Billing & Refunds</h2>


                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Billing Cycle: Subscriptions are billed in advance on a monthly or annual basis. Your subscription will automatically renew unless cancelled prior to the renewal date.</li>
                        <li>7-Day Money-Back Guarantee: We offer a full refund for new subscribers within the first 7 days of the initial purchase.
                        <ul><li>Fair Use Exception: To prevent intellectual property theft, this guarantee is void if our system detects abusive data extraction behaviours, such as bulk downloading, scraping, or accessing more than 20% of the available dataset within the 7-day period.</li></ul>
                        </li>
                        <li>Cancellation: You may cancel your subscription at any time via your account dashboard. You will retain access to the Services until the end of your current billing period. No partial refunds are issued for unused time after the 7-day guarantee window.</li>
                    </ul>
                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">4. Permitted Use & Commercial Rights</h1>
                    <p className="mt-4">We distinguish between "Internal Analysis" and "Redistribution." As a premium data platform, we grant you a limited, non-exclusive, non-transferable license to use our data as follows:</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Allowed (Professional Use): You may use Estate Atlas data for your own investment analysis, internal corporate research, or professional client presentations (e.g., Pitch Decks, Investment Memos), provided that you explicitly credit "Source: Estate Atlas" on all visual or written materials.</li>
                        <li>Prohibited (Redistribution): You may not resell, sublicense, publish, or publicly display our raw data, charts, or "Growth Scores" in a manner that competes with our Service. (For example, you cannot create a public "Global Rental Yields" dashboard using our underlying data).</li>
                    </ul>
                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">5. Prohibited Conduct & AI Restrictions</h1>
                    <p className="mt-4">To protect the integrity of our "Accuracy" and "Innovation," the following actions are strictly prohibited:</p>

                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Scraping: Using bots, spiders, scripts, or any automated method to access, scrape, or extract data from our platform.</li>
                        <li>AI Training: You are strictly prohibited from using Estate Atlas content, data, or proprietary algorithms to train Artificial Intelligence (AI) systems, Large Language Models (LLMs), or machine learning models.</li>
                        <li>Reverse Engineering: Attempting to reverse engineer our predictive algorithms, heat maps, or AVM (Automated Valuation Model) logic.</li>
                    </ul>
                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">6. Enterprise & API Usage</h1>
                    <p className="mt-4">For clients with Enterprise or API access:</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>API Keys: API keys are the property of Estate Atlas and must be kept confidential.</li>
                        <li>Rate Limits: We enforce strict rate limits to ensure system stability. Attempting to circumvent these limits may result in temporary or permanent suspension of API access.</li>
                        <li>Data Caching: You may cache API data for up to 24 hours for performance purposes. Creating a permanent, offline archive of our historical database is prohibited without a specific Data Licensing Agreement.</li>
                    </ul>
                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">7. Intellectual Property</h1>
                    <p className="mt-4">All content on this platform, including but not limited to text, data visualizations, heat maps, logos, and code, is the proprietary property of Estate Atlas and is protected by international copyright and trademark laws.</p>


                </section>
                <section>
                  <h1 className="text-2xl font-bold mb-4">8. Disclaimers & Limitation of Liability</h1>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>No Financial Advice: Estate Atlas provides data "as is." We are not a registered financial advisor or broker. We do not guarantee the accuracy of future projections or "Investment Potential" scores.</li>
                        <li>Liability Cap: To the fullest extent permitted by law, Estate Atlas shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits or data, arising from your use of the Service.</li>
                    </ul>
                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">9. Termination</h1>
                    <p className="mt-4">We reserve the right to suspend or terminate your account immediately, without prior notice or liability, if you breach these Terms specifically regarding account sharing, scraping, or AI training violations.</p>
                </section>

                <footer className="text-sm text-gray-500 mt-10">
                    <h1 className="text-2xl font-bold mb-4">10. Contact Us</h1>
                    For questions, contact us at <a href="mailto:support@estateatlas.com" className="underline">support@estateatlas.com</a>
                </footer>
            </div>
            <Footer />
        </div>
    );
};

export default TermService;