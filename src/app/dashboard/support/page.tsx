// components/PrioritySupportForm.tsx
"use client";

import React, { useState } from "react";

type SupportCategory = "data-query" | "billing" | "technical" | "feature" | "other";

interface SupportForm {
    category: SupportCategory | "";
    subject: string;
    message: string;
}

const PrioritySupportForm: React.FC = () => {
    const [form, setForm] = useState<SupportForm>({
        category: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        // Add your API call here
        alert("Ticket submitted!");
    };

    return (
        <div className="min-h-screen bg-muted/30 py-12 px-6">
            <div className="max-w-2xl mx-auto">
                <div className="rounded-lg border text-card-foreground bg-white shadow-lg">
                    <div className="p-8 space-y-8">
                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-600 hover:bg-green-600 text-white font-semibold px-4 py-1.5 text-sm">
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
                                    className="lucide lucide-zap h-3.5 w-3.5 mr-1.5"
                                >
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                </svg>
                                PRIORITY SUPPORT ACTIVE
                            </div>
                            <h1 className="font-heading font-bold text-2xl md:text-3xl text-navy">
                                How can we help you, John?
                            </h1>
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mx-auto">
                                As a Premium Member, your tickets are fast-tracked to our senior analysts.
                                <span className="font-semibold text-foreground"> Avg response: &lt; 12 Hours.</span>
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Category */}
                            <div className="space-y-2">
                                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="category">
                                    What is this regarding?
                                </label>
                                <select
                                    id="category"
                                    className="flex w-full rounded-md border border-input px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    value={form.category}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a category...</option>
                                    <option value="data-query">Data Query / Correction</option>
                                    <option value="billing">Billing & Subscription</option>
                                    <option value="technical">Technical Issue</option>
                                    <option value="feature">Feature Request</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Subject */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Brief summary of the issue..."
                                    className="flex w-full rounded-md border border-input px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-11 bg-white"
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Please provide as much detail as possible..."
                                    rows={6}
                                    className="flex min-h-[80px] w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white resize-none"
                                    value={form.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {/* Priority */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="priority">
                                    Priority Level
                                </label>
                                <input
                                    type="text"
                                    id="priority"
                                    value="High Priority (Premium)"
                                    disabled
                                    className="flex w-full rounded-md border border-input px-3 py-2 text-base bg-muted/50 text-foreground font-medium cursor-not-allowed h-11"
                                />
                            </div>

                            {/* Submit */}
                            <div className="pt-4 space-y-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 h-12 bg-[#1F2D4A] hover:bg-navy/90 text-white rounded-md font-semibold text-base"
                                >
                                    Submit Priority Ticket
                                </button>
                                <p className="text-center">
                                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4">
                                        View Ticket History
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8">
                    Direct Email: support@estateatlas.com
                </p>
            </div>
        </div>
    );
};

export default PrioritySupportForm;
