"use client";

import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function ProductCategories() {
    return (
        <section id="products" className="py-24 bg-background relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold mb-4"
                    >
                        Everything your farm needs
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        From sowing to harvest, find genuine inputs for every stage of your crop cycle.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {CATEGORIES.map((category) => (
                        <motion.div key={category.id} variants={item}>
                            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden">
                                <CardContent className="p-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-display mb-2">{category.name}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-2">
                                        {category.description}
                                    </p>
                                    <Button variant="ghost" className="w-full justify-between group-hover:bg-muted/50 rounded-xl">
                                        Ask Price
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
