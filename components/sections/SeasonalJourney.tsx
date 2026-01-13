"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { SEASONS } from "@/lib/data";
import { CloudRain, Sun, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Season {
    id: string;
    name: string;
    months: string;
    color: string;
    crops: string[];
    tips: string[];
}

function SeasonCard({ season, isActive }: { season: Season; isActive: boolean }) {
    return (
        <motion.div
            className={`absolute inset-0 flex items-center justify-center p-6 ${isActive ? "pointer-events-auto z-10" : "pointer-events-none z-0"
                }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.95,
            }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-lg font-medium opacity-90 tracking-wider uppercase">
                            {season.months}
                        </span>
                        <h2 className="text-5xl md:text-7xl font-display font-bold mt-2 mb-4">
                            {season.name} Season
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {season.crops.map((crop: string) => (
                                <span key={crop} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30">
                                    {crop}
                                </span>
                            ))}
                        </div>
                        <p className="text-xl opacity-90 leading-relaxed mb-8">
                            {season.tips[0]}
                        </p>
                        <Button size="lg" className="bg-white text-black hover:bg-white/90 border-none">
                            View {season.name} Plan
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>

                {/* Visual Decoration */}
                <div className="relative aspect-square md:aspect-auto md:h-[400px] bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-8 flex flex-col justify-center items-center text-white/80">
                    {season.id === 'kharif' && <CloudRain className="w-32 h-32 mb-4 animate-bounce" />}
                    {season.id === 'rabi' && <Leaf className="w-32 h-32 mb-4 animate-pulse" />}
                    {season.id === 'summer' && <Sun className="w-32 h-32 mb-4 animate-spin-slow" />}
                    <p className="text-center font-display text-2xl">
                        {season.tips[1]}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export function SeasonalJourney() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const [activeSeason, setActiveSeason] = React.useState(0);

    useMotionValueEvent(smoothProgress, "change", (latest: number) => {
        if (latest < 0.33) setActiveSeason(0);
        else if (latest < 0.66) setActiveSeason(1);
        else setActiveSeason(2);
    });

    const backgroundColor = useTransform(
        smoothProgress,
        [0, 0.33, 0.66, 1],
        ["#064e3b", "#064e3b", "#d97706", "#b91c1c"]
        // Emerald-900 -> Amber-600 -> Red-700
    );

    return (
        <div ref={containerRef} className="relative h-[300vh]">
            <motion.div
                className="sticky top-0 h-screen overflow-hidden flex items-center justify-center transition-colors duration-500"
                style={{ backgroundColor }}
            >
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

                {/* Progress Bar for Section */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 h-48 w-1 bg-white/20 rounded-full hidden md:block">
                    <motion.div
                        className="w-full bg-white rounded-full"
                        style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                    />
                </div>

                <div className="relative w-full max-w-7xl mx-auto px-4 h-[600px]">
                    {SEASONS.map((season, index) => (
                        <SeasonCard
                            key={season.id}
                            season={season}
                            isActive={activeSeason === index}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
