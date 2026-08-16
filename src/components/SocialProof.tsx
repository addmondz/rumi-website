"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const logos: string[] = [];

const stats = [
  { target: 150, suffix: "+", label: "Neighbourhoods Managed" },
  { target: 50000, suffix: "+", label: "Property Units" },
  { target: 99, suffix: "%", label: "Uptime Reliability" },
];

export default function SocialProof() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #0a1120 50%, #0d1a2d 100%)",
      }}
    >
      {/* Decorative gradient mesh */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-500/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-400/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] text-accent-400 text-sm font-semibold mb-4 border border-white/[0.08]">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Trusted by Property Managers Across Malaysia
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Stats in cards with gradient numbers */}
        <AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-300 to-accent-500">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-gray-400 font-medium">{stat.label}</p>
                {/* Accent glow bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] rounded-full bg-gradient-to-r from-accent-500/0 via-accent-500/50 to-accent-500/0" />
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Logo Cloud */}
        <AnimateOnScroll>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center h-20 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-500 font-medium text-sm hover:text-white hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 cursor-pointer"
              >
                {logo}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
