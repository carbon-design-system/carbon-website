import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/get-started/about-carbon', text: 'About Carbon' },
  { href: '/components/overview', text: 'Components overview' },
  { href: '/get-started/development', text: 'Get started: development' },
  { href: '/get-started/design', text: 'Get started: design' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
