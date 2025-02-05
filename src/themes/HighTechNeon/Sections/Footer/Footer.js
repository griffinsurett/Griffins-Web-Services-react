// src/themes/HighTechNeon/Sections/Footer/footer1/Footer.js

import React from "react";
import "./footer.css";
import ItemsTemplate from "../../Components/ItemsTemplate/ItemsTemplate";
import Icon from "../../Components/Icon/Icon";
import MenuItem from "../../Components/MenuItem/MenuItem";

const Footer = ({ className, menuManager, siteSettings }) => {
  // Get the footer menu items (flat structure)
  const footerMenu = menuManager.getFlatMenu("Footer") || [];
  // Get the social icons menu items
  const socialMenu = menuManager.getFlatMenu("Social Media") || [];

  return (
    <footer className={`footer flex justify-center w100 ${className}`}>
      <div className="flex justify-between item-align-center header-foot-container responsive w90">

        {/* Left: Footer Menu using ItemsTemplate with MenuItem */}
        <ItemsTemplate
            items={footerMenu}
            // Render each footer menu item using MenuItem
            ItemComponent={({ title, slug, link, itemIndex }) => {
              const href = slug || link || "#";
              return (
                <MenuItem
                  label={title}
                  href={href}
                  index={itemIndex}
                  className="footer-menu-item p-small"
                  logoOnlyOnHover={true}
                />
              );
            }}
            // Set maxColumns to the number of footer items so they appear in one row.
            allowWrap={false}
            gap="10px"
            className="flex footer-menu-list"
          />

        {/* Center: Copyright */}
        <p className="flex justify-center item-align-center text-center p-small">
          {siteSettings?.Copyright}
        </p>

        {/* Right: Social Icons using ItemsTemplate */}
          <ItemsTemplate
            items={socialMenu}
            // Define how each social icon should be rendered
            ItemComponent={({ title, link, slug, icon, itemIndex }) => {
              const label = title || "Follow us";
              const href = link || slug || "#";
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover-scale flex item-align-center"
                >
                  {icon && (
                    <Icon icon={icon} size="lg" className="hover-scale" iconPadding="5" />
                  )}
                </a>
              );
            }}
            // Use maxColumns equal to the number of social menu items to keep them on one row
            maxColumns={socialMenu.length}
            allowWrap={false}
            gap="10px"
            className="flex social-icons p-small"
          />
        </div>
    </footer>
  );
};

export default Footer;
