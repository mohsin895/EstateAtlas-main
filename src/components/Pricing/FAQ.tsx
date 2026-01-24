import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Can I switch plans at any time?",
        answer: "Yes, you can upgrade or downgrade your plan at any time through your account settings."
    },
    {
        question: "Is there a free trial available?",
        answer: "We offer a 14-day free trial for all new users. No credit card required."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and direct bank transfers."
    },
    {
        question: "How accurate is your data?",
        answer: "Our data is sourced from verified providers and updated daily to ensure accuracy."
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes, you can cancel anytime from your account dashboard. Your subscription will remain active until the end of your billing period."
    },
];

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-foreground mb-8">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-lg px-6 shadow-sm transition-all"
                            >
                                <h3 className="flex">
                                    <button
                                        type="button"
                                        onClick={() => toggleIndex(index)}
                                        className={`flex flex-1 items-center justify-between py-4 text-left font-semibold text-foreground hover:text-[#3CABDD] transition-all`}
                                    >
                                        {faq.question}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`h-4 w-[22px] shrink-0 transition-transform duration-200 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </button>
                                </h3>
                                <div
                                    className={`overflow-hidden text-sm transition-all duration-300 ${
                                        isOpen ? "max-h-96 py-4" : "max-h-0"
                                    }`}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
