import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { landingPages, siteUrl } from "@/lib/landing-pages";

const freeWebsitePages = [
  {
    title: "Claim Your Free Website Today",
    description:
      "A direct free website claim page from Rumi for businesses that want a professional site without a design or build fee.",
    href: "/landing/claim-your-free-website",
    keyword: "claim free website",
    tone: "Offer",
    image: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      alt: "Business team reviewing a free website launch",
    },
  },
  {
    title: "立即领取您的免费网站",
    description:
      "Rumi 的中文免费网站领取页面，网站设计与搭建免费，主机托管上线前另行安排。",
    href: "/landing/claim-your-free-website-zh",
    keyword: "免费网站",
    tone: "Offer",
    image: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      alt: "Business team reviewing a free website launch",
    },
  },
  {
    title: "Rumi Free Website",
    description:
      "A free website design and build offer from Rumi, with hosting arranged separately when you are ready to launch.",
    href: "/landing/rumi-free-website",
    keyword: "free website Malaysia",
    tone: "Offer",
    image: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      alt: "Modern business workspace for a free website launch",
    },
  },
  {
    title: "Rumi Website Launch Plan",
    description:
      "A launch-focused free website landing page for businesses that want a professional site without an upfront build fee.",
    href: "/landing/rumi-website-launch-plan",
    keyword: "free website design",
    tone: "Offer",
    image: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      alt: "Website design team planning a business launch",
    },
  },
];

export const metadata: Metadata = {
  title: "Rumi Solutions Blog | Software, Websites & Business Guides",
  description:
    "Read Rumi Solutions articles and landing pages on free websites, property management software, custom systems and digital solutions in Malaysia.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Rumi Solutions Blog | Software, Websites & Business Guides",
    description:
      "Explore Rumi Solutions guides and landing pages for free websites, property management software and Malaysian business software.",
    url: `${siteUrl}/blog`,
    siteName: "Rumi Solutions",
    type: "website",
    locale: "en_MY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumi Solutions Blog | Software, Websites & Business Guides",
    description:
      "Free website, software and property management articles for Malaysian businesses.",
  },
};

export default function BlogPage() {
  const featured = landingPages[0];
  const articles = landingPages.slice(1);
  const articleCards = [
    ...articles.map((article) => ({
      title: article.title,
      description: article.description,
      href: `/solutions/${article.slug}`,
      keyword: article.keyword,
      tone: article.tone,
      image: article.hero.image,
    })),
    ...freeWebsitePages,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Rumi Solutions Blog & Guides",
    url: `${siteUrl}/blog`,
    description:
      "Browse Rumi Solutions guides and service pages for free websites, property management software and Malaysian business software.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        ...freeWebsitePages.map((page, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${siteUrl}${page.href}`,
          name: page.title,
        })),
        ...landingPages.map((page, i) => ({
          "@type": "ListItem",
          position: freeWebsitePages.length + i + 1,
          url: `${siteUrl}/solutions/${page.slug}`,
          name: page.title,
        })),
      ],
    },
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
              Software, websites and business guides for Malaysia.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
              Browse practical guides and landing pages for free websites,
              property management software, custom workflows and digital
              business tools.
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

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {articleCards.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <article>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    {article.image && (
                      <Image
                        src={article.image.src}
                        alt={article.image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-700">
                      {article.tone} Article
                    </p>
                    <h2 className="mt-3 text-xl font-bold tracking-tight text-navy-900">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {article.description}
                    </p>
                    <div className="mt-6 flex flex-col gap-2">
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
