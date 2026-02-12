"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

import {
    Globe,
    BarChart3,
    Map,
    Bookmark,
    Calculator,
    Scale,
    Users,
    Settings,
    CreditCard,
    Headphones,
    LogOut,
    Crown,
} from "lucide-react";

interface SidebarProps {
    onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const linkClasses = (path: string) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-md transition
     ${
            isActive(path)
                ? "bg-[#071636] text-white"
                : "text-dark-gray hover:bg-gray-100"
        }`;

    return (
        <aside className="flex flex-col bg-white w-[260px] border-r border-gray-200 fixed h-full">

            {/* ✅ Mobile Close Button */}
            <button
                onClick={onClose}
                className="lg:hidden absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
            >
                <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col h-full">

                {/* Logo */}
                <div className="p-6 border-b border-gray-200">
                    <img src="/logo.png" alt="Estate Atlas" className="h-12" />
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-2 space-y-6">

                    {/* Main Menu */}
                    <div>
                        <h3 className="px-3 mb-2 text-sm font-semibold text-gray-400 uppercase">
                            Main Menu
                        </h3>

                        <div className="space-y-1 text-sm">

                            <Link href="/dashboard/Countries" className={linkClasses("/dashboard/Countries")}>
                                <Globe className="h-5 w-5" />
                                <span>All Countries</span>
                            </Link>

                            <Link href="/dashboard/global-data" className={linkClasses("/dashboard/global-data")}>
                                <BarChart3 className="h-5 w-5" />
                                <span>Global Data</span>
                            </Link>

                            <Link href="/dashboard/regional-data" className={linkClasses("/dashboard/regional-data")}>
                                <Map className="h-5 w-5" />
                                <span>Regional / City Data</span>
                            </Link>

                            <Link href="/dashboard/saved-countries" className={linkClasses("/dashboard/saved-countries")}>
                                <Bookmark className="h-5 w-5" />
                                <span>Saved Countries</span>
                            </Link>

                        </div>
                    </div>

                    {/* Investments */}
                    <div>
                        <h3 className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                            Investments
                        </h3>

                        <div className="space-y-1 text-sm">

                            <Link href="/dashboard/investment-calculator" className={linkClasses("/dashboard/investment-calculator")}>
                                <Calculator className="h-5 w-5" />
                                <span>Investment Calculator</span>
                            </Link>

                            <Link href="/dashboard/comparison" className={linkClasses("/dashboard/comparison")}>
                                <Scale className="h-5 w-5" />
                                <span>Comparison Tool</span>
                                <Crown className="h-4 w-4 text-amber-500 ml-auto" />
                            </Link>

                        </div>
                    </div>

                    {/* Settings */}
                    <div>
                        <h3 className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                            Settings
                        </h3>

                        <div className="space-y-1 font-[500] text-sm">

                            <Link href="/dashboard/affiliate" className={linkClasses("/dashboard/affiliate")}>
                                <Users className="h-5 w-5" />
                                <span className="flex-1">Affiliate Dashboard</span>
                                <Crown className="h-4 w-4 text-amber-500 ml-auto" />
                            </Link>

                            <Link href="/dashboard/settings" className={linkClasses("/dashboard/settings")}>
                                <Settings className="h-5 w-5" />
                                <span>Account Settings</span>
                            </Link>

                            <Link href="/dashboard/billing" className={linkClasses("/dashboard/billing")}>
                                <CreditCard className="h-5 w-5" />
                                <span>Billing</span>
                            </Link>

                            <Link href="/dashboard/support" className={linkClasses("/dashboard/support")}>
                                <Headphones className="h-5 w-5" />
                                <span>Support</span>
                            </Link>

                        </div>
                    </div>

                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-gray-200">
                    <button className="flex items-center gap-3 px-3 py-2.5 rounded-md text-dark-gray hover:bg-gray-100 w-full">
                        <LogOut className="h-5 w-5" />
                        <span>Log Out</span>
                    </button>
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;
