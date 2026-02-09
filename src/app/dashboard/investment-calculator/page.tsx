"use client";

import React from "react";
import StressTestScenarios from "@/components/StressTestScenarios";
import InvestmentCalculatorPanel from "@/components/InvestmentCalculatorPanel";

export default function InvestmentCalculator() {
    return (
        <div>
            <h1 className="text-2xl font-heading font-bold text-navy">
                Investment Calculator
            </h1>

            <p className="text-dark-gray mt-1">
                Model your investment returns with market-specific data.
            </p>

           <InvestmentCalculatorPanel />
            <StressTestScenarios />
        </div>
    );
}
