'use client';
import React, { useState } from 'react';
import { LucideChevronDown, LucideTrendingUp, LucideMinus } from "lucide-react";
import ExampleDashboard from "@/components/ExampleDashboard";
import AssetDashboard from "@/components/AssetDashboard";
import TopNeighborhoods from "@/components/TopNeighborhoods";

const RegionalCityData: React.FC = () => {

    const [country, setCountry] = useState('Germany');
    const [city, setCity] = useState('Berlin');
    const [propertyType, setPropertyType] = useState('All Property Types');

    const countries = ['Germany', 'France', 'Spain'];
    const cities = ['Berlin', 'Munich', 'Hamburg'];
    const propertyTypes = ['All Property Types', 'Apartment', 'House'];

    // State to track open dropdown
    const [openDropdown, setOpenDropdown] = useState<'country' | 'city' | 'property' | null>(null);

    return (
        <div className="w-full max-w-5xl mx-auto    rounded-lg ">
            <h1 className="font-heading font-bold text-2xl text-navy">
                Regional &amp; City Data
            </h1>
            <p className="text-dark-gray mt-1">
                Drill down into city-level metrics and neighborhood analysis
            </p>


            <div className="rounded-lg mt-4 border text-card-foreground shadow-sm bg-white border-gray-200">
                <div className="p-4">
                    <div className="flex flex-wrap items-center gap-4">

                        {/* Country Selector */}
                        <div className="flex-1 min-w-[180px] relative">
                            <label className="block text-xs font-medium text-dark-gray mb-1">Select Country</label>
                            <button
                                type="button"
                                className="flex h-10 items-center justify-between rounded-md border border-input px-3 py-2 text-sm w-full bg-white"
                                onClick={() => setOpenDropdown(openDropdown === 'country' ? null : 'country')}
                            >
                                <span>{country}</span>
                                <LucideChevronDown className="h-4 w-4 opacity-50" />
                            </button>
                            {openDropdown === 'country' && (
                                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-sm max-h-40 overflow-auto">
                                    {countries.map((c) => (
                                        <li
                                            key={c}
                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setCountry(c);
                                                setOpenDropdown(null);
                                            }}
                                        >
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* City Selector */}
                        <div className="flex-1 min-w-[180px] relative">
                            <label className="block text-xs font-medium text-dark-gray mb-1">Select Region/City</label>
                            <button
                                type="button"
                                className="flex h-10 items-center justify-between rounded-md border border-input px-3 py-2 text-sm w-full bg-white"
                                onClick={() => setOpenDropdown(openDropdown === 'city' ? null : 'city')}
                            >
                                <span>{city}</span>
                                <LucideChevronDown className="h-4 w-4 opacity-50" />
                            </button>
                            {openDropdown === 'city' && (
                                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-sm max-h-40 overflow-auto">
                                    {cities.map((c) => (
                                        <li
                                            key={c}
                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setCity(c);
                                                setOpenDropdown(null);
                                            }}
                                        >
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Property Type Selector */}
                        <div className="flex-1 min-w-[180px] relative">
                            <label className="block text-xs font-medium text-dark-gray mb-1">Property Type</label>
                            <button
                                type="button"
                                className="flex h-10 items-center justify-between rounded-md border border-input px-3 py-2 text-sm w-full bg-white"
                                onClick={() => setOpenDropdown(openDropdown === 'property' ? null : 'property')}
                            >
                                <span>{propertyType}</span>
                                <LucideChevronDown className="h-4 w-4 opacity-50" />
                            </button>
                            {openDropdown === 'property' && (
                                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-sm max-h-40 overflow-auto">
                                    {propertyTypes.map((p) => (
                                        <li
                                            key={p}
                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setPropertyType(p);
                                                setOpenDropdown(null);
                                            }}
                                        >
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-5">
                            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 bg-[#1F2D4A] hover:bg-navy/90 text-white">
                                Load City Data
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 border border-navy text-navy hover:bg-navy/10">
                                Compare Cities
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Median Price */}
                <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200">
                    <div className="p-5">
                        <p className="text-xs font-semibold text-dark-gray uppercase tracking-wide">
                            Median Price
                        </p>
                        <div className="flex items-end justify-between mt-2">
                            <span className="text-2xl font-bold text-navy">€520,000</span>
                            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                                <LucideTrendingUp className="h-4 w-4 text-green-600" />
                                <span>+4.2%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* YoY Growth */}
                <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200">
                    <div className="p-5">
                        <p className="text-xs font-semibold text-dark-gray uppercase tracking-wide">
                            YoY Growth
                        </p>
                        <div className="flex items-end justify-between mt-2">
                            <span className="text-2xl font-bold text-navy">+6.1%</span>
                            <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                                <LucideMinus className="h-4 w-4 text-gray-400" />
                                <span>Stable</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rental Yield */}
                <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200">
                    <div className="p-5">
                        <p className="text-xs font-semibold text-dark-gray uppercase tracking-wide">
                            Rental Yield
                        </p>
                        <div className="flex items-end justify-between mt-2">
                            <span className="text-2xl font-bold text-navy">3.9%</span>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-amber-100 text-amber-700 border-amber-200 text-xs">
                                RATING: MODERATE
                            </div>
                        </div>
                    </div>
                </div>

                {/* Avg Days on Market */}
                <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200">
                    <div className="p-5">
                        <p className="text-xs font-semibold text-dark-gray uppercase tracking-wide">
                            Avg Days on Market
                        </p>
                        <div className="flex items-end justify-between mt-2">
                            <span className="text-2xl font-bold text-navy">42 Days</span>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-sky/10 text-sky border-sky/20 text-xs">
                                High Demand
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <ExampleDashboard />

     <AssetDashboard />

            <TopNeighborhoods />

        </div>
    );
};

export default RegionalCityData;
