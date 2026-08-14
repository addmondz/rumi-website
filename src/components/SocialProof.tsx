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

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-400 text-sm font-semibold mb-4">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Trusted by Property Managers Across Malaysia
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Stats */}
        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-16">
            {/* TODO: replace with real stats */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">
                <AnimatedCounter target={150} suffix="+" />
              </div>
              <p className="mt-2 text-gray-400 font-medium">
                Neighbourhoods Managed
              </p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/20" />
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">
                <AnimatedCounter target={50000} suffix="+" />
              </div>
              <p className="mt-2 text-gray-400 font-medium">
                Property Units
              </p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/20" />
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">
                <AnimatedCounter target={99} suffix="%" />
              </div>
              <p className="mt-2 text-gray-400 font-medium">
                Uptime Reliability
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Logo Cloud */}
        <AnimateOnScroll>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center h-20 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 font-medium text-sm hover:text-navy-700 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer"
              >
                {/* TODO: replace with <Image> of real partner logo */}
                {logo}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
