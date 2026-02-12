// components/ComparisonDashboard.tsx
"use client";

import { useState } from "react";
import { Crown, TrendingUp, Building2, Percent, House, Receipt, Landmark, Gavel, Clock, TriangleAlert } from "lucide-react";

type ComparisonType = "country" | "city";

type MetricRow = {
    type: "section" | "metric";
    label?: string;
    icon?: any;
    iconColor?: string;
    getValue?: (location: string) => string | { value: string; display: string; badge?: { text: string; color: string } };
};

const countryOptions = ["Germany", "United States", "United Kingdom"];
const cityOptions = ["Berlin", "New York", "London"];

// ================= COUNTRY DATA STRUCTURE =================
const countryMetrics: MetricRow[] = [
    { type: "section", label: "The Scoreboard" },
    {
        type: "metric",
        label: "Estate Atlas Score",
        icon: Crown,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const scores = { "Germany": "85", "United States": "92", "United Kingdom": "78" };
            return { value: scores[loc as keyof typeof scores], display: `${scores[loc as keyof typeof scores]}/100` };
        }
    },
    {
        type: "metric",
        label: "5-Year Forecast",
        icon: TrendingUp,
        iconColor: "text-green-500",
        getValue: (loc) => {
            const forecasts = { "Germany": "4.5", "United States": "6.8", "United Kingdom": "3.2" };
            return { value: forecasts[loc as keyof typeof forecasts], display: `+${forecasts[loc as keyof typeof forecasts]}%` };
        }
    },
    { type: "section", label: "Asset Class Performance" },
    {
        type: "metric",
        label: "Avg Apartment Price",
        icon: Building2,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const prices = { "Germany": "280", "United States": "350", "United Kingdom": "295" };
            const symbols = { "Germany": "€", "United States": "$", "United Kingdom": "£" };
            return { value: prices[loc as keyof typeof prices], display: `${symbols[loc as keyof typeof symbols]}${prices[loc as keyof typeof prices]}k` };
        }
    },
    {
        type: "metric",
        label: "Apartment Yield",
        icon: Percent,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const yields = { "Germany": "4.2", "United States": "4.1", "United Kingdom": "5.1" };
            return { value: yields[loc as keyof typeof yields], display: `${yields[loc as keyof typeof yields]}%` };
        }
    },
    {
        type: "metric",
        label: "Avg House Price",
        icon: House,
        iconColor: "text-amber-600",
        getValue: (loc) => {
            const prices = { "Germany": "550", "United States": "620", "United Kingdom": "480" };
            const symbols = { "Germany": "€", "United States": "$", "United Kingdom": "£" };
            return { value: prices[loc as keyof typeof prices], display: `${symbols[loc as keyof typeof symbols]}${prices[loc as keyof typeof prices]}k` };
        }
    },
    {
        type: "metric",
        label: "House Yield",
        icon: Percent,
        iconColor: "text-amber-600",
        getValue: (loc) => {
            const yields = { "Germany": "3.5", "United States": "3.8", "United Kingdom": "3.2" };
            return { value: yields[loc as keyof typeof yields], display: `${yields[loc as keyof typeof yields]}%` };
        }
    },
    { type: "section", label: "Financials & Leverage" },
    {
        type: "metric",
        label: "Est. Entry Cost (Tax+Fees)",
        icon: Receipt,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const costs = { "Germany": "12", "United States": "2.5", "United Kingdom": "5" };
            return { value: costs[loc as keyof typeof costs], display: `${costs[loc as keyof typeof costs]}%` };
        }
    },
    {
        type: "metric",
        label: "Max LTV (Non-Res)",
        icon: Landmark,
        iconColor: "text-purple-500",
        getValue: (loc) => {
            const ltv = { "Germany": "70", "United States": "80", "United Kingdom": "75" };
            return { value: ltv[loc as keyof typeof ltv], display: `${ltv[loc as keyof typeof ltv]}%` };
        }
    },
    {
        type: "metric",
        label: "Mortgage Rate",
        icon: TrendingUp,
        iconColor: "text-red-500",
        getValue: (loc) => {
            const rates = { "Germany": "3.5", "United States": "6.8", "United Kingdom": "5.2" };
            return { value: rates[loc as keyof typeof rates], display: `${rates[loc as keyof typeof rates]}%` };
        }
    },
    { type: "section", label: "Risk & Liquidity" },
    {
        type: "metric",
        label: "Legal Rating",
        icon: Gavel,
        iconColor: "text-purple-500",
        getValue: (loc) => {
            const ratings = {
                "Germany": { text: "Pro-Tenant", color: "amber" },
                "United States": { text: "Landlord Friendly", color: "green" },
                "United Kingdom": { text: "Balanced", color: "blue" }
            };
            const rating = ratings[loc as keyof typeof ratings];
            return { value: "0", display: "", badge: rating };
        }
    },
    {
        type: "metric",
        label: "Avg Days on Market",
        icon: Clock,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const days = { "Germany": "45", "United States": "32", "United Kingdom": "55" };
            return { value: days[loc as keyof typeof days], display: `${days[loc as keyof typeof days]} Days` };
        }
    },
    {
        type: "metric",
        label: "Vacancy Rate",
        icon: TriangleAlert,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const rates = { "Germany": "1.2", "United States": "5", "United Kingdom": "2.8" };
            return { value: rates[loc as keyof typeof rates], display: `${rates[loc as keyof typeof rates]}%` };
        }
    }
];

// ================= CITY DATA STRUCTURE =================
const cityMetrics: MetricRow[] = [
    { type: "section", label: "The Scoreboard" },
    {
        type: "metric",
        label: "Estate Atlas Score",
        icon: Crown,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const scores = { "Berlin": "86", "New York": "88", "London": "79" };
            return { value: scores[loc as keyof typeof scores], display: `${scores[loc as keyof typeof scores]}/100` };
        }
    },
    {
        type: "metric",
        label: "5-Year Forecast",
        icon: TrendingUp,
        iconColor: "text-green-500",
        getValue: (loc) => {
            const forecasts = { "Berlin": "5.2", "New York": "4.2", "London": "3" };
            return { value: forecasts[loc as keyof typeof forecasts], display: `+${forecasts[loc as keyof typeof forecasts]}%` };
        }
    },
    { type: "section", label: "Asset Class Performance" },
    {
        type: "metric",
        label: "Avg Apartment Price",
        icon: Building2,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const prices = { "Berlin": "320", "New York": "850", "London": "580" };
            const symbols = { "Berlin": "€", "New York": "$", "London": "£" };
            return { value: prices[loc as keyof typeof prices], display: `${symbols[loc as keyof typeof symbols]}${prices[loc as keyof typeof prices]}k` };
        }
    },
    {
        type: "metric",
        label: "Apartment Yield",
        icon: Percent,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const yields = { "Berlin": "3.9", "New York": "3.2", "London": "4.2" };
            return { value: yields[loc as keyof typeof yields], display: `${yields[loc as keyof typeof yields]}%` };
        }
    },
    {
        type: "metric",
        label: "Avg House Price",
        icon: House,
        iconColor: "text-amber-600",
        getValue: (loc) => {
            const prices = { "Berlin": "680", "New York": "1500", "London": "950" };
            const symbols = { "Berlin": "€", "New York": "$", "London": "£" };
            return { value: prices[loc as keyof typeof prices], display: `${symbols[loc as keyof typeof symbols]}${prices[loc as keyof typeof prices]}k` };
        }
    },
    {
        type: "metric",
        label: "House Yield",
        icon: Percent,
        iconColor: "text-amber-600",
        getValue: (loc) => {
            const yields = { "Berlin": "2.8", "New York": "2.5", "London": "2.8" };
            return { value: yields[loc as keyof typeof yields], display: `${yields[loc as keyof typeof yields]}%` };
        }
    },
    { type: "section", label: "Financials & Leverage" },
    {
        type: "metric",
        label: "Est. Entry Cost (Tax+Fees)",
        icon: Receipt,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const costs = { "Berlin": "12", "New York": "4.5", "London": "5" };
            return { value: costs[loc as keyof typeof costs], display: `${costs[loc as keyof typeof costs]}%` };
        }
    },
    {
        type: "metric",
        label: "Max LTV (Non-Res)",
        icon: Landmark,
        iconColor: "text-purple-500",
        getValue: (loc) => {
            const ltv = { "Berlin": "70", "New York": "80", "London": "75" };
            return { value: ltv[loc as keyof typeof ltv], display: `${ltv[loc as keyof typeof ltv]}%` };
        }
    },
    {
        type: "metric",
        label: "Mortgage Rate",
        icon: TrendingUp,
        iconColor: "text-red-500",
        getValue: (loc) => {
            const rates = { "Berlin": "3.5", "New York": "6.8", "London": "5.2" };
            return { value: rates[loc as keyof typeof rates], display: `${rates[loc as keyof typeof rates]}%` };
        }
    },
    { type: "section", label: "Risk & Liquidity" },
    {
        type: "metric",
        label: "Legal Rating",
        icon: Gavel,
        iconColor: "text-purple-500",
        getValue: (loc) => {
            const ratings = {
                "Berlin": { text: "Pro-Tenant", color: "amber" },
                "New York": { text: "Pro-Tenant", color: "amber" },
                "London": { text: "Balanced", color: "blue" }
            };
            const rating = ratings[loc as keyof typeof ratings];
            return { value: "0", display: "", badge: rating };
        }
    },
    {
        type: "metric",
        label: "Avg Days on Market",
        icon: Clock,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const days = { "Berlin": "38", "New York": "48", "London": "52" };
            return { value: days[loc as keyof typeof days], display: `${days[loc as keyof typeof days]} Days` };
        }
    },
    {
        type: "metric",
        label: "Vacancy Rate",
        icon: TriangleAlert,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const rates = { "Berlin": "0.8", "New York": "2.5", "London": "2.2" };
            return { value: rates[loc as keyof typeof rates], display: `${rates[loc as keyof typeof rates]}%` };
        }
    }
];

// ================= COMPONENT =================
export default function ComparisonDashboard() {
    const [comparisonType, setComparisonType] = useState<ComparisonType>("country");
    const [base, setBase] = useState(countryOptions[0]);
    const [rival1, setRival1] = useState(countryOptions[1]);
    const [rival2, setRival2] = useState(countryOptions[2]);

    const handleToggle = (type: ComparisonType) => {
        setComparisonType(type);
        if (type === "country") {
            setBase(countryOptions[0]);
            setRival1(countryOptions[1]);
            setRival2(countryOptions[2]);
        } else {
            setBase(cityOptions[0]);
            setRival1(cityOptions[1]);
            setRival2(cityOptions[2]);
        }
    };

    const metrics = comparisonType === "country" ? countryMetrics : cityMetrics;
    const options = comparisonType === "country" ? countryOptions : cityOptions;
    const locations = [base, rival1, rival2];

    const getAnalysis = () => {
        if (comparisonType === "country") {
            return "While United States has the highest overall score, Germany offers significantly lower entry prices for Apartments (€280k). For yield-focused investors, United Kingdom leads with 5.1% apartment yields. Germany offers the best mortgage rates at 3.5%.";
        } else {
            return "While New York has the highest overall score, Berlin offers significantly lower entry prices for Apartments (€320k). For yield-focused investors, London leads with 4.2% apartment yields. Berlin offers the best mortgage rates at 3.5%.";
        }
    };

    const getBestValue = (row: MetricRow) => {
        if (row.type === "section" || !row.getValue) return null;

        const values = locations.map(loc => {
            const result = row.getValue!(loc);
            return typeof result === "string" ? parseFloat(result) : parseFloat(result.value);
        });

        // For Legal Rating (badge type), don't highlight
        const firstResult = row.getValue(locations[0]);
        if (typeof firstResult !== "string" && firstResult.badge) {
            return null;
        }

        return Math.max(...values);
    };

    return (
        <div className="space-y-6  mx-auto ">
            {/* Toggle */}
            <div className="rounded-lg border bg-white shadow-sm p-6 flex justify-center">
                <div className="inline-flex rounded-lg border p-1 bg-gray-50">
                    {["country", "city"].map((t) => (
                        <button
                            key={t}
                            onClick={() => handleToggle(t as ComparisonType)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                                comparisonType === t
                                    ? "bg-[#071636] text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            {t === "country" ? "Compare Countries" : "Compare Cities"}
                        </button>
                    ))}
                </div>
            </div>

            {/* Selectors */}
            <div className="rounded-lg border bg-white shadow-sm p-6">
                <div className="grid md:grid-cols-4 gap-4">
                    {locations.map((val, i) => (
                        <div key={i}>
                            <label className="text-sm text-gray-600 mb-1 block">
                                {i === 0 ? "Base" : `Rival ${i}`}
                            </label>
                            <select
                                value={val}
                                onChange={(e) =>
                                    i === 0
                                        ? setBase(e.target.value)
                                        : i === 1
                                            ? setRival1(e.target.value)
                                            : setRival2(e.target.value)
                                }
                                className="w-full h-10 border border-gray-300 rounded-md px-3 bg-white"
                            >
                                {options.map((o) => (
                                    <option key={o}>{o}</option>
                                ))}
                            </select>
                        </div>
                    ))}

                    <button className="h-10 bg-[#071636] text-white rounded-md mt-6 hover:bg-[#0a1d4a] transition-colors">
                        Run Comparison
                    </button>
                </div>
            </div>

            {/* Results Table */}
            <div className="rounded-lg border bg-white shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="font-semibold tracking-tight text-lg text-[#071636]">
                        {comparisonType === "country" ? "Country Comparison Results" : "City Comparison Results"}
                    </h3>
                </div>
                <div className="p-6 pt-0">
                    <div className="overflow-x-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-gray-50 bg-gray-50">
                                <th className="h-12 px-4 text-left w-[220px] font-semibold text-[#071636]">Metric</th>
                                <th className="h-12 px-4 text-center font-semibold text-[#071636]">{base}</th>
                                <th className="h-12 px-4 text-center font-semibold text-[#071636]">{rival1}</th>
                                <th className="h-12 px-4 text-center font-semibold text-[#071636]">{rival2}</th>
                            </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                            {metrics.map((row, rowIndex) => {
                                if (row.type === "section") {
                                    return (
                                        <tr key={rowIndex} className="border-b transition-colors hover:bg-gray-50 bg-gray-100/70">
                                            <td colSpan={4} className="p-4 font-semibold text-[#071636] py-2 text-sm">
                                                {row.label}
                                            </td>
                                        </tr>
                                    );
                                }

                                const Icon = row.icon;
                                const bestValue = getBestValue(row);

                                return (
                                    <tr key={rowIndex} className="border-b transition-colors hover:bg-gray-50">
                                        <td className="p-4 font-medium">
                                            <div className="flex items-center gap-2">
                                                {Icon && <Icon className={`h-4 w-4 ${row.iconColor}`} />}
                                                {row.label}
                                            </div>
                                        </td>
                                        {locations.map((loc, locIndex) => {
                                            const result = row.getValue!(loc);
                                            const resultObj = typeof result === "string" ? { value: result, display: result } : result;
                                            const numValue = parseFloat(resultObj.value);
                                            const isBest = bestValue !== null && numValue === bestValue;

                                            return (
                                                <td
                                                    key={locIndex}
                                                    className={`p-4 text-center ${
                                                        isBest ? "bg-green-50 font-bold text-green-700" : ""
                                                    }`}
                                                >
                                                    {resultObj.badge ? (
                                                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-${resultObj.badge.color}-100 text-${resultObj.badge.color}-700">
                                                            {resultObj.badge.text}
                                                        </div>
                                                    ) : row.label === "Estate Atlas Score" ? (
                                                        <>
                                                            <span className="text-lg">{resultObj.value}</span>
                                                            <span className="text-gray-400 text-sm">/100</span>
                                                        </>
                                                    ) : (
                                                        resultObj.display
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-[#071636] mb-2">Quick Analysis</h4>
                        <p className="text-sm text-gray-700">{getAnalysis()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
