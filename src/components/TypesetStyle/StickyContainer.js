import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const StickyContainer = ({
  children,
  banner,
  navBar,
  secondary,
  top,
  className,
}) => {
  const stickyClass = classnames(`cds--sticky-container`, className, {
    [`cds--sticky-container-banner`]: banner,
    [`cds--sticky-container-visible`]: navBar,
    [`cds--sticky-container-hidden`]: !navBar,
    [`cds--sticky-container-secondary`]: secondary,
    [`cds--sticky-container-secondary-visible`]: navBar && secondary,
    [`cds--sticky-container-secondary-hidden`]: !navBar && secondary,
  });

  return (
    <div className={stickyClass} style={{ top: top || null }}>
      {children}
    </div>
  );
};

StickyContainer.propTypes = {
  // if site has banner at top ( ex. go to v1)
  banner: PropTypes.bool,

  // if page navBar is showing / hiding, toggle this on/off
  navBar: PropTypes.bool,

  // for items that are on pages that already have a sticky item
  secondary: PropTypes.bool,

  // if custom top is necessary, must include units - (rem, px)
  top: PropTypes.string,
};

export default StickyContainer;
