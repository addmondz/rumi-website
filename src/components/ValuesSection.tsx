"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Transparency & Accountability",
    description:
      "Every action is logged, every transaction visible. Residents and management share a single source of truth — building trust through radical openness.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Control & Efficiency",
    description:
      "Automate repetitive tasks, streamline workflows, and give your team the tools to manage operations with precision — not spreadsheets.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Back-up & Continuity",
    description:
      "Your data is never deleted — every record, every document, every financial trail is preserved with a full audit history for compliance and peace of mind.",
  },
];

export default function ValuesSection() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #e6fcf5 0%, #f5fefa 40%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Section header */}
          <AnimateOnScroll className="lg:w-5/12">
            <div className="lg:sticky lg:top-32">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight mb-6">
                Core Values That Drive Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Everything we build is guided by three principles that ensure
                your property runs smoothly, transparently, and without
                interruption.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right: Value cards — horizontal layout */}
          <div className="lg:w-7/12 space-y-6">
            {values.map((value, i) => {
              const number = String(i + 1).padStart(2, "0");
              return (
                <AnimateOnScroll key={value.title} delay={i * 0.15}>
                  <div className="relative flex gap-5 p-6 lg:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent-200 transition-all duration-300 group">
                    {/* Number watermark */}
                    <span className="absolute top-4 right-6 text-6xl font-bold text-gray-100 group-hover:text-accent-100 transition-colors duration-300 select-none pointer-events-none">
                      {number}
                    </span>

                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center group-hover:bg-accent-100 group-hover:scale-110 transition-all duration-300">
                        {value.icon}
                      </div>
                    </div>
                    <div className="relative min-w-0">
                      <h3 className="text-xl font-bold text-navy-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
