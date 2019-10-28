import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import { useStaticQuery, graphql } from 'gatsby';
import Packages from '../../../package.json';

const currentYear = new Date().getFullYear();

const version = Packages.dependencies['carbon-components'];
const reactVersion = Packages.dependencies['carbon-components-react'];

const Content = () => {
  const { site } = useStaticQuery(graphql`
    query BUILD_TIME_QUERY {
      site {
        buildTime(formatString: "MMMM Do, YYYY")
      }
    }
  `);

  return (
    <>
      <p>
        Have questions? Email us or open
        <br /> an issue on{' '}
        <a
          style={{ textDecoration: 'underline' }}
          href="https://github.com/carbon-design-system/carbon-website/issues/new">
          GitHub.
        </a>
      </p>
      <p>
        Vanilla Components version {version}
        <br />
        React Components version {reactVersion}
        <br />
        Last updated {site.buildTime}
        <br />
        Copyright © {currentYear} IBM
      </p>
    </>
  );
};

const links = {
  firstCol: [
    {
      href: 'https://www.carbondesignsystem.com/how-to-contribute/overview',
      linkText: 'Contribute',
    },
    { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of use' },
    { href: 'https://www.ibm.com/', linkText: 'IBM.com' },
  ],
  secondCol: [
    { href: 'https://medium.com/carbondesign', linkText: 'Medium' },
    { href: 'https://twitter.com/_carbondesign', linkText: 'Twitter' },
    { href: 'https://www.netlify.com/', linkText: 'Netlify' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
