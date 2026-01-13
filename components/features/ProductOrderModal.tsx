"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductOrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        name: string;
        price: number;
        color: string;
        icon: any;
    } | null;
}

export function ProductOrderModal({ isOpen, onClose, product }: ProductOrderModalProps) {
    const [quantity, setQuantity] = useState(1);

    // Reset quantity when modal closes/opens for a new product
    useEffect(() => {
        if (isOpen) {
            setQuantity(1);
        }
    }, [isOpen]);

    if (!product) return null;

    const total = product.price * quantity;

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Order Summary">
            <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${product.color} shrink-0`}>
                        <product.icon className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold font-display">{product.name}</h4>
                        <p className="text-muted-foreground font-medium">₹{product.price.toLocaleString("en-IN")} per unit</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-background border border-border">
                        <span className="font-semibold text-lg text-foreground">Quantity</span>
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={decrement}
                                disabled={quantity <= 1}
                                className="rounded-full w-10 h-10 hover:bg-muted"
                            >
                                <Minus className="w-4 h-4" />
                            </Button>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={quantity}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="font-display font-bold text-2xl min-w-[2rem] text-center"
                                >
                                    {quantity}
                                </motion.span>
                            </AnimatePresence>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={increment}
                                className="rounded-full w-10 h-10 hover:bg-muted"
                            >
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-1">
                            <span>Order Subtotal</span>
                            <span>₹{product.price.toLocaleString("en-IN")} × {quantity}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-xl font-display">Total Amount</span>
                            <motion.span
                                key={total}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="font-bold text-3xl font-display text-primary"
                            >
                                ₹{total.toLocaleString("en-IN")}
                            </motion.span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 rounded-xl h-12 font-semibold" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button className="flex-2 rounded-xl h-12 px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Confirm Order
                    </Button>
                </div>

                <p className="text-center text-xs text-muted-foreground px-4">
                    Price may vary based on market conditions. Our team will contact you once the order is placed to confirm current rates and delivery details.
                </p>
            </div>
        </Modal>
    );
}
