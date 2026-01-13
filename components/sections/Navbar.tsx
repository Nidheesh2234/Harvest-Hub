"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CropPlanModal } from "@/components/features/CropPlanModal";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isPlanModalOpen, setIsPlanModalOpen] = React.useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const wasScrolled = isScrolled;
        if (latest > 50 && !wasScrolled) {
            setIsScrolled(true);
        } else if (latest <= 50 && wasScrolled) {
            setIsScrolled(false);
        }
    });

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3"
                        : "bg-transparent py-5"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <Sprout className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold font-display tracking-tight text-foreground">
                            HarvestHub <span className="text-primary hidden sm:inline">Agro</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="premium" size="sm" onClick={() => setIsPlanModalOpen(true)}>
                            Get Crop Plan
                        </Button>
                        <Button variant="outline" size="sm">
                            WhatsApp Advisor
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            className="md:hidden p-2 text-foreground"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-md border-b overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <Button variant="premium" className="w-full" onClick={() => { setIsMobileMenuOpen(false); setIsPlanModalOpen(true); }}>
                                    Get Crop Plan
                                </Button>
                                <Button variant="outline" className="w-full">
                                    WhatsApp Advisor
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            <CropPlanModal isOpen={isPlanModalOpen} onClose={() => setIsPlanModalOpen(false)} />
        </>
    );
}
