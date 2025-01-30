// AboutList.js
import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../../../themeComponents/ListItem/ListItem";

const AboutList = ({ items }) => {
  return (
    <div className="about-icon-list flex responsive justify-between item-align-start w100">
      {items.map((item, index) => (
        <ListItem
          key={index}
          hasIcon={true}
          icon={item.icon}
          title={item.title}
          IconTop={true}
          titleTag="h6"
          iconPadding="17px"
          description={item.description}
          className="text-center left-on-desktop"
          isRowMobile={true}
        />
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
