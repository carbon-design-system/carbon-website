import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/all-about-carbon/what-is-carbon', text: 'All about Carbon' },
  { href: '/components/overview', text: 'Components overview' },
  { href: '/designing/get-started', text: 'Get started designing' },
  { href: '/developing/get-started', text: 'Get started developing' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
