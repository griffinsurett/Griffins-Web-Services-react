// Index.js
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./themeControls/ThemeContext"; 
import "./styles.css";
import "./animations.css";
import Header from "./ThemeTemplates/Header/Header";
import Footer from "./ThemeTemplates/Footer/footer1/Footer";
import Services from "./ThemeTemplates/Services/Services";
import Hero1 from "./ThemeTemplates/HeroSections/Hero1/hero";
import About1 from "./ThemeTemplates/About/About1/About";
import FAQ from "./ThemeTemplates/FAQ/FAQ";
import Testimonials from "./ThemeTemplates/Testimonials/Testimonials";
import ContactUs3 from "./ThemeTemplates/Contact/Contact3/ContactUs";
// import ContactUs4 from "./ThemeTemplates/Contact/Contact4/ContactUs";
import Menu from "./ThemeTemplates/Header/components/Menu/Menu";
import Projects from "./ThemeTemplates/Projects/Projects";
// import Process from "./ThemeTemplates/Process/Process";
// import Subscribe from "./ThemeTemplates/Subscribe/Subscribe";
// import PricingTable from "./ThemeTemplates/Pricing/Pricing";

// Main App Component to render the entire theme
const Theme = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // Simulate an API call or loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // 3.5 seconds to match the preloader

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <ThemeProvider>
      <div className="App">
        {/* {loading ? (
          <Preloader />
        ) : ( */}
        <>
          <Header toggleMenu={toggleMenu} />
          <div className="flex column item-align-center">
            <div className="content container">
              {/* <Cursor /> */}
              <Hero1 />
              {/* <Hero2 /> */}
              {/* <Hero3 /> */}
              <Services />
              {/* <About3 /> */}
              <About1 />
              {/* <WhyChooseUs /> */}
              {/* <About2 /> */}
              {/* <About4 /> */}
              {/* <Process /> */}
              <Projects />
              <Testimonials />
              {/* <PricingTable /> */}
              <FAQ />
              {/* <ContactUs /> */}
              {/* <ContactUs2 /> */}
              <ContactUs3 />
              {/* <ContactUs4 /> */}
              {/* <Subscribe /> */}
            </div>
          </div>
          <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Footer className={isMenuOpen ? "sticky-footer" : "relative-footer"} />
        </>
        {/* )} */}
      </div>
    </ThemeProvider>
  );
};

export default Theme;