// components/PartnerReferral.tsx
import React from "react";

const referralLink = "https://estateatlas.com/ref/john.connors";

const PartnerReferral: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Referral Link Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm lg:col-span-2">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="font-semibold tracking-tight text-lg font-heading">Your Unique Referral Link</h3>
                    <p className="text-sm text-muted-foreground">
                        Share this link to earn 20% commission on every referred subscription.
                    </p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            readOnly
                            value={referralLink}
                            className="flex h-10 w-full rounded-md border border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-mono text-sm bg-gray-50"
                        />
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 shrink-0">
                            {/* Copy Icon */}
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
                                className="lucide lucide-copy h-4 w-4 mr-2"
                            >
                                <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                            Copy Link
                        </button>
                    </div>

                    {/* Social Share */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Share on:</span>
                        {/* LinkedIn */}
                        <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9">
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
                                className="lucide lucide-linkedin h-4 w-4 text-[#0077b5]"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width={4} height={12} x={2} y={9}></rect>
                                <circle cx={4} cy={4} r={2}></circle>
                            </svg>
                        </button>
                        {/* Twitter */}
                        <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9">
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
                                className="lucide lucide-twitter h-4 w-4 text-[#1da1f2]"
                            >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </button>
                        {/* WhatsApp */}
                        <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9">
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
                                className="lucide lucide-message-circle h-4 w-4 text-[#25d366]"
                            >
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Payout Settings Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="font-semibold tracking-tight text-lg font-heading">Payout Settings</h3>
                    <p className="text-sm text-muted-foreground">Manage how you receive your earnings.</p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
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
                            className="lucide lucide-circle-check-big h-5 w-5 text-emerald-600"
                        >
                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                            <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <div>
                            <p className="text-sm font-medium text-emerald-800">Stripe Connected</p>
                            <p className="text-xs text-emerald-600">Payouts enabled</p>
                        </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
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
                            className="lucide lucide-credit-card h-4 w-4 mr-2"
                        >
                            <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                            <line x1={2} y1={10} x2={22} y2={10}></line>
                        </svg>
                        Update Payout Method
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PartnerReferral;
