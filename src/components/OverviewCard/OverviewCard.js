import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import {
  Launch20,
  Download20,
  ArrowRight20,
  Error20,
  Email20,
} from '@carbon/icons-react';

export default class OverviewCard extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Set url for card
     */
    href: PropTypes.string,

    /**
     * Smaller heading
     */
    subTitle: PropTypes.string,

    /**
     * Large heading
     */
    title: PropTypes.string,

    /**
     * Action icon, default is launch, options are Launch, ArrowRight, Download, Error
     */
    actionIcon: PropTypes.string,

    /**
     * Use for disabled card
     */
    disabled: PropTypes.bool,

    /**
     * Specify a custom class
     */
    className: PropTypes.string,

    /**
     * Set title text color, default is light, options are light or dark
     */
    titleColor: PropTypes.string,

    /**
     * Set sub title text color, default is light, options are light or dark
     */
    subTitleColor: PropTypes.string,

    /**
     * Set icon color, default is light, options are light or dark
     */
    iconColor: PropTypes.string,

    /**
     * Set hover to lighten or darken the image, default is light, options are light or dark
     */
    hoverColor: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    titleColor: 'light',
    subTitleColor: 'light',
    iconColor: 'light',
    hoverColor: 'light',
  };

  render() {
    const {
      children,
      href,
      subTitle,
      title,
      titleColor,
      subTitleColor,
      iconColor,
      hoverColor,
      disabled,
      actionIcon,
      className,
    } = this.props;

    let isLink;
    if (href !== undefined) {
      isLink = href.charAt(0) === '/';
    }

    const OverviewCardClassNames = classnames([`bx--image-card`], {
      [className]: className,
      [`bx--image-card--disabled`]: disabled,
      [`bx--image-card--dark`]: hoverColor === 'dark',
    });

    const carbonTileclassNames = classnames(
      [`bx--tile`],
      [`bx--tile--clickable`]
    );

    const titleClassNames = classnames([`bx--image-card__title`], {
      [`bx--image-card__title--dark`]: titleColor === 'dark',
    });

    const subTitleClassNames = classnames([`bx--image-card__subtitle`], {
      [`bx--image-card__subtitle--dark`]: subTitleColor === 'dark',
    });

    const iconClassNames = classnames([`bx--image-card__icon--action`], {
      [`bx--image-card__icon--action--dark`]: iconColor === 'dark',
    });

    const cardContent = (
      <>
        {title ? <h4 className={titleClassNames}>{title}</h4> : null}
        {subTitle ? <h5 className={subTitleClassNames}>{subTitle}</h5> : null}
        <div className={iconClassNames}>
          {actionIcon === 'launch' && !disabled ? (
            <Launch20 aria-label="Open resource" />
          ) : null}
          {actionIcon === 'arrowRight' && !disabled ? (
            <ArrowRight20 aria-label="Open resource" />
          ) : null}
          {actionIcon === 'download' && !disabled ? (
            <Download20 aria-label="Download" />
          ) : null}
          {actionIcon === 'email' && !disabled ? (
            <Email20 aria-label="Email" />
          ) : null}
          {actionIcon === 'disabled' || disabled === true ? (
            <Error20 aria-label="disabled" />
          ) : null}
        </div>
        <div className={`bx--image-card__img`}>{children}</div>
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
        <div className="bx--aspect-ratio--1x1">
          <div className={`bx--aspect-ratio--object`}>{cardContainer}</div>
        </div>
      </div>
    );
  }
}
