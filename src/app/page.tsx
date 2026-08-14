import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection";
import ValuesSection from "@/components/ValuesSection";
import ProductsSection from "@/components/ProductsSection";
import AudienceSection from "@/components/AudienceSection";
import SocialProof from "@/components/SocialProof";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemsSection />
      <ValuesSection />
      <ProductsSection />
      <AudienceSection />
      <SocialProof />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
