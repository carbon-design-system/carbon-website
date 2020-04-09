import React from 'react';

import { storybookDemoGroups } from "@carbon/charts/demo/data";

import { AnchorLinks, AnchorLink } from 'gatsby-theme-carbon';
export default () => (
  <AnchorLinks>
    {storybookDemoGroups.map(storybookDemoGroup => (
      <AnchorLink>{storybookDemoGroup.title}</AnchorLink>
    ))}

    <AnchorLink>Design-only</AnchorLink>
  </AnchorLinks>
);
