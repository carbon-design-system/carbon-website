/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { useLayoutEffect, useEffect, useState } from 'react';

import LeftNav from 'gatsby-theme-carbon/src/components/LeftNav';
import Meta from 'gatsby-theme-carbon/src/components/Meta';
import Header from 'gatsby-theme-carbon/src/components/Header';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import Container from 'gatsby-theme-carbon/src/components/Container';
import { Close20 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import cx from 'classnames';
import packageJson from '../../../package.json'; 


import 'gatsby-theme-carbon/src/styles/index.scss';
import {
  layout,
  layoutNoBanner,
  banner,
  bannerClose,
  fullName,
  halloweenButton
} from '../../styles/Layout.module.scss';

const Layout = ({
  children,
  homepage,
  theme,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  tabs,
}) => {
  const is404 = children.key === null;
  const [isBannerVisible, setBannerVisibility] = useState(true);
  const [isItHalloween, setIsItHalloween] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isItHalloween'))
      setIsItHalloween(localStorage.getItem('isItHalloween') === 'true');
  }, [setIsItHalloween, isItHalloween]);

  const toggleHalloween = () => {
    localStorage.setItem('isItHalloween', !isItHalloween);
    setIsItHalloween(!isItHalloween);
  };

  const BeeBat = () => {
    return <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <circle cx="13" cy="8" r="2"/>
      <circle cx="19" cy="8" r="2"/>
      <path d="M31.8083,8.665A.8745.8745,0,0,0,31,8.125H29c-4.21,0-7.721,2.002-9.1648,4.9014a4.8186,4.8186,0,0,0-7.67,0C10.721,10.127,7.21,8.125,3,8.125H1A.8749.8749,0,0,0,.3816,9.6191L.4834,9.72A5.3885,5.3885,0,0,1,2.1612,15.751.8751.8751,0,0,0,3,16.875a2.8966,2.8966,0,0,1,2.1587.7266c.9783.9814.9714,2.8872.9668,4.1479l0,.25A.875.875,0,0,0,7,22.875h4.125V23a4.875,4.875,0,0,0,9.75,0v-.125H25A.875.875,0,0,0,25.875,22l0-.25c-.0046-1.2607-.0115-3.1665.9668-4.1479A2.8966,2.8966,0,0,1,29,16.875a.8751.8751,0,0,0,.8388-1.124,5.3883,5.3883,0,0,1,1.6765-6.0293l.1033-.103A.875.875,0,0,0,31.8083,8.665ZM16,12.875A3.1286,3.1286,0,0,1,19.125,16v.125h-6.25V16A3.1286,3.1286,0,0,1,16,12.875Zm-3.125,5h6.25v3.25h-6.25Zm-5.0007,3.25c-.0178-1.459-.1839-3.4619-1.4761-4.7588a4.1876,4.1876,0,0,0-2.31-1.1518A6.657,6.657,0,0,0,2.9524,9.875H3c4.5562,0,8.125,2.69,8.125,6.125v5.125ZM19.125,23a3.125,3.125,0,0,1-6.25,0v-.125h6.25Zm8.7868-7.7856a4.1876,4.1876,0,0,0-2.31,1.1518c-1.2922,1.2969-1.4583,3.3-1.4761,4.7588H20.875V16c0-3.4346,3.5688-6.125,8.125-6.125h.0481A6.6561,6.6561,0,0,0,27.9118,15.2144Z" transform="translate(0 0)"/>
      <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" fill="none" width="32" height="32"/>
    </svg>
  }

  const ToggleHalloweenButton = () => {
  return <Button kind="ghost" onClick={toggleHalloween} renderIcon={BeeBat} className={halloweenButton}></Button>;
  }

  useLayoutEffect(() => {
    const scroll = require('smooth-scroll')('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      clip: true,
      offset: tabs ? 112 : 64,
    });
    return scroll.destroy;
  }, [tabs]);

  useEffect(() => {
    if (localStorage.getItem('isBannerVisible'))
      setBannerVisibility(localStorage.getItem('isBannerVisible') === 'true');
  }, [setBannerVisibility]);

  const handleBannerClose = () => {
    localStorage.setItem('isBannerVisible', false);
    setBannerVisibility(false);
  };

  const layoutClassNames = cx({
    [`halloween`]: isItHalloween,
    [layout]: isBannerVisible,
    [layoutNoBanner]: !isBannerVisible,
  });

   //temporary footer stuff
   const currentYear = new Date().getFullYear();
   const versions = {
      components: packageJson.devDependencies['carbon-components'],
      react: packageJson.dependencies['carbon-components-react'],
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
        Vanilla Components version {versions.components}
        <br />
        React Components version {versions.react}
        <br />
        Last updated {buildTime}
        <br />
        Copyright © {currentYear} IBM
      </p>
      <p>
        <ToggleHalloweenButton/>
      </p>
    </>
  );

  return (
  
      <div className={layoutClassNames}>
        <Meta
          titleType={titleType}
          pageTitle={pageTitle}
          pageDescription={pageDescription}
          pageKeywords={pageKeywords}
        />
        {isBannerVisible ? (
          <div className={banner} role="contentinfo">
            <span>
              Make your choice<span className={fullName}>, America</span>.&nbsp;
              <a href="https://www.vote.org">vote.org</a>
            </span>
            <Button
              className={bannerClose}
              hasIconOnly
              renderIcon={Close20}
              onClick={handleBannerClose}
              iconDescription="Close the banner"
            />
          </div>
        ) : null}

        <Header />
        <Switcher />
        <LeftNav homepage={homepage} is404Page={is404} theme={isItHalloween ? "dark" : theme} />
        <Container homepage={homepage} theme={isItHalloween ? "dark" : theme}>
          {children}
          <Footer Content={Content}/>
        </Container>
      </div>
  );
};

export default Layout;
