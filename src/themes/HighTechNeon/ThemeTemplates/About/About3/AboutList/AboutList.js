// AboutList.js
import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../../../themeComponents/ListItem/ListItem";

const AboutList = ({ items }) => {
  return (
    <div className="about-icon-list flex justify-center item-align-start wrap">
      {items.map((item, index) => (
        <div key={index} className="w50 bottom-space fade-in">
          <ListItem
            hasIcon={true}
            icon={item.icon} // Use the provided icon or fallback to faCode
            title={item.title}
            titleTag="h6"
            iconPadding="17px"
            description={item.description}
            className="custom-icon-list-item-class text-left"
          />
        </div>
      ))}
    </div>
  );
};

AboutList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.object, // Icon from Content.js
    })
  ).isRequired,
};

export default AboutList;
