import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/get-started/about-carbon', text: 'About Carbon' },
  { href: '/components/overview', text: 'Components overview' },
  { href: '/developing/get-started', text: 'Get started: develop' },
  { href: '/designing/get-started', text: 'Get started: design' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
