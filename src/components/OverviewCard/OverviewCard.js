import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { Tag } from '@carbon/react';

export default class OverviewCard extends React.Component {
  render() {
    const { children, href, title, disabled, className, tag } = this.props;

    let isLink;
    if (href !== undefined) {
      isLink = href.charAt(0) === '/';
    }

    const OverviewCardClassNames = classnames([`overview-card`], {
      [className]: className,
      [`overview-card--disabled`]: disabled,
    });

    const carbonTileclassNames = classnames(
      [`cds--tile`],
      [`cds--tile--clickable`]
    );

    const cardContent = (
      <>
        <div className="overview-card__info">
          <h4 className="overview-card__title">{title}</h4>
          {tag && <Tag type="teal">{tag}</Tag>}
        </div>
        <div className="overview-card__img">{children}</div>
      </>
    );

    let cardContainer;
    if (disabled === true) {
      cardContainer = <div className={carbonTileclassNames}>{cardContent}</div>;
    } else if (isLink === true) {
      cardContainer = (
        <Link to={href} className={carbonTileclassNames}>
          {cardContent}
        </Link>
      );
    } else {
      cardContainer = (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          className={carbonTileclassNames}>
          {cardContent}
        </a>
      );
    }

    return (
      <div className={OverviewCardClassNames}>
        <div className="cds--aspect-ratio cds--aspect-ratio--1x1">
          <div className="cds--aspect-ratio--object">{cardContainer}</div>
        </div>
      </div>
    );
  }
}

OverviewCard.propTypes = {
  children: PropTypes.node,
  /**
   * Specify a custom class
   */
  className: PropTypes.string,
  /**
   * Use for disabled card
   */
  disabled: PropTypes.bool,
  /**
   * Set url for card
   */
  href: PropTypes.string,
  /**
   * Add tag
   */
  tag: PropTypes.string,
  /**
   * LTitle
   */
  title: PropTypes.string,
};

OverviewCard.defaultProps = {
  disabled: false,
};
