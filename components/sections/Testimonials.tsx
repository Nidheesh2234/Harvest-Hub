"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Voices from the Field
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Hear from farmers who have transformed their harvest with us.
                    </p>
                </div>
            </div>

            {/* Marquee/Carousel */}
            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex overflow-x-auto gap-6 px-8 pb-8 snap-x snap-mandatory scrollbar-hide">
                    {/* Double the array for loop illusion if needed, but simple horizontal scroll is fine for now */}
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                        <motion.div
                            key={i}
                            className="min-w-[300px] md:min-w-[400px] snap-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:border-primary/50 transition-colors">
                                <CardContent className="p-8 flex flex-col h-full">
                                    <div className="flex gap-1 text-amber-500 mb-4">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <blockquote className="text-lg font-medium leading-relaxed mb-6 flex-grow">
                                        "{t.text}"
                                    </blockquote>
                                    <div className="mt-auto flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <cite className="not-italic font-bold block text-foreground">{t.name}</cite>
                                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {t.location}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
