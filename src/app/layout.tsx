import type { Metadata } from "next";
import type { Viewport } from "next";
import Script from "next/script";
import { siteUrl, whatsAppNumber } from "@/lib/landing-pages";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rumi Solutions",
  alternateName: "Rumi Solution",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  email: "hello@rumisolution.com",
  telephone: `+${whatsAppNumber}`,
  areaServed: {
    "@type": "Country",
    name: "Malaysia",
  },
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
  name: "Rumi Solutions",
  url: siteUrl,
  inLanguage: "en-MY",
  publisher: {
    "@type": "Organization",
    name: "Rumi Solutions",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rumi Solutions | Software House Malaysia",
  description:
    "Malaysian software house building websites, mobile apps, custom software, e-commerce platforms and SEO solutions.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Rumi Solutions | Software House Malaysia",
    description:
      "Malaysian software house — web development, mobile apps, custom software, e-commerce and SEO services for businesses.",
    type: "website",
    locale: "en_MY",
    url: "https://rumisolution.com",
    siteName: "Rumi Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumi Solutions | Software House Malaysia",
    description:
      "Websites, mobile apps, custom software, e-commerce and SEO services in Malaysia.",
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
