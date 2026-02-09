"use client";

import React from "react";

const LoginSecurity: React.FC = () => {
    return (
        <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg bg-card text-card-foreground shadow-sm border border-gray-200">
                {/* Header */}
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="tracking-tight text-lg font-heading font-bold text-navy flex items-center gap-2">
                        <ShieldIcon />
                        Login & Security
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Manage your password and account security settings.
                    </p>
                </div>

                {/* Content */}
                <div className="p-6 pt-0 space-y-6">
                    {/* Password Row */}
                    <SecurityRow
                        icon={<LockIcon />}
                        title="Password"
                        description="Last changed 30 days ago"
                        action={
                            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-navy text-navy h-10 px-4 py-2 transition-colors hover:bg-navy hover:text-white">
                                Change Password
                            </button>
                        }
                    />

                    {/* Two Factor Row */}
                    <SecurityRow
                        icon={<ShieldSmallIcon />}
                        title="Two-Factor Authentication"
                        description="Add an extra layer of security"
                        action={
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-amber-100 text-amber-700">
                Not Enabled
              </span>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginSecurity;

/* ---------------------------------- */
/* Reusable Row Component             */
/* ---------------------------------- */

interface SecurityRowProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    action: React.ReactNode;
}

const SecurityRow: React.FC<SecurityRowProps> = ({
                                                     icon,
                                                     title,
                                                     description,
                                                     action,
                                                 }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-gray-200">
                    {icon}
                </div>

                <div>
                    <h4 className="font-medium text-navy">{title}</h4>
                    <p className="text-sm text-dark-gray">{description}</p>
                </div>
            </div>

            {action}
        </div>
    );
};

/* ---------------------------------- */
/* Icons                              */
/* ---------------------------------- */

const ShieldIcon = () => (
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
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
);

const LockIcon = () => (
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
        className="h-5 w-5 text-navy"
    >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const ShieldSmallIcon = () => (
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
        className="h-5 w-5 text-navy"
    >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
);
