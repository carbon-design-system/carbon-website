import React from 'react';
import Layout from 'gatsby-theme-carbon/src/templates/Default';
import { IconLibrary } from '../../../../plugins/gatsby-theme-carbon-svgs';

const frontmatter = {
  label:
    'Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  title: 'Icons',
  description:
    'Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  tabs: ['Library', 'Usage', 'Code', 'Contribute'],
};

const IconPage = ({ pageContext, ...rest }) => (
  <Layout pageContext={{ ...pageContext, frontmatter }} {...rest}>
    <IconLibrary />
  </Layout>
);

export default IconPage;
