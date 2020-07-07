/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { useLayoutEffect } from 'react';
import useMedia from 'use-media';
import { breakpoints } from '@carbon/layout';

import LeftNav from 'gatsby-theme-carbon/src/components/LeftNav';
import Meta from 'gatsby-theme-carbon/src/components/Meta';
import Header from 'gatsby-theme-carbon/src/components/Header';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import Container from 'gatsby-theme-carbon/src/components/Container';

import 'gatsby-theme-carbon/src/styles/index.scss';

import {
  layout,
  banner,
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
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });

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
      <header className={banner}>
        Black Lives Matter.&nbsp;
        <a href="https://support.eji.org/give/153413/#!/donation/checkout">
          Support the <span className={initialism}>EJI</span>
          <span className={fullName}>Equal Justice Initiative</span>
        </a>
      </header>
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
