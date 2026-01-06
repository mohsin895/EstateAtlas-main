"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
    return (
        <div className="bg-white text-gray-800">
            <Navbar/>
            <div className=" p-6 max-w-4xl mx-auto space-y-12">

                <section>
                    <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>
                    <p>Last Updated: February 2025</p>

                </section>

                <section>
                    <h1 className="text-3xl font-bold mb-4">1.Introduction</h1>

                    <p className="mt-4">
                        At Estate Atlas, we believe in Transparency and Innovation. To deliver a premium, data-driven experience, we use cookies and similar tracking technologies (pixels, beacons, and local storage) to enhance platform performance, secure your account, and personalize the market insights you see.
                    </p>
                    <p className="mt-4">
                        This policy explains what cookies are, how we use them, and how you can control them.
                    </p>




                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. What Are Cookies?</h2>

                    <p className="mt-4">
                        Cookies are small text files stored on your device when you visit a website. For a sophisticated platform like Estate Atlas, cookies are essential. They allow our "Global Reach" infrastructure to remember your currency preferences, keep you logged into your secure dashboard, and load heavy data visualizations quickly.
                    </p>

                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. How We Use Cookies</h2>

                    <p className="mt-4">
                        We categorize our cookies into four specific functions to ensure clarity:
                    </p>
                    <h2 className="text-2xl font-bold mb-4">A. Strictly Necessary Cookies (The Essentials)</h2>
                    <p className="mt-4">
                    </p>
                    <p className="mt-4">
                </p>

                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Verifying your identity when you log in and preventing fraudulent access.</li>
                        <li>Processing secure subscription transactions via our payment partners (e.g., Stripe).</li>
                        <li>Ensuring our servers remain stable during high-traffic market events.</li>
                        <li>You cannot opt out of these cookies as the site will not function without them.</li>
                    </ul>
                    <h2 className="text-2xl font-bold mb-4">B. Performance & Analytics Cookies (The Data)</h2>

                    <p className="mt-4">These cookies help us understand how investors use our tools. We use them to:</p>

                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Identify which "Country Comparison" charts are most popular.</li>
                        <li>Track load times for our heat maps and data visualizations.</li>
                        <li>Detect and resolve technical errors in real-time.</li>
                        <li>Data collected here is aggregated and anonymized.</li>
                    </ul>
                    <h2 className="text-2xl font-bold mb-4">C. Functional & AI Cookies (The Personalization)</h2>
                    <p className="mt-4">These cookies power our Innovation. They allow us to:</p>

                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Remember your preferred settings (e.g., "Always show prices in USD" or "Dark Mode").</li>
                        <li>AI Personalization: Help our algorithms understand your search history (e.g., "Yields in Southern Europe") to recommend similar high-potential markets on your next visit.</li>

                    </ul>

                    <h2 className="text-2xl font-bold mb-4">D. Marketing & Retargeting Cookies (The Reach)</h2>
                    <p className="mt-4">We use these to ensure our marketing is relevant to professional investors.</p>

                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>We may use pixels from platforms like LinkedIn or Google to show you ads for Estate Atlas features relevant to your recent research (e.g., promoting our "API Enterprise Plan" if you visited the API documentation)</li>
                        <li>We do not sell your data to third-party ad networks.</li>

                    </ul>
                </section>

                <section>
                    <h1 className="text-2xl font-bold mb-4">4. Managing Your Preferences</h1>
                    <p className="mt-4">You have full control over your data.</p>

                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Cookie Banner: When you first visit Estate Atlas, you can choose to "Accept All" or "Manage Settings" to opt out of non-essential cookies.</li>
                        <li>Browser Settings: Most modern browsers (Chrome, Safari, Edge) allow you to block or delete cookies in your privacy settings.</li>
                        <li>Please Note: Disabling Functional cookies may prevent certain interactive charts and AI recommendations from working correctly.</li>

                    </ul>
                </section>
                <section>
                  <h1 className="text-2xl font-bold mb-4">5. Updates to This Policy</h1>
                    <p className="mt-4">We may update this policy to reflect changes in our technology stack or international regulations. Check the "Last Updated" date at the top of this page to see when the latest changes were made.</p>
                </section>



                <footer className="text-sm text-gray-500 mt-10">
                    <h1 className="text-2xl font-bold mb-4">6. Contact</h1>
                    For questions, contact us at <a href="mailto:support@estateatlas.com" className="underline">support@estateatlas.com</a>
                </footer>
            </div>
            <Footer/>
        </div>
    );
};

export default CookiesPolicy;