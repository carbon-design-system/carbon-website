import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import Packages from '../../../package.json';

const currentYear = new Date().getFullYear();

const version = Packages.dependencies['carbon-components'];
const reactVersion = Packages.dependencies['carbon-components-react'];

const Content = ({ buildTime }) => (
  <>
    <p>
      Have questions? Email us <br />
      at <a href="mailto:carbon@us.ibm.com">carbon@us.ibm.com</a> <br />
      or open an issue on{' '}
      <a
        style={{ textDecoration: 'underline' }}
        href="https://github.com/carbon-design-system/carbon-website/issues/new"
      >
        GitHub.
      </a>
    </p>
    <p>
      Vanilla Components version {version}
      <br />
      React Components version {reactVersion}
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
    { href: 'https://www.ibm.com/', linkText: 'IBM.com' },
  ],
  secondCol: [
    { href: 'https://medium.com/carbondesign', linkText: 'Medium' },
    { href: 'https://twitter.com/_carbondesign', linkText: 'Twitter' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
