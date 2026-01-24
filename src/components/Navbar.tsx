"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import man from "../../public/man1.png";
import Link from "next/link";
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

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useUser();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1532]  backdrop-blur-sm transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-sky text-primary font-bold text-lg md:text-xl">
                            EA
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              EstateAtlas
            </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link
                            href="/"
                            className="transition-colors font-medium text-sm text-[#389EAC] hover:text-[#389EAC]"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="transition-colors font-medium text-sm text-primary-foreground/80 hover:text-primary-foreground"
                        >
                            About
                        </Link>
                        <Link
                            href="/pricing"
                            className="transition-colors font-medium text-sm text-primary-foreground/80 hover:text-primary-foreground"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/articles"
                            className="transition-colors font-medium text-sm text-primary-foreground/80 hover:text-primary-foreground"
                        >
                            Market Insights
                        </Link>
                        <Link
                            href="/contact"
                            className="transition-colors font-medium text-sm text-primary-foreground/80 hover:text-primary-foreground"
                        >
                            Contact
                        </Link>

                        {/* Right Buttons */}
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="flex items-center gap-2 px-2 py-1 h-auto"
                                    >
                                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                                            <Image
                                                src={man}
                                                alt="User Avatar"
                                                width={50}
                                                height={50}
                                                className="object-cover"
                                            />
                                        </div>
                                        <ChevronDown className="h-4 w-4 text-gray-500" />
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
                            <div className="flex items-center gap-3 ml-4">
                                <Link href="/auth/login">
                                    <Button className="h-10 px-4 py-2 text-primary-foreground bg-transparent border border-transparent hover:border-primary-foreground/50 hover:bg-transparent">
                                        Log In
                                    </Button>
                                </Link>
                                <Link href="/auth/register">
                                    <Button className="h-10 px-6 py-2 bg-[#379BCD] hover:bg-[#379BCD] text-primary font-semibold">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="lg:hidden mt-4 space-y-2">
                        <Link
                            href="/"
                            className="block text-white hover:text-[#3BA1DF] font-semibold"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block text-white hover:text-[#3BA1DF] font-semibold"
                        >
                            About
                        </Link>
                        <Link
                            href="/pricing"
                            className="block text-white hover:text-[#3BA1DF] font-semibold"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/articles"
                            className="block text-white hover:text-[#3BA1DF] font-semibold"
                        >
                            Market Insights
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-white hover:text-[#3BA1DF] font-semibold"
                        >
                            Contact
                        </Link>
                        {!user && (
                            <div className="flex gap-2 mt-2">
                                <Link
                                    href="/auth/login"
                                    className="flex-1 px-4 py-2 rounded-lg border-2 border-[#E0DEF7] text-[#0A1532] font-semibold text-center"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/auth/register"
                                    className="flex-1 px-4 py-2 rounded-lg bg-[#0A1532] text-white text-center"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
