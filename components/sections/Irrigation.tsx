"use client";

import { motion } from "framer-motion";
import { Droplets, Settings, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Irrigation() {
    return (
        <section id="irrigation" className="py-24 bg-background overflow-hidden relative">
            <div className="absolute inset-0 bg-sky-50/50 dark:bg-sky-950/20 pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
                            <Droplets className="w-4 h-4" />
                            Smart Water Management
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold">
                            Precision Irrigation for Maximum Yield
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Save up to 70% water while increasing productivity. We supply complete drip kits, sprinklers, and authentic spare parts.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            <Card className="border-sky-100 bg-sky-50 dark:bg-sky-950/30 dark:border-sky-900">
                                <CardContent className="p-6 flex flex-col gap-2">
                                    <span className="text-4xl font-bold text-sky-600">40%</span>
                                    <span className="text-sm font-medium text-sky-900 dark:text-sky-200">Increase in Yield</span>
                                </CardContent>
                            </Card>
                            <Card className="border-sky-100 bg-sky-50 dark:bg-sky-950/30 dark:border-sky-900">
                                <CardContent className="p-6 flex flex-col gap-2">
                                    <span className="text-4xl font-bold text-sky-600">70%</span>
                                    <span className="text-sm font-medium text-sky-900 dark:text-sky-200">Water Savings</span>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button variant="premium" className="bg-sky-600 hover:bg-sky-700 shadow-sky-500/20">
                                Explore Drip Kits
                            </Button>
                            <Button variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50">
                                Installation guide
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Abstract Pipe/Drip Illustration */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="bg-white dark:bg-card p-4 rounded-2xl shadow-lg border border-sky-100 dark:border-sky-900">
                                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4 text-sky-600">
                                        <Droplets />
                                    </div>
                                    <h3 className="font-bold mb-1">Drip Lines</h3>
                                    <p className="text-xs text-muted-foreground">Inline & Online drippers available.</p>
                                </div>
                                <div className="bg-white dark:bg-card p-4 rounded-2xl shadow-lg border border-sky-100 dark:border-sky-900">
                                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4 text-sky-600">
                                        <Settings />
                                    </div>
                                    <h3 className="font-bold mb-1">Automation</h3>
                                    <p className="text-xs text-muted-foreground">Timers and valves for smart control.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white dark:bg-card p-4 rounded-2xl shadow-lg border border-sky-100 dark:border-sky-900">
                                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4 text-sky-600">
                                        <Activity />
                                    </div>
                                    <h3 className="font-bold mb-1">Filtration</h3>
                                    <p className="text-xs text-muted-foreground">Screen and Disc filters for clean flow.</p>
                                </div>
                                <div className="h-32 bg-sky-200/50 rounded-2xl animate-pulse" /> {/* Placeholder for image */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
