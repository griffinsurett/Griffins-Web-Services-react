// FloatingPhoneButton.js
import React from "react";
import { getCollection } from "../../../../CMS/Utils/GetContent/GetCollection";
import Icon from "../Icon/Icon";
import "./floating-phone-button.css";

const FloatingPhoneButton = () => {
  // 1) Grab the 'contact' collection from the CMS
  const contactCollection = getCollection("contact");
  if (!contactCollection?.contactInfo) {
    return null;
  }
  
  // 2) Find the phone entry (labeled "Phone")
  const phoneEntry = contactCollection.contactInfo.find(
    info => info.label?.toLowerCase() === "phone"
  );
  if (!phoneEntry?.value) {
    return null;
  }

  // 3) Create a "tel:" link
  const telLink = `tel:${phoneEntry.value.replace(/\D/g, "")}`;

  // 4) Render an anchor with our <Icon> component
  return (
    <a className="floating-phone-button styled-icon dynamic-border-effect" href={telLink} aria-label="Call us">
      {/* Use the phone icon from the CMS */}
      {phoneEntry.icon && (
        <Icon icon={phoneEntry.icon} />
      )}
    </a>
  );
};

export default FloatingPhoneButton;
