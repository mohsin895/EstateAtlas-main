"use client";

import React from "react";
import MarketAlerts from "@/components/MarketAlerts";

type TrendType = "up" | "down" | "stable";
type HeatLevel = "normal" | "hot" | "very-hot";

interface CountryWatch {
    id: number;
    name: string;
    flag: string;
    yield: string;
    yieldChange: string;
    avgPrice: string;
    priceTrend: TrendType;
    marketPhase: string;
    heat?: HeatLevel;
}

const watchlist: CountryWatch[] = [
    {
        id: 1,
        name: "Germany",
        flag: "🇩🇪",
        yield: "3.8%",
        yieldChange: "+0.2%",
        avgPrice: "€420k",
        priceTrend: "stable",
        marketPhase: "Heating Up",
    },
    {
        id: 2,
        name: "Vietnam",
        flag: "🇻🇳",
        yield: "8.2%",
        yieldChange: "+1.8%",
        avgPrice: "$145k",
        priceTrend: "up",
        marketPhase: "Heating Up",
        heat: "very-hot",
    },
];

export default function InvestmentWatchlist() {
    return (
        <section className="space-y-6">

            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[#0a1532]">
                        Your Investment Watchlist
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Track performance and receive alerts for your target markets.
                    </p>
                </div>

                <button className="h-10 px-4 rounded-md bg-[#0a1532] text-white hover:bg-[#0a1532]/90">
                    ➕ Add New Country
                </button>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {watchlist.map((item) => (
                    <CountryCard key={item.id} data={item} />
                ))}

                {/* LOCKED CARD */}
                <LockedCard />

            </div>

            <MarketAlerts />
        </section>
    );
}

/* ---------------------------------- */
/* COUNTRY CARD */
/* ---------------------------------- */

function CountryCard({ data }: { data: CountryWatch }) {
    return (
        <div className="rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-lg transition">

            <div className="p-6 pb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{data.flag}</span>
                    <h3 className="font-semibold text-lg text-[#0a1532]">
                        {data.name}
                    </h3>
                </div>

                <button className="h-8 w-8 rounded-md hover:bg-gray-100">⋮</button>
            </div>

            <div className="p-6 pt-0 space-y-4">

                {/* Yield */}
                <Row
                    label="Yield Trend"
                    value={data.yield}
                    badge={data.yieldChange}
                    positive
                />

                {/* Price */}
                <Row
                    label="Avg Price"
                    value={data.avgPrice}
                    badge={
                        data.priceTrend === "up"
                            ? "Rising"
                            : data.priceTrend === "down"
                                ? "Falling"
                                : "Stable"
                    }
                    positive={data.priceTrend === "up"}
                />

                {/* Phase */}
                <div className="flex justify-between pt-2 border-t">
                    <span className="text-sm text-gray-600">Market Phase</span>

                    <div className="flex items-center gap-2">
                        🔥
                        <span className="text-sm font-medium text-[#0a1532]">
              {data.marketPhase}
            </span>

                        {data.heat === "very-hot" && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-orange-100 text-orange-700">
                Very Hot
              </span>
                        )}
                    </div>
                </div>

                <button className="w-full h-10 border border-[#0a1532] text-[#0a1532] rounded-md hover:bg-[#0a1532] hover:text-white">
                    View Dashboard
                </button>

            </div>
        </div>
    );
}

/* ---------------------------------- */
/* REUSABLE ROW */
/* ---------------------------------- */

function Row({
                 label,
                 value,
                 badge,
                 positive,
             }: {
    label: string;
    value: string;
    badge: string;
    positive?: boolean;
}) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{label}</span>

            <div className="flex items-center gap-2">
                <span className="font-semibold text-[#0a1532]">{value}</span>

                <span
                    className={`px-2 py-0.5 text-xs rounded-full ${
                        positive
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                    }`}
                >
          {badge}
        </span>
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* LOCKED CARD */
/* ---------------------------------- */

function LockedCard() {
    return (

        <div className="relative min-h-[280px] rounded-lg bg-white border border-gray-200 overflow-hidden">

            <div className="absolute inset-0 backdrop-blur bg-white/80 z-10 flex flex-col items-center justify-center text-center p-6">
                <div className="bg-amber-100 p-4 rounded-full mb-4">🔒</div>

                <h4 className="font-bold text-lg text-[#0a1532] mb-2">
                    Unlock Unlimited Watchlist
                </h4>

                <p className="text-sm text-gray-600 mb-4">
                    Upgrade to Premium to track more than 2 markets.
                </p>

                <button className="h-10 px-4 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                    👑 Upgrade to Premium
                </button>
            </div>



        </div>

    );
}
