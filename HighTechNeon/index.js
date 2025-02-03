// Index.js (simplified)
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
import Projects from "./ThemeTemplates/Projects/Projects";
// import Preloader from "./Preloader"; // if you have one

// Main App Component
const Theme = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        {/* {loading ? <Preloader /> : ( ... ) } */}
        <>
          {/* 1) We NO LONGER pass any isMenuOpen or toggleMenu props */}
          <Header />

          {/* Rest of page */}
          <div className="flex column item-align-center">
            <div className="content container">
              <Hero1 />
              <Services />
              <About1 />
              <Projects />
              <Testimonials />
              <FAQ />
              <ContactUs3 />
            </div>
          </div>

          {/* 2) We also do NOT manually render Menu here anymore */}
          <Footer className="relative-footer" />
        </>
      </div>
    </ThemeProvider>
  );
};

export default Theme;
