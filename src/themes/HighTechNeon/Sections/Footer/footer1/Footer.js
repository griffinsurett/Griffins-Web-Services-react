// Footer.js
import React from "react";
import "./footer.css";
// import SocialIcons from "../../../themeComponents/social-icons/SocialIcons";
// import { getSiteSettings } from "../../../../../CMS/Utils/GetSettings";
import MenuItem from "../../../Components/MenuItem/MenuItem";

const Footer = ({ className }) => {
  // const siteSettings = getSiteSettings();

  // if (!siteSettings) {
  //   return <div>Error: Site settings not found</div>;
  // }

  const footerMenuItems = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <footer className={`footer ${className} flex justify-center`}>
      <div className="header-foot-container flex justify-between item-align-center responsive">
        <div className="flex justify-center item-align-center">
          <ul className="footer-menu flex justify-between p-small">
            {footerMenuItems.map((item, index) => (
              <MenuItem
                key={index}
                label={item.label}
                href={item.href}
                className="navMenu p-xSmall hover-scale"
                logoOnlyOnHover={true}
              />
            ))}
          </ul>
        </div>

        <p
          className="flex justify-center item-align-center p-small"
          id="footer-copyright"
        >
          {/* {siteSettings.Copyright} */}
        </p>

        {/* <SocialIcons /> */}
      </div>
    </footer>
  );
};

export default Footer;
