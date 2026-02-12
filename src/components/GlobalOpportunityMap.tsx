"use client";

import { useState } from "react";

export default function GlobalOpportunityMap() {
    const filters = ["Rental Yields", "5-Year Growth", "Tax Efficiency", "Legal Risk"];
    const [active, setActive] = useState("Tax Efficiency");

    return (
        <div className="rounded-lg border text-card-foreground bg-card shadow-sm mt-6">
            <div className="p-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <h2 className="font-heading font-semibold text-lg text-navy">
                        Global Opportunity Map
                    </h2>

                    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
                        {filters.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActive(item)}
                                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all
                                ${
                                    active === item
                                        ? "bg-card text-navy shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Map */}
                <div className="relative h-96 bg-navy/5 rounded-lg overflow-hidden border border-border">

                    {/* Dots */}
                    <div className="absolute inset-0 opacity-20">
                        <svg viewBox="0 0 1200 600" className="w-full h-full">
                            <defs>
                                <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="currentColor" className="text-navy" />
                                </pattern>
                            </defs>

                            <ellipse cx="250" cy="200" rx="120" ry="100" fill="url(#dots)" />
                            <ellipse cx="320" cy="400" rx="70" ry="120" fill="url(#dots)" />
                            <ellipse cx="550" cy="180" rx="80" ry="70" fill="url(#dots)" />
                            <ellipse cx="560" cy="350" rx="80" ry="100" fill="url(#dots)" />
                            <ellipse cx="800" cy="220" rx="150" ry="100" fill="url(#dots)" />
                            <ellipse cx="920" cy="420" rx="60" ry="50" fill="url(#dots)" />
                        </svg>
                    </div>

                    {/* Glow Blobs */}
                    <div className="absolute inset-0">
                        <div className="absolute top-[30%] right-[20%] w-32 h-24 bg-green-500/30 rounded-full blur-xl" />
                        <div className="absolute top-[35%] right-[22%] w-20 h-16 bg-green-400/40 rounded-full blur-lg" />
                        <div className="absolute top-[55%] left-[20%] w-24 h-32 bg-green-500/25 rounded-full blur-xl" />
                        <div className="absolute top-[20%] left-[40%] w-28 h-20 bg-amber-400/30 rounded-full blur-xl" />
                        <div className="absolute top-[25%] left-[15%] w-24 h-20 bg-amber-400/25 rounded-full blur-xl" />
                    </div>

                    {/* Pins */}
                    <div className="absolute inset-0">

                        <Pin
                            top="40%"
                            right="25%"
                            color="green"
                            label="Vietnam +12.4%"
                        />

                        <Pin
                            top="65%"
                            left="25%"
                            color="green"
                            label="Paraguay $1.2k/m²"
                        />

                        <Pin
                            top="45%"
                            right="18%"
                            color="emerald"
                            label="PH"
                            small
                        />

                        <Pin
                            top="25%"
                            left="44%"
                            color="amber"
                            label="DE"
                            small
                        />
                    </div>

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border">
                        <p className="text-xs font-semibold text-navy mb-2">
                            Opportunity Level
                        </p>

                        <div className="flex items-center gap-4">
                            <Legend color="green" label="High" />
                            <Legend color="amber" label="Moderate" />
                            <Legend color="red" label="Low" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

/* ---------------- PIN ---------------- */

function Pin({
                 top,
                 left,
                 right,
                 color,
                 label,
                 small = false,
             }: {
    top: string;
    left?: string;
    right?: string;
    color: "green" | "amber" | "emerald";
    label: string;
    small?: boolean;
}) {
    const dotSize = small ? "w-2.5 h-2.5" : "w-3 h-3";

    const colorMap: any = {
        green: "bg-green-500 shadow-green-500/50",
        amber: "bg-amber-500",
        emerald: "bg-emerald-500",
    };

    return (
        <div
            className="absolute flex items-center gap-2"
            style={{ top, left, right }}
        >
            <div
                className={`${dotSize} rounded-full animate-pulse shadow-lg ${colorMap[color]}`}
            />
            <span className="text-xs font-medium text-navy bg-card/90 px-2 py-1 rounded shadow-sm">
                {label}
            </span>
        </div>
    );
}

/* ---------------- LEGEND ---------------- */

function Legend({
                    color,
                    label,
                }: {
    color: "green" | "amber" | "red";
    label: string;
}) {
    const colors: any = {
        green: "bg-green-500",
        amber: "bg-amber-500",
        red: "bg-red-400",
    };

    return (
        <div className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-full ${colors[color]}`} />
            <span className="text-xs text-muted-foreground">{label}</span>
        </div>
    );
}
