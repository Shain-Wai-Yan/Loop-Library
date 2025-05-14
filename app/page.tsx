import { EcoDeliveryShowcase } from "@/components/eco-delivery-showcase";
import { EnvironmentalImpact } from "@/components/environmental-impact";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Features />
        <HowItWorks />
        <EcoDeliveryShowcase />
        <EnvironmentalImpact />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
