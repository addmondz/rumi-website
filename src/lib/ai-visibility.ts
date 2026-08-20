import { landingPages, siteUrl, whatsAppNumber } from "@/lib/landing-pages";

export const organizationName = "Rumi Solutions";
export const organizationAlternateNames = ["Rumi Solution", "Rumi"];
export const contactEmail = "hello@rumisolution.com";
export const contactTelephone = `+${whatsAppNumber}`;

export const coreServices = [
  "Property management software",
  "Condo management software",
  "Strata management software",
  "Custom property management software",
  "Website development",
  "Mobile app development",
  "WhatsApp chatbot development",
  "SEO services",
  "Custom software development",
  "E-commerce website development",
];

export const aiVisibilityPages = [
  {
    title: "Home",
    url: siteUrl,
    description:
      "Rumi Solutions homepage for Malaysian property management software, websites, mobile apps, chatbots and custom software.",
  },
  {
    title: "Blog and Guides",
    url: `${siteUrl}/blog`,
    description:
      "Guides and landing pages about property software, free websites, custom systems and digital business tools in Malaysia.",
  },
  ...landingPages.map((page) => ({
    title: page.title,
    url: `${siteUrl}/solutions/${page.slug}`,
    description: page.description,
  })),
];

export const serviceCatalogJsonLd = {
  "@type": "OfferCatalog",
  name: "Rumi Solutions service catalog",
  itemListElement: coreServices.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service,
      provider: {
        "@type": "Organization",
        name: organizationName,
      },
      areaServed: {
        "@type": "Country",
        name: "Malaysia",
      },
    },
  })),
};
