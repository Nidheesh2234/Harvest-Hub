"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/data";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Common Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border rounded-xl bg-card overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-muted-foreground shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/50 bg-muted/20">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
