"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import GlobalStatsGrid from "@/components/GlobalStatsGrid";
import GlobalOpportunityMap from "@/components/GlobalOpportunityMap";
import GlobalMarketDashboard from "@/components/GlobalMarketDashboard";

const regions = [
    "Global",
    "Europe",
    "Americas",
    "Asia Pacific",
    "Middle East",
    "Africa",
];

const currencies = ["EUR", "USD", "GBP", "JPY", "AUD"];

const GlobalMarketHeader: React.FC = () => {
    const [selectedRegion, setSelectedRegion] = useState("Global");
    const [selectedCurrency, setSelectedCurrency] = useState("EUR");

    const [isRegionOpen, setIsRegionOpen] = useState(false);
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

    const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
    const [hoveredCurrency, setHoveredCurrency] = useState<string | null>(null);

    const regionRef = useRef<HTMLDivElement>(null);
    const currencyRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                regionRef.current &&
                !regionRef.current.contains(event.target as Node)
            ) {
                setIsRegionOpen(false);
            }

            if (
                currencyRef.current &&
                !currencyRef.current.contains(event.target as Node)
            ) {
                setIsCurrencyOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="w-full mx-auto rounded-lg">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="font-bold text-2xl md:text-3xl text-[#071636]">
                    Global Market Intelligence
                </h1>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* ================= Region Dropdown ================= */}
                    <div ref={regionRef} className="relative">
                        <button
                            type="button"
                            onClick={() => setIsRegionOpen(!isRegionOpen)}
                            className="flex h-10 items-center justify-between rounded-md
              border border-gray-300 px-3 py-2 text-sm w-[140px] bg-white
              focus:outline-none focus:ring-2 focus:ring-[#071636]"
                        >
                            <span>{selectedRegion}</span>
                            <ChevronDown className="h-4 w-4 opacity-50" />
                        </button>

                        {isRegionOpen && (
                            <div className="absolute top-full mt-1 w-[160px] bg-white border border-gray-200
              rounded-md shadow-lg z-50 overflow-hidden">
                                {regions.map((region) => (
                                    <div  key={region} className="pl-[4px] pr-[4px] pt-[4px]">

                                        <button
                                            key={region}
                                            onClick={() => {
                                                setSelectedRegion(region);
                                                setIsRegionOpen(false);
                                            }}
                                            onMouseEnter={() => setHoveredRegion(region)}
                                            onMouseLeave={() => setHoveredRegion(null)}
                                            className={`w-full flex items-center justify-between px-3 py-2 text-sm text-left
                    transition-colors
                    ${
                                                hoveredRegion === region
                                                    ? "bg-[#00A3E0] text-white"
                                                    : hoveredRegion !== null
                                                        ? "text-gray-700"
                                                        : selectedRegion === region
                                                            ? "bg-[#00A3E0] text-white"
                                                            : "text-gray-700"
                                            }`}
                                        >
                                            <span>{region}</span>
                                            {selectedRegion === region && (
                                                <Check className="h-4 w-4" />
                                            )}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ================= Currency Dropdown ================= */}
                    <div ref={currencyRef} className="relative">
                        <button
                            type="button"
                            onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                            className="flex h-10 items-center justify-between rounded-md
              border border-gray-300 px-3 py-2 text-sm w-[120px] bg-white
              focus:outline-none focus:ring-2 focus:ring-[#071636]"
                        >
                            <span>{selectedCurrency}</span>
                            <ChevronDown className="h-4 w-4 opacity-50" />
                        </button>

                        {isCurrencyOpen && (
                            <div className="absolute top-full mt-1 w-[120px] bg-white border border-gray-200
              rounded-md shadow-lg z-50 overflow-hidden">
                                {currencies.map((currency) => (
                                    <div  key={currency} className="pl-[4px] pr-[4px] pt-[4px]">
                                    <button
                                        key={currency}
                                        onClick={() => {
                                            setSelectedCurrency(currency);
                                            setIsCurrencyOpen(false);
                                        }}
                                        onMouseEnter={() => setHoveredCurrency(currency)}
                                        onMouseLeave={() => setHoveredCurrency(null)}
                                        className={`w-full flex items-center justify-between px-3 py-2 text-sm text-left
                    transition-colors
                    ${
                                            hoveredCurrency === currency
                                                ? "bg-[#00A3E0] text-white"
                                                : hoveredCurrency !== null
                                                    ? "text-gray-700"
                                                    : selectedCurrency === currency
                                                        ? "bg-[#00A3E0] text-white"
                                                        : "text-gray-700"
                                        }`}
                                    >
                                        <span>{currency}</span>
                                        {selectedCurrency === currency && (
                                            <Check className="h-4 w-4" />
                                        )}
                                    </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <GlobalStatsGrid />
            <GlobalOpportunityMap />
            <GlobalMarketDashboard />
        </div>
    );
};

export default GlobalMarketHeader;
