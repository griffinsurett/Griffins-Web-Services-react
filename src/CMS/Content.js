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
      itemSections: ["hero", "projects", "services", "process", "testimonials", "faq"],
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
          }
         ]
        },
        {
          id: 2,
          title: "Faria's Demolition",
          description: "Quality demolition services for commercial and residential projects.",
          relations: [
            {
              collection: "projects",
              value: 2,
            },
            {
              collection: "testimonials",
              value: 1,
            }
          ]
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
            }
          ]
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
            }
          ]
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
    itemSections: ["hero", "services", "testimonials", "projects"],
    data: [
      {
        id: 1,
        title: "i-75 CPA Review",
        description:
          "Developed multiple e-commerce sites with landing pages, branding, and digital marketing solutions.",
        featuredImage: TestImage,
        link: "https://i75cpareview.com/",
        image: "https://picsum.photos/200/300",
        content: [
          "For i-75 CPA Review, we built a robust e-commerce platform featuring responsive landing pages, intuitive navigation, and a design that reinforces trust in financial education.",
          "We also implemented targeted branding and digital marketing strategies that boosted the company’s online presence and conversions."
        ],
      },
      {
        id: 2,
        title: "Faria's Demolition",
        description:
          "Created a comprehensive website showcasing demolition services, including project galleries and contact forms.",
        featuredImage: TestImage,
        link: "https://fariasdemolition.com/",
        image: "https://picsum.photos/200/300",
        content: [
          "For Faria's Demolition, we developed a website that effectively showcased their services through engaging galleries and clear service information.",
          "The site was optimized for user experience and conversion, ensuring that prospective clients can easily request estimates or contact the company."
        ],
      },
      {
        id: 3,
        title: "Koi Roofing and Solar",
        description:
          "Designed a clean, informative site to promote solar solutions, emphasizing brand trust and environmental impact.",
        featuredImage: TestImage,
        link: "https://koisolarofficial.com/",
        image: "https://picsum.photos/200/300",
        content: [
          "For Koi Roofing and Solar, we crafted a modern, mobile-friendly website that highlighted their solar and roofing services with a focus on transparency and sustainability.",
          "Our approach combined clean design with strong call-to-action elements and SEO best practices to drive quality traffic."
        ],
      },
      {
        id: 4,
        title: "Certified Bag Chasers",
        description:
          "Created a personal brand website for a best-selling author and course creator, featuring courses, testimonials, and community-building resources.",
        featuredImage: TestImage,
        link: "https://certifiedbagchasers.com/",
        image: "https://picsum.photos/200/300",
        content: [
          "For Certified Bag Chasers, we designed a personal branding site that effectively showcased the client’s courses, testimonials, and community insights.",
          "The project combined engaging visuals with user-centric navigation to create an experience that resonates with both existing and prospective customers."
        ],
      },
      {
        id: 5,
        title: "Koi Crest Marketing",
        description:
          "Built a digital marketing agency website with case studies and service offerings, highlighting client success stories.",
        featuredImage: TestImage,
        link: "https://koicrest.com/",
        image: "https://picsum.photos/200/300",
        content: [
          "For Koi Crest Marketing, we developed a website that not only highlighted their service offerings but also showcased detailed case studies and client testimonials.",
          "Our work included creating a strong visual identity and integrating lead-generation tools to help drive new business."
        ],
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
    items: [
      {
        title: "Is the domain name included with the website?",
        content:
          "Setting up your domain is included and part of the process as well as the SSL Certificate with our hosting provider, however buying the domain name is not included with the price of the website. And something you will have to do, however, not to worry it will usually only cost you around $8-$12 a year and super easy to buy it. We will assist you in doing so and then you can leave the rest of the work to us!",
      },
      {
        title: "Can you make my website mobile-friendly?",
        content:
          "Absolutely. 100%, With the growing number of mobile users, it’s crucial to have a website that looks and works great on all devices. All of our websites are designed to be responsive, meaning they will adapt to the screen size of the device they’re being viewed on.",
      },
      {
        title: "What's your cancellation policy for the site management plan?",
        content:
          "Our goal is to make our clients happy and satisfied with our services. If for any reason you wish to cancel your monthly plan, just let us know.",
      },
      {
        title: `How does ${siteSettings.siteTitle} handle security, and what ongoing support is provided?`,
        content: `At ${siteSettings.siteTitle}, security is a priority for every site we build. We carefully choose trusted plugins and top-tier hosting services, known for their robust security measures, for all our clients. However, ongoing maintenance requires an extended management plan.`,
      },
      {
        title: `Privacy Policies, Terms and Conditions, etc. How does ${siteSettings.siteTitle} clarify to users information about these types of privacy issues?`,
        content:
          "We are not legal experts and recommend consulting with a lawyer to ensure compliance with all privacy and legal regulations.",
      },
      {
        title: "Can you help me with email marketing?",
        content: `Absolutely, with ${siteSettings.siteTitle}, we can set your website up with all the tools to create an effective email marketing campaign. We can help you create email lists as well as design the user interface for people to sign up as well as provide you with a team of individuals who can manage your day-to-day email marketing campaigns.`,
      },
      {
        title:
          "I run a restaurant and I'm looking for a website that can handle reservations and online orders. Can Griffin's Web Services help with this?",
        content: `Absolutely! At ${siteSettings.siteTitle}, we specialize in building custom websites for restaurants and various other local businesses. We can seamlessly integrate popular reservation platforms and develop a custom reservation system.`,
      },
      {
        title: "Can you help me with social media?",
        content:
          "Yes, we can help you integrate social media tools for platforms like Facebook, Instagram, and TikTok into your website and provide a team to manage your campaigns.",
      },
      {
        title: "What types of businesses have you worked with in the past?",
        content:
          "We have worked with a broad range of businesses across various sectors such as restaurants, local services, e-commerce, online courses, and more.",
      },
      {
        title: "How does your quote process work?",
        content:
          "You can book a quote directly on our website. We’ll arrange a consultation, where we’ll discuss your requirements and expectations, and then provide you with a detailed quote for your project.",
      },
    ],
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
