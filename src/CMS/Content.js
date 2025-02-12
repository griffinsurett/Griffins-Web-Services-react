// Content.js
import processDynamicContent from "./Utils/DynamicContent/DynamicContentUtils";
import defaultPages from "./DefaultPages";
import { processHomepage } from "./Utils/StaticPages/HomepageUtils";
import { setLogo } from "./Utils/SEO/SetLogo";
import { generateQueries } from "./Queries"; // Import menu generation logic
import { getIcon } from "./Utils/Icons/IconImporter";

const Logo = `${process.env.PUBLIC_URL}/mylogo3d.png`;
const TestImage = `${process.env.PUBLIC_URL}/meoncomp.jpg`;
const pricingLink = "https://calendly.com/griffinswebservices/30min";

/**
 * -----------------------------------------------------------------------------
 * Site Settings
 * -----------------------------------------------------------------------------
 */
const siteSettings = {
  siteTitle: "Griffins Web Services",
  siteTagline: "Websites and All Things Digital",
  siteDescription:
    "At Griffins Web Services, we create stunning websites and provide top-notch digital marketing solutions to help your business flourish online.",
  siteLogo: Logo,
  siteCompany: "Griffins Web Services",
  businessOwner: "Griffin Surett",
  ownerDateOfBirth: "2000-02-03",
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
    sections: ["about", "purpose", "whyChooseUs", "benefits"],
    redirectFrom: ["/about"],
    content:
      "Your Jersey Shore-based Digital Powerhouse for Website Creation, Digital Marketing, Branding, IT Consulting, and more.",
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
          title: "Collaborative Process",
          icon: getIcon("fa", "Users"),
          description:
            "We partner with you every step of the way to ensure alignment with your vision and goals.",
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
        icon: getIcon("fa", "Facebook"),
      },
      {
        platform: "LinkedIn",
        href: "https://linkedin.com/in/griffin-surett",
        icon: getIcon("fa", "Linkedin"),
      },
      {
        platform: "Instagram",
        href: "https://instagram.com/griffinswebservices",
        icon: getIcon("fa", "Instagram"),
      },
    ],
     form: {
    method: "POST",
    action: "https://formspree.io/f/mjkgojyo",
    button: {
      text: "Submit",
      class: "p-large" // or any styling class
    },
    formFields: [
      { component: "input", name: "firstName", placeholder: "First Name" },
      { component: "input", name: "lastName", placeholder: "Last Name" },
      { component: "input", name: "email", placeholder: "Email" },
      { component: "input", name: "phone", placeholder: "Phone Number" },
      { component: "input", name: "subject", placeholder: "Subject" },
      { component: "textarea", name: "message", placeholder: "Message" },
    ]
  },
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
    sections: ["services", "projects", "testimonials", "about", "faq"],
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
      itemSections: [
        "hero",
        // "pricing",
        "process",
        "platforms",
        "projects",
        "testimonials",
        "faq",
        "cta",
      ],
      onlyParentItemsHasPage: false,
      description:
        "We provide customized digital services to meet your specific goals.",
      keywords: [
        "web design and development",
        "digital marketing solutions",
        "AI and automation",
        "technology consulting",
        "digital product development",
      ],
      data: [
        {
          icon: getIcon("fa", "LaptopCode"),
          title: "Web Design & Development",
          heading: "Web Design & Development Services",
          slug: "/web-design-development",
          description:
            "Modern, responsive, high-performing websites and applications tailored to your needs.",
          content: [
            "Create a stunning, high-performing online presence with our Web Design & Development services.",
            "We offer a comprehensive approach to building websites that are both visually captivating and technically robust. Our process begins with understanding your brand identity, target audience, and functional requirements. We then design intuitive, responsive layouts that enhance user experience while incorporating modern design principles. Once the design is finalized, we develop custom, scalable, and high-performance web solutions using the latest technologies.",
            "Whether you need a corporate site, an e-commerce platform, or a complex web application, we prioritize usability, speed, security, and seamless functionality. From wireframes to full-stack development, we ensure your website not only looks great but also delivers measurable business impact.",
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
                  "We collaborate to define your goals, audience, and brand identity.",
              },
              {
                id: 2,
                name: "Design & Development",
                description:
                  "We create wireframes, mockups, and develop your site using the latest technologies.",
              },
              {
                id: 3,
                name: "Testing & Optimization",
                description:
                  "We test for performance, responsiveness, and user experience.",
              },
              {
                id: 4,
                name: "Launch & Maintenance",
                description:
                  "We launch your site and provide ongoing support and updates.",
              },
            ],
          },
          cta: {
            heading: "Ready to take your website to the next level?",
            description: "Schedule a free 30-minute consultation to discuss your project.",
            buttonText: "Schedule a Call",
          },
          pricing: [
            {
              title: "Basic Website",
              description:
                "A simple, professional website to establish your online presence.",
              price: "$500",
              paymentType: "one-time",
              bulletPoints: [
                "Up to 5 pages",
                "Responsive design",
                "Basic SEO setup",
                "Contact form",
              ],
              buttonText: "Get Started",
              buttonLink: pricingLink,
              isFeatured: false,
            },
            {
              title: "Business Website",
              description:
                "A comprehensive website with advanced features to grow your business.",
              price: "$1000",
              paymentType: "one-time",
              bulletPoints: [
                "Up to 10 pages",
                "Custom design",
                "SEO optimization",
                "Contact form",
              ],
              buttonText: "Get Started",
              buttonLink: pricingLink,
              isFeatured: true,
            },
            {
              title: "E-Commerce Site",
              description:
                "A fully functional online store to sell your products and services.",
              price: "$1500",
              paymentType: "one-time",
              bulletPoints: [
                "Unlimited products",
                "Custom design",
                "Payment gateways",
                "SEO optimization",
              ],
              buttonText: "Get Started",
              buttonLink: pricingLink,
              isFeatured: true,
            },
            {
              title: "Custom Web App",
              description:
                "A tailored web application to meet your unique business needs.",
              price: "Custom",
              bulletPoints: [
                "Custom features",
                "Scalable architecture",
                "API integrations",
                "Maintenance plan",
              ],
              buttonText: "Get Started",
              buttonLink: pricingLink,
              isFeatured: false,
            },
          ],   
        },
        {
          icon: getIcon("fa", "Cloud"),
          title: "Hosting & Maintenance",
          heading: "Hosting & Maintenance Services",
          slug: "/hosting-maintenance",
          description:
            "Keep your site secure, fast, and up to date with our reliable hosting solutions.",
            cta: {
              heading: "Secure & Reliable Hosting",
              description:
                "Experience uninterrupted performance with our hosting and maintenance services.",
              buttonText: "Learn More",
            },
            content: [
            "Secure and optimize your online infrastructure with dependable hosting and maintenance that keeps your site performing at its best.",
            "Our Hosting & Maintenance services are designed to offer peace of mind by ensuring your website remains fast, secure, and up to date. We handle everything from server optimization and regular backups to software updates and ongoing security checks. By proactively monitoring uptime and performance, we can swiftly address any issues before they affect your visitors. This comprehensive approach not only shields your online presence from vulnerabilities but also maintains the integrity and functionality of your site. With consistent, reliable hosting and maintenance, you can focus on growing your business while we take care of the technical details.",
          ],
        },
        {
          icon: getIcon("fa", "Robot"),
          title: "AI & Automation",
          heading: "AI & Automation Solutions",
          slug: "/ai-automation",
          description:
            "Streamline operations and enhance efficiency with AI-driven automation.",
          content: [
            "Harness the power of artificial intelligence and automation to optimize workflows, reduce costs, and improve efficiency.",
            "Our AI & Automation solutions help businesses integrate machine learning and intelligent automation into their operations. From AI-powered chatbots and customer service automation to process optimization and predictive analytics, we implement cutting-edge technologies to streamline workflows and enhance productivity. Our team works closely with you to understand your business objectives, identify automation opportunities, and deploy AI solutions that drive measurable results. Whether you're looking to enhance customer interactions, optimize repetitive tasks, or gain insights through data-driven decision-making, we empower you to stay ahead of the curve in a digital-first world.",
          ],
          cta: {
            heading: "Automate Your Business",
            description:
              "Leverage cutting-edge AI solutions to boost efficiency and drive innovation.",
            buttonText: "Get Started",
          }
        },
        {
          icon: getIcon("fa", "ChartLine"),
          title: "Digital Marketing",
          slug: "/digital-marketing",
          description:
            "Drive targeted traffic and conversions through strategic online campaigns.",
          content: [
            "Drive targeted traffic to your online channels through strategic digital marketing campaigns that deliver measurable results.",
            "Our Digital Marketing services encompass everything you need to expand your brand’s reach and sharpen your competitive edge. From paid advertising and social media marketing to content creation and influencer partnerships, we custom-tailor campaigns to align with your brand voice and target audience. We utilize in-depth market research, performance analytics, and iterative testing to fine-tune each campaign, making sure your marketing spend is effective and efficient. By striking the perfect balance between creativity and data-driven insights, we help you capture new leads, nurture existing customer relationships, and ultimately fuel sustained growth for your business.",
          ],
          cta: {
            heading: "Innovate with Expert Guidance",
            description:
              "Partner with us for tailored technology consulting solutions that align with your business goals.",
            buttonText: "Learn More",
        },
        },
        {
          icon: getIcon("fa", "Laptop"),
          title: "Technology Consulting",
          heading: "Technology Consulting Services",
          slug: "/technology-consulting",
          description:
            "Expert technology guidance to help your business scale and innovate.",
          content: [
            "Gain strategic insights and expert guidance on implementing technology solutions that align with your business goals.",
            "Our Technology Consulting services provide businesses with the expertise needed to navigate the ever-changing digital landscape. Whether you're planning a digital transformation, optimizing IT infrastructure, or exploring new technologies, we offer actionable recommendations to help you maximize efficiency and drive growth. Our consultants specialize in cloud computing, cybersecurity, software development strategies, and IT architecture, ensuring that your tech stack supports your long-term objectives. By leveraging industry best practices and emerging trends, we empower businesses to make informed technology decisions that deliver lasting impact.",
          ],
          cta: {
            heading: "Innovate with Expert Guidance",
            description:
              "Partner with us for tailored technology consulting solutions that align with your business goals.",
            buttonText: "Learn More",
},
        },
        {
          icon: getIcon("fa", "Headphones"),
          title: "Digital Product Development",
          heading: "Digital Product Development Services",
          slug: "/digital-product-development",
          description:
            "Build, launch, and monetize digital products with ease. (Audiobooks, Courses, Music, etc.)",
          content: [
            "Monetize your expertise and creativity with our Digital Product Development services.",
            "We help creators turn their content into engaging and scalable digital products. Whether you want to launch an online course, convert a book into an audiobook, or distribute music on major platforms, we provide end-to-end support. From content structuring and production to platform setup and marketing, we ensure your digital product reaches the right audience and generates revenue.",
            "With our expertise in digital ecosystems, we streamline the process, allowing you to focus on what you do best—creating great content.",
          ],
          process: {
            makeObjectSection: true,
            title: "Our Process",
            heading: "How We Develop Your Digital Product",
            items: [
              {
                id: 1,
                name: "Concept & Planning",
                description:
                  "We collaborate to define your product's goals, audience, and content strategy.",
                featuredImage: TestImage,
              },
              {
                id: 2,
                name: "Content Production",
                description:
                  "We create, format, and refine your content—whether it's audio, video, or structured learning material.",
                featuredImage: TestImage,
              },
              {
                id: 3,
                name: "Platform Integration",
                description:
                  "We set up distribution on platforms like Udemy, Audible, Spotify, or custom sites.",
                featuredImage: TestImage,
              },
              {
                id: 4,
                name: "Optimization & Marketing",
                description:
                  "We fine-tune SEO, metadata, and promotional strategies to maximize visibility and sales.",
                featuredImage: TestImage,
              },
              {
                id: 5,
                name: "Launch & Monetization",
                description:
                  "We ensure a successful launch and provide ongoing support to optimize performance.",
                featuredImage: TestImage,
              },
            ],
          },
          cta: {
            heading: "Launch Your Digital Product",
            description:
              "Transform your content into a scalable digital product that resonates with your audience.",
            buttonText: "Get Started",
          },
        },
      ],
    },
  },

  /**
   * ------------------------------
   * Companies (Our Clients)
   * ------------------------------
   */
  {
    id: 7,
    collection: "companies",
    heading: "Companies We Work With",
    title: "Our Partners",
    featuredImage: TestImage,
    hasPage: false, // This collection does not have a dedicated page
    // Optional: You can define a slug even if hasPage is false; it will simply not generate a page.
    slug: "/companies",
    items: {
      itemsHasPage: false, // The items will not generate individual pages
      includeCollectionSlug: false, // No need to include the collection slug for items
      data: [
        {
          id: 1,
          title: "i-75 CPA Review",
          description: "Trusted partner in financial education and consulting.",
          relations: [
            {
              collection: "projects",
              value: 1,
            },
            {
              collection: "testimonials",
              value: 2,
            },
          ],
        },
        {
          id: 2,
          title: "Faria's Demolition",
          description:
            "Quality demolition services for commercial and residential projects.",
          relations: [
            {
              collection: "projects",
              value: 2,
            },
            {
              collection: "testimonials",
              value: 1,
            },
          ],
        },
        {
          id: 3,
          title: "Certified Bag Chasers",
          description: "Personal branding for the modern entrepreneur.",
          relations: [
            {
              collection: "projects",
              value: 4,
            },
            {
              collection: "testimonials",
              value: 3,
            },
          ],
        },
        {
          id: 4,
          title: "Koi Roofing and Solar",
          description: "Innovative roofing and solar solutions.",
          relations: [
            {
              collection: "projects",
              value: 3,
            },
            {
              collection: "testimonials",
              value: 4,
            },
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
      itemSections: ["hero",  "platforms", "services", "testimonials", "cta"],
      data: [
        {
          id: 1,
          title: "i-75 CPA Review",
          description:
            "Developed multiple e-commerce sites with landing pages, branding, and digital marketing solutions.",
          featuredImage: `${process.env.PUBLIC_URL}/i75CPAmockup.png`,
          link: "https://i75cpareview.com/",
          image: `${process.env.PUBLIC_URL}/i75CPAmockup.png`,
          content: [
            "For i-75 CPA Review, we built a robust e-commerce platform featuring responsive landing pages, intuitive navigation, and a design that reinforces trust in financial education.",
            "We also implemented targeted branding and digital marketing strategies that boosted the company’s online presence and conversions.",
          ],
          relations: [
            {
              collection: "services",
              value: "web-design-development",
            },
            {
              collection: "services",
              value: "digital-marketing",
            },
            {
              collection: "services",
              value: "technology-consulting",
            },
            {
              collection: "services",
              value: "digital-product-development",
            },
            {
              collection: "services",
              value: "ai-automation",
            },
            {
              collection: "services",
              value: "hosting-maintenance",
            },
            {
              collection: "platforms",
              value: "html",
            },
            {
              collection: "platforms",
              value: "css",
            },
            {
              collection: "platforms",
              value: "javascript",
            },
            {
              collection: "platforms",
              value: "wordpress",
            },
            {
              collection: "platforms",
              value: "sql",
            },
            {
              collection: "platforms",
              value: "adobephotoshop",
            },
            {
              collection: "platforms",
              value: "adobeillustrator",
            },
            {
              collection: "platforms",
              value: "adobepremierepro",
            },
            {
              collection: "platforms",
              value: "canva",
            },
            {
              collection: "platforms",
              value: "mailchimp",
            },
            {
              collection: "platforms",
              value: "googleanalytics",
            },
            {
              collection: "platforms",
              value: "facebookads",
            },
            {
              collection: "platforms",
              value: "thinkific",
            },
            {
              collection: "platforms",
              value: "kinsta",
            },
          ],
          cta: {
            heading: "Ready to take your website to the next level?",
            description: "Schedule a free 30-minute consultation to discuss your project.",
            buttonText: "Schedule a Call",
          },
        },
        {
          id: 2,
          title: "Faria's Demolition",
          description:
            "Created a comprehensive website showcasing demolition services, including project galleries and contact forms.",
          featuredImage: `${process.env.PUBLIC_URL}/fariassiteproject.jpg`,
          link: "https://fariasdemolition.com/",
          image: `${process.env.PUBLIC_URL}/fariassiteproject.jpg`,
          content: [
            "For Faria's Demolition, we developed a website that effectively showcased their services through engaging galleries and clear service information.",
            "The site was optimized for user experience and conversion, ensuring that prospective clients can easily request estimates or contact the company.",
          ],
          relations: [
            {
              collection: "services",
              value: "web-design-development",
            },
            {
              collection: "services",
              value: "technology-consulting",
            },
            {
              collection: "services",
              value: "hosting-maintenance",
            },
            {
              collection: "platforms",
              value: "html",
            },
            {
              collection: "platforms",
              value: "css",
            },
            {
              collection: "platforms",
              value: "javascript",
            },
            {
              collection: "platforms",
              value: "wordpress",
            },
            {
              collection: "platforms",
              value: "sql",
            },
            {
              collection: "platforms",
              value: "adobephotoshop",
            },
            {
              collection: "platforms",
              value: "adobeillustrator",
            },
            {
              collection: "platforms",
              value: "canva",
            },
            {
              collection: "platforms",
              value: "kinsta",
            },
          ],
          cta: {
            heading: "Ready to take your website to the next level?",
            description: "Schedule a free 30-minute consultation to discuss your project.",
            buttonText: "Schedule a Call",
          },
        },
        {
          id: 3,
          title: "Koi Roofing and Solar",
          description:
            "Designed a clean, informative site to promote solar solutions, emphasizing brand trust and environmental impact.",
          featuredImage: `${process.env.PUBLIC_URL}/Koisolarmockup.png`,
          link: "https://koisolarofficial.com/",
          image: `${process.env.PUBLIC_URL}/Koisolarmockup.png`,
          content: [
            "For Koi Roofing and Solar, we crafted a modern, mobile-friendly website that highlighted their solar and roofing services with a focus on transparency and sustainability.",
            "Our approach combined clean design with strong call-to-action elements and SEO best practices to drive quality traffic.",
          ],
          relations: [
            {
              collection: "services",
              value: "web-design-development",
            },
            {
              collection: "services",
              value: "technology-consulting",
            },
            {
              collection: "services",
              value: "hosting-maintenance",
            },
            {
              collection: "platforms",
              value: "html",
            },
            {
              collection: "platforms",
              value: "css",
            },
            {
              collection: "platforms",
              value: "javascript",
            },
            {
              collection: "platforms",
              value: "wordpress",
            },
            {
              collection: "platforms",
              value: "sql",
            },
            {
              collection: "platforms",
              value: "adobephotoshop",
            },
            {
              collection: "platforms",
              value: "adobeillustrator",
            },
            {
              collection: "platforms",
              value: "canva",
            },
            {
              collection: "platforms",
              value: "kinsta",
            },
          ],
          cta: {
            heading: "Ready to take your website to the next level?",
            description: "Schedule a free 30-minute consultation to discuss your project.",
            buttonText: "Schedule a Call",
          },
        },
        {
          id: 4,
          title: "Certified Bag Chasers",
          description:
            "Created a personal brand website for a best-selling author and course creator, featuring courses, testimonials, and community-building resources.",
          featuredImage: `${process.env.PUBLIC_URL}/CertifiedBagChasers.png`,
          link: "https://certifiedbagchasers.com",
          image: `${process.env.PUBLIC_URL}/CertifiedBagChasers.png`,
          content: [
            "For Certified Bag Chasers, we designed a personal branding site that effectively showcased the client’s courses, testimonials, and community insights.",
            "The project combined engaging visuals with user-centric navigation to create an experience that resonates with both existing and prospective customers.",
          ],
          relations: [
            {
              collection: "services",
              value: "web-design-development",
            },
            {
              collection: "services",
              value: "technology-consulting",
            },
            {
              collection: "services",
              value: "digital-product-development",
            },
            {
              collection: "services",
              value: "hosting-maintenance",
            },
            {
              collection: "platforms",
              value: "html",
            },
            {
              collection: "platforms",
              value: "css",
            },
            {
              collection: "platforms",
              value: "javascript",
            },
            {
              collection: "platforms",
              value: "wordpress",
            },
            {
              collection: "platforms",
              value: "sql",
            },
            {
              collection: "platforms",
              value: "adobephotoshop",
            },
            {
              collection: "platforms",
              value: "adobeillustrator",
            },
            {
              collection: "platforms",
              value: "canva",
            },
            {
              collection: "platforms",
              value: "kinsta",
            },
          ],
          cta: {
            heading: "Ready to take your website to the next level?",
            description: "Schedule a free 30-minute consultation to discuss your project.",
            buttonText: "Schedule a Call",
          },
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
          name: "Kenn Faria",
          quote:
            "Working with this team brought our vision to life! The website captures our services perfectly and has brought in a steady stream of clients.",
          position: "Owner, Faria's Demolition",
        },
        {
          name: "Anthony Gonzales",
          quote:
            "Highly recommend! Griffin was professional and efficient with a great website that has helped us grow our business exponentially.",
          position: "Owner, Pronto Junk Removal",
        },
        {
          name: "Darius Clark",
          quote:
            "From branding to the e-commerce platform, everything was done with precision and creativity. Griffin has been able to 5x business and I’m beyond satisfied with the results.",
          position: "CEO of i-75 CPA Review",
        },
        {
          name: "Arold Norelus",
          quote:
            "Griffin truly captured my brand’s essence. The website has been a game-changer for my courses and community engagement.",
          position: "Best-Selling Author",
        },
        {
          name: "Tarun Kumar",
          quote:
            "Professional, skilled, and efficient! Our new site is not only beautiful but effectively showcases our client success stories.",
          position: "Owner, Koi Crest Marketing",
        },
        {
          name: "Richard Faria",
          quote:
            "An excellent experience from start to finish. The site has helped position us as a leader in our industry.",
          position: "Owner, Koi Crest Marketing",
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
    sections: "faq",
    redirectFrom: ["/questions"],
    items: {
      itemsHasPage: false, 
      data: [
      {
        title: "Is the domain name included with the website?",
        content:
          "Setting up your domain is included and part of the process as well as the SSL Certificate with our hosting provider, however buying the domain name is not included with the price of the website. And something you will have to do, however, not to worry it will usually only cost you around $8-$12 a year and super easy to buy it. We will assist you in doing so and then you can leave the rest of the work to us!",
        relations: [
          {
            collection: "services",
            value: "web-design-development",
          },
        ],
      },
      {
        title: "Can you make my website mobile-friendly?",
        content:
          "Absolutely. 100%, With the growing number of mobile users, it’s crucial to have a website that looks and works great on all devices. All of our websites are designed to be responsive, meaning they will adapt to the screen size of the device they’re being viewed on.",
        relations: [
          {
            collection: "services",
            value: "web-design-development",
          },
        ],
      },
      {
        title: "What's your cancellation policy for the site management plan?",
        content:
          "Our goal is to make our clients happy and satisfied with our services. If for any reason you wish to cancel your monthly plan, just let us know.",
        relations: [
          {
            collection: "services",
            value: "hosting-maintenance",
          },
        ],
      },
      {
        title: `How does ${siteSettings.siteTitle} handle security, and what ongoing support is provided?`,
        content: `At ${siteSettings.siteTitle}, security is a priority for every site we build. We carefully choose trusted plugins and top-tier hosting services, known for their robust security measures, for all our clients. However, ongoing maintenance requires an extended management plan.`,
        relations: [
          {
            collection: "services",
            value: "hosting-maintenance",
          },
        ],
      },
      {
        title: `Privacy Policies, Terms and Conditions, etc. How does ${siteSettings.siteTitle} clarify to users information about these types of privacy issues?`,
        content:
          "We are not legal experts and recommend consulting with a lawyer to ensure compliance with all privacy and legal regulations.",
        relations: [
          {
            collection: "services",
            value: "web-design-development",
          },
          {
            collection: "services",
            value: "digital-marketing",
          },
          {
            collection: "services",
            value: "digital-product-development",
          },
          {
            collection: "services",
            value: "hosting-maintenance",
          },
        ],
      },
      {
        title: "Can you help me with email marketing?",
        content: `Absolutely, with ${siteSettings.siteTitle}, we can set your website up with all the tools to create an effective email marketing campaign. We can help you create email lists as well as design the user interface for people to sign up as well as provide you with a team of individuals who can manage your day-to-day email marketing campaigns.`,
        relations: [
          {
            collection: "services",
            value: "digital-marketing",
          },
        ],
      },
      {
        title:
          "I run a restaurant and I'm looking for a website that can handle reservations and online orders. Can Griffin's Web Services help with this?",
        content: `Absolutely! At ${siteSettings.siteTitle}, we specialize in building custom websites for restaurants and various other local businesses. We can seamlessly integrate popular reservation platforms and develop a custom reservation system.`,
        relations: [
          {
            collection: "services",
            value: "web-design-development",
          },
          {
            collection: "services",
            value: "digital-product-development",
          },
        ],
      },
      {
        title: "Can you help me with social media?",
        content:
          "Yes, we can help you integrate social media tools for platforms like Facebook, Instagram, and TikTok into your website and provide a team to manage your campaigns.",
        relations: [
          {
            collection: "services",
            value: "digital-marketing",
          },
        ],
      },
      {
        title: "What types of businesses have you worked with in the past?",
        content:
          "We have worked with a broad range of businesses across various sectors such as restaurants, local services, e-commerce, online courses, and more.",
        relations: [
          {
            collection: "services",
            value: "web-design-development",
          },
          {
            collection: "services",
            value: "digital-marketing",
          },
          {
            collection: "services",
            value: "technology-consulting",
          },
          {
            collection: "services",
            value: "digital-product-development",
          },
          {
            collection: "services",
            value: "ai-automation",
          },
          {
            collection: "services",
            value: "hosting-maintenance",
          },
        ],
      },
      {
        title: "How does your quote process work?",
        content:
          "You can book a quote directly on our website. We’ll arrange a consultation, where we’ll discuss your requirements and expectations, and then provide you with a detailed quote for your project.",
        relations: [
          {
            collection: "services",
            value: "web-design-development",
          },
          {
            collection: "services",
            value: "digital-marketing",
          },
          {
            collection: "services",
            value: "technology-consulting",
          },
          {
            collection: "services",
            value: "digital-product-development",
          },
          {
            collection: "services",
            value: "ai-automation",
          },
          {
            collection: "services",
            value: "hosting-maintenance",
          },
        ],
      },
    ],
  }
  },

/**
 * ------------------------------
 * Platforms
 * ------------------------------
 */
{
  id: 8,
  collection: "platforms",
  heading: "3rd Party Platforms, Frameworks, and Languages We Use.",
  title: "Our Platforms",
  slug: "/platforms",
  featuredImage: TestImage,
  hasPage: false,
  items: {
    itemsHasPage: false,
    includeCollectionSlug: false,
    data: [
      {
        title: "HTML",
        slug: "/html",
        icon: getIcon("si", "Html5"),
        description: "The backbone for webpage structure.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "CSS",
        slug: "/css",
        icon: getIcon("si", "Css3"),
        description: "Styling with modern layouts & animations.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "JavaScript",
        slug: "/javascript",
        icon: getIcon("si", "Javascript"),
        description: "Core scripting for interactive apps.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "React",
        slug: "/react",
        icon: getIcon("si", "React"),
        description: "A powerful library for dynamic UIs.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "Node.js",
        slug: "/nodejs",
        icon: getIcon("si", "React"),
        description: "Scalable back-end JavaScript runtime.",
        relations: [
          { collection: "services", value: "web-design-development" },
          { collection: "services", value: "technology-consulting" },
        ],
      },
      {
        title: "MongoDb",
        slug: "/mongodb",
        icon: getIcon("si", "Mongodb"),
        description: "Flexible NoSQL databases.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "SQL",
        slug: "/sql",
        icon: getIcon("si", "Mysql"),
        description: "Relational database management system.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "WordPress",
        slug: "/wordpress",
        icon: getIcon("si", "Wordpress"),
        description: "Popular CMS for content management.",
        relations: [
          { collection: "services", value: "web-design-development" },
          { collection: "services", value: "digital-product-development" },
        ],
      },
      {
        title: "Netlify",
        slug: "/netlify",
        icon: getIcon("si", "Netlify"),
        description: "Static web hosting and automation.",
        relations: [{ collection: "services", value: "hosting-maintenance" }],
      },
      {
        title: "Heroku",
        slug: "/heroku",
        icon: getIcon("si", "Heroku"),
        description: "Cloud platform for deploying apps.",
        relations: [{ collection: "services", value: "hosting-maintenance" }],
      },
      {
        title: "AWS",
        slug: "/aws",
        icon: getIcon("si", "Amazon"),
        description: "Amazon Web Services for cloud computing.",
        relations: [{ collection: "services", value: "hosting-maintenance" }],
      },
      {
        title: "Kinsta",
        slug: "/kinsta",
        icon: getIcon("si", "Kinsta"),
        description: "Managed WordPress and static hosting.",
        relations: [{ collection: "services", value: "hosting-maintenance" }],
      },
      {
        title: "Bluehost",
        slug: "/bluehost",
        icon: getIcon("si", "Kinsta"),
        description: "Web hosting services for websites.",
        relations: [{ collection: "services", value: "hosting-maintenance" }],
      },
      {
        title: "Siteground",
        slug: "/siteground",
        icon: getIcon("si", "Kinsta"),
        description: "Web hosting services for websites.",
        relations: [{ collection: "services", value: "hosting-maintenance" }],
      },
      {
        title: "Hostinger",
        slug: "/hostinger",
        icon: getIcon("si", "Hostinger"),
        description: "Web hosting services for websites.",
        relations: [{ collection: "services", value: "hosting-maintenance" }],
      },
      {
        title: "Shopify",
        slug: "/shopify",
        icon: getIcon("si", "Shopify"),
        description: "E-commerce platform for online stores.",
        relations: [
          { collection: "services", value: "web-design-development" },
          { collection: "services", value: "hosting-maintenance" },
        ],
      },
      {
        title: "Node.js",
        slug: "/nodejs",
        icon: getIcon("si", "NodeDotJs"),
        description: "Scalable back-end JavaScript runtime.",
        relations: [
          { collection: "services", value: "web-design-development" },
          { collection: "services", value: "technology-consulting" },
        ],
      },
      {
        title: "Bootstrap",
        slug: "/bootstrap",
        icon: getIcon("si", "Bootstrap"),
        description: "Front-end framework for responsive design.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "Figma",
        slug: "/figma",
        icon: getIcon("si", "Figma"),
        description: "Collaborative design tool for UI/UX.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "Framer",
        slug: "/framer",
        icon: getIcon("si", "Framer"),
        description: "Interactive prototyping for web & mobile.",
        relations: [
          { collection: "services", value: "web-design-development" },
          { collection: "services", value: "digital-product-development" },
        ],
      },
      {
        title: "Next.js",
        slug: "/nextjs",
        icon: getIcon("si", "Nextdotjs"),
        description: "React framework for server-rendered apps.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "Vite",
        slug: "/vite",
        icon: getIcon("si", "Vite"),
        description: "Next-generation front-end build tool.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "Gatsby",
        slug: "/gatsby",
        icon: getIcon("si", "Gatsby"),
        description: "Static site generator for modern web development.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "Astro",
        slug: "/astro",
        icon: getIcon("si", "Astro"),
        description: "Modern web development with less JavaScript.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },
      {
        title: "Tailwind CSS",
        slug: "/tailwindcss",
        icon: getIcon("si", "Tailwindcss"),
        description: "Utility-first CSS framework for rapid development.",
        relations: [{ collection: "services", value: "web-design-development" }],
      },     
      {
        title: "Adobe Photoshop",
        slug: "/adobephotoshop",
        icon: getIcon("si", "Adobephotoshop"),
        description: "Professional image editing software.",
        relations: [
          { collection: "services", value: "digital-marketing" },
          { collection: "services", value: "digital-product-development" },
        ],
      },
      {
        title: "Adobe Illustrator",
        slug: "/adobeillustrator",
        icon: getIcon("si", "Adobeillustrator"),
        description: "Vector graphics editor for logos and illustrations.",
        relations: [
          { collection: "services", value: "digital-marketing" },
          { collection: "services", value: "digital-product-development" },
        ],
      },
      {
        title: "Adobe Premiere Pro",
        slug: "/adobepremierepro",
        icon: getIcon("si", "Adobepremierepro"),
        description: "Professional image editing software.",
        relations: [
          { collection: "services", value: "digital-marketing" },
          { collection: "services", value: "digital-product-development" },
        ],
      },
      {
        title: "Canva",
        slug: "/canva",
        icon: getIcon("si", "Canva"),
        description: "Online design tool for social media graphics.",
        relations: [{ collection: "services", value: "digital-marketing" }, { collection: "services", value: "digital-product-development" },        ],
      },
      {
        title: "Mailchimp",
        slug: "/mailchimp",
        icon: getIcon("si", "Mailchimp"),
        description: "Email marketing platform for campaigns.",
        relations: [{ collection: "services", value: "digital-marketing" }],
      },
      {
        title: "HubSpot",
        slug: "/hubspot",
        icon: getIcon("si", "Hubspot"),
        description: "All‑in‑one marketing, sales, and service platform for growing your business.",
        relations: [{ collection: "services", value: "digital-marketing" }],
      },
      {
        title: "GoHighLevel",
        slug: "/gohighlevel",
        icon: getIcon("fa", "Bullhorn"),
        description: "A comprehensive marketing automation platform designed for agencies and small businesses.",
        relations: [{ collection: "services", value: "digital-marketing" }],
      },
      {
        title: "Google Analytics",
        slug: "/googleanalytics",
        icon: getIcon("si", "Googleanalytics"),
        description: "Web analytics service for tracking site performance.",
        relations: [{ collection: "services", value: "digital-marketing" }],
      },
      {
        title: "Facebook Ads",
        slug: "/facebookads",
        icon: getIcon("si", "Facebook"),
        description: "Advertising platform for targeted campaigns.",
        relations: [{ collection: "services", value: "digital-marketing" }],
      },
      {
        title: "Teachable",
        slug: "/teachable",
        icon: getIcon("si", "Facebook"),
        description: "Online course platform for creators.",
        relations: [{ collection: "services", value: "digital-product-development" }],
      },
      {
        title: "Thinkific",
        slug: "/thinkific",
        icon: getIcon("si", "Facebook"),
        description: "Course creation platform for educators.",
        relations: [{ collection: "services", value: "digital-product-development" }],
      },
      {
        title: "Udemy",
        slug: "/udemy",
        icon: getIcon("si", "Udemy"),
        description: "Global marketplace for online courses.",
        relations: [{ collection: "services", value: "digital-product-development" }],
      },
      {
        title: "Spotify",
        slug: "/spotify",
        icon: getIcon("si", "Spotify"),
        description: "Music streaming service for artists and listeners.",
        relations: [{ collection: "services", value: "digital-product-development" }],
      },
      {
        title: "Audible",
        slug: "/audible",
        icon: getIcon("si", "Audible"),
        description: "Audiobook platform for authors and listeners.",
        relations: [{ collection: "services", value: "digital-product-development" }],
      },
      {
        title: "Distrokid",
        slug: "/distrokid",
        icon: getIcon("si", "Distrokid"),
        description: "Music distribution platform for independent artists.",
        relations: [{ collection: "services", value: "digital-product-development" }],
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
    "cta",
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
