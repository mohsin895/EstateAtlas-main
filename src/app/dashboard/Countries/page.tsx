"use client"

import React, { useState } from "react";
import { Search, ChevronDown, Plus,TrendingUp, User   } from "lucide-react";
import TenYearHistory from "@/components/TenYearHistory";
import MacroAndTaxes from "@/components/MacroAndTaxes";
const Countries = () => {

    const [activeProperty, setActiveProperty] = useState("All Properties");

    const propertyTypes = ["All Properties", "Houses", "Apartments"];

    const timeRanges = [
        "Last 3 Months",
        "Last 6 Months",
        "Last 12 Months",
        "Last 24 Months",
    ];

    const [open, setOpen] = useState(false);
    const [selectedRange, setSelectedRange] = useState("Last 12 Months");
  return (


      <div className="w-full  mx-auto    rounded-lg ">
          <div className=" rounded-lg  bg-white border border-gray-200 p-4">
              <div className="flex flex-col lg:flex-row items-center gap-4">

                  {/* Left Section */}
                  <div className="flex flex-col sm:flex-row bg-white items-center gap-4 flex-1 w-full">

                      {/* Search */}
                      <div className="relative flex-1 w-full">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

                          <input
                              type="text"
                              placeholder="Search for a country..."
                              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 pl-10 text-sm
              focus:outline-none focus:ring-2 focus:ring-[#071636]"
                          />
                      </div>

                      {/* Dropdown */}
                      <div className="relative w-full sm:w-[180px]">
                          <button
                              type="button"
                              onClick={() => setOpen(!open)}
                              className="flex h-10 w-full items-center justify-between rounded-md
      border border-gray-300 bg-white px-3 text-sm
      focus:outline-none focus:ring-2 focus:ring-[#3baade]"
                          >
                              <span>{selectedRange}</span>
                              <ChevronDown
                                  className={`h-4 w-4 opacity-60 transition ${
                                      open ? "rotate-180" : ""
                                  }`}
                              />
                          </button>

                          {open && (
                              <div className="absolute z-50 mt-1 w-full rounded-md border
      border-gray-200 bg-white shadow-lg">
                                  {timeRanges.map((range) => (
                                      <button
                                          key={range}
                                          onClick={() => {
                                              setSelectedRange(range);
                                              setOpen(false);
                                          }}
                                          className={`flex w-full items-center justify-between px-3 py-2 text-sm
            hover:bg-[#3baade] ${
                                              selectedRange === range ? "bg-white font-medium" : ""
                                          }`}
                                      >
                                          <span>{range}</span>
                                          {selectedRange === range && (
                                              <span className="text-sky-600">✓</span>
                                          )}
                                      </button>
                                  ))}
                              </div>
                          )}
                      </div>

                  </div>

                  {/* Right Section */}
                  <div className="flex flex-col bg-white sm:flex-row items-center gap-4">

                      {/* Property Type Tabs */}
                      <div className="inline-flex rounded-full bg-gray-100 p-1">
                          {propertyTypes.map((type) => (
                              <button
                                  key={type}
                                  onClick={() => setActiveProperty(type)}
                                  className={`px-4 py-2 text-sm font-medium rounded-full transition
                    ${
                                      activeProperty === type
                                          ? "bg-[#071636] text-white"
                                          : "text-gray-500 hover:text-gray-800"
                                  }`}
                              >
                                  {type}
                              </button>
                          ))}
                      </div>

                      {/* Save Button */}
                      <button
                          className="inline-flex items-center gap-2 h-10 px-4 py-2 rounded-md
            bg-[#071636] hover:bg-[#071636]/90 text-white text-sm font-medium
            w-full sm:w-auto transition"
                      >
                          <Plus className="h-4 w-4" />
                          Save Country
                      </button>

                  </div>

              </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

              {/* Score Card */}
              <div className=" rounded-lg border bg-white border-gray-200 shadow-sm p-6 ">

                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">
                      Estate Atlas Score
                  </h3>

                  <div className="flex flex-col items-center">

                      <svg width="200" height="110" viewBox="0 0 200 110" className="overflow-visible">

                          {/* Background Arc */}
                          <path
                              d="M 20 100 A 80 80 0 0 1 180 100"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="12"
                              strokeLinecap="round"
                          />

                          {/* Progress Arc */}
                          <path
                              d="M 20 100 A 80 80 0 0 1 180 100"
                              fill="none"
                              stroke="#22c55e"
                              strokeWidth="12"
                              strokeLinecap="round"
                              strokeDasharray="213 251"
                              style={{ transition: "stroke-dasharray 0.5s ease-in-out" }}
                          />

                          {/* Score */}
                          <text
                              x="100"
                              y="85"
                              textAnchor="middle"
                              className="text-3xl font-bold fill-[#071636]"
                          >
                              85
                          </text>

                          <text
                              x="100"
                              y="102"
                              textAnchor="middle"
                              className="text-xs fill-gray-500"
                          >
                              / 100
                          </text>

                      </svg>

                  </div>

                  <p className="text-xs text-gray-400 text-center mt-6">
                      Calculated from Yield, Growth, Tax, and Risk metrics.
                  </p>

              </div>

              {/* Metrics */}
              <div className="lg:col-span-2 bg-white shadow-sm rounded-lg border border-gray-200 p-6 ">

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 h-full">

                      {/* Annual Growth */}
                      <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold text-gray-400 uppercase">
              Annual Growth
            </span>

                          <div className="flex items-center gap-2  flex-wrap">
              <span className="font-bold text-lg md:text-xl text-sky-600">
                5.2%
              </span>
                              <TrendingUp className="h-4 w-4 text-green-500" />
                          </div>
                      </div>

                      {/* Median Asking Price */}
                      <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold text-gray-400 uppercase">
              Median Asking Price
            </span>

                          <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="font-bold text-lg md:text-xl text-sky-600">
                €450K
              </span>
                              <TrendingUp className="h-4 w-4 text-green-500" />
                          </div>
                      </div>

                      {/* Avg Sq. Meter Price */}
                      <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold text-gray-400 uppercase">
              Avg Sq. Meter Price
            </span>

                          <div className="mt-2">
              <span className="font-bold text-lg md:text-xl text-sky-600">
                €4,200 / m²
              </span>
                          </div>
                      </div>

                      {/* Rental Yield */}
                      <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold text-gray-400 uppercase">
              Rental Yield
            </span>

                          <div className="mt-2">
              <span className="font-bold text-lg md:text-xl text-sky-600">
                3.8%
              </span>
                          </div>

                          <span className="inline-flex mt-1.5 w-fit rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-800">
              RATING: MODERATE
            </span>
                      </div>

                      {/* Price-to-Rent Ratio */}
                      <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold text-gray-400 uppercase">
              Price-to-Rent Ratio
            </span>

                          <div className="mt-2">
              <span className="font-bold text-lg md:text-xl text-sky-600">
                18.5
              </span>
                          </div>

                          <span className="text-xs font-medium text-green-600 mt-1">
              BUY Signal
            </span>
                      </div>

                  </div>

              </div>

          </div>

          <div className="bg-white rounded-lg border mt-6 border-gray-200 p-6 shadow-sm">

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">

                  <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center">
                      <User className="h-5 w-5 text-sky-600" />
                  </div>

                  <div>
                      <h3 className="font-semibold text-lg text-[#071636]">
                          Expert Market Summary
                      </h3>

                      <span className="text-xs text-gray-400 uppercase tracking-wider">
            Quarterly Report Insight
          </span>
                  </div>

              </div>

              {/* Content */}
              <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-4">

                  <p className="text-gray-700 leading-relaxed">
                      Andorra presents a unique investment opportunity as Europe's
                      sixth-smallest nation. Nestled in the Pyrenees mountains between
                      France and Spain, this microstate offers a compelling combination of
                      political stability, favorable tax policies, and a growing luxury real
                      estate market. With limited land availability driving premium
                      valuations, property investments here have shown consistent
                      appreciation over the past decade.
                  </p>

              </div>

          </div>

          <TenYearHistory />
          <MacroAndTaxes />
      </div>
  );
};

export default Countries;
