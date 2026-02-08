// src/components/GlobalMarketDashboard.tsx
"use client";

import React, { useState } from "react";

interface TableRow {
    country: string;
    flag: string;
    estateAtlasScore?: number;
    growth5Year?: string;
    avgPrice?: string;
    rentalYield?: string;
    change1Year?: string;
    change5Year?: string;
    change10Year?: string;
    trend?: "green" | "red" | "amber";
    estTotalEntryCost?: string;
    annualPropertyTax?: string;
    rentalIncomeTax?: string;
    capitalGainsTax?: string;
    legalSystem?: string;
    avgEvictionTime?: string;
    securityDepositLimit?: string;
    avgFixedRate?: string;
    maxLTV?: string;
    lendingDifficulty?: string;
}

// ==== YOUR DATA ====
// leagueTable, priceTrends, taxMatrix, legalRisk, financing
// (Use exactly what you provided)
const leagueTable: TableRow[] = [
    { country: "Vietnam", flag: "🇻🇳", estateAtlasScore: 92, growth5Year: "+48.2%", avgPrice: "$2,850", rentalYield: "7.8%" },
    { country: "Argentina", flag: "🇦🇷", estateAtlasScore: 88, growth5Year: "+45.3%", avgPrice: "$1,890", rentalYield: "7.2%" },
    { country: "Paraguay", flag: "🇵🇾", estateAtlasScore: 85, growth5Year: "+38.7%", avgPrice: "$1,200", rentalYield: "8.1%" },
    { country: "Philippines", flag: "🇵🇭", estateAtlasScore: 82, growth5Year: "+35.4%", avgPrice: "$3,150", rentalYield: "6.9%" },
    { country: "Colombia", flag: "🇨🇴", estateAtlasScore: 79, growth5Year: "+32.1%", avgPrice: "$2,400", rentalYield: "6.5%" },
    { country: "Thailand", flag: "🇹🇭", estateAtlasScore: 76, growth5Year: "+28.9%", avgPrice: "$4,200", rentalYield: "5.8%" },
];

// Helper to get badge color for Estate Atlas Score
const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800 border-green-200";
    if (score >= 80) return "bg-emerald-100 text-emerald-700 border-emerald-200";
    if (score >= 70) return "bg-amber-100 text-amber-800 border-amber-200";
    return "bg-red-100 text-red-700 border-red-200";
};
const priceTrends: TableRow[] = [ { country: "Vietnam", flag: "🇻🇳", change1Year: "+12.4%", change5Year: "+48.2%", change10Year: "+142.5%", trend: "green" }, { country: "Argentina", flag: "🇦🇷", change1Year: "+8.7%", change5Year: "+45.3%", change10Year: "+128.4%", trend: "green" }, { country: "Germany", flag: "🇩🇪", change1Year: "+1.2%", change5Year: "+8.5%", change10Year: "+42.3%", trend: "red" }, { country: "France", flag: "🇫🇷", change1Year: "+0.8%", change5Year: "+6.2%", change10Year: "+38.1%", trend: "red" }, { country: "Philippines", flag: "🇵🇭", change1Year: "+6.8%", change5Year: "+35.4%", change10Year: "+98.7%", trend: "green" }, { country: "Thailand", flag: "🇹🇭", change1Year: "+5.2%", change5Year: "+28.9%", change10Year: "+76.4%", trend: "amber" }, ];
const taxMatrix: TableRow[] = [ { country: "UAE", flag: "🇦🇪", estTotalEntryCost: "0%", annualPropertyTax: "0%", rentalIncomeTax: "0%", capitalGainsTax: "0%" }, { country: "Vietnam", flag: "🇻🇳", estTotalEntryCost: "1.5%", annualPropertyTax: "0.03%", rentalIncomeTax: "5%", capitalGainsTax: "2%" }, { country: "Paraguay", flag: "🇵🇾", estTotalEntryCost: "3.5%", annualPropertyTax: "0.5%", rentalIncomeTax: "10%", capitalGainsTax: "10%" }, { country: "Argentina", flag: "🇦🇷", estTotalEntryCost: "6.5%", annualPropertyTax: "0.2-1.5%", rentalIncomeTax: "Flat 20%", capitalGainsTax: "15%" }, { country: "France", flag: "🇫🇷", estTotalEntryCost: "10.8%", annualPropertyTax: "0.5-1.5%", rentalIncomeTax: "20-45%", capitalGainsTax: "36.2%" }, { country: "Germany", flag: "🇩🇪", estTotalEntryCost: "12.2%", annualPropertyTax: "0.35%", rentalIncomeTax: "14-45%", capitalGainsTax: "25%" }, ];
const legalRisk: TableRow[] = [
    { country: "UAE", flag: "🇦🇪", legalSystem: "Pro-Landlord", avgEvictionTime: "1 Month", securityDepositLimit: "No Limit" },
    { country: "Paraguay", flag: "🇵🇾", legalSystem: "Pro-Landlord", avgEvictionTime: "2 Months", securityDepositLimit: "2 Months" },
    { country: "Vietnam", flag: "🇻🇳", legalSystem: "Pro-Landlord", avgEvictionTime: "3 Months", securityDepositLimit: "No Limit" },
    { country: "Germany", flag: "🇩🇪", legalSystem: "Pro-Tenant", avgEvictionTime: "12 Months", securityDepositLimit: "3 Months" },
    { country: "France", flag: "🇫🇷", legalSystem: "Pro-Tenant", avgEvictionTime: "18 Months", securityDepositLimit: "1 Month" },
    { country: "Netherlands", flag: "🇳🇱", legalSystem: "Pro-Tenant", avgEvictionTime: "6 Months", securityDepositLimit: "2 Months" },
];

// Helper to get badge color
const getBadgeColor = (system: string) => {
    if (system === "Pro-Landlord") return "bg-green-100 text-green-800 border-green-200";
    if (system === "Pro-Tenant") return "bg-red-100 text-red-700 border-red-200";
    return "";
};

const financing: TableRow[] = [
    { country: "Japan", flag: "🇯🇵", avgFixedRate: "1.2%", maxLTV: "80%", lendingDifficulty: "Easy" },
    { country: "Germany", flag: "🇩🇪", avgFixedRate: "3.5%", maxLTV: "70%", lendingDifficulty: "Moderate" },
    { country: "USA", flag: "🇺🇸", avgFixedRate: "6.8%", maxLTV: "80%", lendingDifficulty: "Easy" },
    { country: "Vietnam", flag: "🇻🇳", avgFixedRate: "8.5%", maxLTV: "60%", lendingDifficulty: "Moderate" },
    { country: "Argentina", flag: "🇦🇷", avgFixedRate: "12.0%", maxLTV: "50%", lendingDifficulty: "Hard" },
    { country: "Turkey", flag: "🇹🇷", avgFixedRate: "35.0%", maxLTV: "40%", lendingDifficulty: "Hard" },
];

const getRateColor = (rate: string) => {
    const num = parseFloat(rate);
    if (num <= 5) return "text-green-600";
    if (num <= 15) return "text-amber-600";
    return "text-red-600";
};

const getDifficultyBadge = (difficulty: string) => {
    const colors = {
        Easy: "bg-green-100 text-green-800 border-green-200",
        Moderate: "bg-amber-100 text-amber-800 border-amber-200",
        Hard: "bg-red-100 text-red-700 border-red-200",
    };
    return colors[difficulty as keyof typeof colors] || "bg-muted text-muted-foreground border-muted";
};
const GlobalMarketDashboard: React.FC = () => {
    // 1️⃣ Tabs
    const tabs = [
        { id: "league", label: "Rental Yields", data: "leagueTable" },
        { id: "price", label: "Price History (1/5/10 Yr)", data: "priceTrends" },
        { id: "tax", label: "Taxes & Transaction Costs", data: "taxMatrix" },
        { id: "legal", label: "Landlord/Tenant Laws", data: "legalRisk" },
        { id: "finance", label: "Mortgage Rates", data: "financing" },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    // 2️⃣ Render your tables
    const renderTable = (
        title: string,
        headers: string[],
        rows: TableRow[],
        renderRow: (row: TableRow, idx: number) => React.ReactNode
    ) => (
        <div className="p-4">
            <h2 className="font-semibold text-lg mb-2">{title}</h2>
            <div className="overflow-x-auto border border-border rounded-md">
                <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                    <tr>
                        {headers.map((h) => (
                            <th key={h} className="px-4 py-4 text-left font-medium">{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((row, idx) => renderRow(row, idx))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case "league":
                return renderTable(
                    "Global Market League Table",
                    ["Country", "Estate Atlas Score", "5-Year Growth %", "Avg Price", "Rental Yield"],
                    leagueTable,
                    (row, idx) => (
                        <tr
                            key={row.country}
                            className={`border-b transition-colors hover:bg-muted/50 ${idx % 2 === 0 ? "bg-muted/20" : "bg-card"}`}
                        >
                            <td className="px-4 py-2 flex items-center gap-2 font-medium">
                                {row.flag} {row.country}
                            </td>
                            <td className="px-4 py-2 text-center">
                                <div
                                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold border ${getScoreBadgeColor(
                                        row.estateAtlasScore ?? 0
                                    )}`}
                                >
                                    {row.estateAtlasScore}
                                </div>
                            </td>
                            <td className="px-4 py-2 text-right text-green-600 font-medium">{row.growth5Year}</td>
                            <td className="px-4 py-2 text-right font-medium">{row.avgPrice}</td>
                            <td className="px-4 py-2 text-right font-bold text-sky">{row.rentalYield}</td>
                        </tr>
                    )
                );
            case "price":
                return renderTable(
                    "Global Price Appreciation Trends",
                    ["Country", "1-Year %", "5-Year %", "10-Year %", "Trend"],
                    priceTrends,
                    (row, idx) => (
                        <tr key={row.country} className={idx % 2 === 0 ? "bg-muted/20" : "bg-card"}>
                            <td className="px-4 py-2 flex items-center gap-2">{row.flag} {row.country}</td>
                            <td className="px-4 py-2">{row.change1Year}</td>
                            <td className="px-4 py-2">{row.change5Year}</td>
                            <td className="px-4 py-2">{row.change10Year}</td>
                            <td className={`px-4 py-2 font-bold ${row.trend === "green" ? "text-green-600" : row.trend === "red" ? "text-red-600" : "text-amber-500"}`}>●</td>
                        </tr>
                    )
                );
            case "tax":
                return renderTable(
                    "Global Real Estate Tax Matrix",
                    ["Country", "Est. Entry Cost", "Annual Property Tax", "Rental Income Tax", "Capital Gains Tax"],
                    taxMatrix,
                    (row, idx) => (
                        <tr key={row.country} className={idx % 2 === 0 ? "bg-muted/20" : "bg-card"}>
                            <td className="px-4 py-2 flex items-center gap-2">{row.flag} {row.country}</td>
                            <td className="px-4 py-2">{row.estTotalEntryCost}</td>
                            <td className="px-4 py-2">{row.annualPropertyTax}</td>
                            <td className="px-4 py-2">{row.rentalIncomeTax}</td>
                            <td className="px-4 py-2">{row.capitalGainsTax}</td>
                        </tr>
                    )
                );
            case "legal":
                return renderTable(
                    "Legal Risk & Landlord Protection",
                    ["Country", "Legal System", "Avg Eviction Time", "Security Deposit Limit"],
                    legalRisk,
                    (row, idx) => (
                        <tr
                            key={row.country}
                            className={`border-b transition-colors hover:bg-muted/50 ${idx % 2 === 0 ? "bg-muted/20" : "bg-card"}`}
                        >
                            <td className="px-4 py-2 flex items-center gap-2 font-medium">
                                {row.flag} {row.country}
                            </td>
                            <td className="px-4 py-2 text-center">
                                <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${getBadgeColor(row.legalSystem ?? "")}`}>
                                    {row.legalSystem}
                                </div>
                            </td>
                            <td className="px-4 py-2 text-right font-medium">{row.avgEvictionTime}</td>
                            <td className="px-4 py-2 text-right">{row.securityDepositLimit}</td>
                        </tr>
                    )
                );
            case "finance":
                return renderTable(
                    "International Financing Conditions",
                    ["Country", "Avg Fixed Rate", "Max LTV (Non-Res)", "Lending Difficulty"],
                    financing,
                    (row, idx) => (
                        <tr
                            key={row.country}
                            className={`transition-colors border-b ${
                                idx % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                            } hover:bg-muted/50`}
                        >
                            <td className="p-4 flex items-center gap-2 font-medium">
                                <span className="text-lg">{row.flag}</span>
                                <span>{row.country}</span>
                            </td>
                            <td className={`p-4 text-right font-medium ${getRateColor(row.avgFixedRate || "0")}`}>
                                {row.avgFixedRate}
                            </td>
                            <td className="p-4 text-right font-medium">{row.maxLTV}</td>
                            <td className="p-4 text-center">
                                <div
                                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${getDifficultyBadge(
                                        row.lendingDifficulty || ""
                                    )}`}
                                >
                                    {row.lendingDifficulty}
                                </div>
                            </td>
                        </tr>

                    )
                );
            default:
                return <p>No data available</p>;
        }
    };

    return (
        <div className="flex flex-col bg-white mt-4 lg:flex-row gap-4 p-6">
            {/* --- Left Tabs --- */}
            <div className="w-full lg:w-64 bg-muted/50 border border-border rounded-md p-4">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Metrics</h3>
                <div className="flex flex-col text-sm space-y-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`text-left px-3 py-2 rounded-md font-medium transition-colors ${
                                activeTab === tab.id
                                    ? "bg-[#071636] text-white shadow-sm"
                                    : "hover:bg-card/50 text-muted-foreground"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- Right Content --- */}
            <div className="flex-1">{renderContent()}</div>
        </div>
    );
};

export default GlobalMarketDashboard;
