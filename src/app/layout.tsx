import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// TODO: replace with your actual brand details
export const metadata: Metadata = {
  title: "Rumi Solution | Property Management Websites & Apps",
  description:
    "We build tailored property management websites and apps — QR code visitor access, parking management, resident portals, and billing at affordable prices.",
  openGraph: {
    title: "Rumi Solution | Property Management Websites & Apps",
    description:
      "Tailored property management websites and apps for residential communities and commercial properties at affordable prices.",
    type: "website",
    locale: "en_MY",
    // TODO: replace with actual URL
    url: "https://rumisolution.com",
    siteName: "Rumi Solution",
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
