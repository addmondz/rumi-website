import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "@/components/SeoLandingPage";
import { getLandingPage, landingPages, siteUrl } from "@/lib/landing-pages";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return landingPages.map((page) => ({
    slug: page.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = getLandingPage(params.slug);

  if (!page) {
    return {};
  }

  const url = `${siteUrl}/solutions/${page.slug}`;

  const keywords =
    page.category === "software"
      ? [
          page.keyword,
          "Rumi Solutions",
          "software house Malaysia",
          "web development Malaysia",
          "app development Malaysia",
          "SEO Malaysia",
        ]
      : [
          page.keyword,
          "Rumi Solutions",
          "property management software Malaysia",
          "condo management software Malaysia",
          "resident portal Malaysia",
        ];

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "Rumi Solutions",
      type: "website",
      locale: "en_MY",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default function Page({ params }: PageProps) {
  const page = getLandingPage(params.slug);

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}
