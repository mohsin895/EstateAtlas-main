"use client";

import Image from "next/image";
import { ChevronDown, Bell, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import man from "../../../public/19e045a1319fe4a16c9e6fb45244dd8f31af19d3.png";
import { useUser } from "@/app/context/UserContext";
import Cookies from "js-cookie";

export default function Header() {
    const { user, loading, setUser } = useUser();
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = async () => {
        try {
            const token = Cookies.get("token");
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok) console.error("Logout failed");
        } catch (err) {
            console.error("Logout error:", err);
        } finally {
            Cookies.remove("token");
            Cookies.remove("user");
            setUser(null);
            router.push("/auth/login");
        }
    };

    // Map paths to human-readable titles
    const pageTitles: Record<string, string> = {
        "/dashboard/Countries": "All Countries",
        "/dashboard/global-data": "Global Data",
        "/dashboard/regional-data": "Regional / City Data",
        "/dashboard/saved-countries": "Saved Countries",
        "/dashboard/investment-calculator": "Investment Calculator",
        "/dashboard/comparison": "Comparison Tool",
        "/dashboard/affiliate": "Affiliate Dashboard",
        "/dashboard/settings": "Account Settings",
        "/dashboard/billing": "Billing",
        "/dashboard/support": "Support",
    };

    const currentTitle = pageTitles[pathname] || "Dashboard";

    return (
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between h-16 px-4 lg:px-6">
                {/* Left: Hamburger + Title */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="lg:hidden h-10 w-10 p-2">
                        <Menu className="h-5 w-5 text-gray-700" />
                    </Button>
                    <h1 className="font-heading font-semibold text-lg text-navy">
                        {currentTitle}
                    </h1>
                </div>

                {/* Right: Notification + User Dropdown */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="relative h-10 w-10 p-2">
                        <Bell className="h-5 w-5 text-dark-gray" />
                        <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2 px-2 py-1 h-auto">
                                <div className="flex items-center gap-2">
                                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                                        <Image
                                            src={man}
                                            alt="User Avatar"
                                            width={32}
                                            height={32}
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">
                                        {loading ? "Loading..." : user?.first_name || "Guest"}
                                    </span>
                                </div>
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" sideOffset={5} className="z-50 min-w-[max-content] w-48 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Account Settings</DropdownMenuItem>
                            <DropdownMenuItem onClick={handleLogout}>Log Out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
