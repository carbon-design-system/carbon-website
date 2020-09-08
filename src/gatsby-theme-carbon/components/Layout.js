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

import 'gatsby-theme-carbon/src/styles/index.scss';
import {
  layout,
  layoutNoBanner,
  banner,
  bannerClose,
  initialism,
  fullName,
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

  return (
    <div className={isBannerVisible ? layout : layoutNoBanner}>
      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      {isBannerVisible ? (
        <div className={banner} role="contentinfo">
          <span>
            Remember to vote. &nbsp;
            <a href="https://www.vote.org">Make sure you’re registered.</a>
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
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
