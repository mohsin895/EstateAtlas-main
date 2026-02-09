"use client";

import React from "react";
import { LucideCalendar, LucideCrown, LucideCheck, LucideSparkles } from "lucide-react";
import InvoiceHistory from "@/components/InvoiceHistory";
import PaymentMethodCard, { PaymentMethod } from "@/components/PaymentMethodCard";

// -------------------- Types --------------------
interface Invoice {
    date: string;
    id: string;
    amount: string;
    status: "Paid" | "Pending";
}

// -------------------- Data --------------------
const payment: PaymentMethod = {
    type: "VISA", // Must match allowed union: "VISA" | "MasterCard" | "AMEX"
    lastFour: "4242",
    expiry: "12/2027",
};

const invoices: Invoice[] = [
    { date: "Sept 30, 2025", id: "INV-2025-009", amount: "$29.00", status: "Paid" },
    { date: "Aug 30, 2025", id: "INV-2025-008", amount: "$29.00", status: "Paid" },
    { date: "Jul 30, 2025", id: "INV-2025-007", amount: "$29.00", status: "Paid" },
    { date: "Jun 30, 2025", id: "INV-2025-006", amount: "$29.00", status: "Paid" },
];

// -------------------- Component --------------------
const SubscriptionBilling: React.FC = () => {
    const handleUpdate = () => {
        alert("Update payment method clicked!");
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-heading font-bold text-[#1F2D4A]">
                    Subscription & Billing
                </h1>
                <p className="text-dark-gray mt-1">
                    Manage your plan and payment methods.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Current Plan Card */}
                <div className="rounded-lg bg-card text-card-foreground shadow-sm border border-gray-200">
                    <div className="flex flex-col space-y-1.5 p-6 pb-4">
                        <div className="flex items-center justify-between">
                            <h3 className="tracking-tight text-lg font-heading font-bold text-[#1F2D4A]">
                                Current Plan
                            </h3>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                                Active
                            </div>
                        </div>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                        <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#1F2D4A]">
                Basic Membership
              </span>
                            <span className="text-dark-gray">$29/mo</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-dark-gray">
                            <LucideCalendar className="h-4 w-4" />
                            <span>
                Next billing date: <strong className="text-[#1F2D4A]">Oct 30, 2025</strong>
              </span>
                        </div>
                        <div className="pt-2">
                            <button className="text-sm text-red-500 hover:text-red-600 hover:underline transition-colors">
                                Cancel Subscription
                            </button>
                        </div>
                    </div>
                </div>

                {/* Upgrade to Premium Card */}
                <div className="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-sky-blue bg-gradient-to-br from-sky-blue/5 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2">
                        <LucideSparkles className="h-5 w-5 text-sky-blue" />
                    </div>
                    <div className="flex flex-col space-y-1.5 p-6 pb-4">
                        <div className="flex items-center gap-2">
                            <LucideCrown className="h-5 w-5 text-amber-500" />
                            <h3 className="tracking-tight text-lg font-heading font-bold text-[#1F2D4A]">
                                Upgrade to Premium
                            </h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Unlock the full power of Estate Atlas
                        </p>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-[#1F2D4A]">$49</span>
                            <span className="text-dark-gray">/month</span>
                        </div>
                        <ul className="space-y-2">
                            {[
                                "Unlock City & Regional Data",
                                "Unlimited Watchlist Countries",
                                "Affiliate Program Access",
                                "Quarterly PDF Reports",
                                "Priority Email Support",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-sm">
                                    <LucideCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                                    <span className="text-dark-gray">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 w-full bg-[#071636] hover:bg-navy/90 text-white">
                            <LucideCrown className="h-4 w-4 mr-2" />
                            Upgrade to Premium
                        </button>
                    </div>
                </div>
            </div>

            {/* Payment Method Card */}
            <PaymentMethodCard payment={payment} onUpdate={handleUpdate} />

            {/* Invoice History */}
            <InvoiceHistory invoices={invoices} />
        </div>
    );
};

export default SubscriptionBilling;
