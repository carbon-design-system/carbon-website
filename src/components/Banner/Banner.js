import React from 'react';
import { Button } from '@carbon/react';
import { ArrowRight } from '@carbon/react/icons';

import {
  banner,
  bannerText,
  bannerHeading,
  buttonBanner,
} from './Banner.module.scss';

const Banner = () => {
  return (
    <div aria-label="banner" className={banner}>
      <p className={bannerText}>
        <strong className={bannerHeading}>
          The Carbon site has been redesigned.
        </strong>
      </p>
      <Button
        href="https://preview.carbondesignsystem.com"
        className={buttonBanner}
        kind="ghost"
        renderIcon={ArrowRight}>
        Explore the preview site
      </Button>
    </div>
  );
};

export default Banner;
