"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="bg-white text-gray-800">
            <Navbar/>
            <div className=" p-6 max-w-4xl mx-auto space-y-12">

                <section>
                    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                    <p>Effective Date: June 30, 2025</p>

                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>

                    <p className="mt-4">
                        At Estate Atlas, we view Transparency as a core value. We are committed to protecting the privacy and security of the high-net-worth individuals, institutional investors, and analysts who use our platform.
                    </p>
                    <p className="mt-4">
                        This Privacy Policy outlines how we collect, use, and safeguard your information when you use our global real estate intelligence services. By using Estate Atlas, you consent to the data practices described in this policy.
                    </p>

                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">2. Information We Collect</h1>
                    <p className="mt-4">To provide accurate, data-driven insights, we collect specific types of information:</p>

                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Account Information: Name, email address, company name (for Enterprise accounts), and billing details. Note: We do not store credit card numbers; payments are processed via secure third-party providers (Stripe).</li>
                  <li>Usage & Behavioral Data: We track how you interact with our dashboard, including which countries, cities, or specific asset classes (e.g., "European Residential Yields") you analyze.</li>
                        <li>Technical Data: IP address, browser type, device information, and login timestamps to ensure account security and prevent fraud.</li>
                    </ul>
                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">3. How We Use Your Data</h1>
                    <p className="mt-4">We use your data to power our "Innovation" and deliver a premium experience:</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Service Delivery: To provide access to the specific datasets, charts, and reports included in your subscription.</li>
                        <li>AI & Automated Personalization: We use automated algorithms and Artificial Intelligence to analyze your usage patterns. This allows us to recommend relevant markets, highlight emerging trends that match your investment criteria, and personalize your dashboard experience.</li>
                        <li>Communication: To send critical market alerts, subscription updates, and product announcements. You can opt out of marketing communications at any time.</li>
                        <li>Platform Improvement: We aggregate anonymized user data to train our internal models, improving the accuracy of our "Global Reach" and market sentiment analysis.</li>
                    </ul>
                </section>

                <section>
                    <h1 className="text-2xl font-bold mb-4">4. International Data Rights (GDPR, CCPA & Global)</h1>
                    <p className="mt-4">Estate Atlas operates globally. We respect your rights under major international privacy frameworks, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>
                    <p className="mt-4">Regardless of where you are located, we grant you the following rights:</p>

                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Right to Access: You may request a copy of the personal data we hold about you.</li>
                        <li>Right to Rectification: You may correct incomplete or inaccurate data.</li>
                        <li>Right to Erasure ("Right to be Forgotten"): You may request that we delete your personal information, subject to our legal obligations to retain transaction records for tax purposes.</li>
                        <li>Right to Opt-Out of Profiling: You have the right to opt out of automated decision-making or AI-driven profiling for marketing purposes.</li>

                        <p className="mt-4">To exercise these rights, please contact our Data Protection Officer at: support@estateatlas.com.</p>

                    </ul>
                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">5. Data Sharing & Third Parties
                    </h1>
                    <p className="mt-4">We are a paid subscription service, not an ad network. We do not sell your personal data to third parties. We only share data with trusted infrastructure partners necessary to operate our business:</p>

                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Payment Processors: To securely handle billing.</li>
                        <li>Cloud Infrastructure: To host our secure databases (e.g., AWS, Azure).</li>
                        <li>Analytics Providers: To understand platform performance (e.g., Google Analytics).</li>
                    </ul>
                </section>
                <section>
                    <h1 className="text-2xl font-bold mb-4">6. Data Security</h1>
                    <p className="mt-4">We employ "Bank-Grade" security measures to protect your account, including SSL encryption, two-factor authentication (2FA) support, and regular security audits. While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet is 100% secure.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>

                    <p className="mt-4">
                        We retain your personal data only for as long as is necessary to fulfill the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </p>

                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>

                    <p className="mt-4">
                        We may update our Privacy Policy from time to time to reflect changes in our "Innovation" roadmap or legal requirements. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>

                </section>

                <footer className="text-sm text-gray-500 mt-10">
                    <h1 className="text-2xl font-bold mb-4">9. Contact Us</h1>
                    If you have any questions about this Privacy Policy, please contact us: Email:  <a href="mailto:support@estateatlas.com" className="underline">support@estateatlas.com</a>
                </footer>
            </div>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;