import React from 'react';
import Layout from 'gatsby-theme-carbon/src/templates/Default';
import IconLibrary from '../../../components/SvgLibraries/IconLibrary';

const frontmatter = {
  label:
    'Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  title: 'Iconography',
  description:
    'Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  tabs: ['Usage', 'Icons', 'Pictograms', 'Contribute'],
};

export default ({ pageContext, ...rest }) => (
  <Layout pageContext={{ ...pageContext, frontmatter }} {...rest}>
    <IconLibrary />
  </Layout>
);
