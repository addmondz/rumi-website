import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rumi Solutions | Software House Malaysia — Web, App, SEO & Custom Software",
  description:
    "Rumi Solutions is a Malaysian software house building websites, mobile apps, custom software, e-commerce platforms and SEO solutions for businesses that want to grow.",
  openGraph: {
    title: "Rumi Solutions | Software House Malaysia",
    description:
      "Malaysian software house — web development, mobile apps, custom software, e-commerce and SEO services for businesses.",
    type: "website",
    locale: "en_MY",
    url: "https://rumisolution.com",
    siteName: "Rumi Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1J3FT8P1QL"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
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
