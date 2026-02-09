"use client";

import React from "react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

/* ---------------------------------- */
/* MAIN COMPONENT */
/* ---------------------------------- */

export default function InvestmentCalculatorPanel() {
    return (
        <div className="grid grid-cols-1 mt-4 lg:grid-cols-2 gap-6">
            {/* LEFT */}
            <PropertyDetailsCard />

            {/* RIGHT */}
            <CalculatorResults />
        </div>
    );
}

/* ---------------------------------- */
/* LEFT CARD */
/* ---------------------------------- */

function PropertyDetailsCard() {
    return (
        <div className="rounded-lg border bg-white shadow-sm h-fit">
            <div className="p-6 pb-4">
                <h3 className="text-lg font-heading font-semibold text-navy">
                    Property Details
                </h3>
            </div>

            <div className="p-6 pt-0 space-y-5">
                <Input label="Select Market for Smart Fill" value="🇵🇹 Portugal" />
                <CurrencyInput label="Property Value" value="420000" />
                <PercentWithPreview label="Down Payment" value="20" preview="€84,000" />
                <PercentInput label="Interest Rate" value="3.5" />
                <SelectInput label="Loan Term" value="25 Years" />
                <SmartPercentInput label="Buying Costs (Smart Fill)" value="8.0" />
                <CurrencyInput label="Monthly Rent" value="1850" />
                <CurrencyInput label="OpEx / Maintenance" value="350" suffix="/ mo" />

                <button className="w-full h-12 bg-[#071636] text-white rounded-md font-medium hover:bg-[#1F2D4A]">
                    Calculate ROI
                </button>
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* RIGHT SIDE */
/* ---------------------------------- */

function CalculatorResults() {
    return (
        <div className="space-y-6">
            <CashFlowCard />
            <MetricGrid />
            <WealthChartCard />
        </div>
    );
}

/* ---------------------------------- */
/* INPUT COMPONENTS */
/* ---------------------------------- */

function Input({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-dark-gray">{label}</label>
            <button className="w-full h-10 flex items-center justify-between px-3 border rounded-md bg-white text-sm">
                <span>{value}</span>
                <span>⌄</span>
            </button>
        </div>
    );
}

function SelectInput({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-dark-gray">{label}</label>
            <select
                defaultValue={value}
                className="w-full h-10 border rounded-md px-3 text-sm bg-white"
            >
                <option>15 Years</option>
                <option>20 Years</option>
                <option>25 Years</option>
                <option>30 Years</option>
            </select>
        </div>
    );
}

function CurrencyInput({
                           label,
                           value,
                           suffix,
                       }: {
    label: string;
    value: string;
    suffix?: string;
}) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-dark-gray">{label}</label>
            <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray">
          €
        </span>
                <input
                    defaultValue={value}
                    className="w-full h-10 border rounded-md pl-7 pr-10 text-sm"
                />
                {suffix && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-dark-gray">
            {suffix}
          </span>
                )}
            </div>
        </div>
    );
}

function PercentInput({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-dark-gray">{label}</label>
            <div className="relative">
                <input
                    defaultValue={value}
                    className="w-full h-10 border rounded-md pr-7 pl-3 text-sm"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-gray">
          %
        </span>
            </div>
        </div>
    );
}

function PercentWithPreview({
                                label,
                                value,
                                preview,
                            }: {
    label: string;
    value: string;
    preview: string;
}) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-dark-gray">{label}</label>
            <div className="flex gap-3">
                <div className="relative flex-1">
                    <input
                        defaultValue={value}
                        className="w-full h-10 border rounded-md pr-7 pl-3 text-sm"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">%</span>
                </div>
                <div className="flex items-center justify-center bg-gray-100 rounded-md px-3 text-sm min-w-[100px]">
                    {preview}
                </div>
            </div>
        </div>
    );
}

function SmartPercentInput({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-dark-gray">{label}</label>
            <div className="relative">
                <input
                    defaultValue={value}
                    className="w-full h-10 border rounded-md pr-7 pl-3 text-sm bg-amber-50 border-amber-200"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">%</span>
            </div>
            <p className="text-xs text-amber-600">⚡ IMT & Stamp Duty auto-filled</p>
        </div>
    );
}

/* ---------------------------------- */
/* RESULT COMPONENTS */
/* ---------------------------------- */

function CashFlowCard() {
    return (
        <div className="rounded-lg border bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 text-center p-6">
            <p className="text-xs uppercase text-gray-500 mb-2">
                Est. Monthly Cash Flow
            </p>
            <p className="text-4xl font-heading font-bold text-green-600 mb-1">
                + €425 / mo
            </p>
            <p className="text-sm text-green-600 font-medium">Positive Cash Flow</p>
        </div>
    );
}

function MetricGrid() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Metric label="Cap Rate" value="5.2%" />
            <Metric label="Cash-on-Cash" value="6.1%" />
            <Metric label="Total Annual ROI" value="9.4%" highlight />
        </div>
    );
}

function Metric({
                    label,
                    value,
                    highlight,
                }: {
    label: string;
    value: string;
    highlight?: boolean;
}) {
    return (
        <div className="rounded-lg border bg-white p-4 text-center">
            <p className="text-xs uppercase text-gray-500 mb-1">{label}</p>
            <p
                className={`text-2xl font-heading font-bold ${
                    highlight ? "text-sky" : "text-navy"
                }`}
            >
                {value}
            </p>
        </div>
    );
}

/* ---------------------------------- */
/* WEALTH CHART */
/* ---------------------------------- */

function WealthChartCard() {
    const data = generateWealthData();

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            {/* Header */}
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
                <h3 className="tracking-tight text-lg font-heading font-semibold text-navy">
                    30-Year Wealth Accumulation
                </h3>
            </div>

            {/* Chart */}
            <div className="p-6 pt-0">
                <div className="h-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                        >
                            {/* Grid */}
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                            {/* X Axis */}
                            <XAxis
                                dataKey="year"
                                tick={{ fontSize: 11, fill: "#4f4f58" }}
                                axisLine={{ stroke: "#e5e7eb" }}
                                tickLine={false}
                            />

                            {/* Y Axis */}
                            <YAxis
                                tickFormatter={(v) => `€${v / 1000}k`}
                                tick={{ fontSize: 11, fill: "#4f4f58" }}
                                axisLine={{ stroke: "#e5e7eb" }}
                                tickLine={false}
                            />

                            {/* Tooltip */}
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "white",
                                    borderRadius: "8px",
                                    border: "1px solid #e5e7eb",
                                    fontSize: "12px",
                                }}
                                labelStyle={{
                                    fontWeight: 600,
                                    color: "#0A1532",
                                }}
                                formatter={(value: number | undefined) =>
                                    value !== undefined ? `€${value.toLocaleString()}` : "-"
                                }
                            />

                            {/* Legend */}
                            <Legend
                                verticalAlign="bottom"
                                height={32}
                                iconType="circle"
                                wrapperStyle={{
                                    fontSize: "12px",
                                }}
                            />

                            {/* Equity */}
                            <Area
                                type="monotone"
                                dataKey="equity"
                                name="Equity"
                                stroke="#3ba1df"
                                fill="#3ba1df"
                                fillOpacity={0.55}
                                strokeWidth={2}
                            />

                            {/* Cashflow */}
                            <Area
                                type="monotone"
                                dataKey="cashflow"
                                name="Cumulative Cash Flow"
                                stroke="#22c55e"
                                fill="#22c55e"
                                fillOpacity={0.55}
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

function generateWealthData() {
    const years = 30;
    const yearlyEquityGrowth = 25000;
    const yearlyCashflow = 5000;

    let equity = 0;
    let cashflow = 0;

    return Array.from({ length: years }, (_, i) => {
        equity += yearlyEquityGrowth;
        cashflow += yearlyCashflow;

        return {
            year: `Year ${i + 1}`,
            equity,
            cashflow,
        };
    });
}
