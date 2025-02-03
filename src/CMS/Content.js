// Content.js
import processDynamicContent from "./Utils/DynamicContent/DynamicContentUtils";
import defaultPages from "./DefaultPages";
import { processHomepage } from "./Utils/StaticPages/HomepageUtils";
import { setLogo } from "./Utils/SEO/SetLogo";
import { generateQueries } from "./Queries"; // Import menu generation logic
import { getIcon } from "./Utils/Icons/IconImporter";

const Logo = `${process.env.PUBLIC_URL}/gwservices-logo.png`; 
const TestImage = `${process.env.PUBLIC_URL}/gwservices-default-image.png`;

/**
 * -----------------------------------------------------------------------------
 * Site Settings
 * -----------------------------------------------------------------------------
 */
const siteSettings = {
  siteTitle: "Griffins Web Services",
  siteTagline: "Empowering Your Digital Presence",
  siteDescription:
    "At Griffins Web Services, we create stunning websites and provide top-notch digital marketing solutions to help your business flourish online.",
  siteLogo: Logo,
  siteCompany: "Griffins Web Services",
  businessOwner: "Jane Griffin",
  ownerDateOfBirth: "1990-01-01",
  BusinessName: "Griffins Web Services LLC",
  CTAButton: "Start Project",
  CTALink: "/contact-us",

  get Copyright() {
    const currentYear = new Date().getFullYear();
    return `Copyright © ${currentYear} ${this.BusinessName}`;
  },
  get ownerAge() {
    const today = new Date();
    const birthDate = new Date(this.ownerDateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
    return age;
  },
  keywords: [
    "web design",
    "digital marketing",
    "SEO services",
    "website development",
    "Griffins Web Services",
    "responsive web design",
    "ecommerce solutions",
    "social media marketing",
    "email marketing",
    "online branding",
  ],
};

/**
 * -----------------------------------------------------------------------------
 * Collections
 * -----------------------------------------------------------------------------
 */
const collections = [
  /**
   * ------------------------------
   * About
   * ------------------------------
   */
  {
    id: 1,
    collection: "about",
    heading: "Meet Griffins Web Services",
    title: "About Us",
    featuredImage: TestImage,
    addToQuery: [
      { name: "Primary", parentQueryItem: null, queryItemText: "title" },
    ],
    hasPage: true,
    slug: "/about-us",
    sections: ["hero", "purpose", "whyChooseUs", "aboutInfo", "benefits"],
    redirectFrom: ["/about"],
    description:
      "Discover how Griffins Web Services combines creativity, technology, and marketing expertise to bring your online vision to life.",
    purpose: {
      makeObjectSection: true,
      title: "Our Purpose",
      heading: "Mission and Vision",
      description: "Helping businesses scale with digital solutions that work.",
      items: [
        {
          title: "Mission",
          description: "Create impactful online experiences for every client.",
        },
        {
          title: "Vision",
          description: "Become the go-to partner for all things digital.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      heading: `Why Choose ${siteSettings.siteTitle}?`,
      makeObjectSection: true,
      items: [
        {
          title: "Results-Driven",
          icon: getIcon("fa", "ChartLine"),
          description:
            "We focus on delivering measurable growth for your business.",
        },
        {
          title: "Personalized Approach",
          icon: getIcon("fa", "HandsHelping"),
          description:
            "We tailor solutions to your unique goals, audience, and budget.",
        },
      ],
    },
    keywords: [
      "about Griffins Web Services",
      "digital agency",
      "web design expertise",
      "marketing consultants",
      "trustworthy digital services",
    ],
    benefits: {
      makeObjectSection: true,
      title: "Benefits",
      heading: "What We Offer",
      items: [
        {
          title: "Transparent Pricing",
          icon: getIcon("fa", "DollarSign"),
          description: "No hidden fees—clear and fair pricing from the start.",
        },
        {
          title: "Dedicated Support",
          icon: getIcon("fa", "Headset"),
          description: "We’re here to answer questions and provide assistance.",
        },
      ],
    },
    aboutInfo: {
      makeObjectSection: true,
      title: "About Griffins Web Services in Detail",
      heading: "Who We Are",
      items: [
        {
          title: "Our Background",
          heading: "Founded by passionate marketers and developers...",
          description:
            "Griffins Web Services emerged in 2020 to provide clients with cutting-edge digital solutions and unparalleled customer care.",
        },
        {
          title: "What We Do",
          description:
            "From full-stack development to SEO, we provide end-to-end services that help you thrive online.",
        },
      ],
    },
  },

  /**
   * ------------------------------
   * Contact
   * ------------------------------
   */
  {
    id: 10,
    collection: "contact",
    heading: "Let’s Work Together",
    title: "Contact Us",
    featuredImage: TestImage,
    description: `Have questions about ${siteSettings.siteTitle}? We’re here to help.`,
    hasPage: true,
    slug: "/contact-us",
    addToQuery: [{ name: "Primary", parentQueryItem: null }],
    sections: ["hero", "contact"],
    redirectFrom: ["/contact"],
    contactInfo: [
      {
        icon: getIcon("fa", "Phone"),
        label: "Phone",
        value: "(732) 939-1309",
        get href() {
          return `tel:${this.value.replace(/\D/g, "")}`;
        },
      },
      {
        icon: getIcon("fa", "Envelope"),
        label: "Email",
        value: "griffin@griffinswebservices.com",
        get href() {
          return `mailto:${this.value}`;
        },
      },
    ],
    socialMedia: [
      {
        platform: "Facebook",
        href: "https://facebook.com/griffinswebservices",
        icon: getIcon("fab", "Facebook"),
      },
      {
        platform: "X",
        href: "https://twitter.com/griffinswebservices",
        icon: getIcon("fab", "XTwitter"),
      },
      {
        platform: "LinkedIn",
        href: "https://linkedin.com/company/griffins-web-services",
        icon: getIcon("fab", "Linkedin"),
      },
      {
        platform: "Instagram",
        href: "https://instagram.com/griffinswebservices",
        icon: getIcon("fab", "Instagram"),
      },
    ],
  },

  /**
   * ------------------------------
   * Services
   * ------------------------------
   */
  {
    id: 3,
    collection: "services",
    heading: "How We Help",
    title: "Services",
    description:
      "Explore our wide range of services designed to enhance your online presence and drive business growth.",
    featuredImage: TestImage,
    hasPage: true,
    slug: "/services",
    onlyParentsOnCollection: false,
    redirectFrom: ["/service"],
    sections: ["hero", "services", "benefits", "projects", "testimonials"],
    addToQuery: [
      {
        name: "Primary",
        parentQueryItem: null,
        queryItemText: "title",
        addItemsToQuery: true,
        setChildrenUnderParents: false,
        excludeCollection: false,
      },
    ],
    items: {
      isHeirarchical: false,
      itemsHasPage: true,
      includeCollectionSlug: false,
      itemSections: ["hero", "projects", "services", "testimonials", "faq"],
      onlyParentItemsHasPage: false,
      description:
        "We provide customized digital services to meet your specific goals.",
      keywords: [
        "web design services",
        "digital marketing solutions",
        "SEO experts",
        "online branding",
      ],
      data: [
        {
          icon: getIcon("fa", "LaptopCode"),
          title: "Web Development",
          slug: "/web-development",
          description:
            "Custom websites and applications that engage and convert.",
          sections: ["hero", "services", "projects", "testimonials", "faq"],
          relations: [
            { collection: "projects", value: "/marketing-site-redesign" },
            { collection: "faq", value: 2 },
          ],
        },
        {
          icon: getIcon("fa", "LaptopCode"),
          title: "Web Design",
          slug: "/web-design",
          description:
            "Modern, responsive websites that captivate your audience.",
          sections: ["hero", "services", "projects", "testimonials", "faq"],
          relations: [
            { collection: "projects", value: "/marketing-site-redesign" },
            { collection: "faq", value: 2 },
          ],
        },
        {
          icon: getIcon("fa", "Search"),
          title: "SEO",
          slug: "/seo",
          description:
            "Improve your rankings and get found by more potential customers.",
          sections: ["hero", "services", "projects", "testimonials", "faq"],
          relations: [],
        },
        {
          icon: getIcon("fa", "ChartLine"),
          title: "Digital Marketing",
          slug: "/digital-marketing",
          parentItem: "/web-design",
          description:
            "Drive targeted traffic and conversions through strategic online campaigns.",
        },
        {
          icon: getIcon("fa", "Envelope"),
          title: "Email Marketing",
          slug: "/email-marketing",
          parentItem: "/web-design",
          description:
            "Engage with your audience through personalized email campaigns.",
        },
        {
          icon: getIcon("fa", "Cloud"),
          title: "Hosting & Maintenance",
          slug: "/hosting-maintenance",
          parentItem: "/seo",
          description:
            "Keep your site secure, fast, and up to date with our reliable hosting solutions.",
        },
      ],
    },
  },

  /**
   * ------------------------------
   * Projects (Portfolio)
   * ------------------------------
   */
  {
    id: 4,
    collection: "projects",
    heading: "Our Portfolio",
    title: "Projects",
    description:
      "Check out a few of our recent projects and discover how we’ve helped businesses transform their online presence.",
    featuredImage: TestImage,
    hasPage: true,
    slug: "/projects",
    sections: ["hero", "projects", "services", "testimonials"],
    addToQuery: [{ name: "Primary", parentQueryItem: "/about-us" }],
    items: {
      itemsHasPage: true,
      itemSections: ["hero", "projects", "services", "testimonials"],
      data: [
        {
          id: 1,
          title: "Corporate Marketing Site Redesign",
          description:
            "Revamped an existing corporate website to boost conversions and brand credibility.",
          slug: "/marketing-site-redesign",
          featuredImage: TestImage,
          relations: [{ collection: "testimonials", value: 1 }],
        },
        {
          id: 2,
          title: "Ecommerce Startup Launch",
          description:
            "Built a fully responsive ecommerce store for a new startup, integrating a secure payment gateway.",
          slug: "/ecommerce-startup-launch",
          featuredImage: TestImage,
          relations: [{ collection: "testimonials", value: 1 }],
        },
      ],
    },
  },

  /**
   * ------------------------------
   * Testimonials
   * ------------------------------
   */
  {
    id: 5,
    collection: "testimonials",
    heading: "What Our Clients Say",
    title: "Testimonials",
    description:
      "Read feedback from our clients and learn how Griffins Web Services has helped them succeed online.",
    hasPage: true,
    featuredImage: TestImage,
    addToQuery: [{ name: "Primary", parentQueryItem: "/about-us" }],
    slug: "/testimonials",
    sections: ["hero", "testimonials"],
    items: {
      data: [
        {
          name: "John Doe",
          quote:
            "Our new website looks fantastic, and our traffic has nearly doubled. Griffins Web Services is the real deal!",
          position: "Marketing Manager, TechCorp",
          featuredImage: TestImage,
        },
        {
          name: "Sarah Lee",
          quote:
            "They helped me launch my ecommerce store quickly and efficiently. Couldn’t be happier with the results!",
          position: "Founder, FreshFashion",
          featuredImage: TestImage,
        },
      ],
    },
  },

  /**
   * ------------------------------
   * FAQ
   * ------------------------------
   */
  {
    id: 6,
    collection: "faq",
    heading: "Frequently Asked Questions",
    title: "FAQ",
    description:
      "Find quick answers to common queries about Griffins Web Services and our solutions.",
    hasPage: true,
    featuredImage: TestImage,
    addToQuery: [{ name: "Primary", parentQueryItem: "/about-us" }],
    slug: "/faq",
    sections: ["hero", "faq"],
    redirectFrom: ["/questions"],
    items: {
      data: [
        {
          title: "What services do you offer?",
          description:
            "We cover every aspect of digital marketing and web development—from design and SEO to hosting and maintenance.",
        },
        {
          title: "How long have you been operating?",
          description:
            "Griffins Web Services has been supporting clients with quality digital solutions since 2020.",
        },
        {
          title: "Do you work with small businesses and startups?",
          description:
            "Absolutely! We tailor solutions for businesses of all sizes and stages, ensuring the best fit for your budget and goals.",
        },
        {
          title: "Are your websites mobile-friendly?",
          description:
            "Yes. All our websites are fully responsive and tested across multiple devices for a seamless user experience.",
        },
        {
          title: "How can I request a quote?",
          description:
            "Simply fill out our contact form or give us a call, and we’ll get back to you with a detailed proposal.",
        },
      ],
    },
  },

  /**
   * ------------------------------
   * Process
   * ------------------------------
   */
  {
    id: 7,
    collection: "process",
    heading: "How We Work",
    title: "Process",
    featuredImage: TestImage,
    hasPage: true,
    slug: "/process",
    sections: ["hero", "process", "contact"],
    addToQuery: [
      {
        name: "Primary",
        parentQueryItem: null,
        queryItemText: "title",
      },
    ],
    description:
      "See our streamlined approach to taking your project from concept to completion—on time and on budget.",
    items: {
      data: [
        {
          id: 1,
          name: "Discovery & Planning",
          description:
            "We learn your objectives, target audience, and design preferences to map out a clear project plan.",
          featuredImage: TestImage,
        },
        {
          id: 2,
          name: "Design & Development",
          description:
            "We create wireframes and mockups, then transform them into a fully functional website or digital solution.",
          featuredImage: TestImage,
        },
        {
          id: 3,
          name: "Testing & Optimization",
          description:
            "We rigorously test performance, usability, and SEO to ensure top-tier quality before launch.",
          featuredImage: TestImage,
        },
        {
          id: 4,
          name: "Launch & Support",
          description:
            "We deploy your new site or campaign, then provide ongoing support to keep things running smoothly.",
          featuredImage: TestImage,
        },
      ],
    },
  },
];

/**
 * -----------------------------------------------------------------------------
 * Homepage Override
 * -----------------------------------------------------------------------------
 * Here you can customize how your homepage differs from other static pages.
 */
const homepageOverride = {
  title: `${siteSettings.siteTagline}`,
  description: `${siteSettings.siteDescription}`,
  featuredImage: TestImage,
  sections: [
    "hero",
    "services",
    "about",
    "process",
    "benefits",
    "whyChooseUs",
    "projects",
    "testimonials",
    "contact",
    "faq",
  ],
};

/**
 * -----------------------------------------------------------------------------
 * Process Pages & Collections
 * -----------------------------------------------------------------------------
 */
const pages = processHomepage(defaultPages, homepageOverride);
const { processedCollections, processedPages } = processDynamicContent({
  pages,
  collections,
});

/**
 * -----------------------------------------------------------------------------
 * Optionally Add Relationships via RelationalUtil (example commented out)
 * -----------------------------------------------------------------------------
 *
 * // import RelationalUtil from "./Utils/DynamicContent/RelationalUtil";
 * // const relationalUtil = new RelationalUtil({ collections: processedCollections });
 * // relationalUtil.relate("services", "/web-design", "projects", "/marketing-site-redesign");
 * // relationalUtil.relate("projects", "/marketing-site-redesign", "testimonials", "/john-doe");
 * // etc.
 */

/**
 * -----------------------------------------------------------------------------
 * Set Site Logo
 * -----------------------------------------------------------------------------
 */
setLogo(siteSettings.siteLogo);

/**
 * -----------------------------------------------------------------------------
 * Final Export
 * -----------------------------------------------------------------------------
 */
const Content = {
  siteSettings,
  collections: processedCollections,
  pages: processedPages,
  queries: generateQueries(processedCollections, siteSettings),
};

export default Content;
