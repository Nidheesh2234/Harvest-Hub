"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CropPlanModal } from "@/components/features/CropPlanModal";

export function Hero() {
    const { scrollY } = useScroll();
    const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);
    const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Background slow
    const y2 = useTransform(scrollY, [0, 500], [0, -150]); // Content fast
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Floating particles simulation
    const particles = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 10 + Math.random() * 10,
    }));

    return (
        <section className="relative h-screen min-h-[800px] overflow-hidden flex items-center justify-center pt-20">
            {/* Layer 1: Animated Gradient Mesh Background */}
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-b from-emerald-50 via-background to-background dark:from-emerald-950/20 dark:via-background dark:to-background"
                style={{ y: y1 }}
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 dark:opacity-5 mix-blend-overlay" />
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-400/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-amber-400/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </motion.div>

            {/* Layer 2: Floating Particles */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute w-2 h-2 bg-emerald-500/30 rounded-full blur-[1px]"
                        initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
                        animate={{
                            y: [`${p.y}vh`, `${p.y - 20}vh`],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Layer 3: Main Content */}
            <motion.div
                className="container relative z-20 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center"
                style={{ y: y2, opacity }}
            >
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                            Empowering Andhra's Farmers
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-foreground tracking-tight">
                            Smarter Inputs. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
                                Healthier Crops.
                            </span>{" "}
                            <br />
                            Better Yield.
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Top-quality seeds, advanced nutrition, and expert guidance tailored
                        to your land and season.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Button
                            size="lg"
                            variant="premium"
                            className="h-14 px-8 text-lg"
                            onClick={() => setIsQuoteModalOpen(true)}
                        >
                            Get Quote
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                            Shop Categories
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-6 pt-4 text-sm font-medium text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Genuine products
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Season-based guidance
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Fast availability
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image/Composition */}
                <motion.div
                    className="relative hidden lg:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                >
                    <div className="relative z-10 w-full aspect-square rounded-[2rem] overflow-hidden border-8 border-background/50 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                        <Image
                            src="https://images.unsplash.com/photo-1609252509027-3928a66302fd?auto=format&fit=crop&w=1000&q=80"
                            alt="Farmer in field"
                            width={800}
                            height={800}
                            className="object-cover object-bottom w-full h-full"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent rounded-[2rem] rotate-3 pointer-events-none z-20" />

                    {/* Floating badge */}
                    <motion.div
                        className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border z-30"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-semibold">Seasonal Alert</p>
                                <p className="font-bold text-foreground">Rabi Sowing Started</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <CropPlanModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        </section>
    );
}
