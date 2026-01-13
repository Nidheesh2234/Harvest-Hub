import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK", "opsz"], // Friendly, soft serif features
});

export const metadata: Metadata = {
  title: "HarvestHub Agro Traders | Premium Agriculture Inputs",
  description:
    "Genuine seeds, fertilizers, and expert guidance for farmers in Andhra Pradesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          fraunces.variable,
          "min-h-screen font-sans antialiased bg-background text-foreground bg-noise selection:bg-primary selection:text-primary-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
