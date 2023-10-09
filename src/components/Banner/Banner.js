import React from 'react';
import { Button } from 'carbon-components-react';
import { ArrowRight16 } from '@carbon/icons-react';

import {
  banner,
  bannerText,
  bannerDetails,
  buttonBanner,
} from './Banner.module.scss';

const Banner = () => {
  return (
    <div aria-label="banner" className={banner}>
      <p className={bannerText}>
        <strong>
          Carbon v10 is in maintenance mode. Support will end on Sept. 30, 2024.
        </strong>
        <span className={bannerDetails}>Start using v11 now!</span>
      </p>
      <Button
        href="https://github.com/carbon-design-system/carbon/blob/main/docs/release-schedule.md"
        className={buttonBanner}
        kind="ghost"
        renderIcon={ArrowRight16}>
        Release schedule
      </Button>
    </div>
  );
};

export default Banner;
