/* eslint-disable import/prefer-default-export */
import React from 'react';
import ogimage from './src/images/ogimage.png';

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }) => {
  setBodyAttributes({
    class: 'body--preload',
  });
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
    <meta key="og:type" property="og:type" content="website" />,
    <meta
      key="twitter:card"
      property="twitter:card"
      content="summary_large_image"
    />,
    <meta
      key="twitter:site"
      property="twitter:site"
      content="@_carbondesign"
    />,
  ]);
};
