// src/themes/HighTechNeon/Sections/Footer/footer1/Footer.js

import React from "react";
import "./footer.css";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import Icon from "../../../Components/Icon/Icon";

const Footer = ({ className, menuManager, siteSettings }) => {
  // Grab the flat footer links from "Footer"
  const footerMenuItems = menuManager.getFlatMenu("Footer") || [];

  // Grab the flat social icons from "Social Media"
  const socialMenu = menuManager.getFlatMenu("Social Media") || [];

  return (
    <footer className={`footer ${className} flex justify-center item-align-center`}>
      <div className="header-foot-container flex justify-between item-align-center responsive">
        
          <ul className="footer-menu flex justify-between p-small">
            {footerMenuItems.map((item, index) => {
              const label = item.title;
              const href = item.slug || item.link || "#";
              return (
                <MenuItem
                  key={index}
                  label={label}
                  href={href}
                  className="navMenu p-xSmall hover-scale"
                  logoOnlyOnHover={true}
                  index={index}
                />
              );
            })}
          </ul>

        {/* Center: Copyright */}
        <p className="flex justify-center item-align-center p-small">
          {siteSettings?.Copyright}
        </p>

        {/* Right: Social Icons (Social Media) */}
        <div className="flex justify-center item-align-center">
          <ul className="flex social-icons gap-4 p-small">
            {socialMenu.map((item, index) => {
              const label = item.title || "Follow us";
              const href = item.link || item.slug || "#";
              const icon = item.icon; // e.g., a FontAwesome icon object

              return (
                <li key={index}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover-scale flex item-align-center"
                  >
                    {icon && (
                      <Icon
                        icon={icon}
                        size="lg"
                        className="hover-scale"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
