"use client";

import React, { useState, useEffect } from "react";
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
import { ChevronDown, Menu, X } from "lucide-react";
import { useUser } from "@/app/context/UserContext";
import man from "../../public/man1.png";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false); // <-- new state
    const { user } = useUser();
    const pathname: string = usePathname();

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /**
     * Check active route
     */
    const isActive = (path: string): boolean => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const navLinkClass = (path: string): string =>
        isActive(path)
            ? "text-[#3baade] font-semibold"
            : "text-primary-foreground/80 hover:text-primary-foreground";

    const mobileNavClass = (path: string): string =>
        isActive(path)
            ? "text-[#3baade] font-medium"
            : "transition-colors font-medium px-2 py-2 text-primary-foreground/80 hover:text-primary-foreground";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                scrolled ? "bg-[#0a1532] shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-[#3BAADD] text-primary font-bold text-lg">
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
                        <Link href="/about" className={`transition-colors text-sm ${navLinkClass("/about")}`}>
                            About
                        </Link>
                        <Link href="/pricing" className={`transition-colors text-sm ${navLinkClass("/pricing")}`}>
                            Pricing
                        </Link>
                        <Link href="/articles" className={`transition-colors text-sm ${navLinkClass("/articles")}`}>
                            Market Insights
                        </Link>
                        <Link href="/contact" className={`transition-colors text-sm ${navLinkClass("/contact")}`}>
                            Contact
                        </Link>

                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center gap-2">
                                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                                            <Image src={man} alt="User Avatar" width={40} height={40} className="object-cover" />
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
                                    <Button variant="ghost" className="text-white">Log In</Button>
                                </Link>
                                <Link href="/auth/register">
                                    <Button className="bg-[#379BCD] hover:bg-[#379BCD]">Get Started</Button>
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
                        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <div className="lg:hidden bg-[#0a1532] border-t border-primary-foreground/10 py-4">
                        <div className="lg:hidden space-y-2 p-4 pb-4">
                            <Link href="/" className={`block font-semibold ${mobileNavClass("/")}`}>Home</Link>
                            <Link href="/about"
                                  className={`block font-semibold ${mobileNavClass("/about")}`}>About</Link>
                            <Link href="/pricing"
                                  className={`block font-semibold ${mobileNavClass("/pricing")}`}>Pricing</Link>
                            <Link href="/articles" className={`block font-semibold ${mobileNavClass("/articles")}`}>Market
                                Insights</Link>
                            <Link href="/contact"
                                  className={`block font-semibold ${mobileNavClass("/contact")}`}>Contact</Link>
                        </div>
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center gap-2">
                                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                                            <Image src={man} alt="User Avatar" width={40} height={40} className="object-cover" />
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
                        <div className="flex flex-col gap-2 pt-4 border-t border-primary-foreground/10">

                            <a
                            href="/auth/login">
                            <button
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-10 px-4 py-2 w-full text-primary-foreground bg-transparent border border-primary-foreground/30 hover:bg-primary-foreground/10">Log
                                In
                            </button>
                        </a><a href="/auth/register">
                            <button
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full bg-[#4CB0DF] hover:bg-sky/90 text-primary font-semibold">Get
                                Started
                            </button>
                        </a>
                        </div>
                            )}
                    </div>

                )}
            </div>
        </nav>
    );
};

export default Navbar;
