"use client";

import React from "react";

// ================== TYPES ==================
interface Metric {
    id: string;
    label: string;
    icon: React.ReactNode;
    key: string;
    section: string;
}

interface CityData {
    name: string;
    estateScore: number;
    forecast: string;
    apartmentPrice: string;
    apartmentYield: string;
    housePrice: string;
    houseYield: string;
    mortgageRate: string;
    entryCost: string;
    maxLTV: string;
    legalRating: string;
    avgDaysOnMarket: string;
    vacancyRate: string;
}

// ================== SAMPLE DATA ==================
const metrics: Metric[] = [
    { id: "estateScore", label: "Estate Atlas Score", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>, key: "estateScore", section: "Scoreboard" },
    { id: "forecast", label: "5-Year Forecast", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>, key: "forecast", section: "Scoreboard" },
    { id: "apartmentPrice", label: "Avg Apartment Price", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>, key: "apartmentPrice", section: "Asset Class Performance" },
    { id: "apartmentYield", label: "Apartment Yield", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>, key: "apartmentYield", section: "Asset Class Performance" },
    { id: "housePrice", label: "Avg House Price", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>, key: "housePrice", section: "Asset Class Performance" },
    { id: "houseYield", label: "House Yield", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>, key: "houseYield", section: "Asset Class Performance" },
    { id: "mortgageRate", label: "Mortgage Rate", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>, key: "mortgageRate", section: "Financials & Leverage" },
    { id: "avgDaysOnMarket", label: "Avg Days on Market", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, key: "avgDaysOnMarket", section: "Risk & Liquidity" },
    { id: "vacancyRate", label: "Vacancy Rate", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>, key: "vacancyRate", section: "Risk & Liquidity" },
];

const cities: CityData[] = [
    { name: "Berlin", estateScore: 86, forecast: "+5.2%", apartmentPrice: "€320k", apartmentYield: "3.9%", housePrice: "€680k", houseYield: "2.8%", mortgageRate: "3.5%", entryCost: "12%", maxLTV: "70%", legalRating: "Pro-Tenant", avgDaysOnMarket: "38 Days", vacancyRate: "0.8%" },
    { name: "New York", estateScore: 88, forecast: "+4.2%", apartmentPrice: "$850k", apartmentYield: "3.2%", housePrice: "$1,500k", houseYield: "2.5%", mortgageRate: "6.8%", entryCost: "4.5%", maxLTV: "80%", legalRating: "Pro-Tenant", avgDaysOnMarket: "48 Days", vacancyRate: "2.5%" },
    { name: "London", estateScore: 79, forecast: "+3%", apartmentPrice: "£580k", apartmentYield: "4.2%", housePrice: "£950k", houseYield: "2.8%", mortgageRate: "5.2%", entryCost: "5%", maxLTV: "75%", legalRating: "Balanced", avgDaysOnMarket: "52 Days", vacancyRate: "2.2%" },
];

// ================== COMPONENT ==================
const CityComparisonTable: React.FC = () => {
    // Get all unique sections
    const sections = Array.from(new Set(metrics.map(m => m.section)));

    // Function to get metrics by section
    const getMetricsBySection = (section: string) => metrics.filter(m => m.section === section);

    // Helper to find highest value for highlighting (numeric only)
    const isHighest = (metricKey: string, value: any) => {
        const numericValues = cities.map(c => parseFloat(c[metricKey].replace(/[^\d.-]/g, "")));
        return parseFloat(value.toString().replace(/[^\d.-]/g, "")) === Math.max(...numericValues);
    };

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold tracking-tight text-lg font-heading text-navy">City Comparison Results</h3>
            </div>
            <div className="p-6 pt-0 overflow-x-auto">
                <table className="w-full caption-bottom text-sm">
                    <thead>
                    <tr className="border-b bg-gray-50">
                        <th className="h-12 px-4 text-left w-[220px] font-semibold text-navy">Metric</th>
                        {cities.map(city => (
                            <th key={city.name} className="h-12 px-4 text-center font-semibold text-navy">{city.name}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {sections.map(section => (
                        <React.Fragment key={section}>
                            <tr className="border-b bg-gray-100/70">
                                <td colSpan={cities.length + 1} className="p-4 font-semibold text-navy text-sm">{section}</td>
                            </tr>
                            {getMetricsBySection(section).map(metric => (
                                <tr key={metric.id} className="border-b hover:bg-muted/50 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-2">{metric.icon}{metric.label}</td>
                                    {cities.map(city => (
                                        <td
                                            key={city.name}
                                            className={`p-4 text-center ${isHighest(metric.key, city[metric.key]) ? "bg-green-50 font-bold text-green-700" : ""}`}
                                        >
                                            {city[metric.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Quick Analysis</h4>
                    <p className="text-sm text-dark-gray">
                        While New York has the highest overall score, Berlin offers significantly lower entry prices for Apartments (€320k). For yield-focused investors, London leads with 4.2% apartment yields. Berlin offers the best mortgage rates at 3.5%.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CityComparisonTable;
