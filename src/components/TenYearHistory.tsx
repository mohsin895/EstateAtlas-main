"use client";

import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

/* ------------------ DATA ------------------ */

const priceData = [
    { year: "2015", listing: 280, adjusted: 280 },
    { year: "2016", listing: 290, adjusted: 285 },
    { year: "2017", listing: 310, adjusted: 300 },
    { year: "2018", listing: 330, adjusted: 315 },
    { year: "2019", listing: 350, adjusted: 330 },
    { year: "2020", listing: 340, adjusted: 345 },
    { year: "2021", listing: 380, adjusted: 360 },
    { year: "2022", listing: 420, adjusted: 380 },
    { year: "2023", listing: 450, adjusted: 400 },
    { year: "2024", listing: 480, adjusted: 420 },
];

const rentData = [
    { year: "2015", nominal: 900, adjusted: 900 },
    { year: "2016", nominal: 950, adjusted: 920 },
    { year: "2017", nominal: 1050, adjusted: 980 },
    { year: "2018", nominal: 1150, adjusted: 1050 },
    { year: "2019", nominal: 1250, adjusted: 1150 },
    { year: "2020", nominal: 1200, adjusted: 1250 },
    { year: "2021", nominal: 1400, adjusted: 1150 },
    { year: "2022", nominal: 1600, adjusted: 1300 },
    { year: "2023", nominal: 1800, adjusted: 1450 },
    { year: "2024", nominal: 2000, adjusted: 1550 },
];

/* ------------------ COMPONENT ------------------ */

export default function TenYearHistory() {
    const [priceView, setPriceView] = useState<"chart" | "table">("chart");
    const [rentView, setRentView] = useState<"chart" | "table">("chart");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-6">

            {/* PRICE HISTORY */}
            <HistoryCard
                title="10-Year Price History"
                view={priceView}
                setView={setPriceView}
            >
                {priceView === "chart" ? (
                    <PriceChart />
                ) : (
                    <DataTable
                        data={priceData}
                        headers={["Year", "Listing Price", "Inflation Adjusted"]}
                        keys={["year", "listing", "adjusted"]}
                        prefix="€"
                        suffix="K"
                    />
                )}
            </HistoryCard>

            {/* RENT HISTORY */}
            <HistoryCard
                title="10-Year Rental History"
                view={rentView}
                setView={setRentView}
            >
                {rentView === "chart" ? (
                    <RentChart />
                ) : (
                    <DataTable
                        data={rentData}
                        headers={["Year", "Nominal Rent", "Inflation Adjusted"]}
                        keys={["year", "nominal", "adjusted"]}
                        prefix="€"
                    />
                )}
            </HistoryCard>

        </div>
    );
}

/* ------------------ CARD ------------------ */

function HistoryCard({
                         title,
                         view,
                         setView,
                         children,
                     }: {
    title: string;
    view: "chart" | "table";
    setView: (v: "chart" | "table") => void;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">

            <div className="flex items-center justify-between mb-6">

                <h3 className="font-semibold text-lg text-[#071636]">
                    {title}
                </h3>

                <div className="flex bg-gray-100 rounded-full p-0.5">

                    <ToggleButton
                        active={view === "chart"}
                        onClick={() => setView("chart")}
                    >
                        Chart
                    </ToggleButton>

                    <ToggleButton
                        active={view === "table"}
                        onClick={() => setView("table")}
                    >
                        Table
                    </ToggleButton>

                </div>

            </div>

            <div className="h-72">
                {children}
            </div>

        </div>
    );
}

/* ------------------ BUTTON ------------------ */

function ToggleButton({
                          active,
                          onClick,
                          children,
                      }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors
        ${active
                ? "bg-[#071636] text-white"
                : "text-gray-500 hover:text-gray-800"
            }`}
        >
            {children}
        </button>
    );
}

/* ------------------ CHARTS ------------------ */

function PriceChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(v) => `€${v}K`} />
                <Tooltip />
                <Legend />

                <Line
                    type="monotone"
                    dataKey="listing"
                    name="Listing Price"
                    stroke="#3ba1df"
                    strokeWidth={2}
                    dot
                />

                <Line
                    type="monotone"
                    dataKey="adjusted"
                    name="Inflation-Adjusted"
                    stroke="#071636"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot
                />

            </LineChart>
        </ResponsiveContainer>
    );
}

function RentChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rentData}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(v) => `€${v}`} />
                <Tooltip />
                <Legend />

                <Line
                    type="monotone"
                    dataKey="nominal"
                    name="Nominal Rent"
                    stroke="#3ba1df"
                    strokeWidth={2}
                    dot
                />

                <Line
                    type="monotone"
                    dataKey="adjusted"
                    name="Inflation-Adjusted"
                    stroke="#071636"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot
                />

            </LineChart>
        </ResponsiveContainer>
    );
}

/* ------------------ TABLE ------------------ */

function DataTable({
                       data,
                       headers,
                       keys,
                       prefix = "",
                       suffix = "",
                   }: {
    data: any[];
    headers: string[];
    keys: string[];
    prefix?: string;
    suffix?: string;
}) {
    return (
        <div className="overflow-x-auto">

            <table className="w-full text-sm border-collapse">

                <thead>
                <tr className="border-b">
                    {headers.map((h) => (
                        <th
                            key={h}
                            className="text-left py-2 text-gray-500 font-medium"
                        >
                            {h}
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {data.map((row, i) => (
                    <tr key={i} className="border-b last:border-0">

                        {keys.map((k) => (
                            <td key={k} className="py-2 text-gray-700">
                                {k === "year"
                                    ? row[k]
                                    : `${prefix}${row[k]}${suffix}`}
                            </td>
                        ))}

                    </tr>
                ))}
                </tbody>

            </table>

        </div>
    );
}
