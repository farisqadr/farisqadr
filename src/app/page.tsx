import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { StatsSection } from "@/components/stats-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-surface text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
