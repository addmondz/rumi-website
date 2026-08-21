"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { trackEvent } from "@/lib/gtag";
import heroImage from "../../public/images/security-control-room.webp";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Security surveillance control room with monitors"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/80 to-navy-950/90" />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-accent-500/10 blur-[120px] z-[1] pointer-events-none" />
      <div className="absolute bottom-32 left-[5%] w-[350px] h-[350px] rounded-full bg-accent-400/[0.07] blur-[100px] z-[1] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
            Your Custom{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
              Software House
            </span>{" "}
            in Malaysia
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Rumi Solutions builds free websites, mobile apps, property
            management software, WhatsApp chatbots and custom business
            systems for companies across Malaysia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={() => trackEvent("cta_click", { button: "book_a_demo", location: "hero" })}
              className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Demo
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            <a
              href="#solutions"
              onClick={() => trackEvent("cta_click", { button: "see_how_it_works", location: "hero" })}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              See How It Works
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
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute -bottom-px left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[40px] sm:h-[60px] lg:h-[80px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C360,10 720,90 1440,32 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
