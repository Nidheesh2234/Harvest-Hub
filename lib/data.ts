import {
    Sprout,
    Droplets,
    Bug,
    FlaskConical,
    Tractor,
    Leaf,
} from "lucide-react";

export const NAV_LINKS = [
    { label: "Products", href: "#products" },
    { label: "Crop Plans", href: "#crop-plans" },
    { label: "Irrigation", href: "#irrigation" },
    { label: "Soil Testing", href: "#soil-testing" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
];

export const CATEGORIES = [
    {
        id: "seeds",
        name: "Hybrid Seeds",
        icon: Sprout,
        description: "High-yield varieties for cotton, paddy, and chilli.",
        color: "bg-emerald-100 text-emerald-700",
    },
    {
        id: "fertilizers",
        name: "Fertilizers",
        icon: Leaf,
        description: "Balanced nutrition including Urea, DAP, and Potash.",
        color: "bg-lime-100 text-lime-700",
    },
    {
        id: "protection",
        name: "Crop Protection",
        icon: Bug,
        description: "Curative and preventive solutions for pests.",
        color: "bg-rose-100 text-rose-700",
    },
    {
        id: "irrigation",
        name: "Drip Irrigation",
        icon: Droplets,
        description: "Efficient water management systems and parts.",
        color: "bg-sky-100 text-sky-700",
    },
    {
        id: "soil",
        name: "Soil Health",
        icon: FlaskConical,
        description: "Testing kits and micronutrient correctors.",
        color: "bg-amber-100 text-amber-700",
    },
    {
        id: "tools",
        name: "Farm Tools",
        icon: Tractor,
        description: "Essential sprayers and manual tools.",
        color: "bg-slate-100 text-slate-700",
    },
];

export const SEASONS = [
    {
        id: "pre-kharif",
        name: "Early Kharif",
        months: "Apr - May",
        color: "from-lime-400 to-lime-600",
        crops: ["Sesame", "Green Gram", "Black Gram"],
        tips: [
            "Plough the field to expose soil to sunlight.",
            "Apply farmyard manure during land preparation.",
        ],
    },
    {
        id: "kharif",
        name: "Kharif",
        months: "Jun - Oct",
        color: "from-green-500 to-emerald-700",
        crops: ["Paddy", "Cotton", "Maize", "Turmeric", "Sugarcane", "Soybean"],
        tips: [
            "Monitor for stem borer in paddy.",
            "Ensure proper drainage during heavy rains.",
            "Apply top dressing of urea at active tillering stage.",
        ],
    },
    {
        id: "late-kharif",
        name: "Late Kharif",
        months: "Sep - Nov",
        color: "from-teal-500 to-teal-700",
        crops: ["Castor", "Horse Gram", "Sunflower"],
        tips: [
            "Ideal for short duration pulses.",
            "Monitor for leaf eating caterpillars.",
        ],
    },
    {
        id: "rabi",
        name: "Rabi",
        months: "Nov - Mar",
        color: "from-amber-400 to-yellow-600",
        crops: ["Red Gram", "Chilli", "Vegetables", "Wheat", "Mustard", "Bengal Gram"],
        tips: [
            "Check soil moisture before sowing.",
            "Watch out for sucking pests in chilli.",
            "Irrigate at critical growth stages.",
        ],
    },
    {
        id: "summer",
        name: "Zaid (Summer)",
        months: "Mar - May",
        color: "from-orange-400 to-red-500",
        crops: ["Watermelon", "Muskmelon", "Cucumber", "Okra", "Fodder Crops"],
        tips: [
            "Irrigate frequently to prevent heat stress.",
            "Use mulch to conserve soil moisture.",
            "Harvest fruits early morning.",
        ],
    },
];


export const TESTIMONIALS = [
    {
        name: "Ramesh Naidu",
        location: "Anakapalle",
        rating: 5,
        text: "The crop plan they gave for my cotton field worked wonders. The yield increased by 20% this year.",
    },
    {
        name: "Lakshmi Devi",
        location: "Vizianagaram",
        rating: 5,
        text: "Genuine fertilizers. I used to face fake product issues, but HarvestHub is very trustworthy.",
    },
    {
        name: "Venkat Rao",
        location: "Srikakulam",
        rating: 4,
        text: "Their drip irrigation team is very fast. Fixed my leakage problem in just one day.",
    },
];

export const FAQS = [
    {
        question: "How do I verify if a product is genuine?",
        answer:
            "Every product we sell comes with a batch code. You can enter this code in our 'Check Authenticity' tool above to verify its origin instantly.",
    },
    {
        question: "Do you provide home delivery for fertilizers?",
        answer:
            "Yes, we deliver within a 50km radius of Visakhapatnam for bulk orders. Small orders can be picked up from our store.",
    },
    {
        question: "How much does soil testing cost?",
        answer:
            "Basic soil testing is free for our regular members. For a detailed lab report with micronutrients, we charge a nominal fee of ₹300.",
    },
];
