"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const cardColor = {
  bg: "bg-red-50",
  text: "text-red-500",
  border: "border-l-red-500",
  hoverBg: "group-hover:bg-red-100",
};

const painPoints = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Visitor Management",
    description: "No streamlined way to register, track, and manage visitor access across multiple properties.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Parking Management",
    description: "No proper system to manage parking lots, charges, and vehicle registration across the property.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Defaulter / Payment Control",
    description: "Chasing outstanding payments manually with no automated tracking or enforcement tools.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Complaint Management",
    description: "Resident complaints lost in emails, WhatsApp groups, and paper forms with no proper tracking.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Financial Visibility",
    description: "Lack of real-time financial reporting, making budgeting and auditing a recurring nightmare.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Communication Breakdown",
    description: "Important notices and updates lost across scattered channels with no centralized communication hub.",
  },
];

export default function ProblemsSection() {
  return (
    <section id="problems" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split header — heading left, description right */}
        <AnimateOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
            <div className="lg:max-w-xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-4">
                Industry Challenges
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
                Common Issues With Current Property Management
              </h2>
            </div>
            <p className="lg:max-w-md text-lg text-gray-600 lg:pb-2">
              Traditional property management tools are fragmented, outdated, and
              leave critical gaps in security, compliance, and communication.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => {
            const colors = cardColor;
            return (
              <AnimateOnScroll key={point.title} delay={i * 0.1}>
                <div
                  className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 ${colors.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 ${colors.hoverBg} transition-colors duration-300`}
                  >
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll>
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-accent-50 rounded-full px-6 py-3">
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-accent-700 font-semibold text-sm">
                The Smarter Solution
              </span>
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            </div>
            <p className="text-gray-600 text-lg mt-4">
              Rumi Solution brings every aspect of property management into one
              platform — purpose-built for property managers and residents.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
