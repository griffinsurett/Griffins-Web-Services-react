// AboutList.js
import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../../../themeComponents/ListItem/ListItem";
import IntersectionObserverComponent from "../../../../ScrollAnimations";
import ContentTemplate from "../../../../themeComponents/ContentTemplate/ContentTemplate";

const AboutList = ({ items }) => {
  return (
<div className="about-icon-list justify-center item-align-start">
      {items.map((item, index) => (
        <IntersectionObserverComponent 
          key={index} 
          inViewClass="fade-in" 
          outViewClass="fade-out" 
          staggeredAnimation={true}
          delayIn={200}
          className={"bottom-space"}
        >
          <ListItem
            hasIcon={true}
            icon={item.icon} // Use the provided icon or fallback to faCode
            title={item.title}
            titleTag="h6"
            iconPadding="17px"
            description={item.description}
            className="custom-icon-list-item-class text-left"
          />
        </IntersectionObserverComponent>
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