import React from 'react';
import { Button } from 'carbon-components-react';
import { ArrowRight16 } from '@carbon/icons-react';

import { banner, bannerText, buttonBanner } from './Banner.module.scss';

const Banner = () => {
  return (
    <div aria-label="banner" className={banner}>
      <p className={bannerText}>
        <strong>
          Carbon v10 reached end of support on September 30, 2024 and will not
          receive any more updates.
        </strong>
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
