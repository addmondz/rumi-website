export type LandingPage = {
  slug: string;
  tone: string;
  keyword: string;
  title: string;
  description: string;
  colorScheme?: "accent" | "blue";
  category?: "property" | "software";
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
    keyword: "web development Malaysia",
    colorScheme: "blue",
    category: "software",
    title: "Web Development Malaysia | Rumi Solutions",
    description:
      "Professional web development services in Malaysia. Rumi Solutions builds fast, responsive websites for businesses — from corporate sites and landing pages to complex web applications.",
    hero: {
      eyebrow: "Web Development Malaysia",
      headline: "Websites that work as hard as your business does.",
      subheadline:
        "Rumi Solutions designs and develops high-performance websites for Malaysian businesses — responsive, SEO-ready and built to convert visitors into customers.",
      primaryCta: "Get a free consultation",
      secondaryCta: "View our approach",
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
          "Clean UI, fast load times and clear user journeys that keep visitors engaged and drive conversions.",
      },
    },
    proofPoints: [
      "Responsive across all devices",
      "SEO-optimised from launch",
      "Built with modern frameworks",
    ],
    problem: {
      title: "A slow or outdated website costs you customers every day.",
      body:
        "Malaysian businesses lose potential leads when their website loads slowly, looks outdated on mobile or ranks poorly on Google. Rumi Solutions builds modern websites that load fast, look professional and are structured for search engines from the start.",
    },
    benefits: {
      title: "What you get with Rumi web development",
      items: [
        {
          title: "Performance-first builds",
          body:
            "We use Next.js, React and modern tooling to build websites that score high on Core Web Vitals — fast load times mean lower bounce rates and better Google rankings.",
        },
        {
          title: "Designed for conversions",
          body:
            "Every page is structured with clear calls-to-action, intuitive navigation and persuasive layouts that guide visitors toward inquiries and sales.",
        },
        {
          title: "Easy to manage",
          body:
            "We build with content management in mind — update your own text, images and blog posts without needing a developer for every change.",
        },
      ],
    },
    useCases: {
      title: "Websites we build for Malaysian businesses",
      items: [
        "Corporate websites and company profiles",
        "Landing pages and marketing microsites",
        "SaaS dashboards and web applications",
        "Portfolio and service showcase websites",
      ],
    },
    trust: {
      title: "A development partner, not a template vendor.",
      body:
        "Rumi Solutions writes custom code for every project. No drag-and-drop page builders, no bloated themes — just clean, maintainable code that performs well and scales with your business.",
      points: [
        "Custom design and development for every project",
        "Ongoing support and maintenance available",
        "Transparent timeline and pricing from the start",
      ],
    },
    faqs: [
      {
        question: "What technologies do you use for web development?",
        answer:
          "We primarily build with Next.js, React and TypeScript for modern, fast websites. For simpler projects, we also work with WordPress and other CMS platforms depending on your needs.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A standard business website typically takes 4 to 8 weeks from design to launch. More complex web applications with custom features may take longer depending on scope.",
      },
      {
        question: "Do you provide hosting and maintenance after launch?",
        answer:
          "Yes. We can set up hosting on platforms like Vercel or AWS and offer ongoing maintenance packages for updates, security patches and content changes.",
      },
    ],
    finalCta: {
      title: "Ready to build a website that actually grows your business?",
      body:
        "WhatsApp Rumi Solutions with your project idea and we will get back to you with a free consultation and timeline estimate.",
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
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function getWhatsAppHref(page: LandingPage) {
  const cleanKeyword = page.keyword.replace(/\s*Malaysia\s*/gi, " ").trim();
  const msg =
    page.category === "software"
      ? `Hi Rumi Solutions, I am interested in your ${cleanKeyword} services. I would like to book a demo.`
      : `Hi Rumi Solutions, I am interested in ${cleanKeyword}. I would like to book a demo.`;
  const text = encodeURIComponent(msg);

  return `https://wa.me/${whatsAppNumber}?text=${text}`;
}
