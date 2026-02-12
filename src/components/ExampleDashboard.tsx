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
    isRentalData?: boolean;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data, lines, isRentalData = false }) => {
    const [view, setView] = useState<"chart" | "table">("chart");

    return (
        <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200">
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold tracking-tight font-heading text-lg text-[#1F2D4A]">{title}</h3>
                    <div className="flex bg-gray-100 rounded-full p-0.5">
                        <button
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                view === "chart" ? "bg-[#1F2D4A] text-white" : "text-gray-600 hover:text-gray-900"
                            }`}
                            onClick={() => setView("chart")}
                        >
                            Chart
                        </button>
                        <button
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                view === "table" ? "bg-[#1F2D4A] text-white" : "text-gray-600 hover:text-gray-900"
                            }`}
                            onClick={() => setView("table")}
                        >
                            Table
                        </button>
                    </div>
                </div>
                {view === "chart" && <p className="text-sm text-gray-600 mt-2">Berlin is outperforming the national average by 1.2% annually.</p>}
            </div>

            <div className="p-6 pt-0 h-64">
                {view === "chart" ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                            <XAxis
                                dataKey="year"
                                stroke="#6b7280"
                                tick={{ fill: '#6b7280', fontSize: 12 }}
                                axisLine={{ stroke: '#e5e7eb' }}
                            />
                            <YAxis
                                stroke="#6b7280"
                                tick={{ fill: '#6b7280', fontSize: 12 }}
                                axisLine={{ stroke: '#e5e7eb' }}
                                tickLine={false}
                            />
                            <Tooltip
                                contentStyle={{
                                    borderRadius: 8,
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                            />
                            <Legend
                                verticalAlign="bottom"
                                iconType="circle"
                                wrapperStyle={{ paddingTop: '20px' }}
                            />
                            {lines.map((line) => (
                                <Line
                                    key={line.dataKey}
                                    type="monotone"
                                    dataKey={line.dataKey}
                                    stroke={line.color}
                                    name={line.name}
                                    strokeDasharray={line.strokeDasharray || ""}
                                    strokeWidth={2}
                                    dot={{ r: 4, fill: line.color, strokeWidth: 2, stroke: '#fff' }}
                                    activeDot={{ r: 6 }}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="overflow-auto max-h-64">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b border-gray-200">
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Year</th>
                                {isRentalData ? (
                                    <>
                                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Median Rent</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">YoY Change</th>
                                    </>
                                ) : (
                                    <>
                                        {lines.map((line) => (
                                            <th key={line.dataKey} className="px-4 py-3 text-left text-sm font-medium text-gray-700">{line.name}</th>
                                        ))}
                                        {lines.length > 1 && <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">City YoY</th>}
                                    </>
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {[...data].reverse().map((row, i) => (
                                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="px-4 py-3 text-sm text-gray-900">{row.year}</td>
                                    {isRentalData ? (
                                        <>
                                            <td className="px-4 py-3 text-sm text-gray-900">
                                                €{row[lines[0].dataKey]}/mo
                                            </td>
                                            <td className="px-4 py-3 text-sm font-medium text-green-600">
                                                {i < data.length - 1
                                                    ? `+${((row[lines[0].dataKey] - data[data.length - i - 2][lines[0].dataKey]) / data[data.length - i - 2][lines[0].dataKey] * 100).toFixed(1)}%`
                                                    : '-'
                                                }
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            {lines.map((line) => (
                                                <td key={line.dataKey} className="px-4 py-3 text-sm text-gray-900">
                                                    {typeof row[line.dataKey] === 'number'
                                                        ? `€${(row[line.dataKey] / 1000).toFixed(0)}K`
                                                        : row[line.dataKey]
                                                    }
                                                </td>
                                            ))}
                                            {lines.length > 1 && (
                                                <td className="px-4 py-3 text-sm font-medium text-green-600">
                                                    {i < data.length - 1
                                                        ? `+${((row[lines[0].dataKey] - data[data.length - i - 2][lines[0].dataKey]) / data[data.length - i - 2][lines[0].dataKey] * 100).toFixed(1)}%`
                                                        : '-'
                                                    }
                                                </td>
                                            )}
                                        </>
                                    )}
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
        { year: 2020, berlin: 400000, germanyAvg: 380000 },
        { year: 2021, berlin: 450000, germanyAvg: 400000 },
        { year: 2022, berlin: 485000, germanyAvg: 420000 },
        { year: 2023, berlin: 505000, germanyAvg: 435000 },
        { year: 2024, berlin: 520000, germanyAvg: 448000 },
    ];

    const rentalData = [
        { year: 2020, berlin: 1250 },
        { year: 2021, berlin: 1320 },
        { year: 2022, berlin: 1420 },
        { year: 2023, berlin: 1520 },
        { year: 2024, berlin: 1650 },
    ];

    return (
        <div className="grid grid-cols-1 mt-4 lg:grid-cols-2 gap-6">
            <ChartCard
                title="5-Year Price Appreciation"
                data={priceData}
                lines={[
                    { dataKey: "berlin", color: "#3b9dd8", name: "Berlin" },
                    { dataKey: "germanyAvg", color: "#9ca3af", name: "Germany Avg", strokeDasharray: "5 5" },
                ]}
            />
            <ChartCard
                title="Rental Rate Trends"
                data={rentalData}
                lines={[{ dataKey: "berlin", color: "#3b9dd8", name: "Berlin" }]}
                isRentalData={true}
            />
        </div>
    );
};

export default ExampleDashboard;