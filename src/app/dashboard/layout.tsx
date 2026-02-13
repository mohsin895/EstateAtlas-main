"use client";

import { useState } from "react";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/Sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50 ">

            {/* ================= Desktop Sidebar ================= */}
            <div className="hidden lg:block w-[260px]">
                <Sidebar />
            </div>

            {/* ================= Mobile Sidebar ================= */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-white transform transition-transform duration-300 lg:hidden
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <Sidebar />
            </div>

            {/* ================= Overlay ================= */}
            {isSidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                />
            )}

            {/* ================= Main Content ================= */}
            <div className="flex-1">

                {/* Header */}
                <Header onMenuClick={() => setSidebarOpen(true)} />

                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;
