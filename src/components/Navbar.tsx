"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/gtag";

const navLinks = [
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      { label: "Visitor & Access Management", href: "#solutions" },
      { label: "Parking Management", href: "#solutions" },
      { label: "Accounting & Billing", href: "#solutions" },
      { label: "Community App", href: "#solutions" },
    ],
  },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              {/* TODO: replace with real logo */}
              <div
                className={`text-2xl font-bold tracking-tight transition-colors ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
              >
                Rumi
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        scrolled
                          ? "text-navy-700 hover:text-accent-600"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-accent-50 hover:text-accent-700 transition-colors"
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      scrolled
                        ? "text-navy-700 hover:text-accent-600"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#contact"
                onClick={() => trackEvent("cta_click", { button: "book_a_demo", location: "navbar" })}
                className="ml-4 inline-flex items-center px-5 py-2.5 rounded-lg bg-accent-500 text-white text-sm font-semibold hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/25"
              >
                Book a Demo
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-colors ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold text-navy-900">Rumi Solution</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-navy-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-navy-700 font-medium text-lg py-2 border-b border-gray-100"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => { setMobileOpen(false); trackEvent("cta_click", { button: "book_a_demo", location: "navbar_mobile" }); }}
                    className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-colors"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
