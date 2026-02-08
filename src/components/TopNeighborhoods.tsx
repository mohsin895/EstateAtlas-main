'use client';
import React from 'react';
import { LucideFlame } from 'lucide-react';

type Neighborhood = {
    name: string;
    medianPrice: string;
    yoyGrowth: string;
    vacancyRate: string;
    vacancyLabel?: string;
    marketHeat: 'Hot' | 'Warm' | 'Cool';
    heatColor: 'red' | 'amber' | 'blue';
};

const neighborhoods: Neighborhood[] = [
    { name: 'Mitte', medianPrice: '€8,200', yoyGrowth: '+8.5%', vacancyRate: '1.2%', vacancyLabel: 'Very Low', marketHeat: 'Hot', heatColor: 'red' },
    { name: 'Kreuzberg', medianPrice: '€7,400', yoyGrowth: '+7.2%', vacancyRate: '1.5%', marketHeat: 'Hot', heatColor: 'red' },
    { name: 'Charlottenburg', medianPrice: '€6,800', yoyGrowth: '+5.1%', vacancyRate: '2.1%', marketHeat: 'Warm', heatColor: 'amber' },
    { name: 'Prenzlauer Berg', medianPrice: '€7,100', yoyGrowth: '+6.8%', vacancyRate: '1.8%', marketHeat: 'Hot', heatColor: 'red' },
    { name: 'Friedrichshain', medianPrice: '€6,500', yoyGrowth: '+4.2%', vacancyRate: '2.5%', marketHeat: 'Warm', heatColor: 'amber' },
    { name: 'Neukölln', medianPrice: '€5,200', yoyGrowth: '+3.8%', vacancyRate: '3.2%', marketHeat: 'Cool', heatColor: 'blue' },
];

const heatBgColor = {
    red: 'bg-red-100 text-red-700 border-red-200',
    amber: 'bg-amber-100 text-amber-700 border-amber-200',
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
};

const TopNeighborhoods: React.FC = () => {
    return (
        <div className="rounded-lg border text-card-foreground mt-4 shadow-sm bg-white border-gray-200">
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
                <h3 className="font-semibold tracking-tight font-heading text-lg text-navy">
                    Top Performing Neighborhoods in Berlin
                </h3>
            </div>
            <div className="p-6 pt-0">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors bg-muted/50 hover:bg-muted/50">
                            <th className="h-12 px-4 text-left align-middle font-semibold text-navy">Neighborhood</th>
                            <th className="h-12 px-4 text-right align-middle font-semibold text-navy">Median Price / m²</th>
                            <th className="h-12 px-4 text-right align-middle font-semibold text-navy">YoY Growth</th>
                            <th className="h-12 px-4 text-right align-middle font-semibold text-navy">Vacancy Rate</th>
                            <th className="h-12 px-4 text-center align-middle font-semibold text-navy">Market Heat</th>
                        </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                        {neighborhoods.map((n, index) => (
                            <tr
                                key={n.name}
                                className={`border-b transition-colors hover:bg-muted/50 ${index % 2 === 0 ? 'bg-muted/20' : 'bg-card'}`}
                            >
                                <td className="p-4 align-middle font-medium">{n.name}</td>
                                <td className="p-4 align-middle text-right font-semibold">{n.medianPrice}</td>
                                <td className="p-4 align-middle text-right text-green-600 font-medium">{n.yoyGrowth}</td>
                                <td className="p-4 align-middle text-right">
                                    <div className="flex flex-col items-end">
                      <span className={`font-semibold ${n.vacancyLabel && n.vacancyRate < '2%' ? 'text-green-600' : 'text-amber-600'}`}>
                        {n.vacancyRate}
                      </span>
                                        {n.vacancyLabel && <span className="text-xs text-gray-500">{n.vacancyLabel}</span>}
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-center">
                                    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 ${heatBgColor[n.heatColor]}`}>
                                        {n.heatColor === 'red' && <LucideFlame className="h-3 w-3 mr-1" />}
                                        {n.marketHeat}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TopNeighborhoods;
