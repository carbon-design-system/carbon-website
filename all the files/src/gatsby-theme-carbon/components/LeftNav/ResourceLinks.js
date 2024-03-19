import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'GitHub',
    href: 'https://github.com/carbon-design-system/carbon',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => (
  <ResourceLinks includeDividerSpace={false} shouldOpenNewTabs links={links} />
);

export default CustomResources;
