"use client";

import React, { useState } from "react";

type PreferenceKey =
    | "newsletter"
    | "priceAlerts"
    | "featureUpdates";

interface Preferences {
    newsletter: boolean;
    priceAlerts: boolean;
    featureUpdates: boolean;
}

const NotificationPreferences: React.FC = () => {
    const [prefs, setPrefs] = useState<Preferences>({
        newsletter: true,
        priceAlerts: true,
        featureUpdates: false,
    });

    const toggle = (key: PreferenceKey) => {
        setPrefs((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg bg-card text-card-foreground shadow-sm border border-gray-200">
                {/* Header */}
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="tracking-tight text-lg font-heading font-bold text-navy flex items-center gap-2">
                        <BellIcon />
                        Notification Preferences
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Choose what updates you want to receive.
                    </p>
                </div>

                {/* Body */}
                <div className="p-6 pt-0 space-y-4">
                    <PreferenceRow
                        title="Weekly Newsletter"
                        description="Receive curated insights on global real estate trends every Monday."
                        checked={prefs.newsletter}
                        onToggle={() => toggle("newsletter")}
                    />

                    <PreferenceRow
                        title="Price Alert Emails"
                        description="Get notified when markets in your watchlist have significant changes."
                        checked={prefs.priceAlerts}
                        onToggle={() => toggle("priceAlerts")}
                    />

                    <PreferenceRow
                        title="New Feature Updates"
                        description="Stay informed about new tools and platform improvements."
                        checked={prefs.featureUpdates}
                        onToggle={() => toggle("featureUpdates")}
                    />
                </div>
            </div>
        </div>
    );
};

export default NotificationPreferences;

/* ---------------------------------- */
/* Reusable Components                */
/* ---------------------------------- */

interface RowProps {
    title: string;
    description: string;
    checked: boolean;
    onToggle: () => void;
}

const PreferenceRow: React.FC<RowProps> = ({
                                               title,
                                               description,
                                               checked,
                                               onToggle,
                                           }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div>
                <h4 className="font-medium text-navy">{title}</h4>
                <p className="text-sm text-dark-gray">{description}</p>
            </div>

            {/* Switch */}
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={onToggle}
                className={`inline-flex h-6 w-11 items-center rounded-full transition-colors
          ${checked ? "bg-primary" : "bg-input"}`}
            >
        <span
            className={`h-5 w-5 rounded-full bg-white shadow-lg transform transition-transform
            ${checked ? "translate-x-5" : "translate-x-0"}`}
        />
            </button>
        </div>
    );
};

const BellIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
    >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
);
