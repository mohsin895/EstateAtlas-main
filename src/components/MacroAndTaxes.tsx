"use client";

import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const MacroAndTaxes: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-6">

            {/* ---------------- MACRO HEALTH ---------------- */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">

                <h3 className="font-semibold text-lg text-[#071636] mb-4">
                    Macro Health
                </h3>

                <div className="space-y-4">

                    <MetricRow
                        label="GDP Growth"
                        value="+2.1% YoY"
                        trend="up"
                    />

                    <MetricRow
                        label="GDP Per Capita"
                        value="$42,000 (+4%)"
                        trend="up"
                    />

                    <MetricRow
                        label="Mortgage Rate (Fixed)"
                        value="3.5%"
                        trend="down"
                    />

                    <MetricRow
                        label="Median Monthly Rent"
                        value="€1,850"
                    />

                </div>
            </div>

            {/* ---------------- LAW SLIDER ---------------- */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col justify-center">

                <h4 className="font-semibold text-[#071636] text-sm mb-3">
                    Landlord vs. Tenant Laws
                </h4>

                <div className="relative">

                    {/* Bar */}
                    <div className="h-4 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-500" />

                    {/* Indicator */}
                    <div
                        className="absolute top-0 h-4 w-1 bg-[#071636] rounded-full shadow-md transform -translate-x-1/2 transition-all duration-300"
                        style={{ left: "75%" }}
                    />

                    <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-400">
              Pro-Tenant
            </span>
                        <span className="text-xs text-gray-400">
              Pro-Landlord
            </span>
                    </div>

                </div>
            </div>

            {/* ---------------- TAXES ---------------- */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">

                <h3 className="font-semibold text-lg text-[#071636] mb-4">
                    Taxes & Transaction Costs
                </h3>

                <div>

                    <TaxRow
                        label="Property Transfer Tax"
                        value="4.0%"
                        shaded
                    />

                    <TaxRow
                        label="Annual Property Tax"
                        value="0.1% / yr"
                    />

                    <TaxRow
                        label="Rental Income Tax"
                        value="10.0%"
                        shaded
                    />

                    <TaxRow
                        label="Capital Gains Tax"
                        value="20.0%"
                    />

                </div>

                <p className="text-xs text-gray-400 mt-4 pt-3 border-t">
                    Est. Total Transaction Costs (Buy + Sell): ~12%
                </p>

            </div>

        </div>
    );
};

export default MacroAndTaxes;

/* ---------------- SMALL COMPONENTS ---------------- */

function MetricRow({
                       label,
                       value,
                       trend,
                   }: {
    label: string;
    value: string;
    trend?: "up" | "down";
}) {
    return (
        <div className="flex items-center justify-between">

      <span className="text-sm text-gray-500">
        {label}
      </span>

            <div className="flex items-center gap-2">

        <span className="font-semibold text-gray-800">
          {value}
        </span>

                {trend === "up" && (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                )}

                {trend === "down" && (
                    <ArrowDownRight className="h-4 w-4 text-green-500" />
                )}

            </div>

        </div>
    );
}

function TaxRow({
                    label,
                    value,
                    shaded,
                }: {
    label: string;
    value: string;
    shaded?: boolean;
}) {
    return (
        <div
            className={`flex items-center justify-between py-3
        ${shaded ? "bg-gray-50 -mx-6 px-6 border-y border-gray-200" : ""}
      `}
        >
      <span className="text-sm text-gray-500">
        {label}
      </span>

            <span className="font-semibold text-gray-800">
        {value}
      </span>
        </div>
    );
}
