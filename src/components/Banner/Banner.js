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
        <strong className={bannerHeading}>Meet the new Carbon.</strong>
      </p>
      <Button
        href="https://next.carbondesignsystem.com"
        className={buttonBanner}
        kind="ghost"
        renderIcon={ArrowRight}>
        Try the preview site
      </Button>
    </div>
  );
};

export default Banner;
