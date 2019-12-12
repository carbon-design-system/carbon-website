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
    <meta property="twitter:card" content="summary_large_image" />,
    <meta property="twitter:site" content="@_carbondesign" />,
  ]);
};
