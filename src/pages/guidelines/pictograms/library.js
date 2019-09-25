import React from 'react';
import Layout from 'gatsby-theme-carbon/src/templates/Default';
import IconLibrary from '../../../components/SvgLibraries/PictogramLibrary';

const frontmatter = {
  label:
    'Pictograms are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  title: 'Pictograms',
  description:
    'Pictograms are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  tabs: ['Library', 'Usage', 'Contribute'],
};

export default ({ pageContext, ...rest }) => (
  <Layout pageContext={{ ...pageContext, frontmatter }} {...rest}>
    <IconLibrary />
  </Layout>
);
