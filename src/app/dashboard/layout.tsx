'use client';

import { useState } from "react";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex font-sans h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">

            {/* ================= Desktop Sidebar ================= */}
            <aside className="hidden md:flex w-64 shrink-0">
                <Sidebar />
            </aside>

            {/* ================= Mobile Sidebar ================= */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all ${
                    isSidebarOpen ? "visible" : "invisible"
                }`}
            >
                {/* Overlay */}
                <div
                    onClick={() => setSidebarOpen(false)}
                    className={`absolute inset-0 bg-black/50 transition-opacity ${
                        isSidebarOpen ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Sidebar Panel */}
                <div
                    className={`absolute left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg
          transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <Sidebar />
                </div>
            </div>

            {/* ================= Main Content ================= */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Header */}
                <header className="flex items-center gap-4  border-b dark:border-gray-700">

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
                    </button>

                    {/* Header Component */}
                    <div className="flex-1">
                        <Header />
                    </div>

                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>

            </div>
        </div>
    );
};

export default DashboardLayout;
