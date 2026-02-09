"use client";

import React from "react";

type AlertType = "critical" | "opportunity" | "report";

interface MarketAlert {
    id: number;
    country: string;
    title: string;
    description: string;
    date: string;
    type: AlertType;
}

const alerts: MarketAlert[] = [
    {
        id: 1,
        country: "Spain",
        title: "Tax Regulation Update",
        description:
            "New capital gains tax rules for non-residents proposed for 2026.",
        date: "2026-01-10",
        type: "critical",
    },
    {
        id: 2,
        country: "Vietnam",
        title: "Infrastructure News",
        description:
            "Ho Chi Minh City Metro Line 1 officially opens, expected to impact District 2 prices.",
        date: "2026-01-08",
        type: "opportunity",
    },
    {
        id: 3,
        country: "Global",
        title: "Quarterly Report",
        description: "Q1 2026 Global Yield Report is ready for download.",
        date: "2026-01-05",
        type: "report",
    },
];

export default function MarketAlerts() {
    return (
        <div className="rounded-lg bg-white border border-gray-200 shadow-sm">

            {/* HEADER */}
            <div className="p-6">
                <h2 className="text-lg font-semibold text-[#0a1532]">
                    Real-Time Market Alerts
                </h2>
                <p className="text-sm text-gray-600">
                    Latest updates for your watchlist markets
                </p>
            </div>

            {/* LIST */}
            <div>
                {alerts.map((alert) => (
                    <AlertRow key={alert.id} alert={alert} />
                ))}
            </div>

        </div>
    );
}

/* ---------------------------------- */
/* ALERT ROW */
/* ---------------------------------- */

function AlertRow({ alert }: { alert: MarketAlert }) {
    const style = getAlertStyle(alert.type);

    return (
        <div className="flex items-start gap-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition">

            {/* ICON */}
            <div className={`p-2 rounded-full ${style.bg}`}>
                <span className={style.icon}>{style.emoji}</span>
            </div>

            {/* CONTENT */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="font-medium text-[#0a1532]">
            {alert.country}:
          </span>

                    <span className="font-semibold text-[#0a1532]">
            {alert.title}
          </span>

                    <span
                        className={`px-2.5 py-0.5 text-xs rounded-full font-semibold ${style.badge}`}
                    >
            {style.label}
          </span>
                </div>

                <p className="text-sm text-gray-600">{alert.description}</p>

                <span className="text-xs text-gray-400 mt-1 block">
          {alert.date}
        </span>
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* STYLE HELPER */
/* ---------------------------------- */

function getAlertStyle(type: AlertType) {
    switch (type) {
        case "critical":
            return {
                bg: "bg-amber-100",
                badge: "bg-amber-100 text-amber-700",
                label: "Critical",
                emoji: "⚠️",
                icon: "text-amber-600",
            };
        case "opportunity":
            return {
                bg: "bg-green-100",
                badge: "bg-green-100 text-green-700",
                label: "Opportunity",
                emoji: "📈",
                icon: "text-green-600",
            };
        case "report":
            return {
                bg: "bg-blue-100",
                badge: "bg-blue-100 text-blue-700",
                label: "Report",
                emoji: "📄",
                icon: "text-blue-600",
            };
    }
}
