"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import GlobalStatsGrid from "@/components/GlobalStatsGrid";
import GlobalOpportunityMap from "@/components/GlobalOpportunityMap";
import MetricsPanel from "@/components/MetricsPanel";
import GlobalMarketDashboard from "@/components/GlobalMarketDashboard";

const GlobalMarketHeader: React.FC = () => {
    return (
        <div className="w-full  mx-auto    rounded-lg ">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Title */}
                <h1 className="font-bold text-2xl md:text-3xl text-[#071636]">
                    Global Market Intelligence
                </h1>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3">

                    {/* Region */}
                    <button
                        type="button"
                        className="flex h-10 items-center justify-between rounded-md
          border border-gray-300 px-3 py-2 text-sm w-[140px] bg-white
          focus:outline-none focus:ring-2 focus:ring-[#071636]"
                    >
                        <span>Global</span>
                        <ChevronDown className="h-4 w-4 opacity-50"/>
                    </button>

                    {/* Currency */}
                    <button
                        type="button"
                        className="flex h-10 items-center justify-between rounded-md
          border border-gray-300 px-3 py-2 text-sm w-[120px] bg-white
          focus:outline-none focus:ring-2 focus:ring-[#071636]"
                    >
                        <span>EUR</span>
                        <ChevronDown className="h-4 w-4 opacity-50"/>
                    </button>

                </div>

            </div>
            <GlobalStatsGrid/>
            <GlobalOpportunityMap/>
           <GlobalMarketDashboard />

        </div>
    );
};

export default GlobalMarketHeader;
