"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const audiences = [
  {
    headline: "Property Management Companies",
    description:
      "Streamline operations across your entire portfolio. From billing to maintenance to resident communications — manage it all from a single dashboard.",
    benefits: [
      "Centralized multi-property management",
      "Automated billing and payment collection",
      "Real-time operational reporting",
    ],
    // TODO: replace with real image
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    imageAlt: "Modern commercial building exterior",
  },
  {
    headline: "Security Companies",
    description:
      "Equip your guards with GPS tracking, checkpoint verification, and incident reporting — giving your clients full confidence in their security coverage.",
    benefits: [
      "GPS-verified patrol routes",
      "Real-time incident reporting",
      "Client-facing security dashboards",
    ],
    // TODO: replace with real image
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    imageAlt: "Security operations and monitoring",
  },
  {
    headline: "Developers & Committee Members",
    description:
      "Give residents and committee members the transparency they deserve — with access to financials, meeting minutes, community notices, and direct feedback channels.",
    benefits: [
      "Transparent financial reporting",
      "Digital community noticeboard",
      "Resident feedback and voting tools",
    ],
    // TODO: replace with real image
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    imageAlt: "Residential community with modern amenities",
  },
];

export default function AudienceSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold mb-4">
              Built For Everyone
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
              Solutions Tailored to Your Role
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you manage properties, run a security firm, or serve on a
              resident committee — Rumi adapts to how you work.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-20">
          {audiences.map((audience, i) => {
            const isReversed = i % 2 === 1;
            return (
              <AnimateOnScroll key={audience.headline}>
                <div
                  className={`flex flex-col ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-12 lg:gap-16`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={audience.image}
                        alt={audience.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                      {audience.headline}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {audience.description}
                    </p>
                    <ul className="space-y-3">
                      {audience.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
