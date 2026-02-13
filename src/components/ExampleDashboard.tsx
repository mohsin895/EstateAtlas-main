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
    insightText?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data, lines, isRentalData = false, insightText }) => {
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
                {view === "chart" && insightText && <p className="text-sm text-gray-600 mt-2">{insightText}</p>}
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
                                                {row.currency || '€'}{row[lines[0].dataKey]}/mo
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
                                                        ? `${row.currency || '€'}${(row[line.dataKey] / 1000).toFixed(0)}K`
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

// Mock data for different countries/cities
const chartDataByLocation: Record<string, any> = {
    'Germany-Berlin': {
        priceData: [
            { year: 2020, city: 400000, countryAvg: 380000 },
            { year: 2021, city: 450000, countryAvg: 400000 },
            { year: 2022, city: 485000, countryAvg: 420000 },
            { year: 2023, city: 505000, countryAvg: 435000 },
            { year: 2024, city: 520000, countryAvg: 448000 },
        ],
        rentalData: [
            { year: 2020, city: 1250 },
            { year: 2021, city: 1320 },
            { year: 2022, city: 1420 },
            { year: 2023, city: 1520 },
            { year: 2024, city: 1650 },
        ],
        insight: 'Berlin is outperforming the national average by 1.2% annually.'
    },
    'France-Paris': {
        priceData: [
            { year: 2020, city: 550000, countryAvg: 420000, currency: '€' },
            { year: 2021, city: 595000, countryAvg: 445000, currency: '€' },
            { year: 2022, city: 635000, countryAvg: 465000, currency: '€' },
            { year: 2023, city: 660000, countryAvg: 480000, currency: '€' },
            { year: 2024, city: 680000, countryAvg: 495000, currency: '€' },
        ],
        rentalData: [
            { year: 2020, city: 1850, currency: '€' },
            { year: 2021, city: 1980, currency: '€' },
            { year: 2022, city: 2120, currency: '€' },
            { year: 2023, city: 2280, currency: '€' },
            { year: 2024, city: 2450, currency: '€' },
        ],
        insight: 'Paris is outperforming the national average by 2.1% annually.'
    },
    'Spain-Madrid': {
        priceData: [
            { year: 2020, city: 320000, countryAvg: 285000, currency: '€' },
            { year: 2021, city: 355000, countryAvg: 305000, currency: '€' },
            { year: 2022, city: 385000, countryAvg: 325000, currency: '€' },
            { year: 2023, city: 405000, countryAvg: 340000, currency: '€' },
            { year: 2024, city: 420000, countryAvg: 352000, currency: '€' },
        ],
        rentalData: [
            { year: 2020, city: 1150, currency: '€' },
            { year: 2021, city: 1250, currency: '€' },
            { year: 2022, city: 1380, currency: '€' },
            { year: 2023, city: 1520, currency: '€' },
            { year: 2024, city: 1680, currency: '€' },
        ],
        insight: 'Madrid is experiencing strong growth, up 2.8% above the national average.'
    },
    'United Kingdom-London': {
        priceData: [
            { year: 2020, city: 610000, countryAvg: 445000, currency: '£' },
            { year: 2021, city: 645000, countryAvg: 465000, currency: '£' },
            { year: 2022, city: 675000, countryAvg: 480000, currency: '£' },
            { year: 2023, city: 700000, countryAvg: 495000, currency: '£' },
            { year: 2024, city: 725000, countryAvg: 505000, currency: '£' },
        ],
        rentalData: [
            { year: 2020, city: 2150, currency: '£' },
            { year: 2021, city: 2250, currency: '£' },
            { year: 2022, city: 2380, currency: '£' },
            { year: 2023, city: 2480, currency: '£' },
            { year: 2024, city: 2550, currency: '£' },
        ],
        insight: 'London maintains steady growth at 1.5% above the UK average.'
    }
};

interface ExampleDashboardProps {
    country: string;
    city: string;
    propertyType: string;
}

const ExampleDashboard: React.FC<ExampleDashboardProps> = ({ country, city, propertyType }) => {
    const locationKey = `${country}-${city}`;
    const locationData = chartDataByLocation[locationKey] || chartDataByLocation['Germany-Berlin'];

    return (
        <div className="grid grid-cols-1 mt-4 lg:grid-cols-2 gap-6">
            <ChartCard
                title="5-Year Price Appreciation"
                data={locationData.priceData}
                lines={[
                    { dataKey: "city", color: "#3b9dd8", name: city },
                    { dataKey: "countryAvg", color: "#9ca3af", name: `${country} Avg`, strokeDasharray: "5 5" },
                ]}
                insightText={locationData.insight}
            />
            <ChartCard
                title="Rental Rate Trends"
                data={locationData.rentalData}
                lines={[{ dataKey: "city", color: "#3b9dd8", name: city }]}
                isRentalData={true}
            />
        </div>
    );
};

export default ExampleDashboard;