"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEASONS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Sprout, Bug, Download } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function SeasonalPlans() {
    const [activeTab, setActiveTab] = React.useState(SEASONS[0].id);

    const handleDownloadQuote = (season: typeof SEASONS[0]) => {
        const doc = new jsPDF();

        // Header
        doc.setFillColor(20, 83, 45); // emerald-900 like color
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.text("Harvest Hub", 20, 20);
        doc.setFontSize(12);
        doc.text("Seasonal Quote & Guidance", 20, 30);

        // Season Info
        doc.setTextColor(40, 40, 40);
        doc.setFontSize(16);
        doc.text(`${season.name} Season Plan`, 20, 60);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(`Duration: ${season.months}`, 20, 68);

        // Crops Table
        autoTable(doc, {
            startY: 80,
            head: [['Category', 'Details']],
            body: [
                ['Recommended Crops', season.crops.join(', ')],
                ['Key Actions', season.tips.join('\n')],
            ],
            theme: 'grid',
            headStyles: { fillColor: [16, 185, 129] }, // emerald-500
        });

        // Footer
        const finalY = (doc as any).lastAutoTable.finalY + 20;
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text("This is an estimated quote based on general seasonal recommendations.", 20, finalY);
        doc.text("For precise pricing, please visit our nearest store.", 20, finalY + 6);

        doc.save(`HarvestHub_Quote_${season.name}.pdf`);
    };

    return (
        <section id="crop-plans" className="py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Request a Quote
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Get a customized quote tailored for every phase of the farming calendar.
                    </p>
                </div>

                {/* Custom Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {SEASONS.map((season) => (
                        <button
                            key={season.id}
                            onClick={() => setActiveTab(season.id)}
                            className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeTab === season.id
                                ? "text-white"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                }`}
                        >
                            <span className="relative z-10">{season.name}</span>
                            {activeTab === season.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full shadow-lg shadow-emerald-500/25"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {SEASONS.map(
                        (season) =>
                            season.id === activeTab && (
                                <motion.div
                                    key={season.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="max-w-4xl mx-auto overflow-hidden border-2 shadow-xl bg-background/50 backdrop-blur-sm">
                                        <div className={`h-2 w-full bg-gradient-to-r ${season.color}`} />
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-2">
                                                <Badge variant="outline" className="text-base px-3 py-1 border-primary/20 bg-primary/5">
                                                    <Calendar className="w-3 h-3 mr-2" />
                                                    {season.months}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-3xl">{season.name} Recommendations</CardTitle>
                                            <CardDescription className="text-base">
                                                Comprehensive plan for {season.crops.join(", ")} and more.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="grid md:grid-cols-2 gap-8 pt-6">
                                            <div className="space-y-6">
                                                <h4 className="font-semibold text-lg flex items-center gap-2">
                                                    <Sprout className="w-5 h-5 text-emerald-500" />
                                                    Key Actions
                                                </h4>
                                                <ul className="space-y-4">
                                                    {season.tips.map((tip: string, i: number) => (
                                                        <li key={i} className="flex gap-3 text-muted-foreground">
                                                            <div className="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0 text-xs font-bold">
                                                                {i + 1}
                                                            </div>
                                                            {tip}
                                                        </li>
                                                    ))}
                                                    <li className="flex gap-3 text-muted-foreground">
                                                        <div className="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0 text-xs font-bold">
                                                            3
                                                        </div>
                                                        Apply basal dose of fertilizers as per soil test.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="space-y-6">
                                                <h4 className="font-semibold text-lg flex items-center gap-2">
                                                    <Bug className="w-5 h-5 text-rose-500" />
                                                    Pest Watch
                                                </h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50">
                                                        <p className="text-sm text-rose-600 font-medium mb-1">Common Threat</p>
                                                        <p className="font-bold text-rose-950 dark:text-rose-200">Stem Borer</p>
                                                    </div>
                                                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50">
                                                        <p className="text-sm text-rose-600 font-medium mb-1">Fungal Issue</p>
                                                        <p className="font-bold text-rose-950 dark:text-rose-200">Root Rot</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:col-span-2 pt-4">
                                                <Button
                                                    className="w-full h-12 text-lg font-semibold gap-2"
                                                    variant="premium"
                                                    onClick={() => handleDownloadQuote(season)}
                                                >
                                                    <Download className="w-5 h-5" />
                                                    Download Quote PDF
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
