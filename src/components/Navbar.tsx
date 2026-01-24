"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useUser } from "@/app/context/UserContext";
import man from "../../public/man1.png";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { user } = useUser();
    const pathname: string = usePathname();

    /**
     * Check active route
     */
    const isActive = (path: string): boolean => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    /**
     * Desktop nav class
     */
    const navLinkClass = (path: string): string =>
        isActive(path)
            ? "text-[#389EAC] font-semibold"
            : "text-primary-foreground/80 hover:text-primary-foreground";

    /**
     * Mobile nav class
     */
    const mobileNavClass = (path: string): string =>
        isActive(path)
            ? "text-[#3BA1DF] font-bold"
            : "text-white hover:text-[#3BA1DF]";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1532] backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-sky text-primary font-bold text-lg">
                            EA
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-white">
                            EstateAtlas
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link href="/" className={`transition-colors text-sm ${navLinkClass("/")}`}>
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className={`transition-colors text-sm ${navLinkClass("/about")}`}
                        >
                            About
                        </Link>

                        <Link
                            href="/pricing"
                            className={`transition-colors text-sm ${navLinkClass("/pricing")}`}
                        >
                            Pricing
                        </Link>

                        <Link
                            href="/articles"
                            className={`transition-colors text-sm ${navLinkClass("/articles")}`}
                        >
                            Market Insights
                        </Link>

                        <Link
                            href="/contact"
                            className={`transition-colors text-sm ${navLinkClass("/contact")}`}
                        >
                            Contact
                        </Link>

                        {/* Auth Section */}
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center gap-2">
                                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                                            <Image
                                                src={man}
                                                alt="User Avatar"
                                                width={40}
                                                height={40}
                                                className="object-cover"
                                            />
                                        </div>
                                        <ChevronDown className="h-4 w-4 text-gray-400" />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel>{user.first_name}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard/Countries">Dashboard</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link href="/auth/login">
                                    <Button variant="ghost">Log In</Button>
                                </Link>
                                <Link href="/auth/register">
                                    <Button className="bg-[#379BCD] hover:bg-[#379BCD]">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <div className="lg:hidden space-y-2 pb-4">
                        <Link href="/" className={`block font-semibold ${mobileNavClass("/")}`}>
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`block font-semibold ${mobileNavClass("/about")}`}
                        >
                            About
                        </Link>
                        <Link
                            href="/pricing"
                            className={`block font-semibold ${mobileNavClass("/pricing")}`}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/articles"
                            className={`block font-semibold ${mobileNavClass("/articles")}`}
                        >
                            Market Insights
                        </Link>
                        <Link
                            href="/contact"
                            className={`block font-semibold ${mobileNavClass("/contact")}`}
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
