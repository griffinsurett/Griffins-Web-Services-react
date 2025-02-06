// Content.js
import processDynamicContent from "./Utils/DynamicContent/DynamicContentUtils";
import defaultPages from "./DefaultPages";
import { processHomepage } from "./Utils/StaticPages/HomepageUtils";
import { setLogo } from "./Utils/SEO/SetLogo";
import { generateQueries } from "./Queries"; // Import menu generation logic
import { getIcon } from "./Utils/Icons/IconImporter";

const Logo = `${process.env.PUBLIC_URL}/mylogo3d.png`; 
const TestImage = `${process.env.PUBLIC_URL}/meoncomp.jpg`;

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
    sections: ["purpose", "whyChooseUs", "benefits"],
    redirectFrom: ["/about"],
    content: "Your Jersey Shore-based Digital Powerhouse for Website Creation, Digital Marketing, Branding, IT Consulting, and more.",
    description: `Since 2019, the founder of ${siteSettings.siteTitle} has served as the Chief Technology Officer of i-75 CPA Review, providing expert web design, development, hosting, management, branding, and IT consulting. Through innovative strategies and tailored solutions, these efforts have helped the business grow by over 100x, establishing i-75 as a leader in its industry, and I am very much excited to do the same for your business.`,
    purpose: {
      makeObjectSection: true,
      title: "Our Purpose",
      heading: "Mission and Vision",
      description: "Helping businesses scale with digital solutions that work.",
      items: [
        {
          title: "Mission",
          icon: getIcon("fa", "Bullseye"),
          description: "Create impactful online experiences for every client.",
        },
        {
          title: "Vision",
          icon: getIcon("fa", "Eye"),
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
        {
          title: "Industry Expertise",
          icon: getIcon("fa", "Lightbulb"),
          description:
            "Our team stays on top of evolving industry trends to deliver cutting-edge solutions.",
        },
        {
          title: "Collaborative Process",
          icon: getIcon("fa", "Users"),
          description:
            "We partner with you every step of the way to ensure alignment with your vision and goals.",
        }
        
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
    sections: ["contact"],
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
    formFields: [
      { name: "firstName", placeholder: "First Name" },
      { name: "lastName", placeholder: "Last Name" },
      { name: "email", placeholder: "Email" },
      { name: "phone", placeholder: "Phone Number" },
      { name: "subject", placeholder: "Subject" },
      { name: "message", placeholder: "Message" },
    ],
    button: { text: "Submit", link: "#" },
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
    sections: ["services", "benefits", "projects", "testimonials"],
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
      isHeirarchical: true,
      itemsHasPage: true,
      includeCollectionSlug: true,
      itemSections: ["hero", "projects", "services",  "process", "testimonials", "faq"],
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
          heading: "Web Development Services",
          slug: "/web-development",
          description:
            "Custom websites and applications that engage and convert.",
          content: [
            "Elevate your online presence with powerful, user-centric web development solutions tailored to meet your unique goals.",
            "Our Web Development services focus on creating custom websites and applications that both engage and convert. We begin by understanding your brand objectives, target audience, and desired functionality to craft a blueprint for success. From there, our team utilizes cutting-edge technologies and best practices to build fast, secure, and scalable solutions. Whether you need an e-commerce platform, a complex web app, or a simple brochure site, we prioritize seamless user experiences and robust performance. The result is an online presence that not only looks impressive but also drives real business impact."
          ],
          relations: [
            { collection: "projects", value: "/marketing-site-redesign" },
            { collection: "faq", value: 2 },
          ],
          process: {
            makeObjectSection: true,
            title: "Our Process",
            heading: "How We Build Your Website",
            items: [
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
        {
          icon: getIcon("fa", "Fill"),
          title: "Web Design",
          heading: "Web Design Services",
          slug: "/web-design",
          description:
            "Modern, responsive websites that captivate your audience.",
          content: [
            "Make a memorable first impression with eye-catching web designs that convey professionalism and authenticity.",
            "Our Web Design services revolve around building modern, responsive, and visually captivating digital experiences that resonate with your target audience. From conceptual wireframes to refined layouts, each design element is meticulously crafted to align with your brand identity and aesthetic goals. By focusing on user-friendly navigation, intuitive interfaces, and adaptive responsiveness, we ensure your site looks just as stunning on mobile devices as it does on desktops. Beyond aesthetics, our designs are strategically engineered to optimize user flow, boost engagement, and encourage conversions—turning casual visitors into loyal customers."
          ],
          relations: [
            { collection: "projects", value: "/marketing-site-redesign" },
            { collection: "faq", value: 2 },
          ],
        },
        {
          icon: getIcon("fa", "Search"),
          title: "SEO",
          heading: "Search Engine Optimization",
          slug: "/seo",
          description:
            "Improve your rankings and get found by more potential customers.",
          content: [
            "Reach more potential customers by optimizing your site for search engines and driving organic growth.",
            "Our Search Engine Optimization services go beyond keyword stuffing and link building to offer a holistic approach that boosts your online visibility. We begin by performing thorough site audits and analyzing competitor strategies to identify opportunities for improvement. Then, we refine on-page elements—like meta tags, site structure, and content quality—and develop a robust off-page strategy that encourages high-value backlinks. Throughout the process, we monitor performance metrics, making data-driven adjustments to ensure consistent gains. Ultimately, our goal is to secure higher rankings, attract more traffic, and convert searchers into long-term customers."
          ],
          relations: [],
        },
        {
          icon: getIcon("fa", "SquarePollVertical"),
          title: "Digital Marketing",
          slug: "/digital-marketing",
          parentItem: "/web-design",
          description:
            "Drive targeted traffic and conversions through strategic online campaigns.",
          content: [
            "Drive targeted traffic to your online channels through strategic digital marketing campaigns that deliver measurable results.",
            "Our Digital Marketing services encompass everything you need to expand your brand’s reach and sharpen your competitive edge. From paid advertising and social media marketing to content creation and influencer partnerships, we custom-tailor campaigns to align with your brand voice and target audience. We utilize in-depth market research, performance analytics, and iterative testing to fine-tune each campaign, making sure your marketing spend is effective and efficient. By striking the perfect balance between creativity and data-driven insights, we help you capture new leads, nurture existing customer relationships, and ultimately fuel sustained growth for your business."
          ],
        },
        {
          icon: getIcon("fa", "Envelope"),
          title: "Email Marketing",
          heading: "Email Marketing Services",
          slug: "/email-marketing",
          parentItem: "/web-design",
          description:
            "Engage with your audience through personalized email campaigns.",
          content: [
            "Nurture customer relationships and drive sales with personalized, data-driven email marketing strategies.",
            "Our Email Marketing services provide a powerful way to stay connected with your audience while driving conversions. We take a personalized approach by segmenting your subscriber base and creating tailored messages that resonate with each group’s interests, pain points, and behaviors. Beyond the content itself, we optimize send times, subject lines, and layouts to boost open rates and click-throughs. By closely monitoring results and refining campaigns, we ensure that each email not only reaches inboxes but prompts meaningful engagement. Ultimately, effective email marketing can bolster brand loyalty, increase repeat purchases, and keep you top of mind with your subscribers."
          ],
        },
        {
          icon: getIcon("fa", "Cloud"),
          title: "Hosting & Maintenance",
          heading: "Hosting & Maintenance Services",
          slug: "/hosting-maintenance",
          parentItem: "/seo",
          description:
            "Keep your site secure, fast, and up to date with our reliable hosting solutions.",
          content: [
            "Secure and optimize your online infrastructure with dependable hosting and maintenance that keeps your site performing at its best.",
            "Our Hosting & Maintenance services are designed to offer peace of mind by ensuring your website remains fast, secure, and up to date. We handle everything from server optimization and regular backups to software updates and ongoing security checks. By proactively monitoring uptime and performance, we can swiftly address any issues before they affect your visitors. This comprehensive approach not only shields your online presence from vulnerabilities but also maintains the integrity and functionality of your site. With consistent, reliable hosting and maintenance, you can focus on growing your business while we take care of the technical details."
          ],
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
    sections: ["projects", "services", "testimonials"],
    addToQuery: [{ name: "Primary" }],
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
    heading: "Success Stories",
    title: "Testimonials",
    description:
      "Read feedback from our clients and learn how Griffins Web Services has helped them succeed online.",
    hasPage: true,
    featuredImage: TestImage,
    addToQuery: [{ name: "Primary" }],
    slug: "/testimonials",
    sections: ["testimonials"],
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
    sections: ["faq"],
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
    "whyChooseUs",
    "projects",
    "testimonials",
    "faq",
    "contact",
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
