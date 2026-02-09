// components/PartnerHub.tsx
import React from "react";
import PartnerReferral from "@/components/PartnerReferral";
import RecentReferralActivity from "@/components/RecentReferralActivity";

interface ReferralActivity {
    date: string;
    user: string;
    plan: string;
    commission: string;
    status: "Paid" | "Pending" | "Trial";
}

const referralData: ReferralActivity[] = [
    { date: "Oct 24, 2025", user: "m***@gmail.com", plan: "Premium Monthly", commission: "+$14.70", status: "Paid" },
    { date: "Oct 18, 2025", user: "j***@outlook.com", plan: "Premium Annual", commission: "+$58.80", status: "Pending" },
    { date: "Oct 12, 2025", user: "s***@yahoo.com", plan: "Premium Monthly", commission: "+$14.70", status: "Paid" },
    { date: "Oct 5, 2025", user: "a***@gmail.com", plan: "Premium Monthly", commission: "+$14.70", status: "Trial" },
    { date: "Sep 28, 2025", user: "r***@proton.me", plan: "Premium Annual", commission: "+$58.80", status: "Paid" },
];

const PartnerHub: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold font-heading text-[#0a1532]">Partner Hub</h1>
                <p className="text-muted-foreground">Earn commissions by referring investors to Estate Atlas.</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Total Earnings */}
                <div className="rounded-lg shadow-sm bg-[#0a1532] text-white border-0">
                    <div className="p-6">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-300">Total Earnings</p>
                                <p className="text-3xl font-bold font-heading">$1,250.00</p>
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm text-gray-400">Lifetime Commission</p>
                                </div>
                            </div>
                            <div className="p-3 bg-white/10 rounded-lg">
                                {/* Dollar Sign Icon */}
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
                                    className="lucide lucide-dollar-sign h-6 w-6 text-[#3ba1df]"
                                >
                                    <line x1="12" y1="2" x2="12" y2="22"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pending Payout */}
                <div className="rounded-lg shadow-sm bg-[#0a1532] text-white border-0">
                    <div className="p-6">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-300">Pending Payout</p>
                                <p className="text-3xl font-bold font-heading">$150.00</p>
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm text-gray-400">Next Payout: Oct 1st</p>
                                </div>
                            </div>
                            <div className="p-3 bg-white/10 rounded-lg">
                                {/* Clock Icon */}
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
                                    className="lucide lucide-clock h-6 w-6 text-[#3ba1df]"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active Referrals */}
                <div className="rounded-lg shadow-sm bg-[#0a1532] text-white border-0">
                    <div className="p-6">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-300">Active Referrals</p>
                                <p className="text-3xl font-bold font-heading">12 Users</p>
                                <div className="flex items-center gap-1.5 text-emerald-400">
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
                                        className="lucide lucide-trending-up h-4 w-4 text-emerald-400"
                                    >
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                        <polyline points="16 7 22 7 22 13"></polyline>
                                    </svg>
                                    <p className="text-sm">+2 this week</p>
                                </div>
                            </div>
                            <div className="p-3 bg-white/10 rounded-lg">
                                {/* Users Icon */}
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
                                    className="lucide lucide-users h-6 w-6 text-[#3ba1df]"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PartnerReferral />
            <RecentReferralActivity />

            {/* Other Sections: Referral Link, Payout Settings, Recent Activity */}
            {/* You can continue the same way: replace `class` with `className` and adjust readOnly/input/button props */}
            {/* For brevity, the rest of the code can be broken into smaller React components */}
        </div>
    );
};

export default PartnerHub;
