"use client";

import { Sprout, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="bg-emerald-950 text-emerald-100 py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-emerald-800 pb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 group">
                            <div className="bg-emerald-900 p-2 rounded-xl">
                                <Sprout className="w-6 h-6 text-emerald-400" />
                            </div>
                            <span className="text-xl font-bold font-display tracking-tight text-white">
                                HarvestHub <span className="text-emerald-400">Agro</span>
                            </span>
                        </div>
                        <p className="text-emerald-200/80 leading-relaxed max-w-xs">
                            Empowering farmers with genuine inputs, scientific guidance, and better yields since 2015.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#products" className="hover:text-emerald-400 transition-colors">Products</a></li>
                            <li><a href="#crop-plans" className="hover:text-emerald-400 transition-colors">Crop Plans</a></li>
                            <li><a href="#irrigation" className="hover:text-emerald-400 transition-colors">Irrigation</a></li>
                            <li><a href="#soil-testing" className="hover:text-emerald-400 transition-colors">Soil Testing</a></li>
                            <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Field Visits</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Pest Diagnosis</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Water Testing</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Drip Installation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Newsletter</h3>
                        <p className="text-emerald-200/80 mb-4 text-sm">
                            Get weekly weather alerts and market prices.
                        </p>
                        <div className="flex gap-2">
                            <Input placeholder="9876543210" className="bg-emerald-900/50 border-emerald-800 text-white placeholder:text-emerald-600 w-full" />
                            <Button size="icon" className="bg-emerald-500 hover:bg-emerald-600 text-white shrink-0">
                                <Sprout className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-300/50">
                    <p>&copy; {new Date().getFullYear()} HarvestHub Agro Traders. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart className="w-3 h-3 text-rose-500 fill-current" /> for farmers
                    </p>
                </div>
            </div>
        </footer>
    );
}
