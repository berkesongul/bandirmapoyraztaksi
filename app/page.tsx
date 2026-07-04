import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ServiceZones from "@/components/ServiceZones";
import FleetSection from "@/components/FleetSection";
import RouteEstimator from "@/components/RouteEstimator";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TranslateWidget from "@/components/TranslateWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] overflow-x-hidden pb-28 md:pb-0">
      <Navbar />
      <Hero />
      <TrustBadges />
      <ServiceZones />
      <FleetSection />
      <RouteEstimator />
      <Testimonials />
      <Footer />
      <StickyMobileCTA />
      <TranslateWidget />
    </main>
  );
}
