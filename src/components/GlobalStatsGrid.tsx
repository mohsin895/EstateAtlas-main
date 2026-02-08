"use client";

import React from "react";
import {
    Percent,
    TrendingUp,
    DollarSign,
    Globe,
} from "lucide-react";

const GlobalStatsGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-2 mt-4 md:grid-cols-4 gap-4">

            {/* Global Yield */}
            <StatCard
                label="Global Yield Average"
                value="5.92%"
                sub="Aggregated"
                icon={<Percent className="h-5 w-5 text-sky-600" />}
            />

            {/* Top Growth */}
            <StatCard
                label="Top Growth Market"
                value="Vietnam (+12.4%)"
                icon={<TrendingUp className="h-5 w-5 text-sky-600" />}
                highlight
            />

            {/* Cheapest */}
            <StatCard
                label="Cheapest Entry Point"
                value="Paraguay ($1,200/m²)"
                icon={<DollarSign className="h-5 w-5 text-sky-600" />}
            />

            {/* Breadth */}
            <StatCard
                label="Market Breadth"
                value="195 Markets Tracked"
                icon={<Globe className="h-5 w-5 text-sky-600" />}
            />

        </div>
    );
};

export default GlobalStatsGrid;

/* ---------------- CARD ---------------- */

function StatCard({
                      label,
                      value,
                      sub,
                      icon,
                      highlight,
                  }: {
    label: string;
    value: string;
    sub?: string;
    icon: React.ReactNode;
    highlight?: boolean;
}) {
    return (
        <div
            className={`rounded-lg bg-white shadow-sm p-5
        ${highlight
                ? "border-2 border-green-400"
                : "border border-gray-200"
            }`}
        >
            <div className="flex items-start justify-between">

                <div className="space-y-2">

          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {label}
          </span>

                    <p className="font-bold text-xl text-[#071636]">
                        {value}
                    </p>

                    {sub && (
                        <span className="text-xs text-gray-400">
              {sub}
            </span>
                    )}

                </div>

                <div className="p-2 bg-sky-100 rounded-lg">
                    {icon}
                </div>

            </div>
        </div>
    );
}
