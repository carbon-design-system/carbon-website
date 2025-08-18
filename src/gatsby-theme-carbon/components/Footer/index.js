import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import packageJson from 'gatsby-theme-carbon/package.json';

const currentYear = new Date().getFullYear();
const versions = {
  react: packageJson.dependencies['@carbon/react'],
};

const Content = ({ buildTime }) => (
  <>
    <p>
      Have questions? Email us <br />
      at <a href="mailto:carbon@us.ibm.com">carbon@us.ibm.com</a> <br />
      or open an issue on{' '}
      <a
        style={{ textDecoration: 'underline' }}
        href="https://github.com/carbon-design-system/carbon-website/issues/new">
        GitHub.
      </a>
    </p>
    <p>
      React Components version {versions.react}
      <br />
      Last updated {buildTime}
      <br />
      Copyright © {currentYear} IBM
    </p>
  </>
);

const links = {
  firstCol: [
    {
      href: 'https://www.carbondesignsystem.com/help/contact-us',
      linkText: 'Contact us',
    },
    { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of use' },
    { href: 'https://www.ibm.com/able', linkText: 'Accessibility' },
    { href: 'https://www.ibm.com/', linkText: 'IBM.com' },
  ],
  secondCol: [
    { href: 'https://medium.com/carbondesign', linkText: 'Medium' },
    { href: 'https://x.com/_carbondesign', linkText: '𝕏' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
