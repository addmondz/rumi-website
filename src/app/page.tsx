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
import {
  coreServices,
  organizationName,
  serviceCatalogJsonLd,
} from "@/lib/ai-visibility";
import { siteUrl } from "@/lib/landing-pages";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Software House Malaysia | Rumi Solutions",
        url: siteUrl,
        description:
          "Malaysian software house offering free web development, mobile apps, property management software, WhatsApp chatbots, SEO and custom software solutions.",
        isPartOf: {
          "@type": "WebSite",
          name: organizationName,
          url: siteUrl,
        },
        about: coreServices.map((service) => ({
          "@type": "Thing",
          name: service,
        })),
      },
      {
        "@type": "ProfessionalService",
        name: organizationName,
        url: siteUrl,
        areaServed: {
          "@type": "Country",
          name: "Malaysia",
        },
        hasOfferCatalog: serviceCatalogJsonLd,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
