"use client";

import React from "react";

export interface PaymentMethod {
    type: "VISA" | "MasterCard" | "AMEX";
    lastFour: string;
    expiry: string;
    gradientFrom?: string;
    gradientTo?: string;
}

interface PaymentMethodCardProps {
    payment: PaymentMethod;
    onUpdate?: () => void;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({ payment, onUpdate }) => {
    return (
        <div className="rounded-lg bg-card text-card-foreground shadow-sm border border-gray-200">
            {/* Header */}
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="tracking-tight text-lg font-heading font-bold text-navy flex items-center gap-2">
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
                        className="lucide lucide-credit-card h-5 w-5"
                    >
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                    Payment Method
                </h3>
            </div>

            {/* Card Info */}
            <div className="p-6 pt-0">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Card Type Box */}
                        <div
                            className={`w-16 h-10 rounded-md flex items-center justify-center ${
                                payment.gradientFrom && payment.gradientTo
                                    ? `bg-gradient-to-br from-[${payment.gradientFrom}] to-[${payment.gradientTo}]`
                                    : "bg-gradient-to-br from-[#071636] to-[#0F172A]"
                            }`}
                        >
                            <span className="text-white text-xs font-bold">{payment.type}</span>
                        </div>

                        {/* Card Details */}
                        <div>
                            <p className="font-medium text-[#071636]">
                                {payment.type} ending in {payment.lastFour}
                            </p>
                            <p className="text-sm text-dark-gray">Expires {payment.expiry}</p>
                        </div>
                    </div>

                    {/* Update Button */}
                    <button
                        onClick={onUpdate}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 border-[#071636] text-[#071636] hover:bg-[#071636] hover:text-white"
                    >
                        Update Payment Method
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodCard;
