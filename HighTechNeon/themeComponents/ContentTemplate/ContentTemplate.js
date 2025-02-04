// ContentTemplate.js
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./content-template.css";
import Button from "../Buttons/Button";
import Typewriter from "../TextEffects/Typewriter/SimpleTypewriter/SimpleTypewriter";
import ScaleUpTypewriter from "../TextEffects/Typewriter/ScaleUpTypewriter/ScaleUpTypewriter";

// IntersectionObserver completely removed!

const ContentTemplate = ({
  title,
  heading,
  ifButton = false,
  buttonText = "Learn More",
  buttonLink = "#",
  onClick,
  className,
  contentWrapClass,
  buttonId,
  titleClass,
  headingClass,
  paragraphClass,
  paragraph1,
  paragraph2,
  paragraph1Class,
  paragraph2Class,
  ContentHeaderClass,
  ifParagraph = false,
  buttonBottom = false,
  buttonBottomMobile = false, // New prop for mobile-only bottom button
  buttonClass,
  buttonSecClass,
  children,
  isHero = false,
  paragraphSide = true,
  buttonSide = true,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show paragraphs & button on the side if specified
  const showSideContentContainer =
    paragraphSide || (buttonSide && ifButton && !buttonBottom);

  return (
    <div className={`content-template ${className} flex column`}>
      <div className={`content-top-section flex ${contentWrapClass}`}>
        {/* Title & Heading Container */}
        <div className={`title-heading-container column ${ContentHeaderClass}`}>
          {title && (
            <div className="fade-in-down">
              <h5
                className={`content-title smaller-bottom-space ${titleClass}`}
              >
                {title}
              </h5>
            </div>
          )}

          {heading &&
            (isHero ? (
              // Hero <h1>
              <div className="fade-in-up">
                <h1 className={`bold ${headingClass} text-shadow-for-dark`}>
                  {/* <ScaleUpTypewriter text={heading} speed={100} /> */}
                  {heading}
                </h1>
              </div>
            ) : (
              // Normal <h2>
              <div className="fade-in-up">
                <h2 className={`bold ${headingClass} text-shadow-for-dark`}>
                  {heading}
                </h2>
              </div>
            ))}

          {/* Paragraphs if not on the side */}
          {ifParagraph && !paragraphSide && (
            <div
              className={`content-template-paragraphs ${paragraphClass} fade-in-down`}
            >
              {paragraph1 && <p className={paragraph1Class}>{paragraph1}</p>}
              {paragraph2 && <p className={paragraph2Class}>{paragraph2}</p>}
            </div>
          )}
        </div>

        {/* Paragraph & Button on the side */}
        {showSideContentContainer && (
          <div className="side-content-container flex column justify-center">
            {/* Paragraphs if on the side */}
            {paragraphSide && ifParagraph && (
              <div
                className={`content-template-paragraphs-side ${paragraphClass} fade-in-down`}
                style={{ transitionDelay: "300ms" }}
              >
                {paragraph1 && <p className={paragraph1Class}>{paragraph1}</p>}
                {paragraph2 && <p className={paragraph2Class}>{paragraph2}</p>}
              </div>
            )}

            {/* Side Button (hidden on mobile if buttonBottomMobile) */}
            {buttonSide &&
              ifButton &&
              !buttonBottom &&
              (!isMobile || !buttonBottomMobile) && (
                <div
                  className={`${buttonSecClass} content-template-btn responsive-spacing flex item-align-center fade-in-right`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <Button
                    text={buttonText}
                    buttonLink={buttonLink}
                    className={`p-small ${buttonClass}`}
                    buttonId={buttonId}
                    onClick={onClick}
                  />
                </div>
              )}
          </div>
        )}
      </div>

      {/* Children Content */}
      {children && <div className="content-template-children">{children}</div>}

      {/* Bottom Button - mobile only if buttonBottomMobile */}
      {(buttonBottom || (buttonBottomMobile && isMobile)) && ifButton && (
        <div
          className={`content-template-btn-bottom flex top-space ${buttonSecClass} fade-in-up`}
          style={{ transitionDelay: "400ms" }}
        >
          <Button
            text={buttonText}
            buttonLink={buttonLink}
            className={`p-small ${buttonClass}`}
            buttonId={buttonId}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};

ContentTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string.isRequired,
  ifButton: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  buttonId: PropTypes.string,
  headingClass: PropTypes.string,
  titleClass: PropTypes.string,
  paragraphClass: PropTypes.string,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  paragraph1Class: PropTypes.string,
  paragraph2Class: PropTypes.string,
  ifParagraph: PropTypes.bool,
  buttonClass: PropTypes.string,
  buttonBottom: PropTypes.bool,
  buttonBottomMobile: PropTypes.bool,
  children: PropTypes.node,
  isHero: PropTypes.bool,
  paragraphSide: PropTypes.bool,
  buttonSide: PropTypes.bool,
};

export default ContentTemplate;
