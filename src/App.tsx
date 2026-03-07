import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CompetitorResearch } from "./components/CompetitorResearch";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { AdBreakdown } from "./components/AdBreakdown";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenAnalyzeModal = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_analyze_my_ads", {
        event_category: "CTA",
        event_label: "Analyze My Ads",
      });
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero modalOpen={modalOpen} setModalOpen={setModalOpen} onOpenModal={handleOpenAnalyzeModal} />
        <Features />
        <CompetitorResearch />
        <Benefits />
        <Testimonials />
        <AdBreakdown />
        <Pricing />
        <FAQ onOpenModal={handleOpenAnalyzeModal} />
      </main>
      <Footer />
    </div>
  );
}