import React from 'react';
import { Button } from '@carbon/react';
import { ArrowRight } from '@carbon/react/icons';

import {
  banner,
  bannerText,
  // bannerHeading,
  bannerDetails,
  buttonBanner,
} from './Banner.module.scss';

const Banner = () => {
  return (
    <div aria-label="banner" className={banner}>
      <p className={bannerText}>
        {/* <strong className={bannerHeading}>
          This is the bolded text
        </strong> */}
        <span className={bannerDetails}>
          Help improve the Carbon website experience by taking our two minute
          survey.
        </span>
      </p>
      <Button
        href="https://your.feedback.ibm.com/jfe/form/SV_eQVJIwXK3hlrdhc"
        className={buttonBanner}
        kind="ghost"
        renderIcon={ArrowRight}>
        Take the survey
      </Button>
    </div>
  );
};

export default Banner;
