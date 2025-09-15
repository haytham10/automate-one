import CtaSection from "@/components/sections/CtaSection";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import FounderBanner from "@/components/sections/FounderBanner";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <FounderBanner />
        <div id="pricing">
          <Pricing />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}