import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const links = {
  firstCol: [
    {
      href: 'https://www.carbondesignsystem.com/help/contact-us',
      linkText: 'Contact us',
    },
    { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of use' },
    { href: 'https://www.ibm.com/', linkText: 'IBM.com' },
  ],
  secondCol: [
    { href: 'https://medium.com/carbondesign', linkText: 'Medium' },
    { href: 'https://twitter.com/_carbondesign', linkText: 'Twitter' },
  ],
};

const CustomFooter = ({Content}) => <Footer links={links} Content={Content}/>;

export default CustomFooter;
