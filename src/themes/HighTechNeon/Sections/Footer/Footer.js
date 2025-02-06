import React from "react";
import "./footer.css";
import ItemsTemplate from "../../Components/ItemsTemplate/ItemsTemplate";
import Icon from "../../Components/Icon/Icon";
import MenuItem from "../../Components/MenuItem/MenuItem";
import { useMenu } from "../../Components/Menu/MenuContext";  // Updated import

const Footer = ({ className, menuManager, siteSettings }) => {
  const { closeMenu } = useMenu(); // Get the global closeMenu function

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
          // Render each footer menu item using MenuItem and pass closeMenu as toggleMenu
          ItemComponent={({ title, slug, link, itemIndex }) => {
            const href = slug || link || "#";
            return (
              <MenuItem
                label={title}
                href={href}
                toggleMenu={closeMenu} // When clicked, this will close the menu
                className="footer-menu-item p-xSmall"
                logoOnlyOnHover={true}
                index={itemIndex}
              />
            );
          }}
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
            const href = link || slug || "#";
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                className="hover-scale"
                onClick={closeMenu}  // Close the menu when a social link is clicked (if needed)
              >
                {icon && (
                  <Icon
                    icon={icon}
                    size="lg"
                    className=""
                    iconPadding="5"
                  />
                )}
              </a>
            );
          }}
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
