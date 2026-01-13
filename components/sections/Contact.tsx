"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-card relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Let's Grow Together
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12">
                            Have questions about a crop? Need a bulk quote? Our advisory team is ready to help you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-background transition-colors">
                                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                    <p className="text-xs text-muted-foreground mt-1">Mon-Sat, 9am - 7pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-background transition-colors">
                                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Email Us</h3>
                                    <p className="text-muted-foreground">support@harvesthub.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-background transition-colors">
                                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Visit Store</h3>
                                    <p className="text-muted-foreground">
                                        Plot No. 45, Agri Market Yard,<br />
                                        Anakapalle, Visakhapatnam - 531001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background rounded-2xl p-8 shadow-lg border relative overflow-hidden"
                    >
                        {isSuccess && (
                            <div className="absolute inset-0 z-20 bg-background/90 backdrop-blur-sm flex items-center justify-center flex-col text-center p-8">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4"
                                >
                                    <CheckCircle className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-muted-foreground">We will get back to you within 24 hours.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="Ramesh Kumar" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                    <Input id="phone" type="tel" placeholder="9876543210" required />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="village" className="text-sm font-medium">Village / Mandal</label>
                                    <Input id="village" placeholder="Anakapalle" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="crop" className="text-sm font-medium">Primary Crop</label>
                                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option value="">Select Crop</option>
                                        <option value="paddy">Paddy</option>
                                        <option value="cotton">Cotton</option>
                                        <option value="chilli">Chilli</option>
                                        <option value="maize">Maize</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="I need advice on..." className="min-h-[120px]" />
                            </div>

                            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
