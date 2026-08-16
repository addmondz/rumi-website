import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  getWhatsAppHref,
  LandingPage,
  landingPages,
  siteUrl,
} from "@/lib/landing-pages";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 flex-shrink-0 text-accent-500"
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
  );
}

export default function SeoLandingPage({ page }: { page: LandingPage }) {
  const whatsAppHref = getWhatsAppHref(page);
  const relatedPages = landingPages.filter((item) => item.slug !== page.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Rumi Solutions",
        url: siteUrl,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+60 14-206 8662",
          areaServed: "MY",
          availableLanguage: ["English", "Malay"],
        },
      },
      {
        "@type": "Service",
        name: page.keyword,
        provider: {
          "@type": "Organization",
          name: "Rumi Solutions",
        },
        areaServed: {
          "@type": "Country",
          name: "Malaysia",
        },
        description: page.description,
        url: `${siteUrl}/solutions/${page.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-navy-950 pt-28 text-white lg:pt-36">
        {/* Full-bleed background image */}
        {page.hero.image && (
          <div className="absolute inset-0 z-0">
            <Image
              src={page.hero.image.src}
              alt={page.hero.image.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/80 to-navy-950/90" />
          </div>
        )}

        {/* Decorative gradient orbs */}
        <div className="absolute top-10 right-[10%] w-[500px] h-[500px] rounded-full bg-accent-500/10 blur-[120px] z-[1] pointer-events-none" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full bg-accent-400/[0.07] blur-[100px] z-[1] pointer-events-none" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-accent-200 ring-1 ring-white/15 backdrop-blur-sm">
              {page.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {page.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              {page.hero.subheadline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-500/40"
              >
                {page.hero.primaryCta}
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
                href="#benefits"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 px-7 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
              >
                {page.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Info aside card — glassmorphism */}
          <aside className="overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur-md">
            {page.hero.image && (
              <div className="relative aspect-[4/3]">
                <Image
                  src={page.hero.image.src}
                  alt={page.hero.image.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>
            )}
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
                Page Focus
              </p>
              <h2 className="mt-3 text-2xl font-bold">{page.keyword}</h2>
              <p className="mt-2 text-sm text-gray-300">
                Tone: {page.tone}. Built to attract Malaysian property teams
                ready to ask questions through WhatsApp.
              </p>
              <ul className="mt-6 space-y-4">
                {page.proofPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-gray-200">
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

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

      {/* ── Problem & Solution ── */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-700">
              Problem and Solution
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {page.problem.title}
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600">
            {page.problem.body}
          </p>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section
        id="benefits"
        className="py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(180deg, #e6fcf5 0%, #f5fefa 40%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-3">
              Benefits
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {page.benefits.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {page.benefits.items.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-gray-100 border-l-4 border-l-accent-500 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {benefit.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Images ── */}
      {page.images && (
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <figure className="group overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={page.images.operational.src}
                  alt={page.images.operational.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <figcaption className="p-5 text-sm font-medium leading-relaxed text-navy-900">
                {page.images.operational.caption}
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={page.images.resident.src}
                  alt={page.images.resident.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <figcaption className="p-5 text-sm font-medium leading-relaxed text-navy-900">
                {page.images.resident.caption}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* ── Use Cases ── */}
      <section className="relative bg-navy-950 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] rounded-full bg-accent-500/[0.05] blur-[120px] pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-400 text-sm font-semibold mb-3 border border-accent-500/20">
              Use Cases
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {page.useCases.title}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.useCases.items.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-4 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <CheckIcon />
                <p className="font-medium text-gray-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust ── */}
      <section
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #0a1120 50%, #0d1a2d 100%)",
        }}
      >
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-400/[0.04] blur-[120px] pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] text-accent-400 text-sm font-semibold mb-3 border border-white/[0.08]">
              Trust
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {page.trust.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              {page.trust.body}
            </p>
          </div>
          <div className="space-y-4">
            {page.trust.points.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-5 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <CheckIcon />
                <p className="font-medium text-gray-100">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave divider */}
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

      {/* ── FAQ ── */}
      <section
        className="py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f5fefa 60%, #e6fcf5 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-3">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Questions buyers ask before WhatsApping us
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {page.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <summary className="cursor-pointer text-lg font-semibold text-navy-900 flex items-center justify-between gap-4">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180"
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
                </summary>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 p-8 text-white shadow-xl shadow-accent-500/20 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {page.finalCta.title}
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-accent-50">
                  {page.finalCta.body}
                </p>
              </div>
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 text-base font-semibold text-accent-700 transition-all hover:bg-accent-50 hover:-translate-y-0.5 shadow-lg"
              >
                WhatsApp Rumi Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900">
            Related Rumi Solutions landing pages
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedPages.map((related) => (
              <Link
                key={related.slug}
                href={`/solutions/${related.slug}`}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-accent-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <p className="text-sm font-semibold text-accent-700">
                  {related.tone}
                </p>
                <h3 className="mt-2 font-semibold text-navy-900">
                  {related.keyword}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
