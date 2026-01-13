import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { SeasonalJourney } from "@/components/sections/SeasonalJourney";
import { SeasonalPlans } from "@/components/sections/SeasonalPlans";
import { Irrigation } from "@/components/sections/Irrigation";
import { SoilTesting } from "@/components/sections/SoilTesting";
import { TrustSection } from "@/components/sections/TrustSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ProductCategories />
      <SeasonalJourney />
      <SeasonalPlans />
      <Irrigation />
      <SoilTesting />
      <TrustSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
