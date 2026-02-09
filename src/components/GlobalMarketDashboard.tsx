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
const leagueTable: TableRow[] = [
    { country: "Vietnam", flag: "🇻🇳", estateAtlasScore: 92, growth5Year: "+48.2%", avgPrice: "$2,850", rentalYield: "7.8%" },
    { country: "Argentina", flag: "🇦🇷", estateAtlasScore: 88, growth5Year: "+45.3%", avgPrice: "$1,890", rentalYield: "7.2%" },
    { country: "Paraguay", flag: "🇵🇾", estateAtlasScore: 85, growth5Year: "+38.7%", avgPrice: "$1,200", rentalYield: "8.1%" },
    { country: "Philippines", flag: "🇵🇭", estateAtlasScore: 82, growth5Year: "+35.4%", avgPrice: "$3,150", rentalYield: "6.9%" },
    { country: "Colombia", flag: "🇨🇴", estateAtlasScore: 79, growth5Year: "+32.1%", avgPrice: "$2,400", rentalYield: "6.5%" },
    { country: "Thailand", flag: "🇹🇭", estateAtlasScore: 76, growth5Year: "+28.9%", avgPrice: "$4,200", rentalYield: "5.8%" },
];

const priceTrends: TableRow[] = [
    { country: "Vietnam", flag: "🇻🇳", change1Year: "+12.4%", change5Year: "+48.2%", change10Year: "+142.5%", trend: "green" },
    { country: "Argentina", flag: "🇦🇷", change1Year: "+8.7%", change5Year: "+45.3%", change10Year: "+128.4%", trend: "green" },
    { country: "Germany", flag: "🇩🇪", change1Year: "+1.2%", change5Year: "+8.5%", change10Year: "+42.3%", trend: "red" },
    { country: "France", flag: "🇫🇷", change1Year: "+0.8%", change5Year: "+6.2%", change10Year: "+38.1%", trend: "red" },
    { country: "Philippines", flag: "🇵🇭", change1Year: "+6.8%", change5Year: "+35.4%", change10Year: "+98.7%", trend: "green" },
    { country: "Thailand", flag: "🇹🇭", change1Year: "+5.2%", change5Year: "+28.9%", change10Year: "+76.4%", trend: "amber" },
];

const taxMatrix: TableRow[] = [
    { country: "UAE", flag: "🇦🇪", estTotalEntryCost: "0%", annualPropertyTax: "0%", rentalIncomeTax: "0%", capitalGainsTax: "0%" },
    { country: "Vietnam", flag: "🇻🇳", estTotalEntryCost: "1.5%", annualPropertyTax: "0.03%", rentalIncomeTax: "5%", capitalGainsTax: "2%" },
    { country: "Paraguay", flag: "🇵🇾", estTotalEntryCost: "3.5%", annualPropertyTax: "0.5%", rentalIncomeTax: "10%", capitalGainsTax: "10%" },
    { country: "Argentina", flag: "🇦🇷", estTotalEntryCost: "6.5%", annualPropertyTax: "0.2-1.5%", rentalIncomeTax: "Flat 20%", capitalGainsTax: "15%" },
    { country: "France", flag: "🇫🇷", estTotalEntryCost: "10.8%", annualPropertyTax: "0.5-1.5%", rentalIncomeTax: "20-45%", capitalGainsTax: "36.2%" },
    { country: "Germany", flag: "🇩🇪", estTotalEntryCost: "12.2%", annualPropertyTax: "0.35%", rentalIncomeTax: "14-45%", capitalGainsTax: "25%" },
];

const legalRisk: TableRow[] = [
    { country: "UAE", flag: "🇦🇪", legalSystem: "Pro-Landlord", avgEvictionTime: "1 Month", securityDepositLimit: "No Limit" },
    { country: "Paraguay", flag: "🇵🇾", legalSystem: "Pro-Landlord", avgEvictionTime: "2 Months", securityDepositLimit: "2 Months" },
    { country: "Vietnam", flag: "🇻🇳", legalSystem: "Pro-Landlord", avgEvictionTime: "3 Months", securityDepositLimit: "No Limit" },
    { country: "Germany", flag: "🇩🇪", legalSystem: "Pro-Tenant", avgEvictionTime: "12 Months", securityDepositLimit: "3 Months" },
    { country: "France", flag: "🇫🇷", legalSystem: "Pro-Tenant", avgEvictionTime: "18 Months", securityDepositLimit: "1 Month" },
    { country: "Netherlands", flag: "🇳🇱", legalSystem: "Pro-Tenant", avgEvictionTime: "6 Months", securityDepositLimit: "2 Months" },
];

const financing: TableRow[] = [
    { country: "Japan", flag: "🇯🇵", avgFixedRate: "1.2%", maxLTV: "80%", lendingDifficulty: "Easy" },
    { country: "Germany", flag: "🇩🇪", avgFixedRate: "3.5%", maxLTV: "70%", lendingDifficulty: "Moderate" },
    { country: "USA", flag: "🇺🇸", avgFixedRate: "6.8%", maxLTV: "80%", lendingDifficulty: "Easy" },
    { country: "Vietnam", flag: "🇻🇳", avgFixedRate: "8.5%", maxLTV: "60%", lendingDifficulty: "Moderate" },
    { country: "Argentina", flag: "🇦🇷", avgFixedRate: "12.0%", maxLTV: "50%", lendingDifficulty: "Hard" },
    { country: "Turkey", flag: "🇹🇷", avgFixedRate: "35.0%", maxLTV: "40%", lendingDifficulty: "Hard" },
];

// Helper functions
const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800 border-green-200";
    if (score >= 80) return "bg-emerald-100 text-emerald-700 border-emerald-200";
    if (score >= 70) return "bg-amber-100 text-amber-800 border-amber-200";
    return "bg-red-100 text-red-700 border-red-200";
};

const getBadgeColor = (system: string) => {
    if (system === "Pro-Landlord") return "bg-green-100 text-green-800 border-green-200";
    if (system === "Pro-Tenant") return "bg-red-100 text-red-700 border-red-200";
    return "";
};

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
    const tabs = [
        { id: "league", label: "Rental Yields", data: "leagueTable" },
        { id: "price", label: "Price History (1/5/10 Yr)", data: "priceTrends" },
        { id: "tax", label: "Taxes & Transaction Costs", data: "taxMatrix" },
        { id: "legal", label: "Landlord/Tenant Laws", data: "legalRisk" },
        { id: "finance", label: "Mortgage Rates", data: "financing" },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

    // Toggle individual row selection
    const toggleRowSelection = (country: string) => {
        setSelectedRows((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(country)) {
                newSet.delete(country);
            } else {
                newSet.add(country);
            }
            return newSet;
        });
    };

    // Toggle all rows selection
    const toggleAllRows = (countries: string[]) => {
        if (selectedRows.size === countries.length) {
            setSelectedRows(new Set());
        } else {
            setSelectedRows(new Set(countries));
        }
    };

    // Clear selections when changing tabs
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        setSelectedRows(new Set());
    };

    // Checkbox component
    const Checkbox: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            data-state={checked ? "checked" : "unchecked"}
            onClick={onChange}
            className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                checked ? "bg-primary text-primary-foreground" : ""
            }`}
        >
            {checked && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            )}
        </button>
    );

    const renderTable = (
        title: string,
        subtitle: string,
        headers: string[],
        rows: TableRow[],
        renderRow: (row: TableRow, idx: number) => React.ReactNode,
        showCheckboxes: boolean = false
    ) => {
        const countries = rows.map((r) => r.country);
        const allSelected = selectedRows.size === countries.length && countries.length > 0;

        return (
            <div className="flex-1 p-6">
                <div className="mb-4">
                    <h2 className="font-semibold text-lg text-navy">{title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
                </div>
                <div className="border border-border rounded-md overflow-hidden">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors bg-muted/50 hover:bg-muted/50">
                                {showCheckboxes && (
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-10">
                                        <Checkbox
                                            checked={allSelected}
                                            onChange={() => toggleAllRows(countries)}
                                        />
                                    </th>
                                )}
                                {headers.map((h) => (
                                    <th
                                        key={h}
                                        className={`h-12 px-4 align-middle font-semibold text-navy ${
                                            h === "Country" ? "text-left" : h.includes("System") || h.includes("Difficulty") ? "text-center" : "text-right"
                                        }`}
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                            {rows.map((row, idx) => renderRow(row, idx))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                    Data updated quarterly. Source: Estate Atlas Research Network.
                </p>
            </div>
        );
    };

    const renderContent = () => {
        switch (activeTab) {
            case "league":
                return renderTable(
                    "Global Market League Table",
                    "Ranked by Estate Atlas Score. Click headers to sort.",
                    ["Country", "Estate Atlas Score", "5-Year Growth %", "Avg Price ($)", "Rental Yield %"],
                    leagueTable,
                    (row, idx) => (
                        <tr
                            key={row.country}
                            className={`border-b transition-colors hover:bg-muted/50 ${
                                idx % 2 === 0 ? "bg-muted/20" : "bg-card"
                            }`}
                        >
                            <td className="p-4 align-middle w-10">
                                <Checkbox
                                    checked={selectedRows.has(row.country)}
                                    onChange={() => toggleRowSelection(row.country)}
                                />
                            </td>
                            <td className="p-4 align-middle font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">{row.flag}</span>
                                    <span>{row.country}</span>
                                </div>
                            </td>
                            <td className="p-4 align-middle text-center">
                                <div
                                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs border font-bold ${getScoreBadgeColor(
                                        row.estateAtlasScore ?? 0
                                    )}`}
                                >
                                    {row.estateAtlasScore}
                                </div>
                            </td>
                            <td className="p-4 align-middle text-right">
                                <span className="text-green-600 font-medium">{row.growth5Year}</span>
                            </td>
                            <td className="p-4 align-middle text-right font-medium">{row.avgPrice}</td>
                            <td className="p-4 align-middle text-right">
                                <span className="font-bold text-sky">{row.rentalYield}</span>
                            </td>
                        </tr>
                    ),
                    true // Show checkboxes only for Rental Yields tab
                );

            case "price":
                return renderTable(
                    "Global Price Appreciation Trends",
                    "Historical price changes across major markets.",
                    ["Country", "1-Year Change", "5-Year Change", "10-Year Change", "Trend"],
                    priceTrends,
                    (row, idx) => {
                        const getChangeColor = (change: string, isBold = false) => {
                            const num = parseFloat(change);
                            if (num > 10) return `text-green-600 ${isBold ? 'font-bold' : ''}`;
                            if (num > 5) return `text-green-600 ${isBold ? 'font-medium' : ''}`;
                            if (num > 2) return `text-amber-600 ${isBold ? '' : ''}`;
                            return `text-muted-foreground ${isBold ? '' : ''}`;
                        };

                        const getTrendPath = (trend: string) => {
                            if (trend === "green") {
                                return "M0,20 L5,18 L10,15 L15,12 L20,8 L25,5 L30,2";
                            } else if (trend === "red") {
                                return "M0,5 L5,8 L10,10 L15,14 L20,16 L25,18 L30,20";
                            } else {
                                return "M0,12 L5,11 L10,13 L15,10 L20,12 L25,11 L30,10";
                            }
                        };

                        const getTrendColor = (trend: string) => {
                            if (trend === "green") return "stroke-green-500";
                            if (trend === "red") return "stroke-red-500";
                            return "stroke-amber-500";
                        };

                        return (
                            <tr
                                key={row.country}
                                className={`border-b transition-colors hover:bg-muted/50 ${
                                    idx % 2 === 0 ? "bg-muted/20" : "bg-card"
                                }`}
                            >
                                <td className="p-4 align-middle font-medium">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">{row.flag}</span>
                                        <span>{row.country}</span>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-right">
                                    <span className={getChangeColor(row.change1Year || "0")}>
                                        {row.change1Year}
                                    </span>
                                </td>
                                <td className="p-4 align-middle text-right">
                                    <span className={getChangeColor(row.change5Year || "0", true)}>
                                        {row.change5Year}
                                    </span>
                                </td>
                                <td className="p-4 align-middle text-right">
                                    <span className={getChangeColor(row.change10Year || "0", true)}>
                                        {row.change10Year}
                                    </span>
                                </td>
                                <td className="p-4 align-middle text-center">
                                    <svg
                                        width="40"
                                        height="24"
                                        viewBox="0 0 30 24"
                                        className="inline-block"
                                    >
                                        <path
                                            d={getTrendPath(row.trend || "amber")}
                                            fill="none"
                                            className={`${getTrendColor(row.trend || "amber")} stroke-2`}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </td>
                            </tr>
                        );
                    }
                );

            case "tax":
                return renderTable(
                    "Global Real Estate Tax Matrix",
                    "Comparative tax rates for international investors.",
                    ["Country", "Est. Total Entry Cost", "Annual Property Tax", "Rental Income Tax", "Capital Gains Tax"],
                    taxMatrix,
                    (row, idx) => (
                        <tr
                            key={row.country}
                            className={`border-b transition-colors hover:bg-muted/50 ${
                                idx % 2 === 0 ? "bg-muted/20" : "bg-card"
                            }`}
                        >
                            <td className="p-4 align-middle font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">{row.flag}</span>
                                    <span>{row.country}</span>
                                </div>
                            </td>
                            <td className="p-4 align-middle text-right">
                                <span className="font-bold text-navy">{row.estTotalEntryCost}</span>
                            </td>
                            <td className="p-4 align-middle text-right">{row.annualPropertyTax}</td>
                            <td className="p-4 align-middle text-right">{row.rentalIncomeTax}</td>
                            <td className="p-4 align-middle text-right">{row.capitalGainsTax}</td>
                        </tr>
                    )
                );

            case "legal":
                return renderTable(
                    "Legal Risk & Landlord Protection",
                    "Tenant law analysis and eviction timelines.",
                    ["Country", "Legal System", "Avg Eviction Time", "Security Deposit Limit"],
                    legalRisk,
                    (row, idx) => (
                        <tr
                            key={row.country}
                            className={`border-b transition-colors hover:bg-muted/50 ${
                                idx % 2 === 0 ? "bg-muted/20" : "bg-card"
                            }`}
                        >
                            <td className="p-4 align-middle font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">{row.flag}</span>
                                    <span>{row.country}</span>
                                </div>
                            </td>
                            <td className="p-4 align-middle text-center">
                                <div
                                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${getBadgeColor(
                                        row.legalSystem ?? ""
                                    )}`}
                                >
                                    {row.legalSystem}
                                </div>
                            </td>
                            <td className="p-4 align-middle text-right font-medium">{row.avgEvictionTime}</td>
                            <td className="p-4 align-middle text-right">{row.securityDepositLimit}</td>
                        </tr>
                    )
                );

            case "finance":
                return renderTable(
                    "International Financing Conditions",
                    "Mortgage rates and lending requirements for non-residents.",
                    ["Country", "Avg Fixed Rate", "Max LTV (Non-Res)", "Lending Difficulty"],
                    financing,
                    (row, idx) => (
                        <tr
                            key={row.country}
                            className={`border-b transition-colors hover:bg-muted/50 ${
                                idx % 2 === 0 ? "bg-muted/20" : "bg-card"
                            }`}
                        >
                            <td className="p-4 align-middle font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">{row.flag}</span>
                                    <span>{row.country}</span>
                                </div>
                            </td>
                            <td className="p-4 align-middle text-right">
                                <span className={`font-medium ${getRateColor(row.avgFixedRate || "0")}`}>
                                    {row.avgFixedRate}
                                </span>
                            </td>
                            <td className="p-4 align-middle text-right font-medium">{row.maxLTV}</td>
                            <td className="p-4 align-middle text-center">
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
                            onClick={() => handleTabChange(tab.id)}
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
            {renderContent()}
        </div>
    );
};

export default GlobalMarketDashboard;
