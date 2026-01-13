"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Sprout, Download } from "lucide-react";
import { SEASONS } from "@/lib/data";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface CropPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CropPlanModal({ isOpen, onClose }: CropPlanModalProps) {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState("");
    const [selectedCrop, setSelectedCrop] = useState("");
    const [acres, setAcres] = useState("");
    const [location, setLocation] = useState("");

    const availableCrops = selectedSeason
        ? SEASONS.find(s => s.id === selectedSeason)?.crops || []
        : [];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate generation
        setTimeout(() => {
            setIsLoading(false);
            setStep(2); // Show success/summary
        }, 1500);
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        // Header
        doc.setFillColor(20, 83, 45); // emerald-900
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.text("Harvest Hub", 20, 20);
        doc.setFontSize(12);
        doc.text("Customized Crop Plan", 20, 30);

        // User Info
        doc.setTextColor(40, 40, 40);
        doc.setFontSize(12);
        doc.text(`Farmer Location: ${location}`, 20, 50);
        doc.text(`Land Size: ${acres} Acres`, 20, 56);
        doc.text(`Season: ${SEASONS.find(s => s.id === selectedSeason)?.name}`, 20, 62);
        doc.text(`Crop: ${selectedCrop}`, 20, 68);

        // Table
        autoTable(doc, {
            startY: 80,
            head: [['Stage', 'Recommendation']],
            body: [
                ['Soil Preparation', 'Deep summer ploughing recommended + 5 tons FYM/acre'],
                ['Seed Treatment', 'Treat seeds with Trichoderma viride @ 10g/kg'],
                ['Sowing', 'Maintain spacing of 90x60 cm for optimal yield'],
                ['Fertilizer (Basal)', 'DAP 50kg, Potash 30kg per acre'],
                ['Weed Control', 'Pre-emergence herbicide spray within 48 hours'],
                ['Pest Management', 'Install pheromone traps (5/acre) for monitoring'],
            ],
            theme: 'grid',
            headStyles: { fillColor: [16, 185, 129] },
        });

        doc.save(`HarvestHub_Plan_${selectedCrop}_${selectedSeason}.pdf`);
    };

    return (
        <Modal isOpen={isOpen} onClose={() => { onClose(); setStep(1); }} title={step === 1 ? "Get Your Quote" : "Quote Ready!"}>
            {step === 1 ? (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Season</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                required
                                value={selectedSeason}
                                onChange={(e) => {
                                    setSelectedSeason(e.target.value);
                                    setSelectedCrop(""); // Reset crop when season changes
                                }}
                            >
                                <option value="">Select Season...</option>
                                {SEASONS.map(s => (
                                    <option key={s.id} value={s.id}>{s.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Crop</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                required
                                value={selectedCrop}
                                onChange={(e) => setSelectedCrop(e.target.value)}
                                disabled={!selectedSeason}
                            >
                                <option value="">Select Crop...</option>
                                {availableCrops.map(crop => (
                                    <option key={crop} value={crop}>{crop}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Acres</label>
                            <Input
                                type="number"
                                placeholder="e.g. 5"
                                required
                                value={acres}
                                onChange={(e) => setAcres(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Location</label>
                            <Input
                                placeholder="Mandal"
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-4" disabled={isLoading}>
                        {isLoading ? "Generating Schedule..." : "Generate Plan"}
                    </Button>
                </form>
            ) : (
                <div className="text-center py-4 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <Sprout className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold">Your plan is ready!</h3>
                    <p className="text-muted-foreground text-sm">
                        We have generated a PDF with seed recommendations, fertilizer schedule, and pest alerts for your location.
                    </p>
                    <div className="flex gap-3 justify-center pt-2">
                        <Button variant="outline" onClick={() => { onClose(); setStep(1); }}>Close</Button>
                        <Button className="bg-emerald-600 gap-2" onClick={handleDownloadPDF}>
                            <Download className="w-4 h-4" />
                            Download Quote PDF
                        </Button>
                    </div>
                </div>
            )}
        </Modal>
    );
}
