"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { trackEvent } from "@/lib/gtag";


export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* TODO: replace with real hero image */}
        <Image
          src="https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80"
          alt="Security surveillance control room with monitors"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/70 to-navy-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* TODO: replace with your actual headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
            Tailored Property Management for{" "}
            <span className="text-accent-400">Your Property</span>
          </h1>

          {/* TODO: replace with your actual subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Affordable websites and apps for your property — from QR code
            visitor access and parking management to resident portals and
            billing.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={() => trackEvent("cta_click", { button: "book_a_demo", location: "hero" })}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent-500 text-white font-semibold text-lg hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 hover:-translate-y-0.5"
            >
              Book a Demo
            </a>
            <a
              href="#solutions"
              onClick={() => trackEvent("cta_click", { button: "see_how_it_works", location: "hero" })}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              See How It Works
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
