"use client";

import { useState } from "react";

type MetricType = "rental" | "price" | "taxes" | "landlord" | "mortgage";

type CountryTaxData = {
    country: string;
    flag: string;
    entryCost: string;
    propertyTax: string;
    rentalTax: string;
    capitalGains: string;
};

const taxData: Record<MetricType, CountryTaxData[]> = {
    rental: [
        { country: "UAE", flag: "🇦🇪", entryCost: "0%", propertyTax: "0%", rentalTax: "0%", capitalGains: "0%" },
        { country: "Vietnam", flag: "🇻🇳", entryCost: "1.5%", propertyTax: "0.03%", rentalTax: "5%", capitalGains: "2%" },
    ],
    price: [
        { country: "Paraguay", flag: "🇵🇾", entryCost: "3.5%", propertyTax: "0.5%", rentalTax: "10%", capitalGains: "10%" },
        { country: "Argentina", flag: "🇦🇷", entryCost: "6.5%", propertyTax: "0.2-1.5%", rentalTax: "Flat 20%", capitalGains: "15%" },
    ],
    taxes: [
        { country: "France", flag: "🇫🇷", entryCost: "10.8%", propertyTax: "0.5-1.5%", rentalTax: "20-45%", capitalGains: "36.2%" },
    ],
    landlord: [
        { country: "Germany", flag: "🇩🇪", entryCost: "12.2%", propertyTax: "0.35%", rentalTax: "14-45%", capitalGains: "25%" },
    ],
    mortgage: [
        { country: "UAE", flag: "🇦🇪", entryCost: "0%", propertyTax: "0%", rentalTax: "0%", capitalGains: "0%" },
    ],
};

const TaxMatrix = () => {
    const [activeMetric, setActiveMetric] = useState<MetricType>("taxes");

    return (
        <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="w-full lg:w-64 bg-muted/50 border-b lg:border-b-0 lg:border-r border-border p-4 lg:self-stretch">
                <h3 className="font-heading font-semibold text-sm text-navy mb-4 uppercase tracking-wider">
                    Metric Selector
                </h3>
                <nav className="space-y-1">
                    <button
                        onClick={() => setActiveMetric("rental")}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                            activeMetric === "rental"
                                ? "bg-[#071636] text-white shadow-sm"
                                : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                        }`}
                    >
                        Rental Yields
                    </button>
                    <button
                        onClick={() => setActiveMetric("price")}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                            activeMetric === "price"
                                ? "bg-[#071636] text-white shadow-sm"
                                : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                        }`}
                    >
                        Price History (1/5/10 Yr)
                    </button>
                    <button
                        onClick={() => setActiveMetric("taxes")}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                            activeMetric === "taxes"
                                ? "bg-[#071636] text-white shadow-sm"
                                : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                        }`}
                    >
                        Taxes & Transaction Costs
                    </button>
                    <button
                        onClick={() => setActiveMetric("landlord")}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                            activeMetric === "landlord"
                                ? "bg-[#071636] text-white shadow-sm"
                                : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                        }`}
                    >
                        Landlord/Tenant Laws
                    </button>
                    <button
                        onClick={() => setActiveMetric("mortgage")}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                            activeMetric === "mortgage"
                                ? "bg-[#071636] text-white shadow-sm"
                                : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                        }`}
                    >
                        Mortgage Rates
                    </button>
                </nav>
            </div>

            {/* Table */}
            <div className="flex-1 p-6">
                <div className="mb-4">
                    <h2 className="font-heading font-semibold text-lg text-navy">Global Real Estate Tax Matrix</h2>
                    <p className="text-sm text-muted-foreground mt-1">Comparative tax rates for international investors.</p>
                </div>

                <div className="border border-border rounded-md overflow-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-muted/50">
                        <tr>
                            <th className="px-4 py-2 text-left font-semibold text-navy">Country</th>
                            <th className="px-4 py-2 text-right font-semibold text-navy cursor-pointer hover:text-sky">
                                Est. Total Entry Cost ↑
                            </th>
                            <th className="px-4 py-2 text-right font-semibold text-navy">Annual Property Tax</th>
                            <th className="px-4 py-2 text-right font-semibold text-navy">Rental Income Tax</th>
                            <th className="px-4 py-2 text-right font-semibold text-navy">Capital Gains Tax</th>
                        </tr>
                        </thead>
                        <tbody>
                        {taxData[activeMetric].map((c, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-muted/20" : "bg-card"}>
                                <td className="px-4 py-2 font-medium flex items-center gap-2">
                                    <span>{c.flag}</span>
                                    <span>{c.country}</span>
                                </td>
                                <td className="px-4 py-2 text-right font-bold text-navy">{c.entryCost}</td>
                                <td className="px-4 py-2 text-right">{c.propertyTax}</td>
                                <td className="px-4 py-2 text-right">{c.rentalTax}</td>
                                <td className="px-4 py-2 text-right">{c.capitalGains}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <p className="text-xs text-muted-foreground mt-3">
                    Data updated quarterly. Source: Estate Atlas Research Network.
                </p>
            </div>
        </div>
    );
};

export default TaxMatrix;
