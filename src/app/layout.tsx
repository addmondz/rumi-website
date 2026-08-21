import type { Metadata } from "next";
import type { Viewport } from "next";
import Script from "next/script";
import { siteUrl, whatsAppNumber } from "@/lib/landing-pages";
import {
  contactEmail,
  coreServices,
  organizationAlternateNames,
  organizationName,
  serviceCatalogJsonLd,
} from "@/lib/ai-visibility";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: organizationName,
  alternateName: organizationAlternateNames,
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  email: contactEmail,
  telephone: `+${whatsAppNumber}`,
  slogan:
    "Malaysian software house for property systems, websites, apps and automation.",
  knowsAbout: coreServices,
  areaServed: {
    "@type": "Country",
    name: "Malaysia",
  },
  hasOfferCatalog: serviceCatalogJsonLd,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${whatsAppNumber}`,
    contactType: "sales",
    areaServed: "MY",
    availableLanguage: ["en", "ms"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: organizationName,
  alternateName: organizationAlternateNames,
  url: siteUrl,
  inLanguage: "en-MY",
  publisher: {
    "@type": "Organization",
    name: organizationName,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: organizationName,
  title: "Software House Malaysia | Rumi Solutions — Websites, Apps & Custom Software",
  description:
    "Malaysian software house offering free web development, mobile apps, property management software, WhatsApp chatbots, SEO and custom software solutions.",
  keywords: [
    "software house Malaysia",
    "Rumi Solutions",
    "free web development Malaysia",
    "custom software development Malaysia",
    "property management software Malaysia",
    "condo management software",
    "mobile app development Malaysia",
    "WhatsApp chatbot Malaysia",
    "SEO services Malaysia",
    "web development Malaysia",
    "e-commerce website Malaysia",
  ],
  authors: [{ name: organizationName, url: siteUrl }],
  creator: organizationName,
  publisher: organizationName,
  category: "software development",
  alternates: {
    canonical: siteUrl,
    types: {
      "text/plain": `${siteUrl}/llms.txt`,
    },
  },
  openGraph: {
    title: "Software House Malaysia | Rumi Solutions",
    description:
      "Malaysian software house — free websites, mobile apps, property management systems, WhatsApp chatbots, SEO and custom software for businesses.",
    type: "website",
    locale: "en_MY",
    url: "https://rumisolution.com",
    siteName: "Rumi Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software House Malaysia | Rumi Solutions",
    description:
      "Free websites, mobile apps, custom software, property management systems and SEO services in Malaysia.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1J3FT8P1QL"
          strategy="lazyOnload"
        />
        <Script id="ga4" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1J3FT8P1QL');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
