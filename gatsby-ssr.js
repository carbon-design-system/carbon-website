/* eslint-disable import/prefer-default-export */
import React from 'react';
import ogimage from './src/images/ogimage.png';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="serif"
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap"
      rel="stylesheet"
    />,
    <meta key="og:image" property="og:image" content={ogimage} />,
    <meta
      key="og:image:alt"
      property="og:image:alt"
      content="Carbon Design System logo"
    />,
    <meta key="twitter:image" property="og:image" content={ogimage} />,
    <meta
      key="twitter:image:alt"
      property="twitter:image:alt"
      content="Carbon Design System logo"
    />,
    <meta property="og:type" content="website" />,
    <meta property="og:site_name" content="Carbon Design System" />,
    <meta
      property="og:description"
      content="Our style guide helps us collaborate across disciplines to build a great experience for all of Shopify’s merchants. It promotes consistency, but it’s not a blueprint. Be creative, explore, and evolve the system."
    />,
    <meta property="og:url" content="https://www.carbondesignsystem.com" />,
    <meta property="twitter:card" content="summary_large_image" />,
    <meta property="twitter:site" content="@_carbondesign" />,
    <meta property="twitter:title" content="Carbon Design System" />,
    <meta
      property="twitter:description"
      content="Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI."
    />,
  ]);
};
