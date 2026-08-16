"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const products = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
    name: "Visitor & Access Management",
    tagline: "Seamless registration, QR-based entry, and real-time visitor tracking.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    name: "Parking Management",
    tagline: "Parking charges, lot allocation, and vehicle tracking made simple.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    name: "Accounting & Billing",
    tagline: "Automated invoicing, payment tracking, and real-time financial dashboards.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    name: "Community App",
    tagline: "A mobile hub for residents and management — notices, bookings, and feedback.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1 3.04.96-5.6L3.2 8.66l5.62-.82L11.42 3l2.52 4.84 5.62.82-4.08 3.95.96 5.6-5.1-3.04z" />
      </svg>
    ),
    name: "Maintenance & Workflow",
    tagline: "Track maintenance requests, assign tasks, and monitor resolution in real time.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    name: "WhatsApp Chatbot",
    tagline: "Automate customer replies, lead capture, bookings, and FAQs on WhatsApp 24/7.",
    color: "bg-green-50 text-green-600",
    href: "/solutions/whatsapp-chatbot-development-malaysia",
  },
];

export default function ProductsSection() {
  return (
    <section id="solutions" className="relative py-20 lg:py-28 bg-navy-950 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent-500/[0.06] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-400/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-400 text-sm font-semibold mb-4 border border-accent-500/20">
              Product Suite
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              One Platform, Every Tool You Need
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Purpose-built modules that work together seamlessly — giving you
              complete control over your property operations.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => {
            const card = (
              <div className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.08] hover:bg-white/[0.08] hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-300 group h-full">
                <div
                  className={`w-14 h-14 rounded-xl ${product.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {product.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {product.tagline}
                </p>
                <span className="inline-flex items-center gap-1 text-accent-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            );

            return (
              <AnimateOnScroll key={product.name} delay={i * 0.1}>
                {"href" in product && product.href ? (
                  <Link href={product.href} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[30px] sm:h-[40px] lg:h-[60px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C480,10 960,55 1440,20 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
