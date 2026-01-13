"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Scale, Clock, Headphones } from "lucide-react";

const features = [
    {
        icon: BadgeCheck,
        title: "100% Genuine",
        description: "Every product batch-verified for authenticity.",
    },
    {
        icon: Scale,
        title: "Right Dosage",
        description: "We sell what your crop needs, not what we want to clear.",
    },
    {
        icon: Clock,
        title: "Timely Advice",
        description: "Reminders for critical crop stages via WhatsApp.",
    },
    {
        icon: Headphones,
        title: "Support",
        description: "Direct access to agri-experts for any field issue.",
    },
];

const brands = [
    "Bayer", "Syngenta", "Coromandel", "Yara", "Nuziveedu Seeds", "Kaveri Seeds", "Tata Rallis", "UPL"
];

export function TrustSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <feature.icon className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="text-xl font-bold font-display mb-2">{feature.title}</h3>
                            <p className="text-emerald-100/70 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mb-8">
                    <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm">Trusted Brands We Stock</p>
                </div>

                {/* Ticker */}
                <div className="relative flex overflow-hidden mask-linear-gradient">
                    <motion.div
                        className="flex whitespace-nowrap gap-16 items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                    >
                        {[...brands, ...brands, ...brands].map((brand, i) => (
                            <span key={i} className="text-2xl md:text-3xl font-display font-bold text-white/30 uppercase">
                                {brand}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
