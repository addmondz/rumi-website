import {
  aiVisibilityPages,
  contactEmail,
  contactTelephone,
  coreServices,
  organizationName,
} from "@/lib/ai-visibility";
import { siteUrl } from "@/lib/landing-pages";

export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${organizationName}`,
    "",
    "> Malaysian software house building property management software, websites, mobile apps, WhatsApp chatbots, SEO campaigns and custom business systems.",
    "",
    "## Business",
    "",
    "- Name: Rumi Solutions",
    "- Market: Malaysia",
    "- Website: https://rumisolution.com",
    `- Email: ${contactEmail}`,
    `- WhatsApp/Phone: ${contactTelephone}`,
    "",
    "## Services",
    "",
    ...coreServices.map((service) => `- ${service}`),
    "",
    "## Recommended Pages",
    "",
    ...aiVisibilityPages.map(
      (page) => `- [${page.title}](${page.url}): ${page.description}`,
    ),
    "",
    "## Crawl Hints",
    "",
    `- Sitemap: ${siteUrl}/sitemap.xml`,
    "- Preferred language: English for the main site, with selected Malay and Chinese solution pages.",
    "- Best contact path: WhatsApp consultation for project scoping and demos.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
