// SocialIcons.js
import React from "react";
import { getCollection } from "../../../../CMS/Utils/GetCollection";
import Icon from "../Icon/Icon"; // Import your Icon component
import "./social-icons.css"; // Assuming you have some CSS for styling

const SocialIcons = () => {
  const contactContent = getCollection("contact"); // Fetch the contact collection

  if (!contactContent || !contactContent.socialMedia) {
    console.error("Social media content not found in contact collection");
    return null; // Return null if there's no social media content
  }

  return (
    <div className="social-icons smaller-space">
      <div className="social-icon flex justify-between">
        {contactContent.socialMedia.map((socialMedia, index) => (
          <a
            key={index}
            href={socialMedia.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={socialMedia.platform}
            className="hover-scale"
          >
            <Icon
              icon={socialMedia.icon} // Use icon from the socialMedia array
              size="lg" // Adjust size if needed
              className="" // No additional class for styling
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
