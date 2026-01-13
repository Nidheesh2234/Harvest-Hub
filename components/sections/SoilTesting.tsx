"use client";

import { motion } from "framer-motion";
import { FlaskConical, FileText, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
    {
        id: 1,
        title: "Collect Sample",
        description: "Take small soil samples from 5-6 points in your field and mix them.",
        icon: FlaskConical,
    },
    {
        id: 2,
        title: "Lab Analysis",
        description: "Our experts analyze pH, N-P-K, and micronutrient levels.",
        icon: FileText,
    },
    {
        id: 3,
        title: "Get Recommendation",
        description: "Receive a tailored fertilizer schedule for your specific crop.",
        icon: Sprout,
    },
];

export function SoilTesting() {
    return (
        <section id="soil-testing" className="py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Know Your Soil, Grow Better
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Stop guessing. Scientific soil testing helps you use the right nutrients, reduce costs, and increase field health.
                    </p>
                </div>

                <div className="relative mt-20">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-[50px] left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 to-emerald-200 dark:from-emerald-900 dark:to-emerald-900 hidden md:block" />

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center relative z-10"
                            >
                                <div className="w-24 h-24 rounded-full bg-background border-4 border-emerald-100 dark:border-emerald-900 flex items-center justify-center mb-6 shadow-xl">
                                    <step.icon className="w-10 h-10 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold font-display mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Button size="lg" variant="primary" className="bg-emerald-600 hover:bg-emerald-700">
                        Book a Soil Test (₹300)
                    </Button>
                </div>
            </div>
        </section>
    );
}
