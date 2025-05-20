/* eslint-disable global-require */
import React, { useLayoutEffect } from 'react';

import LeftNav from 'gatsby-theme-carbon/src/components/LeftNav';
import Meta from 'gatsby-theme-carbon/src/components/Meta';
import Header from 'gatsby-theme-carbon/src/components/Header';
import { Switcher } from 'gatsby-theme-carbon/src/components/Switcher';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import Container from 'gatsby-theme-carbon/src/components/Container';
import Banner from '../../components/Banner';

import 'gatsby-theme-carbon/src/styles/index.scss';
import { layout } from '../../styles/Layout.module.scss';

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

  return (
    <div className={layout}>
      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      {homepage && <Banner />}
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
