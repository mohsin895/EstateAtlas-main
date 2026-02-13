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

interface HeaderProps {
    onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {

    const { user, loading, setUser } = useUser();
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = async () => {
        try {
            const token = Cookies.get("token");
            await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (err) {
            console.error(err);
        } finally {
            Cookies.remove("token");
            Cookies.remove("user");
            setUser(null);
            router.push("/auth/login");
        }
    };

    const pageTitles: Record<string, string> = { "/dashboard/Countries": "All Countries", "/dashboard/global-data": "Global Data", "/dashboard/regional-data": "Regional / City Data", "/dashboard/saved-countries": "Saved Countries", "/dashboard/investment-calculator": "Investment Calculator", "/dashboard/comparison": "Comparison Tool", "/dashboard/affiliate": "Affiliate Dashboard", "/dashboard/settings": "Account Settings", "/dashboard/billing": "Billing", "/dashboard/support": "Support", };
    const currentTitle = pageTitles[pathname] || "Dashboard";

    return (
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between h-16 px-4 lg:px-6">

                {/* Left */}
                <div className="flex items-center gap-4">

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        className="lg:hidden h-10 w-10 p-2"
                        onClick={onMenuClick}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>

                    <h1 className="font-heading font-semibold text-lg">{currentTitle}</h1>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">

                    <Button variant="ghost" className="h-10 w-10 p-2">
                        <Bell className="h-5 w-5" />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex gap-2">
                                <Image
                                    src={man}
                                    alt="User"
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                                <span>
                                    {loading ? "Loading..." : user?.first_name}
                                </span>
                                <ChevronDown size={16} />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem onClick={handleLogout}>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
        </header>
    );
}
