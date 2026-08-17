"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

const solutionLinks = [
  { label: "Web Development", href: "/solutions/web-development-malaysia" },
  { label: "Mobile App Development", href: "/solutions/mobile-app-development-malaysia" },
  { label: "Custom Software", href: "/solutions/custom-software-development-malaysia" },
  { label: "E-Commerce Development", href: "/solutions/ecommerce-website-development-malaysia" },
  { label: "SEO Services", href: "/solutions/seo-services-malaysia" },
  { label: "Property Management App", href: "/solutions/property-management-software-malaysia" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up newsletter subscription (e.g. Mailchimp, ConvertKit)
    trackEvent("newsletter_subscribe", { email });
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* TODO: replace with real logo */}
            <div className="text-2xl font-bold mb-4">Rumi Solution</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              A Malaysian software house building websites, mobile apps,
              custom software and SEO solutions for businesses that want to grow.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {/* TODO: replace href with real social links */}
              {[
                {
                  label: "Facebook",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  onClick={() => trackEvent("social_click", { platform: social.label })}
                  className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-500 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4 mt-8">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest product updates and industry insights delivered to
              your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all"
                required
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-lg bg-accent-500 text-white font-medium text-sm hover:bg-accent-600 transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            {/* TODO: replace with real company registration details */}
            &copy; {new Date().getFullYear()} Rumi Solution Sdn Bhd (Registration No.
            202X01XXXXXX). All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Made with care in Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
