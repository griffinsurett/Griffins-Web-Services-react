// StaggeredAnimation.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StaggeredAnimation = ({ children, index, delayBase = 100 }) => {
  const [shouldStagger, setShouldStagger] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setShouldStagger(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculatedDelay = shouldStagger ? index * delayBase : 0;

  return React.cloneElement(children, {
    style: { ...children.props.style, '--delay-in': `${calculatedDelay / 1000}s` },
  });
};

StaggeredAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  delayBase: PropTypes.number,
};

export default StaggeredAnimation;
