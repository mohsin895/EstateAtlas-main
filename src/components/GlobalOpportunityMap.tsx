"use client";

import { useState } from "react";

export default function GlobalOpportunityMap() {
    const filters = ["Rental Yields", "5-Year Growth", "Tax Efficiency", "Legal Risk"];
    const [active, setActive] = useState("Legal Risk");

    return (
        <div className="rounded-lg border text-card-foreground bg-card shadow-sm">
            <div className="p-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border pb-4 mb-6">
                    <h2 className="font-heading font-semibold text-lg text-navy">
                        Global Opportunity Map
                    </h2>

                    {/* Filters */}
                    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
                        {filters.map((item) => (
                            <button
                                key={item}
                                aria-label={`Filter by ${item}`}
                                onClick={() => setActive(item)}
                                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all
                  ${active === item
                                    ? "bg-card text-navy shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Map Container */}
                <div className="relative h-96 bg-navy/5 rounded-lg overflow-hidden border border-border">

                    {/* Dot Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
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

                    {/* Soft Blobs */}
                    <div className="absolute inset-0">
                        <div className="absolute top-[30%] right-[20%] w-32 h-24 bg-green-500/30 rounded-full blur-xl animate-[pulse_6s_ease-in-out_infinite]" />
                        <div className="absolute top-[55%] left-[20%] w-24 h-32 bg-green-500/25 rounded-full blur-xl animate-[pulse_7s_ease-in-out_infinite]" />
                        <div className="absolute top-[20%] left-[40%] w-28 h-20 bg-amber-400/30 rounded-full blur-xl animate-[pulse_8s_ease-in-out_infinite]" />
                    </div>

                    {/* Pins */}
                    <div className="absolute inset-0">

                        {/* Vietnam */}
                        <Pin
                            top="40%"
                            left="75%"
                            color="green"
                            label="Vietnam +12.4%"
                        />

                        {/* Paraguay */}
                        <Pin
                            top="65%"
                            left="25%"
                            color="green"
                            label="Paraguay $1.2k/m²"
                        />

                        {/* Philippines */}
                        <Pin
                            top="45%"
                            left="70%"
                            color="emerald"
                            label="PH"
                            small
                        />

                        {/* Germany */}
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

/* ---------------- PIN COMPONENT ---------------- */

function Pin({
                 top,
                 left,
                 color,
                 label,
                 small = false,
             }: {
    top: string;
    left: string;
    color: "green" | "amber" | "emerald" | "red";
    label: string;
    small?: boolean;
}) {
    const size = small ? "w-2.5 h-2.5" : "w-3 h-3";
    const colorClass = `pin-${color}`;

    return (
        <div className="absolute group" style={{ top, left }}>
            <div
                className={`${size} ${colorClass} rounded-full animate-pulse
          transition-transform duration-200 group-hover:scale-125`}
            />
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block
        bg-card text-xs text-navy px-2 py-1 rounded shadow border border-border whitespace-nowrap">
                {label}
            </div>
        </div>
    );
}


/* ---------------- LEGEND COMPONENT ---------------- */

function Legend({
                    color,
                    label,
                }: {
    color: "green" | "amber" | "red";
    label: string;
}) {
    return (
        <div className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-full bg-${color}-500`} />
            <span className="text-xs text-muted-foreground">{label}</span>
        </div>
    );
}
