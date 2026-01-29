import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Approach from "@/components/sections/Approach";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Left vertical line */}
      <div className="hidden lg:block fixed top-0 bottom-0 w-px bg-white/10 left-50 z-[100]" />

      {/* Right vertical line */}
      <div className="hidden lg:block fixed top-0 bottom-0 w-px bg-white/10 right-50 z-[100]" />

      <Navbar />
      <Hero />
      <Philosophy />
      <Work />
      <Services />
      <Approach />
      <CTA />
      <Footer />
    </div>
  );
}
