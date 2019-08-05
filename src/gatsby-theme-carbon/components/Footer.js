import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = () => (
  <>
    <p>
      Have questions? Email us or open
      <br /> an issue on{' '}
      <a
        style={{ textDecoration: 'underline' }}
        href="https://github.com/carbon-design-system/carbon-www/issues/new">
        Github.
      </a>
    </p>
    <p>
      Vanilla Components version 10.4.1
      <br />
      React Components version 7.4.1
      <br />
      Last updated August 2, 2019
      <br />
      Copyright © 2019 IBM
    </p>
  </>
);

const links = {
  firstCol: [
    {
      href: 'https://www.carbondesignsystem.com/contributions/overview',
      linkText: 'Contribute',
    },
    { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of use' },
    { href: 'https://www.ibm.com/', linkText: 'IBM.com' },
  ],
  secondCol: [
    { href: 'https://dribbble.com/_carbondesign', linkText: 'Dribble' },
    { href: 'https://medium.com/carbondesign', linkText: 'Medium' },
    { href: 'https://twitter.com/_carbondesign', linkText: 'Twitter' },
    { href: 'https://www.netlify.com/', linkText: 'Netlify' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
