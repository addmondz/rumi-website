import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { landingPages, siteUrl } from "@/lib/landing-pages";

export const metadata: Metadata = {
  title: "Property Management Software Articles | Rumi Solutions Blog",
  description:
    "Read Rumi Solutions articles on property management software, condo management software, strata management and custom property management apps in Malaysia.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Property Management Software Articles | Rumi Solutions Blog",
    description:
      "Explore property management software guides and solution pages for Malaysian condos, strata buildings and property teams.",
    url: `${siteUrl}/blog`,
    siteName: "Rumi Solutions",
    type: "website",
    locale: "en_MY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Management Software Articles | Rumi Solutions Blog",
    description:
      "Property management software articles for Malaysian condos, strata buildings and property teams.",
  },
};

export default function BlogPage() {
  const featured = landingPages[0];
  const articles = landingPages.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Rumi Solutions Blog",
    url: `${siteUrl}/blog`,
    blogPost: landingPages.map((page) => ({
      "@type": "BlogPosting",
      headline: page.title,
      description: page.description,
      url: `${siteUrl}/solutions/${page.slug}`,
      image: page.hero.image?.src,
      author: {
        "@type": "Organization",
        name: "Rumi Solutions",
      },
      publisher: {
        "@type": "Organization",
        name: "Rumi Solutions",
      },
    })),
  };

  return (
    <main>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-navy-950 pt-28 text-white lg:pt-36">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80"
            alt="Modern office workspace for property management"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/80 to-navy-950/90" />
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-10 right-[10%] w-[400px] h-[400px] rounded-full bg-accent-500/10 blur-[120px] z-[1] pointer-events-none" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full bg-accent-400/[0.07] blur-[100px] z-[1] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-accent-200 ring-1 ring-white/15 backdrop-blur-sm">
              Rumi Solutions Blog
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Property management software articles for Malaysia.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
              Browse practical guides and solution pages for condos, strata
              buildings, custom workflows and premium resident app experiences.
            </p>
          </div>
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

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/solutions/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              {featured.hero.image && (
                <Image
                  src={featured.hero.image.src}
                  alt={featured.hero.image.alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              )}
            </div>
            <article className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
                Featured Article
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {featured.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-navy-900">
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  {featured.keyword}
                </span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  {featured.tone} tone
                </span>
              </div>
              <span className="mt-8 inline-flex font-semibold text-accent-700">
                Read article
              </span>
            </article>
          </Link>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/solutions/${article.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <article>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    {article.hero.image && (
                      <Image
                        src={article.hero.image.src}
                        alt={article.hero.image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
                      {article.tone} Article
                    </p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy-900">
                      {article.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-gray-600">
                      {article.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-navy-700">
                        {article.keyword}
                      </span>
                      <span className="whitespace-nowrap text-sm font-semibold text-accent-700">
                        Read more
                      </span>
                    </div>
                  </div>
                </article>
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
