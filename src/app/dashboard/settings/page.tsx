"use client";

import React, { useState } from "react";
import NotificationPreferences from "@/components/dashboard/Account/notification-preferences";
import LoginSecurity from "@/components/LoginSecurity";

type Tab = "profile" | "security" | "notifications";

const AccountSettings: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>("profile");

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-heading font-bold text-[#071636]">Account Settings</h1>
                <p className="text-dark-gray mt-1">Manage your profile, security, and preferences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="rounded-lg bg-card text-card-foreground shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center">
                        <div className="relative">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 items-center justify-center bg-[#071636] text-white text-2xl font-bold">
                JC
              </span>
                        </div>
                        <h2 className="mt-4 text-lg font-heading font-bold text-[#071636]">John Connors</h2>
                        <p className="text-sm text-dark-gray">john.connors@email.com</p>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mt-3 bg-gray-100 text-gray-600">
                            Basic Member
                        </div>

                        <div className="shrink-0 bg-border h-[1px] w-full my-6"></div>

                        {/* Sidebar buttons */}
                        <nav className="space-y-1 w-full">
                            <button
                                onClick={() => setActiveTab("profile")}
                                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                                    activeTab === "profile" ? "bg-[#071636] text-white" : "text-dark-gray hover:bg-gray-100"
                                }`}
                            >
                                Profile Details
                            </button>
                            <button
                                onClick={() => setActiveTab("security")}
                                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                                    activeTab === "security" ? "bg-[#071636] text-white" : "text-dark-gray hover:bg-gray-100"
                                }`}
                            >
                                Security
                            </button>
                            <button
                                onClick={() => setActiveTab("notifications")}
                                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                                    activeTab === "notifications" ? "bg-[#071636] text-white" : "text-dark-gray hover:bg-gray-100"
                                }`}
                            >
                                Notifications
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Right panel */}
                <div className="lg:col-span-2 space-y-6">
                    {activeTab === "profile" && (
                        <div
                            className="rounded-lg bg-card text-card-foreground shadow-sm border border-gray-200 p-6 space-y-4">
                            <h3 className="tracking-tight text-lg font-heading font-bold text-[#071636]">Profile
                                Information</h3>
                            <p className="text-sm text-muted-foreground">Update your personal details and contact
                                information.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input className="border rounded-md p-2" placeholder="First Name" defaultValue="John"/>
                                <input className="border rounded-md p-2" placeholder="Last Name"
                                       defaultValue="Connors"/>
                            </div>
                            <input className="border rounded-md p-2 w-full" placeholder="Email"
                                   defaultValue="john.connors@email.com"/>
                            <input className="border rounded-md p-2 w-full" placeholder="Phone"
                                   defaultValue="+1 (555) 123-4567"/>

                            <button
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full bg-[#071636] hover:bg-navy/90 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-save h-4 w-4 mr-2">
                                    <path
                                        d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                                    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                                    <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                                </svg>
                                Save Changes
                            </button>


                        </div>
                    )}

                    {activeTab === "security" && (
                        <LoginSecurity />
                    )}

                    {activeTab === "notifications" && (
                       <NotificationPreferences />

                    )}
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
