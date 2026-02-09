"use client";

import React from "react";
import { LucideDownload } from "lucide-react";

export interface Invoice {
    date: string;
    id: string;
    amount: string;
    status: "Paid" | "Pending";
}

interface InvoiceHistoryProps {
    invoices: Invoice[];
}

const InvoiceHistory: React.FC<InvoiceHistoryProps> = ({ invoices }) => {
    return (
        <div className="rounded-lg bg-card text-card-foreground shadow-sm border border-gray-200">
            {/* Header */}
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="tracking-tight text-lg font-heading font-bold text-navy">Invoice History</h3>
                <p className="text-sm text-muted-foreground">View and download your past invoices.</p>
            </div>

            {/* Table */}
            <div className="p-6 pt-0">
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead>
                            <tr className="border-b bg-gray-50">
                                <th className="h-12 px-4 text-left font-semibold text-navy">Date</th>
                                <th className="h-12 px-4 text-left font-semibold text-navy">Invoice ID</th>
                                <th className="h-12 px-4 text-right font-semibold text-navy">Amount</th>
                                <th className="h-12 px-4 text-left font-semibold text-navy">Status</th>
                                <th className="h-12 px-4 text-right font-semibold text-navy">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {invoices.map((invoice, index) => (
                                <tr
                                    key={invoice.id}
                                    className={`border-b hover:bg-muted/50 ${
                                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                                    }`}
                                >
                                    <td className="p-4 text-sm text-dark-gray">{invoice.date}</td>
                                    <td className="p-4 text-sm font-medium text-navy">{invoice.id}</td>
                                    <td className="p-4 text-sm text-right font-medium text-navy">{invoice.amount}</td>
                                    <td className="p-4">
                                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                                            {invoice.status}
                                        </div>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-9 rounded-md px-3 text-sky-blue hover:text-sky-blue/80 hover:bg-sky-blue/10">
                                            <LucideDownload className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceHistory;
