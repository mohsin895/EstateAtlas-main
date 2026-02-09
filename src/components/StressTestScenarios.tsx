"use client";

import React from "react";
import {
    TrendingDown,
    TrendingUp,
    Minus,
    Crown,
} from "lucide-react";

/* ---------------------------------- */
/* TYPES */
/* ---------------------------------- */

type Scenario = {
    title: string;
    subtitle: string;
    vacancy: string;
    appreciation: string;
    cashflow: string;
    variant: "amber" | "green" | "sky";
};

/* ---------------------------------- */
/* DATA */
/* ---------------------------------- */

const scenarios: Scenario[] = [
    {
        title: "Conservative",
        subtitle: "Bear Case",
        vacancy: "8%",
        appreciation: "1%",
        cashflow: "€120 / mo",
        variant: "amber",
    },
    {
        title: "Moderate",
        subtitle: "Base Case",
        vacancy: "4%",
        appreciation: "3%",
        cashflow: "€425 / mo",
        variant: "green",
    },
    {
        title: "Aggressive",
        subtitle: "Bull Case",
        vacancy: "0%",
        appreciation: "6%",
        cashflow: "€680 / mo",
        variant: "sky",
    },
];

/* ---------------------------------- */
/* MAIN COMPONENT */
/* ---------------------------------- */

export default function StressTestScenarios() {
    return (
        <div className="rounded-lg border mt-4 bg-card text-card-foreground shadow-sm">

            {/* Header */}
            <div className="p-6 pb-4">
                <h3 className="text-lg font-heading font-semibold text-navy flex items-center gap-2">
                    Stress Test Scenarios
                    <Crown className="h-4 w-4 text-amber-500" />
                </h3>

                <p className="text-sm text-dark-gray mt-1">
                    See how your investment performs under different market conditions.
                </p>
            </div>

            {/* Scenarios */}
            <div className="p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {scenarios.map((scenario) => (
                        <ScenarioCard key={scenario.title} {...scenario} />
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* CARD */
/* ---------------------------------- */

function ScenarioCard({
                          title,
                          subtitle,
                          vacancy,
                          appreciation,
                          cashflow,
                          variant,
                      }: Scenario) {
    const styles = {
        amber: {
            box: "bg-amber-50 border-amber-200",
            text: "text-amber-600",
            icon: <TrendingDown className="h-5 w-5 text-amber-600" />,
            divider: "border-amber-200",
        },
        green: {
            box: "bg-green-50 border-green-300 ring-2 ring-green-300 ring-offset-2",
            text: "text-green-600",
            icon: <Minus className="h-5 w-5 text-green-600" />,
            divider: "border-green-300",
        },
        sky: {
            box: "bg-sky-50 border-sky-200",
            text: "text-sky-600",
            icon: <TrendingUp className="h-5 w-5 text-sky-600" />,
            divider: "border-sky-200",
        },
    };

    return (
        <div className={`rounded-lg border-2 p-5 ${styles[variant].box}`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h4 className={`font-heading font-semibold ${styles[variant].text}`}>
                        {title}
                    </h4>
                    <p className="text-xs text-dark-gray">{subtitle}</p>
                </div>

                {styles[variant].icon}
            </div>

            {/* Metrics */}
            <div className="space-y-2 mb-4">
                <MetricRow label="Vacancy:" value={vacancy} />
                <MetricRow label="Appreciation:" value={appreciation} />
            </div>

            {/* Cashflow */}
            <div
                className={`text-center pt-3 border-t ${styles[variant].divider}`}
            >
                <p className="text-xs text-dark-gray uppercase tracking-wider mb-1">
                    Monthly Cash Flow
                </p>

                <p
                    className={`text-2xl font-heading font-bold ${styles[variant].text}`}
                >
                    {cashflow}
                </p>
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* SMALL */
/* ---------------------------------- */

function MetricRow({
                       label,
                       value,
                   }: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex justify-between text-sm">
            <span className="text-dark-gray">{label}</span>
            <span className="font-medium">{value}</span>
        </div>
    );
}
