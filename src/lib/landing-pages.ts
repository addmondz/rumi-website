export type LandingPage = {
  slug: string;
  tone: string;
  keyword: string;
  title: string;
  description: string;
  colorScheme?: "accent" | "blue";
  category?: "property" | "software";
  language?: "en" | "ms" | "zh";
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
    colorScheme: "accent",
    category: "property",
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
    colorScheme: "accent",
    category: "property",
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
    colorScheme: "accent",
    category: "property",
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
    colorScheme: "accent",
    category: "property",
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
    colorScheme: "accent",
    category: "property",
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

  // ── Software House Landing Pages ──

  {
    slug: "web-development-malaysia",
    tone: "Professional",
    keyword: "free web development Malaysia",
    colorScheme: "blue",
    category: "software",
    title: "Free Web Development Malaysia | Rumi Solutions — Only Pay for Hosting",
    description:
      "Get a professionally built website for free in Malaysia. Rumi Solutions develops your website at no cost — you only pay for hosting. T&C apply. Fast, responsive, SEO-ready sites for Malaysian businesses.",
    hero: {
      eyebrow: "Free Web Development Malaysia",
      headline: "Get your website built for free. Only pay for hosting.",
      subheadline:
        "Rumi Solutions develops professional, SEO-ready websites for Malaysian businesses at zero development cost. You only cover hosting fees — we handle design, development and launch. T&C apply.",
      primaryCta: "Claim your free website",
      secondaryCta: "See how it works",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        alt: "Web developer working on responsive website design on multiple screens",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
        alt: "Responsive website displayed across laptop and mobile devices",
        caption:
          "Every website we build is fully responsive — optimised for desktop, tablet and mobile from day one.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&q=80",
        alt: "Clean modern website interface design with clear navigation",
        caption:
          "Clean UI, fast load times and clear user journeys — all included in our free web development offer.",
      },
    },
    proofPoints: [
      "Free website development — zero upfront cost",
      "Only pay for hosting (T&C apply)",
      "SEO-optimised and mobile-responsive",
    ],
    problem: {
      title: "Most Malaysian businesses cannot afford a professional website.",
      body:
        "Web development costs thousands of ringgit upfront, which stops many small businesses from going online. Rumi Solutions removes that barrier — we build your website for free and you only pay a simple hosting fee to keep it live. T&C apply.",
    },
    benefits: {
      title: "What you get with our free web development",
      items: [
        {
          title: "Zero development cost",
          body:
            "We design and build your website at no charge. No hidden fees for design, coding or launch — just a straightforward hosting fee to keep your site online. T&C apply.",
        },
        {
          title: "Professional quality, not a template",
          body:
            "We use Next.js, React and modern tooling to build fast, responsive websites — the same quality you would get from a paid project, not a generic drag-and-drop template.",
        },
        {
          title: "SEO-ready from launch",
          body:
            "Every free website comes with proper meta tags, structured data, fast load times and mobile optimisation so Google can find and rank your business.",
        },
      ],
    },
    useCases: {
      title: "Free websites for Malaysian businesses",
      items: [
        "Small businesses launching their first website",
        "Startups that need an online presence fast",
        "Service providers who want a professional landing page",
        "Local businesses ready to attract customers from Google",
      ],
    },
    trust: {
      title: "A real website, not a catch.",
      body:
        "Rumi Solutions builds your site with the same code quality and design standards as our paid projects. The free development model works because we handle hosting — giving you a professional website without the upfront investment. T&C apply.",
      points: [
        "Custom design and development at no cost",
        "Simple, transparent hosting fee — no surprises",
        "Ongoing support and content updates available",
      ],
    },
    faqs: [
      {
        question: "Is the website really free?",
        answer:
          "Yes. We build your website at no development cost. You only pay for hosting to keep the site live. Terms and conditions apply — WhatsApp us for full details.",
      },
      {
        question: "What is included in the free development?",
        answer:
          "Design, development, mobile responsiveness, basic SEO setup and launch are all included. Additional features like e-commerce, custom integrations or advanced functionality may have separate pricing.",
      },
      {
        question: "How much is the hosting fee?",
        answer:
          "Hosting fees depend on the platform and traffic requirements. We will provide a clear, upfront quote before you commit. WhatsApp us for current hosting rates.",
      },
      {
        question: "What are the terms and conditions?",
        answer:
          "T&C cover hosting commitment period, website scope, and usage terms. We are fully transparent — WhatsApp us and we will share the complete terms before starting.",
      },
    ],
    finalCta: {
      title: "Ready to get your free website?",
      body:
        "WhatsApp Rumi Solutions now to claim your free website. We will discuss your business, design your site, and get you online — you only pay for hosting. T&C apply.",
    },
  },
  {
    slug: "mobile-app-development-malaysia",
    tone: "Technical",
    keyword: "mobile app development Malaysia",
    colorScheme: "blue",
    category: "software",
    title: "Mobile App Development Malaysia | Rumi Solutions",
    description:
      "Expert mobile app development in Malaysia. Rumi Solutions builds native and cross-platform iOS and Android apps for startups, SMEs and enterprise clients.",
    hero: {
      eyebrow: "Mobile App Development Malaysia",
      headline: "Turn your idea into an app people actually use.",
      subheadline:
        "Rumi Solutions builds polished iOS and Android apps for Malaysian businesses — from MVP prototypes to full-featured mobile platforms with backend APIs and admin dashboards.",
      primaryCta: "Discuss your app idea",
      secondaryCta: "See our process",
      image: {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
        alt: "Mobile app interface displayed on smartphone for app development in Malaysia",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
        alt: "Mobile app development team reviewing UI designs on tablet and phone",
        caption:
          "From wireframes to polished app — we handle UI/UX design, development, testing and App Store submission.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=1200&q=80",
        alt: "Multiple mobile app screens showing clean interface design",
        caption:
          "Cross-platform development with React Native means one codebase for both iOS and Android — faster launch, lower cost.",
      },
    },
    proofPoints: [
      "iOS and Android from one codebase",
      "Backend API and admin panel included",
      "App Store and Play Store submission support",
    ],
    problem: {
      title: "Building a mobile app without the right partner is expensive and slow.",
      body:
        "Many Malaysian businesses spend months and significant budget on apps that launch late, feel clunky or need constant fixes. Rumi Solutions follows a structured build process — scope, design, develop, test, launch — so your app ships on time and works from day one.",
    },
    benefits: {
      title: "What Rumi delivers for your mobile app",
      items: [
        {
          title: "Cross-platform development",
          body:
            "We build with React Native to deliver native-quality apps for both iOS and Android from a single codebase — saving time and development cost.",
        },
        {
          title: "End-to-end delivery",
          body:
            "From product discovery and UI/UX design to backend development, testing and app store submission — we handle the full lifecycle.",
        },
        {
          title: "Scalable architecture",
          body:
            "Apps are built with clean APIs, secure authentication and cloud infrastructure that handles growth without expensive rebuilds.",
        },
      ],
    },
    useCases: {
      title: "Apps we build for Malaysian businesses",
      items: [
        "Startup MVP apps to validate ideas quickly",
        "Customer-facing service and booking apps",
        "Internal tools and workforce management apps",
        "E-commerce and marketplace mobile apps",
      ],
    },
    trust: {
      title: "We build apps that survive real users.",
      body:
        "Rumi Solutions stress-tests every app before launch. We write clean, documented code, set up proper CI/CD pipelines and design for the edge cases that break most v1 products.",
      points: [
        "Structured sprint-based development process",
        "Post-launch support and iteration packages",
        "Direct communication via WhatsApp throughout the project",
      ],
    },
    faqs: [
      {
        question: "Do you build native or cross-platform apps?",
        answer:
          "We primarily build cross-platform apps using React Native, which gives native performance on both iOS and Android. For projects that require purely native development, we can accommodate that as well.",
      },
      {
        question: "How much does it cost to develop a mobile app in Malaysia?",
        answer:
          "Cost depends on complexity, features and timeline. A simple MVP typically starts from RM 15,000 to RM 40,000, while full-featured apps with backend systems range higher. We provide a detailed quote after scoping your project.",
      },
      {
        question: "Can you build the backend and admin panel too?",
        answer:
          "Yes. We build complete solutions including REST or GraphQL APIs, databases, admin dashboards and cloud deployment — not just the mobile front end.",
      },
    ],
    finalCta: {
      title: "Have an app idea? Let us turn it into a product.",
      body:
        "WhatsApp Rumi Solutions with your concept and we will walk you through our process, timeline and pricing.",
    },
  },
  {
    slug: "seo-services-malaysia",
    tone: "Results-driven",
    keyword: "SEO services Malaysia",
    colorScheme: "blue",
    category: "software",
    title: "SEO Services Malaysia | Rumi Solutions",
    description:
      "Results-driven SEO services in Malaysia. Rumi Solutions helps businesses rank higher on Google with technical SEO, content strategy, keyword research and link building.",
    hero: {
      eyebrow: "SEO Services Malaysia",
      headline: "Get found by customers who are already searching for you.",
      subheadline:
        "Rumi Solutions helps Malaysian businesses climb Google rankings with technical SEO, strategic content and data-driven keyword targeting that brings in qualified leads, not just traffic.",
      primaryCta: "Get a free SEO audit",
      secondaryCta: "See what we optimise",
      image: {
        src: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
        alt: "SEO analytics dashboard showing keyword rankings and traffic growth",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
        alt: "Marketing team analysing SEO performance data on screen",
        caption:
          "We track rankings, organic traffic and conversions — and report clearly so you know exactly what is working.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
        alt: "Google search results page showing top ranking positions",
        caption:
          "Targeted keyword strategy that puts your business in front of customers at the moment they are ready to buy.",
      },
    },
    proofPoints: [
      "Technical SEO and site audits",
      "Content strategy and keyword research",
      "Monthly reporting with clear ROI metrics",
    ],
    problem: {
      title: "If your business is not on page one, your competitors are taking your customers.",
      body:
        "Most Malaysian businesses have websites that are invisible to Google. Poor site structure, missing meta tags, slow load times and thin content mean search engines cannot rank you — even when your services are exactly what people are searching for.",
    },
    benefits: {
      title: "How Rumi SEO services grow your traffic",
      items: [
        {
          title: "Technical SEO foundation",
          body:
            "We fix crawl errors, improve site speed, set up proper schema markup and ensure your site architecture makes it easy for Google to index every important page.",
        },
        {
          title: "Keyword-driven content strategy",
          body:
            "We research what your customers are actually searching for, then create and optimise content that targets those terms with clear intent matching.",
        },
        {
          title: "Transparent monthly reporting",
          body:
            "Every month you get a clear report showing keyword rankings, organic traffic, conversions and the specific actions we took — no vague metrics or vanity numbers.",
        },
      ],
    },
    useCases: {
      title: "SEO that works for Malaysian businesses",
      items: [
        "Local businesses targeting city and state-level keywords",
        "E-commerce stores competing for product search terms",
        "Service businesses generating leads through Google",
        "Companies launching new websites that need organic visibility fast",
      ],
    },
    trust: {
      title: "SEO built on technical skill, not guesswork.",
      body:
        "Rumi Solutions takes a developer-first approach to SEO. We understand site architecture, Core Web Vitals, crawl budgets and structured data because we build the websites too — not just optimise them after the fact.",
      points: [
        "Developer-level technical SEO expertise",
        "No lock-in contracts — results keep you, not paperwork",
        "Combined SEO and web development for faster improvements",
      ],
    },
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a long-term strategy. Most businesses start seeing measurable improvements in 3 to 6 months, with significant ranking gains in 6 to 12 months. We focus on quick technical wins early while building long-term content authority.",
      },
      {
        question: "Do you guarantee first page rankings?",
        answer:
          "No legitimate SEO provider can guarantee specific rankings because Google's algorithm is not controlled by anyone. What we guarantee is a structured, transparent process with clear reporting — and our track record shows consistent ranking improvements.",
      },
      {
        question: "Can you do SEO for an existing website or do we need a new one?",
        answer:
          "We can optimise existing websites. We start with a full technical audit, fix foundational issues first, then layer on content and keyword strategy. If the site needs a rebuild for performance reasons, we can handle that too.",
      },
    ],
    finalCta: {
      title: "Stop losing customers to competitors who rank higher.",
      body:
        "WhatsApp Rumi Solutions for a free SEO audit of your website — we will show you exactly where the opportunities are.",
    },
  },
  {
    slug: "custom-software-development-malaysia",
    tone: "Enterprise",
    keyword: "custom software development Malaysia",
    colorScheme: "blue",
    category: "software",
    title: "Custom Software Development Malaysia | Rumi Solutions",
    description:
      "Custom software development in Malaysia. Rumi Solutions builds bespoke business systems, SaaS platforms, internal tools and automation solutions for Malaysian companies.",
    hero: {
      eyebrow: "Custom Software Development Malaysia",
      headline: "Software built around how your business actually works.",
      subheadline:
        "Rumi Solutions develops custom software for Malaysian businesses that need more than off-the-shelf tools — bespoke systems, internal platforms and automation that fit your exact workflow.",
      primaryCta: "Discuss your project",
      secondaryCta: "See what we build",
      image: {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
        alt: "Software development team collaborating on custom application architecture",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
        alt: "Team workshop planning custom software requirements and architecture",
        caption:
          "We start with your business process, not a template — every system is designed around how your team actually operates.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
        alt: "Custom software dashboard with analytics and management interface",
        caption:
          "From admin dashboards to customer portals — custom software that replaces spreadsheets and manual processes with reliable automation.",
      },
    },
    proofPoints: [
      "Tailored to your business workflow",
      "Scalable cloud-native architecture",
      "Full ownership of your codebase",
    ],
    problem: {
      title: "Generic software forces your team into workarounds.",
      body:
        "When off-the-shelf tools do not match your workflow, your team ends up with spreadsheets, manual steps and fragile integrations that break. Custom software eliminates those gaps by building exactly what your operation needs — nothing more, nothing less.",
    },
    benefits: {
      title: "Why Malaysian businesses choose custom software",
      items: [
        {
          title: "Exact workflow fit",
          body:
            "We map your business process first, then build software that matches every step — approvals, notifications, roles and data flow designed around your team.",
        },
        {
          title: "Integration with existing tools",
          body:
            "Custom software connects with your current systems — payment gateways, accounting software, CRMs, messaging platforms and third-party APIs.",
        },
        {
          title: "Full code ownership",
          body:
            "You own every line of code we write. No vendor lock-in, no per-seat licensing fees, no dependency on a platform that might change its pricing.",
        },
      ],
    },
    useCases: {
      title: "Custom software we build",
      items: [
        "Internal operations and workflow management systems",
        "SaaS platforms and multi-tenant applications",
        "Booking, scheduling and resource management tools",
        "Data dashboards and business intelligence portals",
      ],
    },
    trust: {
      title: "We write clean code that your next developer can read.",
      body:
        "Rumi Solutions follows engineering best practices — version control, automated testing, code documentation and structured deployments. Your software is an asset, not a liability.",
      points: [
        "Agile development with regular client demos",
        "Documented codebase with CI/CD pipelines",
        "Post-launch support and feature iteration",
      ],
    },
    faqs: [
      {
        question: "How do you scope a custom software project?",
        answer:
          "We start with a discovery session to understand your workflow, pain points and goals. From there, we create a project brief with scope, features, timeline and pricing before any development begins.",
      },
      {
        question: "What is the typical timeline for custom software?",
        answer:
          "Simple internal tools take 6 to 10 weeks. Full-featured platforms with multiple user roles, integrations and dashboards typically take 3 to 6 months. We deliver in phases so you get working software early.",
      },
      {
        question: "Can you maintain and update the software after launch?",
        answer:
          "Yes. We offer ongoing maintenance, support and feature development packages. Most clients continue working with us as their software evolves with their business.",
      },
    ],
    finalCta: {
      title: "Need software that actually fits your business?",
      body:
        "WhatsApp Rumi Solutions with a brief description of what you need automated or improved — we will scope it for free.",
    },
  },
  {
    slug: "ecommerce-website-development-malaysia",
    tone: "Commercial",
    keyword: "ecommerce website development Malaysia",
    colorScheme: "blue",
    category: "software",
    title: "E-Commerce Website Development Malaysia | Rumi Solutions",
    description:
      "E-commerce website development in Malaysia. Rumi Solutions builds online stores with secure payments, inventory management and mobile-optimised shopping experiences.",
    hero: {
      eyebrow: "E-Commerce Development Malaysia",
      headline: "An online store that sells while you sleep.",
      subheadline:
        "Rumi Solutions builds fast, secure e-commerce websites for Malaysian businesses — with payment integration, inventory management and a shopping experience that converts browsers into buyers.",
      primaryCta: "Start your online store",
      secondaryCta: "See e-commerce features",
      image: {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
        alt: "E-commerce website shopping experience on laptop and mobile devices",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
        alt: "Online store admin dashboard managing products and orders",
        caption:
          "Manage products, orders, inventory and promotions from a clean admin dashboard — no technical skills required.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80",
        alt: "Mobile shopping experience with clean product display and checkout",
        caption:
          "Mobile-first checkout flow with local payment gateways — FPX, credit cards, e-wallets and bank transfers supported.",
      },
    },
    proofPoints: [
      "Malaysian payment gateway integration",
      "Mobile-optimised shopping experience",
      "Inventory and order management built in",
    ],
    problem: {
      title: "A bad online store does not just lose sales — it loses trust.",
      body:
        "Malaysian consumers expect fast-loading product pages, secure checkout, multiple payment options and mobile-friendly browsing. If your e-commerce site feels clunky or unreliable, customers leave and do not come back.",
    },
    benefits: {
      title: "What makes a Rumi e-commerce store different",
      items: [
        {
          title: "Local payment integration",
          body:
            "We integrate Malaysian payment gateways including FPX, Stripe, iPay88 and e-wallet options so your customers can pay the way they prefer.",
        },
        {
          title: "Fast and mobile-first",
          body:
            "Every store is built for speed and optimised for mobile — because most Malaysian online shoppers browse and buy on their phones.",
        },
        {
          title: "Built to scale",
          body:
            "Whether you have 50 products or 5,000, we build store architectures that handle growth in traffic, inventory and order volume without slowing down.",
        },
      ],
    },
    useCases: {
      title: "E-commerce solutions for Malaysian businesses",
      items: [
        "Product-based businesses going online for the first time",
        "Existing stores migrating from Shopee or Lazada to their own platform",
        "F&B brands with delivery and pre-order systems",
        "B2B wholesale platforms with tiered pricing",
      ],
    },
    trust: {
      title: "Your store, your brand, your data.",
      body:
        "Unlike marketplace platforms that control your customer data and charge commissions, a Rumi-built e-commerce store gives you full ownership of your brand, customer relationships and profit margins.",
      points: [
        "No marketplace commissions or per-transaction platform fees",
        "Full customer data ownership for remarketing",
        "SEO-optimised product pages for organic Google traffic",
      ],
    },
    faqs: [
      {
        question: "Do you build on Shopify or custom?",
        answer:
          "We work with both. For businesses that want speed and simplicity, we build on Shopify or WooCommerce. For those needing full control and custom features, we build headless e-commerce solutions with custom backends.",
      },
      {
        question: "Can you integrate with Malaysian payment gateways?",
        answer:
          "Yes. We integrate with FPX, Stripe, iPay88, Billplz, Revenue Monster and other Malaysian payment providers. We can also set up e-wallet payments and bank transfer options.",
      },
      {
        question: "Will I be able to manage products and orders myself?",
        answer:
          "Yes. Every store comes with an admin panel where you can add products, manage inventory, process orders and run promotions without developer help.",
      },
    ],
    finalCta: {
      title: "Ready to sell online with a store that actually converts?",
      body:
        "WhatsApp Rumi Solutions with your product type and business goals — we will recommend the best e-commerce approach for your budget.",
    },
  },

  // ── WhatsApp Chatbot Landing Page ──

  {
    slug: "whatsapp-chatbot-development-malaysia",
    tone: "Solutions-driven",
    keyword: "WhatsApp chatbot development Malaysia",
    colorScheme: "blue",
    category: "software",
    title: "WhatsApp Chatbot Development Malaysia | Rumi Solutions",
    description:
      "WhatsApp chatbot development in Malaysia. Rumi Solutions builds smart WhatsApp chatbots for businesses — automate customer support, bookings, FAQs and lead capture on WhatsApp.",
    hero: {
      eyebrow: "WhatsApp Chatbot Development Malaysia",
      headline: "Let a WhatsApp chatbot handle your customer inquiries 24/7.",
      subheadline:
        "Rumi Solutions builds custom WhatsApp chatbots for Malaysian businesses — automate replies, capture leads, answer FAQs and manage bookings without hiring extra staff.",
      primaryCta: "Build my WhatsApp chatbot",
      secondaryCta: "See chatbot features",
      image: {
        src: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&q=80",
        alt: "WhatsApp chatbot interface on smartphone for business automation",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
        alt: "Business team planning chatbot conversation flows on whiteboard",
        caption:
          "We design conversation flows that match how your customers actually ask questions — natural, helpful and on-brand.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
        alt: "Customer using WhatsApp chatbot on mobile phone for instant support",
        caption:
          "Your customers get instant answers on WhatsApp — the app they already use every day.",
      },
    },
    proofPoints: [
      "24/7 automated customer replies",
      "Lead capture and booking automation",
      "Works on the WhatsApp your customers already use",
    ],
    problem: {
      title: "Your team cannot reply to every WhatsApp message fast enough.",
      body:
        "Malaysian customers expect instant replies on WhatsApp. When your team is busy, messages pile up, leads go cold and customers move to competitors. A WhatsApp chatbot answers instantly — day or night — so you never miss an opportunity.",
    },
    benefits: {
      title: "What a Rumi WhatsApp chatbot does for your business",
      items: [
        {
          title: "Instant customer replies",
          body:
            "Automatically answer common questions about pricing, services, location and availability — customers get answers in seconds, not hours.",
        },
        {
          title: "Lead capture on autopilot",
          body:
            "Collect customer names, phone numbers, requirements and preferences through guided chat flows — then notify your sales team with qualified leads.",
        },
        {
          title: "Booking and appointment automation",
          body:
            "Let customers book appointments, schedule viewings or reserve services directly through WhatsApp without back-and-forth messaging.",
        },
      ],
    },
    useCases: {
      title: "WhatsApp chatbots for Malaysian businesses",
      items: [
        "F&B businesses automating orders and reservations",
        "Service providers handling appointment bookings",
        "Property agents qualifying buyer inquiries",
        "E-commerce stores answering product and delivery questions",
      ],
    },
    trust: {
      title: "Built for WhatsApp, not bolted on.",
      body:
        "Rumi Solutions builds chatbots specifically for the WhatsApp Business API — not generic chat widgets repurposed for WhatsApp. Every bot is designed around your actual customer conversations and business workflow.",
      points: [
        "Custom conversation flows for your business",
        "WhatsApp Business API integration",
        "Analytics dashboard to track conversations and leads",
      ],
    },
    faqs: [
      {
        question: "Do I need WhatsApp Business API?",
        answer:
          "Yes. We set up and integrate the WhatsApp Business API for your business as part of the chatbot development — you do not need to handle the technical setup yourself.",
      },
      {
        question: "Can the chatbot hand off to a human agent?",
        answer:
          "Yes. The chatbot handles routine questions automatically and seamlessly transfers complex queries to your team with full conversation context.",
      },
      {
        question: "How long does it take to build a WhatsApp chatbot?",
        answer:
          "A standard chatbot with FAQ, lead capture and booking flows typically takes 2 to 4 weeks. More complex integrations with CRM or payment systems may take longer.",
      },
    ],
    finalCta: {
      title: "Stop losing customers to slow replies.",
      body:
        "WhatsApp Rumi Solutions to discuss your chatbot — we will map your customer conversations and build a bot that works 24/7.",
    },
  },

  // ── Multilingual SEO Pages ──

  // Malay - Free Web Development
  {
    slug: "pembangunan-laman-web-percuma-malaysia",
    tone: "Mesra",
    keyword: "pembangunan laman web percuma Malaysia",
    colorScheme: "blue",
    category: "software",
    language: "ms",
    title: "Pembangunan Laman Web Percuma Malaysia | Rumi Solutions",
    description:
      "Dapatkan laman web profesional secara percuma di Malaysia. Rumi Solutions membina laman web anda tanpa kos — anda hanya bayar untuk hosting. T&C terpakai.",
    hero: {
      eyebrow: "Pembangunan Laman Web Percuma",
      headline: "Laman web percuma untuk perniagaan anda. Hanya bayar hosting.",
      subheadline:
        "Rumi Solutions membina laman web profesional untuk perniagaan di Malaysia tanpa sebarang kos pembangunan. Anda hanya perlu bayar yuran hosting sahaja. T&C terpakai.",
      primaryCta: "Dapatkan laman web percuma",
      secondaryCta: "Lihat cara ia berfungsi",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        alt: "Pembangun web sedang mereka bentuk laman web responsif",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
        alt: "Laman web responsif dipaparkan pada komputer riba dan telefon bimbit",
        caption:
          "Setiap laman web yang kami bina sepenuhnya responsif — dioptimumkan untuk desktop, tablet dan telefon bimbit.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&q=80",
        alt: "Reka bentuk antara muka laman web moden yang bersih",
        caption:
          "UI yang bersih, masa muat yang pantas dan pengalaman pengguna yang jelas — semua termasuk dalam tawaran percuma kami.",
      },
    },
    proofPoints: [
      "Pembangunan laman web percuma — tiada kos pendahuluan",
      "Hanya bayar hosting (T&C terpakai)",
      "Dioptimumkan untuk SEO dan mesra telefon bimbit",
    ],
    problem: {
      title: "Kebanyakan perniagaan Malaysia tidak mampu membina laman web profesional.",
      body:
        "Kos pembangunan web boleh mencecah ribuan ringgit, menghalang perniagaan kecil daripada hadir secara dalam talian. Rumi Solutions menghapuskan halangan ini — kami membina laman web anda secara percuma dan anda hanya bayar yuran hosting yang mudah. T&C terpakai.",
    },
    benefits: {
      title: "Apa yang anda dapat dengan pembangunan web percuma kami",
      items: [
        {
          title: "Tiada kos pembangunan",
          body:
            "Kami mereka bentuk dan membina laman web anda tanpa caj. Tiada bayaran tersembunyi untuk reka bentuk, pengkodan atau pelancaran — hanya yuran hosting yang jelas. T&C terpakai.",
        },
        {
          title: "Kualiti profesional, bukan templat",
          body:
            "Kami menggunakan Next.js, React dan alatan moden untuk membina laman web yang pantas dan responsif — kualiti yang sama seperti projek berbayar.",
        },
        {
          title: "Sedia SEO dari hari pertama",
          body:
            "Setiap laman web percuma dilengkapi dengan tag meta, data berstruktur, masa muat pantas dan pengoptimuman telefon bimbit supaya Google boleh menemui perniagaan anda.",
        },
      ],
    },
    useCases: {
      title: "Laman web percuma untuk perniagaan Malaysia",
      items: [
        "Perniagaan kecil yang melancarkan laman web pertama",
        "Startup yang perlukan kehadiran dalam talian dengan segera",
        "Pembekal perkhidmatan yang mahukan halaman pendaratan profesional",
        "Perniagaan tempatan yang ingin menarik pelanggan dari Google",
      ],
    },
    trust: {
      title: "Laman web sebenar, bukan tipu helah.",
      body:
        "Rumi Solutions membina laman web anda dengan kualiti kod dan piawaian reka bentuk yang sama seperti projek berbayar kami. Model pembangunan percuma ini berfungsi kerana kami menguruskan hosting — memberikan anda laman web profesional tanpa pelaburan awal. T&C terpakai.",
      points: [
        "Reka bentuk dan pembangunan tersuai tanpa kos",
        "Yuran hosting yang mudah dan telus — tiada kejutan",
        "Sokongan berterusan dan kemaskini kandungan tersedia",
      ],
    },
    faqs: [
      {
        question: "Adakah laman web ini benar-benar percuma?",
        answer:
          "Ya. Kami membina laman web anda tanpa kos pembangunan. Anda hanya bayar hosting untuk mengekalkan laman web secara langsung. Terma dan syarat terpakai — WhatsApp kami untuk butiran penuh.",
      },
      {
        question: "Apa yang termasuk dalam pembangunan percuma?",
        answer:
          "Reka bentuk, pembangunan, responsif telefon bimbit, penyediaan SEO asas dan pelancaran — semuanya termasuk. Ciri tambahan seperti e-dagang atau integrasi tersuai mungkin mempunyai harga berasingan.",
      },
      {
        question: "Berapakah yuran hosting?",
        answer:
          "Yuran hosting bergantung pada platform dan keperluan trafik. Kami akan berikan sebut harga yang jelas sebelum anda komited. WhatsApp kami untuk kadar hosting semasa.",
      },
    ],
    finalCta: {
      title: "Sedia untuk dapatkan laman web percuma anda?",
      body:
        "WhatsApp Rumi Solutions sekarang untuk menuntut laman web percuma anda. Kami akan bincangkan perniagaan anda, reka bentuk laman web anda dan bawa anda dalam talian — anda hanya bayar hosting. T&C terpakai.",
    },
  },

  // Malay - Property Management
  {
    slug: "perisian-pengurusan-hartanah-malaysia",
    tone: "Profesional",
    keyword: "perisian pengurusan hartanah Malaysia",
    colorScheme: "accent",
    category: "property",
    language: "ms",
    title: "Perisian Pengurusan Hartanah Malaysia | Rumi Solutions",
    description:
      "Perisian pengurusan hartanah untuk JMB, MC dan pengurus hartanah di Malaysia. Sistem pelawat, bil, parkir dan portal penghuni dalam satu platform.",
    hero: {
      eyebrow: "Perisian Pengurusan Hartanah Malaysia",
      headline: "Uruskan operasi bangunan anda dari satu platform digital.",
      subheadline:
        "Rumi Solutions membantu pasukan hartanah Malaysia menggantikan log manual, kumpulan WhatsApp bertaburan dan bil spreadsheet dengan sistem yang selamat dibina untuk operasi harian bangunan.",
      primaryCta: "Hubungi kami di WhatsApp",
      secondaryCta: "Lihat modul yang disertakan",
      image: {
        src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
        alt: "Pasukan pengurusan hartanah menyemak operasi bangunan pada komputer riba",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
        alt: "Skrin bilik kawalan keselamatan untuk akses bangunan dan pemantauan pelawat",
        caption:
          "Digitalisasikan pondok pengawal, akses pelawat, parkir, bil dan rekod penghuni dalam satu sistem operasi.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        alt: "Bangunan kediaman moden sesuai untuk perisian pengurusan hartanah di Malaysia",
        caption:
          "Dibina untuk kondo, apartmen, bangunan pelbagai guna dan komuniti kediaman terurus di Malaysia.",
      },
    },
    proofPoints: [
      "Dibina untuk kondo, apartmen dan hartanah pelbagai guna",
      "Aliran kerja pelawat, parkir, bil dan penghuni",
      "Disesuaikan untuk operasi hartanah Malaysia",
    ],
    problem: {
      title: "Aliran kerja hartanah manual melambatkan setiap pasukan.",
      body:
        "Apabila rekod pelawat, pembayaran, aduan dan tempahan kemudahan berada dalam alat yang berbeza, pengurus kehilangan keterlihatan dan penghuni menunggu lebih lama untuk jawapan. Rumi Solutions memusatkan aliran kerja harian yang mengekalkan hartanah berjalan lancar.",
    },
    benefits: {
      title: "Apa yang pasukan pengurusan anda boleh tingkatkan",
      items: [
        {
          title: "Koordinasi kaunter depan lebih pantas",
          body:
            "Digitalisasikan pra-pendaftaran pelawat, daftar masuk QR dan rekod pondok pengawal supaya pasukan keselamatan boleh mengesahkan kemasukan dengan cepat.",
        },
        {
          title: "Komunikasi penghuni lebih jelas",
          body:
            "Berikan penghuni portal khusus untuk notis, permintaan sokongan, borang dan kemaskini dan bukannya bergantung hanya pada kumpulan sembang.",
        },
        {
          title: "Pengebilan lebih teratur",
          body:
            "Jejak invois, status pembayaran dan susulan akaun dalam satu sistem yang direka untuk keperluan pengurusan hartanah.",
        },
      ],
    },
    useCases: {
      title: "Dibina untuk operasi hartanah Malaysia",
      items: [
        "Pasukan JMB dan MC yang menguruskan permintaan penghuni harian",
        "Pengurus hartanah yang mengendalikan pelbagai tapak",
        "Pasukan keselamatan yang menguruskan pelawat dan penghantaran",
        "Pasukan pentadbiran yang menyelaraskan bil, notis dan rekod",
      ],
    },
    trust: {
      title: "Rakan perisian praktikal, bukan templat generik.",
      body:
        "Rumi Solutions mereka bentuk perisian pengurusan hartanah berdasarkan cara bangunan anda sudah beroperasi, kemudian memperbaiki proses tanpa memaksa penghuni dan kakitangan ke dalam kerumitan yang tidak perlu.",
      points: [
        "Aliran pertanyaan dan sokongan melalui WhatsApp",
        "Modul boleh dikonfigurasi untuk setiap jenis hartanah",
        "Pengalaman web responsif untuk pejabat dan telefon bimbit",
      ],
    },
    faqs: [
      {
        question: "Apakah perisian pengurusan hartanah?",
        answer:
          "Perisian pengurusan hartanah membantu pasukan pengurusan mengendalikan komunikasi penghuni, akses pelawat, parkir, bil, permintaan sokongan dan rekod hartanah dari satu sistem digital.",
      },
      {
        question: "Bolehkah Rumi Solutions menyesuaikan platform untuk bangunan kami?",
        answer:
          "Ya. Rumi Solutions boleh menyesuaikan modul, borang, aliran kerja dan ciri-ciri mengikut jenis hartanah dan proses pengurusan.",
      },
      {
        question: "Adakah ini sesuai untuk hartanah di Malaysia?",
        answer:
          "Ya. Halaman pendaratan dan perkhidmatan ini tertumpu pada kondo, apartmen, bangunan komersial dan hartanah pelbagai guna di Malaysia.",
      },
    ],
    finalCta: {
      title: "Sedia untuk memodenkan operasi hartanah anda?",
      body:
        "Hantar mesej WhatsApp kepada Rumi Solutions dengan jenis hartanah anda dan aliran kerja yang anda ingin tingkatkan.",
    },
  },

  // Chinese - Free Web Development
  {
    slug: "mianfei-wangzhan-kaifa-malaysia",
    tone: "专业",
    keyword: "免费网站开发马来西亚",
    colorScheme: "blue",
    category: "software",
    language: "zh",
    title: "免费网站开发马来西亚 | Rumi Solutions — 只需支付托管费",
    description:
      "在马来西亚免费获取专业网站。Rumi Solutions 免费为您开发网站 — 您只需支付托管费用。条款与条件适用。快速、响应式、SEO优化网站。",
    hero: {
      eyebrow: "免费网站开发马来西亚",
      headline: "免费为您打造网站。只需支付托管费用。",
      subheadline:
        "Rumi Solutions 为马来西亚企业免费开发专业、SEO优化的网站。您只需承担托管费 — 我们负责设计、开发和上线。条款与条件适用。",
      primaryCta: "获取免费网站",
      secondaryCta: "了解运作方式",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        alt: "网站开发人员在多个屏幕上设计响应式网站",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
        alt: "在笔记本电脑和移动设备上显示的响应式网站",
        caption:
          "我们构建的每个网站都完全响应式 — 从第一天起就针对桌面、平板和手机进行优化。",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&q=80",
        alt: "干净现代的网站界面设计",
        caption:
          "干净的界面、快速加载和清晰的用户体验 — 全部包含在我们的免费网站开发服务中。",
      },
    },
    proofPoints: [
      "免费网站开发 — 零前期费用",
      "只需支付托管费（条款与条件适用）",
      "SEO优化和移动端适配",
    ],
    problem: {
      title: "大多数马来西亚企业无法负担专业网站开发费用。",
      body:
        "网站开发前期费用高达数千令吉，阻碍了许多中小企业上线。Rumi Solutions 消除了这一障碍 — 我们免费为您建站，您只需支付简单的托管费。条款与条件适用。",
    },
    benefits: {
      title: "我们的免费网站开发包含什么",
      items: [
        {
          title: "零开发费用",
          body:
            "我们免费为您设计和开发网站。没有设计、编码或上线的隐藏费用 — 只有一个简单明了的托管费。条款与条件适用。",
        },
        {
          title: "专业品质，非模板",
          body:
            "我们使用 Next.js、React 和现代工具构建快速、响应式网站 — 与付费项目相同的品质，而非通用拖拽模板。",
        },
        {
          title: "上线即支持SEO",
          body:
            "每个免费网站都配备适当的元标签、结构化数据、快速加载和移动优化，让 Google 能够找到并排名您的企业。",
        },
      ],
    },
    useCases: {
      title: "适用于马来西亚企业的免费网站",
      items: [
        "首次建立网站的中小企业",
        "需要快速上线的初创公司",
        "需要专业着陆页的服务提供商",
        "准备从 Google 吸引客户的本地企业",
      ],
    },
    trust: {
      title: "真正的网站，不是噱头。",
      body:
        "Rumi Solutions 以与付费项目相同的代码质量和设计标准来构建您的网站。免费开发模式之所以可行，是因为我们负责托管 — 让您在没有前期投资的情况下拥有专业网站。条款与条件适用。",
      points: [
        "免费定制设计和开发",
        "简单透明的托管费 — 没有惊喜",
        "持续支持和内容更新服务",
      ],
    },
    faqs: [
      {
        question: "网站真的是免费的吗？",
        answer:
          "是的。我们免费为您开发网站。您只需支付托管费以保持网站上线。条款与条件适用 — 通过 WhatsApp 联系我们获取完整详情。",
      },
      {
        question: "免费开发包括什么？",
        answer:
          "设计、开发、移动端适配、基础SEO设置和上线全部包含。电子商务、定制集成等高级功能可能需要额外收费。",
      },
      {
        question: "托管费是多少？",
        answer:
          "托管费取决于平台和流量需求。我们会在您承诺之前提供清晰的报价。通过 WhatsApp 联系我们了解当前托管费率。",
      },
    ],
    finalCta: {
      title: "准备好获取您的免费网站了吗？",
      body:
        "立即通过 WhatsApp 联系 Rumi Solutions 获取您的免费网站。我们将讨论您的业务、设计您的网站并帮您上线 — 您只需支付托管费。条款与条件适用。",
    },
  },

  // Chinese - Property Management
  {
    slug: "wuye-guanli-ruanjian-malaysia",
    tone: "专业",
    keyword: "物业管理软件马来西亚",
    colorScheme: "accent",
    category: "property",
    language: "zh",
    title: "物业管理软件马来西亚 | Rumi Solutions",
    description:
      "马来西亚物业管理软件，适用于JMB、MC和物业经理。访客管理、账单、停车和住户门户一站式平台。",
    hero: {
      eyebrow: "物业管理软件马来西亚",
      headline: "一个平台管理您的整栋建筑运营。",
      subheadline:
        "Rumi Solutions 帮助马来西亚物业团队用安全的数字系统取代手工记录、分散的 WhatsApp 群聊和电子表格账单，专为日常建筑运营而设计。",
      primaryCta: "通过 WhatsApp 咨询",
      secondaryCta: "查看包含的模块",
      image: {
        src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
        alt: "物业管理团队在现代办公室中使用笔记本电脑审查建筑运营",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
        alt: "用于建筑访客管理和监控的安保控制室屏幕",
        caption:
          "将门卫管理、访客通行、停车、账单和住户记录数字化整合到一个运营系统中。",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        alt: "适合马来西亚物业管理软件的现代住宅建筑",
        caption:
          "专为马来西亚公寓、住宅、综合用途建筑和管理式住宅社区而设计。",
      },
    },
    proofPoints: [
      "适用于公寓、住宅和综合用途物业",
      "访客、停车、账单和住户工作流程",
      "专为马来西亚物业运营定制",
    ],
    problem: {
      title: "手工物业工作流程拖慢每个团队的效率。",
      body:
        "当访客记录、付款、投诉和设施预订分散在不同工具中时，经理失去可见性，住户等待回复的时间更长。Rumi Solutions 将维持物业运行的日常工作流程集中管理。",
    },
    benefits: {
      title: "您的管理团队可以改进的方面",
      items: [
        {
          title: "更快的前台协调",
          body:
            "将访客预登记、QR码签到和门卫记录数字化，让安保团队能够快速验证入场。",
        },
        {
          title: "更清晰的住户沟通",
          body:
            "为住户提供专用门户，用于通知、支持请求、表格和更新，而不是仅依赖聊天群组。",
        },
        {
          title: "更有序的账单管理",
          body:
            "在一个专为物业管理需求设计的系统中跟踪发票、付款状态和账户跟进。",
        },
      ],
    },
    useCases: {
      title: "专为马来西亚物业运营而建",
      items: [
        "管理日常住户请求的JMB和MC团队",
        "管理多个场地的物业经理",
        "管理访客和快递的安保团队",
        "协调账单、通知和记录的行政团队",
      ],
    },
    trust: {
      title: "实用的软件合作伙伴，而非通用模板。",
      body:
        "Rumi Solutions 根据您的建筑已有的运营方式设计物业管理软件，然后改进流程，而不强迫住户和员工面对不必要的复杂性。",
      points: [
        "通过 WhatsApp 进行咨询和支持",
        "可配置的模块适用于各种物业类型",
        "适用于办公室和移动端的响应式网页体验",
      ],
    },
    faqs: [
      {
        question: "什么是物业管理软件？",
        answer:
          "物业管理软件帮助管理团队从一个数字系统处理住户沟通、访客通行、停车、账单、支持请求和物业记录。",
      },
      {
        question: "Rumi Solutions 能为我们的建筑定制平台吗？",
        answer:
          "可以。Rumi Solutions 可以根据物业类型和管理流程定制模块、表格、工作流程和住户功能。",
      },
      {
        question: "这适合马来西亚的物业吗？",
        answer:
          "是的。此服务专注于马来西亚的公寓、住宅、商业建筑和综合用途物业。",
      },
    ],
    finalCta: {
      title: "准备好让您的物业运营现代化了吗？",
      body:
        "通过 WhatsApp 向 Rumi Solutions 发送消息，告诉我们您的物业类型和您想改进的工作流程。",
    },
  },

  // English - Software House Malaysia
  {
    slug: "software-house-malaysia",
    tone: "Authoritative",
    keyword: "software house Malaysia",
    colorScheme: "blue",
    category: "software",
    title: "Software House Malaysia | Rumi Solutions",
    description:
      "Rumi Solutions is a Malaysian software house offering free web development, mobile apps, WhatsApp chatbots, SEO, custom software and property management systems.",
    hero: {
      eyebrow: "Software House Malaysia",
      headline: "A Malaysian software house that builds what your business actually needs.",
      subheadline:
        "Rumi Solutions is a full-service software house in Malaysia — we build websites (free development, only pay hosting), mobile apps, WhatsApp chatbots, custom software and property management systems. T&C apply.",
      primaryCta: "Talk to us on WhatsApp",
      secondaryCta: "See our services",
      image: {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
        alt: "Software development team collaborating in a modern Malaysian office",
      },
    },
    images: {
      operational: {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
        alt: "Software team planning project requirements on shared screen",
        caption:
          "From free websites to complex custom systems — every project starts with understanding your business first.",
      },
      resident: {
        src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
        alt: "Custom software dashboard and application interface",
        caption:
          "We deliver clean, production-ready software — not half-finished prototypes.",
      },
    },
    proofPoints: [
      "Free web development — only pay hosting",
      "Web, mobile, chatbot and custom software",
      "Malaysian team, WhatsApp-first communication",
    ],
    problem: {
      title: "Finding a reliable software partner in Malaysia is harder than it should be.",
      body:
        "Many businesses get burned by agencies that over-promise, under-deliver or disappear after launch. Rumi Solutions is a hands-on Malaysian software house — we scope honestly, build practically and stay available on WhatsApp for support after delivery.",
    },
    benefits: {
      title: "What Rumi Solutions builds",
      items: [
        {
          title: "Free websites (only pay hosting)",
          body:
            "We develop professional, SEO-ready websites at zero development cost. You only cover hosting fees — no hidden charges. T&C apply.",
        },
        {
          title: "Mobile apps and WhatsApp chatbots",
          body:
            "Cross-platform iOS and Android apps with React Native, plus WhatsApp chatbots that automate customer replies, bookings and lead capture.",
        },
        {
          title: "Custom software and property systems",
          body:
            "Bespoke business systems, SaaS platforms, internal tools and property management software tailored to Malaysian operations.",
        },
      ],
    },
    useCases: {
      title: "Businesses we work with",
      items: [
        "SMEs and startups needing a professional website fast",
        "Property teams replacing manual workflows with software",
        "Businesses automating customer service with WhatsApp chatbots",
        "Companies building custom internal tools and platforms",
      ],
    },
    trust: {
      title: "We write code, not excuses.",
      body:
        "Rumi Solutions is a lean, technical software house. No account managers, no bloated teams — direct communication with the developers building your product, from first WhatsApp message to post-launch support.",
      points: [
        "Direct WhatsApp communication throughout every project",
        "Clean, documented code you fully own",
        "Post-launch support and maintenance available",
      ],
    },
    faqs: [
      {
        question: "Is the website development really free?",
        answer:
          "Yes. We build your website at no development cost — you only pay for hosting. Terms and conditions apply. WhatsApp us for full details.",
      },
      {
        question: "What services does Rumi Solutions offer?",
        answer:
          "We offer free web development (hosting only), mobile app development, WhatsApp chatbot development, SEO services, custom software development, e-commerce websites and property management software.",
      },
      {
        question: "How do I start a project with Rumi Solutions?",
        answer:
          "WhatsApp us with a brief description of what you need. We will discuss your requirements, provide a timeline and scope the project — all through a quick WhatsApp conversation.",
      },
    ],
    finalCta: {
      title: "Need software built by a team that actually delivers?",
      body:
        "WhatsApp Rumi Solutions with your idea — whether it is a free website, a mobile app, a chatbot or a custom system. We will get back to you with a clear plan.",
    },
  },
];

const languageGroups: string[][] = [
  [
    "web-development-malaysia",
    "pembangunan-laman-web-percuma-malaysia",
    "mianfei-wangzhan-kaifa-malaysia",
  ],
  [
    "property-management-software-malaysia",
    "perisian-pengurusan-hartanah-malaysia",
    "wuye-guanli-ruanjian-malaysia",
  ],
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function getLanguageAlternates(
  slug: string,
): Record<string, string> | undefined {
  const group = languageGroups.find((g) => g.includes(slug));
  if (!group) return undefined;

  const langMap: Record<string, string> = {};
  for (const s of group) {
    const page = getLandingPage(s);
    if (!page || page.slug === slug) continue;
    const lang = page.language ?? "en";
    langMap[lang] = `${siteUrl}/solutions/${s}`;
  }
  return Object.keys(langMap).length > 0 ? langMap : undefined;
}

export function getWhatsAppHref(page: LandingPage) {
  const cleanKeyword = page.keyword
    .replace(/\s*Malaysia\s*/gi, " ")
    .replace(/\s*马来西亚\s*/g, "")
    .trim();

  let msg: string;
  if (page.language === "ms") {
    msg =
      page.category === "software"
        ? `Hi Rumi Solutions, saya berminat dengan perkhidmatan ${cleanKeyword} anda. Saya ingin membuat tempahan demo.`
        : `Hi Rumi Solutions, saya berminat dengan ${cleanKeyword}. Saya ingin membuat tempahan demo.`;
  } else if (page.language === "zh") {
    msg =
      page.category === "software"
        ? `你好 Rumi Solutions，我对您的${cleanKeyword}服务感兴趣。我想预约演示。`
        : `你好 Rumi Solutions，我对${cleanKeyword}感兴趣。我想预约演示。`;
  } else {
    msg =
      page.category === "software"
        ? `Hi Rumi Solutions, I am interested in your ${cleanKeyword} services. I would like to book a demo.`
        : `Hi Rumi Solutions, I am interested in ${cleanKeyword}. I would like to book a demo.`;
  }

  const text = encodeURIComponent(msg);
  return `https://wa.me/${whatsAppNumber}?text=${text}`;
}
