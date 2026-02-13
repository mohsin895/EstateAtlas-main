'use client';
import React, { useState, useEffect } from 'react';
import {LucideChevronDown, LucideTrendingUp, LucideMinus, LucideCheck, Check} from "lucide-react";
import ExampleDashboard from "@/components/ExampleDashboard";
import AssetDashboard from "@/components/AssetDashboard";
import TopNeighborhoods from "@/components/TopNeighborhoods";
import Link from "next/link";

const countryData = {
    'Germany': {
        cities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'],
        propertyTypes: ['All Property Types', 'Apartments', 'Houses']
    },
    'France': {
        cities: ['Paris', 'Lyon', 'Marseille', 'Nice'],
        propertyTypes: ['All Property Types', 'Apartments', 'Houses']
    },
    'Spain': {
        cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville'],
        propertyTypes: ['All Property Types', 'Apartments', 'Houses']
    },
    'United Kingdom': {
        cities: ['London', 'Manchester', 'Birmingham', 'Edinburgh'],
        propertyTypes: ['All Property Types', 'Apartments', 'Houses']
    }
};

const mockData = {
    'Germany-Berlin-All Property Types': { medianPrice: '€520,000', medianPriceChange: '+4.2%', yoyGrowth: '+6.1%', yoyStatus: 'Stable', rentalYield: '3.9%', rentalYieldRating: 'MODERATE', daysOnMarket: '42 Days', marketStatus: 'High Demand' },
    'France-Paris-All Property Types': { medianPrice: '€680,000', medianPriceChange: '+5.8%', yoyGrowth: '+7.3%', yoyStatus: 'Rising', rentalYield: '3.2%', rentalYieldRating: 'LOW', daysOnMarket: '28 Days', marketStatus: 'Very High Demand' },
    'Spain-Madrid-All Property Types': { medianPrice: '€420,000', medianPriceChange: '+6.5%', yoyGrowth: '+8.2%', yoyStatus: 'Hot', rentalYield: '4.5%', rentalYieldRating: 'GOOD', daysOnMarket: '35 Days', marketStatus: 'High Demand' },
    'United Kingdom-London-All Property Types': { medianPrice: '£725,000', medianPriceChange: '+3.1%', yoyGrowth: '+4.8%', yoyStatus: 'Stable', rentalYield: '3.5%', rentalYieldRating: 'MODERATE', daysOnMarket: '38 Days', marketStatus: 'Steady Demand' }
};

const RegionalCityData: React.FC = () => {
    const [country, setCountry] = useState('Germany');
    const [city, setCity] = useState('Berlin');
    const [propertyType, setPropertyType] = useState('All Property Types');
    const [currentData, setCurrentData] = useState(mockData['Germany-Berlin-All Property Types']);
    const [openDropdown, setOpenDropdown] = useState<'country' | 'city' | 'property' | null>(null);

    // Hover states
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
    const [hoveredCity, setHoveredCity] = useState<string | null>(null);
    const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);

    const countries = Object.keys(countryData);
    const cities = countryData[country as keyof typeof countryData].cities;
    const propertyTypes = countryData[country as keyof typeof countryData].propertyTypes;

    useEffect(() => {
        setCity(cities[0]);
        setPropertyType(propertyTypes[0]);
    }, [country]);

    useEffect(() => {
        const key = `${country}-${city}-${propertyType}`;
        setCurrentData(mockData[key as keyof typeof mockData] || mockData['Germany-Berlin-All Property Types']);
    }, [country, city, propertyType]);

    // Dropdown button helper
    const renderDropdown = (items: string[], selected: string, setSelected: (val: string) => void, hovered: string | null, setHovered: (val: string | null) => void) => {
        return items.map((option) => (
            <div  key={option} className="pl-[4px] pr-[4px] pt-[4px]">
            <li
                key={option}
                onMouseEnter={() => setHovered(option)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                    setSelected(option);
                    setOpenDropdown(null);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors
                    ${hovered === option ? 'bg-[#00A3E0] text-white'
                    : hovered !== null
                        ? "text-gray-700"
                        : selected === option
                            ? "bg-[#00A3E0] text-white"
                            : "text-gray-700"
                   }`}
            >


                {selected === option && <Check className="w-4 h-4" />}
                {selected !== option && <span className="w-4" />}
                <span>{option}</span>
            </li>
            </div>
        ));
    };

    return (
        <div className="w-full mx-auto rounded-lg">
            <h1 className="font-heading font-bold text-2xl text-navy">Regional & City Data</h1>
            <p className="text-dark-gray mt-1">Drill down into city-level metrics and neighborhood analysis</p>

            {/* Dropdowns */}
            <div className="rounded-lg mt-6 border text-card-foreground shadow-sm bg-white border-gray-200">
                <div className="p-4 flex flex-wrap items-center gap-4">

                    {/* Country */}
                    <div className="flex-1 min-w-[180px] relative">
                        <label className="block text-xs font-medium text-dark-gray mb-1">Select Country</label>
                        <button
                            className="flex h-10 items-center justify-between rounded-md border border-input px-3 py-2 text-sm w-full bg-white hover:bg-gray-50 transition-colors"
                            onClick={() => setOpenDropdown(openDropdown === 'country' ? null : 'country')}
                        >
                            <span>{country}</span>
                            <LucideChevronDown className="h-4 w-4 opacity-50" />
                        </button>
                        {openDropdown === 'country' && (
                            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                                {renderDropdown(countries, country, setCountry, hoveredCountry, setHoveredCountry)}
                            </ul>
                        )}
                    </div>

                    {/* City */}
                    <div className="flex-1 min-w-[180px] relative">
                        <label className="block text-xs font-medium text-dark-gray mb-1">Select Region/City</label>
                        <button
                            className="flex h-10 items-center justify-between rounded-md border border-input px-3 py-2 text-sm w-full bg-white hover:bg-gray-50 transition-colors"
                            onClick={() => setOpenDropdown(openDropdown === 'city' ? null : 'city')}
                        >
                            <span>{city}</span>
                            <LucideChevronDown className="h-4 w-4 opacity-50" />
                        </button>
                        {openDropdown === 'city' && (
                            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                                {renderDropdown(cities, city, setCity, hoveredCity, setHoveredCity)}
                            </ul>
                        )}
                    </div>

                    {/* Property Type */}
                    <div className="flex-1 min-w-[180px] relative">
                        <label className="block text-xs font-medium text-dark-gray mb-1">Property Type</label>
                        <button
                            className="flex h-10 items-center justify-between rounded-md border border-input px-3 py-2 text-sm w-full bg-white hover:bg-gray-50 transition-colors"
                            onClick={() => setOpenDropdown(openDropdown === 'property' ? null : 'property')}
                        >
                            <span>{propertyType}</span>
                            <LucideChevronDown className="h-4 w-4 opacity-50" />
                        </button>
                        {openDropdown === 'property' && (
                            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                                {renderDropdown(propertyTypes, propertyType, setPropertyType, hoveredProperty, setHoveredProperty)}
                            </ul>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-5">
                        <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 bg-[#071636] hover:bg-[#1F2D4A] text-white transition-colors">
                            Load City Data
                        </button>
                        <Link href="/dashboard/comparison" className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 border border-[#071636] text-[#071636] hover:bg-[#E6E7EA] transition-colors">
                            Compare Cities
                        </Link>
                    </div>
                </div>
            </div>

            {/* Dashboard cards */}
            <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200 p-5">
                    <p className="text-xs font-semibold text-dark-gray uppercase tracking-wide">Median Price</p>
                    <div className="flex items-end justify-between mt-2">
                        <span className="text-2xl font-bold text-navy">{currentData.medianPrice}</span>
                        <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <LucideTrendingUp className="h-4 w-4" />
                            <span>{currentData.medianPriceChange}</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200 p-5">
                    <p className="text-xs font-semibold text-dark-gray uppercase tracking-wide">YoY Growth</p>
                    <div className="flex items-end justify-between mt-2">
                        <span className="text-2xl font-bold text-navy">{currentData.yoyGrowth}</span>
                        <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                            <LucideMinus className="h-4 w-4 text-gray-400" />
                            <span>{currentData.yoyStatus}</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200 p-5">
                    <p className="text-xs font-semibold text-dark-gray uppercase tracking-wide">Rental Yield</p>
                    <div className="flex items-end justify-between mt-2">
                        <span className="text-2xl font-bold text-navy">{currentData.rentalYield}</span>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold bg-amber-100 text-amber-700 border-amber-200 text-xs">
                            RATING: {currentData.rentalYieldRating}
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border text-card-foreground shadow-sm bg-white border-gray-200 p-5">
                    <p className="text-xs font-semibold text-dark-gray uppercase tracking-wide">Avg Days on Market</p>
                    <div className="flex items-end justify-between mt-2">
                        <span className="text-2xl font-bold text-navy">{currentData.daysOnMarket}</span>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold bg-sky/10 text-sky border-sky/20 text-xs">
                            {currentData.marketStatus}
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboards */}
            <ExampleDashboard country={country} city={city} propertyType={propertyType} />
            <AssetDashboard country={country} city={city} propertyType={propertyType} />
            <TopNeighborhoods country={country} city={city} propertyType={propertyType} />
        </div>
    );
};

export default RegionalCityData;
