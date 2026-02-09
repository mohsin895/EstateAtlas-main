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

interface ChartCardProps {
    title: string;
    data: any[];
    lines: { dataKey: string; color: string; name: string; strokeDasharray?: string }[];
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data, lines }) => {
    const [view, setView] = useState<"chart" | "table">("chart");

    return (
        <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200">
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold tracking-tight font-heading text-lg text-[#1F2D4A]">{title}</h3>
                    <div className="flex bg-muted rounded-full p-0.5">
                        <button
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                view === "chart" ? "bg-[#1F2D4A] text-white" : "text-muted-foreground hover:text-foreground"
                            }`}
                            onClick={() => setView("chart")}
                        >
                            Chart
                        </button>
                        <button
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                view === "table" ? "bg-[#1F2D4A] text-white" : "text-muted-foreground hover:text-foreground"
                            }`}
                            onClick={() => setView("table")}
                        >
                            Table
                        </button>
                    </div>
                </div>
                {view === "chart" && <p className="text-sm text-dark-gray mt-2">Berlin is outperforming the national average by 1.2% annually.</p>}
            </div>

            <div className="p-6 pt-0 h-64">
                {view === "chart" ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                            <YAxis stroke="hsl(var(--muted-foreground))" />
                            <Tooltip wrapperStyle={{ borderRadius: 8 }} />
                            <Legend verticalAlign="bottom" />
                            {lines.map((line) => (
                                <Line
                                    key={line.dataKey}
                                    type="monotone"
                                    dataKey={line.dataKey}
                                    stroke={line.color}
                                    name={line.name}
                                    strokeDasharray={line.strokeDasharray || ""}
                                    dot={{ r: 4 }}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="overflow-auto max-h-64">
                        <table className="w-full table-auto border border-gray-200">
                            <thead>
                            <tr>
                                <th className="border px-2 py-1 text-left">Year</th>
                                {lines.map((line) => (
                                    <th key={line.dataKey} className="border px-2 py-1 text-left">{line.name}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((row, i) => (
                                <tr key={i}>
                                    <td className="border px-2 py-1">{row.year}</td>
                                    {lines.map((line) => (
                                        <td key={line.dataKey} className="border px-2 py-1">{row[line.dataKey]}</td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

// Example Usage
const ExampleDashboard: React.FC = () => {
    const priceData = [
        { year: 2020, berlin: 68, germanyAvg: 80 },
        { year: 2021, berlin: 58, germanyAvg: 74 },
        { year: 2022, berlin: 46.8, germanyAvg: 67.6 },
        { year: 2023, berlin: 40.4, germanyAvg: 62.8 },
        { year: 2024, berlin: 35.6, germanyAvg: 58.64 },
    ];

    const rentalData = [
        { year: 2020, berlin: 76 },
        { year: 2021, berlin: 67.6 },
        { year: 2022, berlin: 55.6 },
        { year: 2023, berlin: 43.6 },
        { year: 2024, berlin: 28 },
    ];

    return (
        <div className="grid grid-cols-1 mt-4 lg:grid-cols-2 gap-6">
            <ChartCard
                title="5-Year Price Appreciation"
                data={priceData}
                lines={[
                    { dataKey: "berlin", color: "#3ba1df", name: "Berlin" },
                    { dataKey: "germanyAvg", color: "#6b7280", name: "Germany Avg", strokeDasharray: "5 5" },
                ]}
            />
            <ChartCard
                title="Rental Rate Trends"
                data={rentalData}
                lines={[{ dataKey: "berlin", color: "#3ba1df", name: "Berlin" }]}
            />
        </div>
    );
};

export default ExampleDashboard;
