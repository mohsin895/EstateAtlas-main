'use client';
import React from 'react';
import { LucideLandmark, LucideFileText, LucideTrendingUp, LucideCoins } from "lucide-react";

const AssetDashboard: React.FC = () => {
    const assets = [
        { type: "Studio", avgBuy: 240000, monthlyRent: 1100, grossYield: 5.5, top: true },
        { type: "1-Bed", avgBuy: 350000, monthlyRent: 1450, grossYield: 4.9 },
        { type: "2-Bed", avgBuy: 520000, monthlyRent: 1900, grossYield: 4.3 },
        { type: "3-Bed", avgBuy: 780000, monthlyRent: 2400, grossYield: 3.6 },
    ];

    const maxYield = Math.max(...assets.map(a => a.grossYield));

    return (
        <div className="grid grid-cols-1 mt-4 lg:grid-cols-3 gap-6">

            {/* Asset Table */}
            <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200 lg:col-span-2">
                <div className="flex flex-col space-y-1.5 p-6 pb-3">
                    <h3 className="font-semibold tracking-tight font-heading text-lg text-navy">
                        Asset Class Performance
                    </h3>
                </div>
                <div className="p-6 pt-0">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors bg-muted/50 hover:bg-muted/50">
                                <th className="h-12 px-4 text-left align-middle font-semibold text-navy">Asset Class</th>
                                <th className="h-12 px-4 text-right align-middle font-semibold text-navy">Avg Buy Price</th>
                                <th className="h-12 px-4 text-right align-middle font-semibold text-navy">Avg Monthly Rent</th>
                                <th className="h-12 px-4 text-right align-middle font-semibold text-navy">Gross Yield</th>
                            </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                            {assets.map(asset => (
                                <tr
                                    key={asset.type}
                                    className={`border-b transition-colors hover:bg-muted/50 ${
                                        asset.grossYield === maxYield ? "ring-1 ring-green-400 bg-green-50" : "bg-card"
                                    }`}
                                >
                                    <td className="p-4 align-middle font-medium flex items-center gap-2">
                                        {asset.type}
                                        {asset.top && (
                                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold bg-green-100 text-green-700 border-green-200 text-xs">
                                                Top Performer
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-4 align-middle text-right">€{asset.avgBuy.toLocaleString()}</td>
                                    <td className="p-4 align-middle text-right">€{asset.monthlyRent.toLocaleString()}</td>
                                    <td className="p-4 align-middle text-right font-bold text-green-600">{asset.grossYield}%</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* National Context */}
            <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200">
                <div className="flex flex-col space-y-1.5 p-6 pb-3">
                    <h3 className="font-semibold tracking-tight font-heading text-lg text-navy">
                        National Context (Germany)
                    </h3>
                </div>
                <div className="p-6 pt-0 space-y-4">
                    <ContextRow Icon={LucideLandmark} label="Fixed Mortgage Rate" value="3.5%" />
                    <ContextRow Icon={LucideFileText} label="Property Transfer Tax" value="6.0%" />
                    <ContextRow Icon={LucideTrendingUp} label="Inflation Rate" value="2.4%" />
                    <ContextRow Icon={LucideCoins} label="Currency" value="EUR" />
                </div>
            </div>

        </div>
    );
};

export default AssetDashboard;

// ----------------------
// Helper Component
// ----------------------
type ContextRowProps = {
    Icon: React.ElementType;
    label: string;
    value: string;
};
const ContextRow: React.FC<ContextRowProps> = ({ Icon, label, value }) => (
    <div className="flex justify-between items-center py-2 border-b last:border-b-0">
        <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-sky" />
            <span className="text-sm text-dark-gray">{label}</span>
        </div>
        <span className="font-semibold text-navy">{value}</span>
    </div>
);
