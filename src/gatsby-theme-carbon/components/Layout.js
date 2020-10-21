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

import 'gatsby-theme-carbon/src/styles/index.scss';
import {
  layout,
  layoutNoBanner,
  banner,
  bannerClose,
  initialism,
  fullName,
  halloweenButton
} from '../../styles/Layout.module.scss';

const ThemeContext = React.createContext();

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
  const themeContext = {
    toggleHalloween() {
      setIsItHalloween(!isItHalloween);
    },
  };

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

  return (
    <ThemeContext.Provider value={themeContext}>
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
        <LeftNav homepage={homepage} is404Page={is404} theme={theme} />
        <Container homepage={homepage} theme={theme}>
          {children}
          <Footer/>
        </Container>
      </div>
    </ThemeContext.Provider>
  );
};

export function ToggleHalloweenButton() {
  const { toggleHalloween } = React.useContext(ThemeContext);
  return <Button kind="ghost" onClick={toggleHalloween} className={halloweenButton}>Happy Halloween!</Button>;
}

export default Layout;
