import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Services />
        <HowItWorks />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}