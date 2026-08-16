export type LandingPage = {
  slug: string;
  tone: string;
  keyword: string;
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    image?: {
      src: string;
      alt: string;
    };
  };
  images?: {
    operational: {
      src: string;
      alt: string;
      caption: string;
    };
    resident: {
      src: string;
      alt: string;
      caption: string;
    };
  };
  proofPoints: string[];
  problem: {
    title: string;
    body: string;
  };
  benefits: {
    title: string;
    items: { title: string; body: string }[];
  };
  useCases: {
    title: string;
    items: string[];
  };
  trust: {
    title: string;
    body: string;
    points: string[];
  };
  faqs: { question: string; answer: string }[];
  finalCta: {
    title: string;
    body: string;
  };
};

export const siteUrl = "https://rumisolution.com";
export const whatsAppNumber = "60142068662";

export const landingPages: LandingPage[] = [
  {
    slug: "property-management-software-malaysia",
    tone: "Professional",
    keyword: "property management software Malaysia",
    title: "Property Management Software Malaysia | Rumi Solutions",
    description:
      "Rumi Solutions builds property management software for Malaysian JMBs, MCs and property managers, with visitor access, billing, parking and resident portals.",
    hero: {
      eyebrow: "Property Management Software Malaysia",
      headline:
        "Run building operations from one property management platform.",
      subheadline:
        "Rumi Solutions helps Malaysian property teams replace manual logs, scattered WhatsApp chats and spreadsheet billing with a secure system built around daily building operations.",
      primaryCta: "Ask for a WhatsApp consultation",
      secondaryCta: "View included modules",
      image: {
        src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
        alt: "Property management team reviewing building operations on laptops in a modern office",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
        alt: "Security control room screens used for building access and visitor monitoring",
        caption:
          "Digitise guardhouse, visitor access, parking, billing and resident records in one operational system.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        alt: "Modern residential building suitable for property management software in Malaysia",
        caption:
          "Built for Malaysian condos, apartments, mixed-use buildings and managed residential communities.",
      },
    },
    proofPoints: [
      "Built for condos, apartments and mixed-use properties",
      "Visitor, parking, billing and resident workflows",
      "Customised for Malaysian property operations",
    ],
    problem: {
      title: "Manual property workflows slow every team down.",
      body:
        "When visitor records, payments, complaints and facility bookings sit in separate tools, managers lose visibility and residents wait longer for answers. Rumi Solutions centralises the everyday workflows that keep a property running.",
    },
    benefits: {
      title: "What your management team can improve",
      items: [
        {
          title: "Faster front-desk coordination",
          body:
            "Digitise visitor pre-registration, QR check-ins and guardhouse records so security teams can verify entries quickly.",
        },
        {
          title: "Clearer resident communication",
          body:
            "Give residents a dedicated portal for notices, support requests, forms and updates instead of relying only on chat groups.",
        },
        {
          title: "More organised billing",
          body:
            "Track invoices, payment status and account follow-ups in one system designed around property management needs.",
        },
      ],
    },
    useCases: {
      title: "Built for Malaysian property operations",
      items: [
        "JMB and MC teams managing daily resident requests",
        "Property managers handling multiple sites",
        "Security teams managing visitors and deliveries",
        "Admin teams coordinating billing, notices and records",
      ],
    },
    trust: {
      title: "A practical software partner, not a generic template.",
      body:
        "Rumi Solutions designs property management software around how your building already operates, then improves the process without forcing residents and staff into unnecessary complexity.",
      points: [
        "Local WhatsApp-first inquiry and support flow",
        "Configurable modules for each property type",
        "Responsive web experience for office and mobile use",
      ],
    },
    faqs: [
      {
        question: "What is property management software?",
        answer:
          "Property management software helps management teams handle resident communication, visitor access, parking, billing, support requests and property records from one digital system.",
      },
      {
        question: "Can Rumi Solutions customise the platform for our building?",
        answer:
          "Yes. Rumi Solutions can tailor modules, forms, workflows and resident-facing features based on the property type and management process.",
      },
      {
        question: "Is this suitable for properties in Malaysia?",
        answer:
          "Yes. The landing pages and service are focused on Malaysian condos, apartments, commercial buildings and mixed-use properties.",
      },
    ],
    finalCta: {
      title: "Ready to modernise your property operations?",
      body:
        "Send Rumi Solutions a WhatsApp message with your property type and the workflows you want to improve.",
    },
  },
  {
    slug: "condo-management-software",
    tone: "Friendly",
    keyword: "condo management software",
    title: "Condo Management Software for Residents & JMBs | Rumi Solutions",
    description:
      "Friendly condo management software for Malaysian condos, with visitor QR access, resident requests, notices, facilities, parking and billing support.",
    hero: {
      eyebrow: "Condo Management Software",
      headline: "Make condo management easier for residents, guards and admins.",
      subheadline:
        "Rumi Solutions gives your condo a simple digital hub for visitor access, announcements, requests and management tasks residents use every week.",
      primaryCta: "Chat with Rumi on WhatsApp",
      secondaryCta: "See condo features",
      image: {
        src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
        alt: "Modern condominium tower with balconies for condo management software in Malaysia",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
        alt: "Property management professional using a laptop for condo administration",
        caption:
          "Give the management office a clearer way to handle notices, requests, visitors and resident follow-up.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
        alt: "Residents and property team discussing service requests around a table",
        caption:
          "Make resident communication easier with a mobile-friendly portal for everyday condo needs.",
      },
    },
    proofPoints: [
      "Easy for residents to understand",
      "Helpful for guards and building admins",
      "Designed for Malaysian condo communities",
    ],
    problem: {
      title: "Condo residents expect quick answers.",
      body:
        "Residents want to register visitors, ask questions, report issues and receive notices without calling the management office for every small update. A dedicated condo management system gives everyone a clearer place to go.",
    },
    benefits: {
      title: "A smoother day for everyone",
      items: [
        {
          title: "Simple visitor registration",
          body:
            "Residents can share visitor details ahead of time while guards receive clearer entry information.",
        },
        {
          title: "Fewer repeated questions",
          body:
            "Put notices, forms and common updates in one resident portal so the office spends less time repeating the same answers.",
        },
        {
          title: "Better follow-up on issues",
          body:
            "Keep maintenance requests and resident messages organised so nothing disappears inside long chat threads.",
        },
      ],
    },
    useCases: {
      title: "Useful for everyday condo needs",
      items: [
        "Visitor and contractor pre-registration",
        "Lift notices, water disruption notices and community updates",
        "Resident requests and maintenance reports",
        "Parking, access card and facility workflows",
      ],
    },
    trust: {
      title: "A resident-friendly experience matters.",
      body:
        "Rumi Solutions keeps the interface direct and mobile-friendly, because a condo system only works when residents, guards and admins can use it without training sessions.",
      points: [
        "WhatsApp inquiry for quick project scoping",
        "Clear workflows for JMB and management offices",
        "Mobile-first pages for residents on the move",
      ],
    },
    faqs: [
      {
        question: "Who uses condo management software?",
        answer:
          "Residents, security guards, building admins, JMB or MC members and property managers can all use different parts of a condo management system.",
      },
      {
        question: "Can residents use it on mobile?",
        answer:
          "Yes. Rumi Solutions builds responsive web apps and resident portals that work well on mobile devices.",
      },
      {
        question: "Can we start with only visitor management?",
        answer:
          "Yes. A property can begin with a focused module such as visitor QR access, then expand into billing, requests or facilities later.",
      },
    ],
    finalCta: {
      title: "Give your condo a clearer way to manage daily requests.",
      body:
        "WhatsApp Rumi Solutions and share what your residents, guards and office team struggle with most.",
    },
  },
  {
    slug: "custom-property-management-software",
    tone: "Technical",
    keyword: "custom property management software",
    title: "Custom Property Management Software | Rumi Solutions Malaysia",
    description:
      "Custom property management software for Malaysian properties that need tailored workflows, integrations, resident portals and operational modules.",
    hero: {
      eyebrow: "Custom Property Management Software",
      headline:
        "Custom workflows for properties that cannot fit generic software.",
      subheadline:
        "Rumi Solutions builds tailored property management systems with configurable modules, role-based workflows and property-specific processes for Malaysian operations.",
      primaryCta: "Discuss requirements on WhatsApp",
      secondaryCta: "Review custom modules",
      image: {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
        alt: "Software team planning custom property management workflows on a shared screen",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
        alt: "Team workshop mapping custom software requirements for property operations",
        caption:
          "Map your actual approval steps, access rules, billing process and reporting needs before building.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        alt: "Analytics dashboard on a laptop for custom property management reporting",
        caption:
          "Create dashboards and records that match how your management team reviews property performance.",
      },
    },
    proofPoints: [
      "Tailored forms and approval flows",
      "Role-based resident, guard and admin access",
      "Built around your existing operating process",
    ],
    problem: {
      title: "Off-the-shelf tools often break at the operational details.",
      body:
        "Every property has its own rules for visitors, parking, deposits, facilities, approvals and reporting. Custom property management software lets your system reflect those rules instead of forcing manual workarounds.",
    },
    benefits: {
      title: "Customisation areas Rumi Solutions can support",
      items: [
        {
          title: "Workflow design",
          body:
            "Map resident submissions, admin approvals, guard verification and management follow-up into structured digital flows.",
        },
        {
          title: "Module configuration",
          body:
            "Build around the modules you need first, such as visitor QR, parking, billing, facilities or resident support.",
        },
        {
          title: "Data visibility",
          body:
            "Create clearer dashboards and exports for management teams that need reliable operational records.",
        },
      ],
    },
    useCases: {
      title: "Good fit for complex property requirements",
      items: [
        "Mixed-use buildings with different resident and tenant rules",
        "Properties with unique access or parking policies",
        "Management teams replacing spreadsheets and paper records",
        "Operators needing phased rollout across multiple properties",
      ],
    },
    trust: {
      title: "Custom does not need to mean complicated.",
      body:
        "Rumi Solutions keeps the implementation focused: define the process, build the necessary modules, launch a usable first version and expand based on real operating feedback.",
      points: [
        "Requirements scoped through direct consultation",
        "Modular build path for phased implementation",
        "Responsive system for office, guardhouse and resident use",
      ],
    },
    faqs: [
      {
        question: "What makes software custom?",
        answer:
          "Custom software is designed around your property workflows, terminology, approval steps, user roles and reporting needs instead of using a fixed one-size-fits-all process.",
      },
      {
        question: "Can custom software be launched in phases?",
        answer:
          "Yes. Many properties start with one high-impact module, then add more workflows after the team confirms the process works well.",
      },
      {
        question: "Do we need a full technical specification before contacting Rumi Solutions?",
        answer:
          "No. You can start with a WhatsApp inquiry describing your property type, pain points and the modules you are considering.",
      },
    ],
    finalCta: {
      title: "Have a property workflow that standard software cannot handle?",
      body:
        "Send the details to Rumi Solutions on WhatsApp and we will help shape the first practical version.",
    },
  },
  {
    slug: "strata-management-software-malaysia",
    tone: "Local",
    keyword: "strata management software Malaysia",
    title: "Strata Management Software Malaysia | Rumi Solutions",
    description:
      "Local strata management software for Malaysian JMBs, MCs and building managers handling residents, access, parking, billing and community operations.",
    hero: {
      eyebrow: "Strata Management Software Malaysia",
      headline: "A practical digital system for Malaysian strata properties.",
      subheadline:
        "From KL condos to managed apartments across Malaysia, Rumi Solutions helps JMBs, MCs and building managers organise resident service, visitor access and admin records.",
      primaryCta: "WhatsApp a local inquiry",
      secondaryCta: "Explore strata workflows",
      image: {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
        alt: "Apartment building lobby suitable for Malaysian strata property management",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
        alt: "Building management office workspace for strata administration",
        caption:
          "Support JMB, MC and building manager workflows with clearer records for units, residents and requests.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
        alt: "Residential apartment interior representing strata community living in Malaysia",
        caption:
          "Help strata communities manage shared facilities, notices, access and resident communication locally.",
      },
    },
    proofPoints: [
      "Made for Malaysia-based property teams",
      "Supports JMB, MC and appointed manager workflows",
      "Practical modules for daily building operations",
    ],
    problem: {
      title: "Strata teams need records they can act on quickly.",
      body:
        "Many Malaysian properties still depend on paper forms, guardhouse books and group chats. That makes handover, dispute checking and resident follow-up harder than it should be.",
    },
    benefits: {
      title: "Local workflows the system can organise",
      items: [
        {
          title: "Resident and unit records",
          body:
            "Keep structured records for units, residents, vehicles and requests so the management office has a clearer source of truth.",
        },
        {
          title: "Access and visitor control",
          body:
            "Improve guardhouse verification with visitor QR workflows and better records for contractors, guests and deliveries.",
        },
        {
          title: "Community communication",
          body:
            "Publish notices, collect requests and reduce confusion around office updates, facility rules and maintenance work.",
        },
      ],
    },
    useCases: {
      title: "For Malaysian strata communities",
      items: [
        "Condominiums and serviced apartments",
        "Apartment blocks and residential communities",
        "Mixed-use strata developments",
        "Commercial strata buildings with tenant workflows",
      ],
    },
    trust: {
      title: "Local context, direct communication.",
      body:
        "Rumi Solutions works with a WhatsApp-first inquiry process so management teams can quickly explain their property, current process and priority modules before committing to a build.",
      points: [
        "Malaysia-focused SEO and service positioning",
        "Flexible implementation based on building size",
        "Clear resident and admin user journeys",
      ],
    },
    faqs: [
      {
        question: "Is strata management software different from general property software?",
        answer:
          "Strata management software focuses on shared building operations such as residents, parcels, visitors, common areas, facilities, notices and management office workflows.",
      },
      {
        question: "Can it support JMB or MC workflows?",
        answer:
          "Yes. Rumi Solutions can tailor workflows for JMB, MC and appointed building management teams.",
      },
      {
        question: "Is WhatsApp the main inquiry channel?",
        answer:
          "Yes. The landing pages route qualified inquiries to WhatsApp so Rumi Solutions can respond quickly and gather project details.",
      },
    ],
    finalCta: {
      title: "Bring your strata property records into one system.",
      body:
        "WhatsApp Rumi Solutions with your property type, location in Malaysia and the modules you want to prioritise.",
    },
  },
  {
    slug: "premium-property-management-app",
    tone: "Premium",
    keyword: "property management app Malaysia",
    title: "Premium Property Management App Malaysia | Rumi Solutions",
    description:
      "Premium property management app experiences for Malaysian residences that want polished resident portals, digital access, requests, notices and billing workflows.",
    hero: {
      eyebrow: "Premium Property Management App",
      headline: "A polished resident experience for modern properties.",
      subheadline:
        "Rumi Solutions creates refined property management apps and portals for residences that want every interaction, from visitor entry to resident requests, to feel clear and well managed.",
      primaryCta: "Request a premium consultation",
      secondaryCta: "See resident experience",
      image: {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
        alt: "Premium modern residence exterior for a polished property management app",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        alt: "Luxury residential building exterior for premium property management app positioning",
        caption:
          "Match premium residences with a polished resident portal, visitor journey and management workflow.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
        alt: "Professional team reviewing a premium digital resident experience on devices",
        caption:
          "Create a service experience that feels consistent from the resident's first tap to office follow-up.",
      },
    },
    proofPoints: [
      "Refined resident-facing web app",
      "Management workflows behind the scenes",
      "Premium positioning for modern residences",
    ],
    problem: {
      title: "Premium properties need service that feels consistent.",
      body:
        "A high-quality property experience is shaped by small daily interactions: fast visitor entry, clear notices, organised requests and confident communication from the management office.",
    },
    benefits: {
      title: "Designed for a higher service standard",
      items: [
        {
          title: "Resident portal experience",
          body:
            "Give residents a clean digital place to submit requests, review notices and access property services.",
        },
        {
          title: "Controlled access journey",
          body:
            "Support a more professional arrival experience with QR visitor workflows and clear guardhouse coordination.",
        },
        {
          title: "Management confidence",
          body:
            "Help office teams manage communication, records and follow-up with a system that reflects the property brand.",
        },
      ],
    },
    useCases: {
      title: "Ideal for experience-led properties",
      items: [
        "Premium condominiums and serviced residences",
        "New launches seeking a stronger resident portal",
        "Managed communities with service expectations",
        "Properties upgrading from generic forms and chat groups",
      ],
    },
    trust: {
      title: "Software that supports the way your property wants to be seen.",
      body:
        "Rumi Solutions balances polished resident-facing pages with practical admin workflows, so the system looks professional without losing operational usefulness.",
      points: [
        "Premium tone for resident communications",
        "Responsive layouts for mobile-first residents",
        "Custom modules matched to property positioning",
      ],
    },
    faqs: [
      {
        question: "What makes a property management app premium?",
        answer:
          "A premium app focuses on clear user journeys, polished presentation, consistent communication and workflows that support a higher standard of resident service.",
      },
      {
        question: "Can the app match our property branding?",
        answer:
          "Yes. Rumi Solutions can tailor the visual direction and language to suit the positioning of the property.",
      },
      {
        question: "Can premium properties still start with a focused module?",
        answer:
          "Yes. A premium rollout can begin with visitor access or resident requests, then expand into more complete management workflows.",
      },
    ],
    finalCta: {
      title: "Create a resident experience that feels managed from the first tap.",
      body:
        "Message Rumi Solutions on WhatsApp to discuss a premium property management app for your residence.",
    },
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function getWhatsAppHref(page: LandingPage) {
  const text = encodeURIComponent(
    `Hi Rumi Solutions, I am interested in ${page.keyword}. My property is in Malaysia.`
  );

  return `https://wa.me/${whatsAppNumber}?text=${text}`;
}
