// components/ComparisonDashboard.tsx
"use client";

import { useState } from "react";
import { Crown, TrendingUp, Building2, Percent, House, Receipt, Landmark, Gavel, Clock, TriangleAlert, Check } from "lucide-react";

type ComparisonType = "country" | "city";

type MetricRow = {
    type: "section" | "metric";
    label?: string;
    icon?: any;
    iconColor?: string;
    getValue?: (location: string) => string | { value: string; display: string; badge?: { text: string; color: string } };
};

const countryOptions = [
    "Germany",
    "United States",
    "United Kingdom",
    "France",
    "Spain",
    "Portugal",
    "Netherlands",
    "Italy"
];

const cityOptions = [
    "Berlin",
    "Munich",
    "New York",
    "Los Angeles",
    "London",
    "Manchester",
    "Paris",
    "Madrid",
    "Lisbon",
    "Amsterdam"
];

// ================= COUNTRY DATA STRUCTURE =================
const countryMetrics: MetricRow[] = [
    { type: "section", label: "The Scoreboard" },
    {
        type: "metric",
        label: "Estate Atlas Score",
        icon: Crown,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const scores: Record<string, string> = {
                "Germany": "85",
                "United States": "92",
                "United Kingdom": "78",
                "France": "81",
                "Spain": "76",
                "Portugal": "74",
                "Netherlands": "88",
                "Italy": "72"
            };
            return { value: scores[loc] || "75", display: `${scores[loc] || "75"}/100` };
        }
    },
    {
        type: "metric",
        label: "5-Year Forecast",
        icon: TrendingUp,
        iconColor: "text-green-500",
        getValue: (loc) => {
            const forecasts: Record<string, string> = {
                "Germany": "4.5",
                "United States": "6.8",
                "United Kingdom": "3.2",
                "France": "3.8",
                "Spain": "5.2",
                "Portugal": "6.1",
                "Netherlands": "4.2",
                "Italy": "3.5"
            };
            return { value: forecasts[loc] || "4.0", display: `+${forecasts[loc] || "4.0"}%` };
        }
    },
    { type: "section", label: "Asset Class Performance" },
    {
        type: "metric",
        label: "Avg Apartment Price",
        icon: Building2,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const prices: Record<string, string> = {
                "Germany": "280",
                "United States": "350",
                "United Kingdom": "295",
                "France": "310",
                "Spain": "220",
                "Portugal": "195",
                "Netherlands": "325",
                "Italy": "240"
            };
            const symbols: Record<string, string> = {
                "Germany": "€",
                "United States": "$",
                "United Kingdom": "£",
                "France": "€",
                "Spain": "€",
                "Portugal": "€",
                "Netherlands": "€",
                "Italy": "€"
            };
            return { value: prices[loc] || "250", display: `${symbols[loc] || "€"}${prices[loc] || "250"}k` };
        }
    },
    {
        type: "metric",
        label: "Apartment Yield",
        icon: Percent,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const yields: Record<string, string> = {
                "Germany": "4.2",
                "United States": "4.1",
                "United Kingdom": "5.1",
                "France": "3.8",
                "Spain": "5.5",
                "Portugal": "5.8",
                "Netherlands": "3.9",
                "Italy": "5.2"
            };
            return { value: yields[loc] || "4.5", display: `${yields[loc] || "4.5"}%` };
        }
    },
    {
        type: "metric",
        label: "Avg House Price",
        icon: House,
        iconColor: "text-amber-600",
        getValue: (loc) => {
            const prices: Record<string, string> = {
                "Germany": "550",
                "United States": "620",
                "United Kingdom": "480",
                "France": "590",
                "Spain": "420",
                "Portugal": "380",
                "Netherlands": "610",
                "Italy": "460"
            };
            const symbols: Record<string, string> = {
                "Germany": "€",
                "United States": "$",
                "United Kingdom": "£",
                "France": "€",
                "Spain": "€",
                "Portugal": "€",
                "Netherlands": "€",
                "Italy": "€"
            };
            return { value: prices[loc] || "500", display: `${symbols[loc] || "€"}${prices[loc] || "500"}k` };
        }
    },
    {
        type: "metric",
        label: "House Yield",
        icon: Percent,
        iconColor: "text-amber-600",
        getValue: (loc) => {
            const yields: Record<string, string> = {
                "Germany": "3.5",
                "United States": "3.8",
                "United Kingdom": "3.2",
                "France": "3.1",
                "Spain": "4.2",
                "Portugal": "4.5",
                "Netherlands": "3.3",
                "Italy": "3.8"
            };
            return { value: yields[loc] || "3.5", display: `${yields[loc] || "3.5"}%` };
        }
    },
    { type: "section", label: "Financials & Leverage" },
    {
        type: "metric",
        label: "Est. Entry Cost (Tax+Fees)",
        icon: Receipt,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const costs: Record<string, string> = {
                "Germany": "12",
                "United States": "2.5",
                "United Kingdom": "5",
                "France": "8",
                "Spain": "10",
                "Portugal": "6.5",
                "Netherlands": "9",
                "Italy": "11"
            };
            return { value: costs[loc] || "8", display: `${costs[loc] || "8"}%` };
        }
    },
    {
        type: "metric",
        label: "Max LTV (Non-Res)",
        icon: Landmark,
        iconColor: "text-purple-500",
        getValue: (loc) => {
            const ltv: Record<string, string> = {
                "Germany": "70",
                "United States": "80",
                "United Kingdom": "75",
                "France": "70",
                "Spain": "70",
                "Portugal": "70",
                "Netherlands": "75",
                "Italy": "65"
            };
            return { value: ltv[loc] || "70", display: `${ltv[loc] || "70"}%` };
        }
    },
    {
        type: "metric",
        label: "Mortgage Rate",
        icon: TrendingUp,
        iconColor: "text-red-500",
        getValue: (loc) => {
            const rates: Record<string, string> = {
                "Germany": "3.5",
                "United States": "6.8",
                "United Kingdom": "5.2",
                "France": "3.8",
                "Spain": "4.2",
                "Portugal": "4.5",
                "Netherlands": "3.6",
                "Italy": "4.8"
            };
            return { value: rates[loc] || "4.5", display: `${rates[loc] || "4.5"}%` };
        }
    },
    { type: "section", label: "Risk & Liquidity" },
    {
        type: "metric",
        label: "Legal Rating",
        icon: Gavel,
        iconColor: "text-purple-500",
        getValue: (loc) => {
            const ratings: Record<string, { text: string; color: string }> = {
                "Germany": { text: "Pro-Tenant", color: "amber" },
                "United States": { text: "Landlord Friendly", color: "green" },
                "United Kingdom": { text: "Balanced", color: "blue" },
                "France": { text: "Pro-Tenant", color: "amber" },
                "Spain": { text: "Balanced", color: "blue" },
                "Portugal": { text: "Landlord Friendly", color: "green" },
                "Netherlands": { text: "Balanced", color: "blue" },
                "Italy": { text: "Pro-Tenant", color: "amber" }
            };
            const rating = ratings[loc] || { text: "Balanced", color: "blue" };
            return { value: "0", display: "", badge: rating };
        }
    },
    {
        type: "metric",
        label: "Avg Days on Market",
        icon: Clock,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const days: Record<string, string> = {
                "Germany": "45",
                "United States": "32",
                "United Kingdom": "55",
                "France": "48",
                "Spain": "62",
                "Portugal": "58",
                "Netherlands": "42",
                "Italy": "65"
            };
            return { value: days[loc] || "50", display: `${days[loc] || "50"} Days` };
        }
    },
    {
        type: "metric",
        label: "Vacancy Rate",
        icon: TriangleAlert,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const rates: Record<string, string> = {
                "Germany": "1.2",
                "United States": "5",
                "United Kingdom": "2.8",
                "France": "3.2",
                "Spain": "4.5",
                "Portugal": "3.8",
                "Netherlands": "2.1",
                "Italy": "5.2"
            };
            return { value: rates[loc] || "3.0", display: `${rates[loc] || "3.0"}%` };
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
            const scores: Record<string, string> = {
                "Berlin": "86",
                "Munich": "88",
                "New York": "88",
                "Los Angeles": "85",
                "London": "79",
                "Manchester": "76",
                "Paris": "82",
                "Madrid": "77",
                "Lisbon": "75",
                "Amsterdam": "89"
            };
            return { value: scores[loc] || "80", display: `${scores[loc] || "80"}/100` };
        }
    },
    {
        type: "metric",
        label: "5-Year Forecast",
        icon: TrendingUp,
        iconColor: "text-green-500",
        getValue: (loc) => {
            const forecasts: Record<string, string> = {
                "Berlin": "5.2",
                "Munich": "4.8",
                "New York": "4.2",
                "Los Angeles": "5.5",
                "London": "3",
                "Manchester": "4.1",
                "Paris": "3.5",
                "Madrid": "5.8",
                "Lisbon": "6.2",
                "Amsterdam": "4.5"
            };
            return { value: forecasts[loc] || "4.5", display: `+${forecasts[loc] || "4.5"}%` };
        }
    },
    { type: "section", label: "Asset Class Performance" },
    {
        type: "metric",
        label: "Avg Apartment Price",
        icon: Building2,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const prices: Record<string, string> = {
                "Berlin": "320",
                "Munich": "520",
                "New York": "850",
                "Los Angeles": "720",
                "London": "580",
                "Manchester": "220",
                "Paris": "480",
                "Madrid": "310",
                "Lisbon": "280",
                "Amsterdam": "450"
            };
            const symbols: Record<string, string> = {
                "Berlin": "€",
                "Munich": "€",
                "New York": "$",
                "Los Angeles": "$",
                "London": "£",
                "Manchester": "£",
                "Paris": "€",
                "Madrid": "€",
                "Lisbon": "€",
                "Amsterdam": "€"
            };
            return { value: prices[loc] || "400", display: `${symbols[loc] || "$"}${prices[loc] || "400"}k` };
        }
    },
    {
        type: "metric",
        label: "Apartment Yield",
        icon: Percent,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const yields: Record<string, string> = {
                "Berlin": "3.9",
                "Munich": "3.2",
                "New York": "3.2",
                "Los Angeles": "3.8",
                "London": "4.2",
                "Manchester": "5.5",
                "Paris": "3.5",
                "Madrid": "4.8",
                "Lisbon": "5.2",
                "Amsterdam": "3.6"
            };
            return { value: yields[loc] || "4.0", display: `${yields[loc] || "4.0"}%` };
        }
    },
    {
        type: "metric",
        label: "Avg House Price",
        icon: House,
        iconColor: "text-amber-600",
        getValue: (loc) => {
            const prices: Record<string, string> = {
                "Berlin": "680",
                "Munich": "980",
                "New York": "1500",
                "Los Angeles": "1200",
                "London": "950",
                "Manchester": "420",
                "Paris": "850",
                "Madrid": "580",
                "Lisbon": "520",
                "Amsterdam": "820"
            };
            const symbols: Record<string, string> = {
                "Berlin": "€",
                "Munich": "€",
                "New York": "$",
                "Los Angeles": "$",
                "London": "£",
                "Manchester": "£",
                "Paris": "€",
                "Madrid": "€",
                "Lisbon": "€",
                "Amsterdam": "€"
            };
            return { value: prices[loc] || "750", display: `${symbols[loc] || "$"}${prices[loc] || "750"}k` };
        }
    },
    {
        type: "metric",
        label: "House Yield",
        icon: Percent,
        iconColor: "text-amber-600",
        getValue: (loc) => {
            const yields: Record<string, string> = {
                "Berlin": "2.8",
                "Munich": "2.2",
                "New York": "2.5",
                "Los Angeles": "2.8",
                "London": "2.8",
                "Manchester": "4.2",
                "Paris": "2.5",
                "Madrid": "3.5",
                "Lisbon": "3.8",
                "Amsterdam": "2.6"
            };
            return { value: yields[loc] || "3.0", display: `${yields[loc] || "3.0"}%` };
        }
    },
    { type: "section", label: "Financials & Leverage" },
    {
        type: "metric",
        label: "Est. Entry Cost (Tax+Fees)",
        icon: Receipt,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const costs: Record<string, string> = {
                "Berlin": "12",
                "Munich": "12",
                "New York": "4.5",
                "Los Angeles": "3.5",
                "London": "5",
                "Manchester": "5",
                "Paris": "8",
                "Madrid": "10",
                "Lisbon": "6.5",
                "Amsterdam": "9"
            };
            return { value: costs[loc] || "7", display: `${costs[loc] || "7"}%` };
        }
    },
    {
        type: "metric",
        label: "Max LTV (Non-Res)",
        icon: Landmark,
        iconColor: "text-purple-500",
        getValue: (loc) => {
            const ltv: Record<string, string> = {
                "Berlin": "70",
                "Munich": "70",
                "New York": "80",
                "Los Angeles": "80",
                "London": "75",
                "Manchester": "75",
                "Paris": "70",
                "Madrid": "70",
                "Lisbon": "70",
                "Amsterdam": "75"
            };
            return { value: ltv[loc] || "70", display: `${ltv[loc] || "70"}%` };
        }
    },
    {
        type: "metric",
        label: "Mortgage Rate",
        icon: TrendingUp,
        iconColor: "text-red-500",
        getValue: (loc) => {
            const rates: Record<string, string> = {
                "Berlin": "3.5",
                "Munich": "3.5",
                "New York": "6.8",
                "Los Angeles": "6.5",
                "London": "5.2",
                "Manchester": "5.2",
                "Paris": "3.8",
                "Madrid": "4.2",
                "Lisbon": "4.5",
                "Amsterdam": "3.6"
            };
            return { value: rates[loc] || "4.5", display: `${rates[loc] || "4.5"}%` };
        }
    },
    { type: "section", label: "Risk & Liquidity" },
    {
        type: "metric",
        label: "Legal Rating",
        icon: Gavel,
        iconColor: "text-purple-500",
        getValue: (loc) => {
            const ratings: Record<string, { text: string; color: string }> = {
                "Berlin": { text: "Pro-Tenant", color: "amber" },
                "Munich": { text: "Pro-Tenant", color: "amber" },
                "New York": { text: "Pro-Tenant", color: "amber" },
                "Los Angeles": { text: "Landlord Friendly", color: "green" },
                "London": { text: "Balanced", color: "blue" },
                "Manchester": { text: "Balanced", color: "blue" },
                "Paris": { text: "Pro-Tenant", color: "amber" },
                "Madrid": { text: "Balanced", color: "blue" },
                "Lisbon": { text: "Landlord Friendly", color: "green" },
                "Amsterdam": { text: "Balanced", color: "blue" }
            };
            const rating = ratings[loc] || { text: "Balanced", color: "blue" };
            return { value: "0", display: "", badge: rating };
        }
    },
    {
        type: "metric",
        label: "Avg Days on Market",
        icon: Clock,
        iconColor: "text-sky-500",
        getValue: (loc) => {
            const days: Record<string, string> = {
                "Berlin": "38",
                "Munich": "32",
                "New York": "48",
                "Los Angeles": "42",
                "London": "52",
                "Manchester": "58",
                "Paris": "45",
                "Madrid": "62",
                "Lisbon": "55",
                "Amsterdam": "40"
            };
            return { value: days[loc] || "45", display: `${days[loc] || "45"} Days` };
        }
    },
    {
        type: "metric",
        label: "Vacancy Rate",
        icon: TriangleAlert,
        iconColor: "text-amber-500",
        getValue: (loc) => {
            const rates: Record<string, string> = {
                "Berlin": "0.8",
                "Munich": "0.5",
                "New York": "2.5",
                "Los Angeles": "3.2",
                "London": "2.2",
                "Manchester": "3.5",
                "Paris": "3.1",
                "Madrid": "4.2",
                "Lisbon": "3.8",
                "Amsterdam": "1.8"
            };
            return { value: rates[loc] || "2.5", display: `${rates[loc] || "2.5"}%` };
        }
    }
];

// ================= CUSTOM SELECT COMPONENT =================
function CustomSelect({
                          value,
                          onChange,
                          options,
                          label
                      }: {
    value: string;
    onChange: (val: string) => void;
    options: string[];
    label: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredOption, setHoveredOption] = useState<string | null>(null);
    return (
        <div className="relative">
            <label className="text-sm text-gray-600 mb-1 block">{label}</label>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-10 border border-gray-300 rounded-md px-3 bg-white text-left flex items-center justify-between hover:border-gray-400 transition-colors"
            >
                <span>{value}</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg ">
                        {options.map((option) => (
                            <div  key={option} className="pl-[4px] pr-[4px] pt-[4px]">
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => {
                                        onChange(option);
                                        setIsOpen(false);
                                    }}
                                    onMouseEnter={() => setHoveredOption(option)}
                                    onMouseLeave={() => setHoveredOption(null)}
                                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors
      ${
                                        hoveredOption === option
                                            ? "bg-[#00A3E0] text-white"
                                            : hoveredOption !== null
                                                ? "text-gray-700"
                                                : value === option
                                                    ? "bg-[#00A3E0] text-white"
                                                    : "text-gray-700"
                                    }`}
                                >


                                {option === value && <Check className="w-4 h-4" />}
                                {option !== value && <span className="w-4" />}
                                <span>{option}</span>
                            </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

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
            return `While ${rival1} has strong overall performance, ${base} offers competitive entry prices for apartments. For yield-focused investors, consider locations with higher percentage returns. Mortgage rates vary significantly across regions, affecting overall investment returns.`;
        } else {
            return `While ${rival1} shows strong market fundamentals, ${base} offers attractive entry points for investors. Yield variations across cities provide different investment strategies. Consider local market liquidity and regulatory environments when making decisions.`;
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
        <div className="space-y-6 mx-auto">
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
                    <CustomSelect
                        value={base}
                        onChange={setBase}
                        options={options}
                        label="Base"
                    />
                    <CustomSelect
                        value={rival1}
                        onChange={setRival1}
                        options={options}
                        label="Rival 1"
                    />
                    <CustomSelect
                        value={rival2}
                        onChange={setRival2}
                        options={options}
                        label="Rival 2"
                    />

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
                                                        <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent ${
                                                            resultObj.badge.color === 'amber' ? 'bg-amber-100 text-amber-700' :
                                                                resultObj.badge.color === 'green' ? 'bg-green-100 text-green-700' :
                                                                    'bg-blue-100 text-blue-700'
                                                        }`}>
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