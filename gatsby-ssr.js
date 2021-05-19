/* eslint-disable import/prefer-default-export */
import React from 'react';
import ogimage from './src/images/ogimage.png';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
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
    <meta property="og:type" key="og:type" content="website" />,
    <meta
      property="twitter:card"
      key="twitter:card"
      content="summary_large_image"
    />,
    <meta
      property="twitter:site"
      key="twitter:site"
      content="@_carbondesign"
    />,
    <script
      src="https://cdn.usefathom.com/script.js"
      spa="auto"
      site="VMSGXQRS"
      key="fathom"
      defer
    />,
  ]);
};
