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
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
      integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
      key="animejs"></script>,
  ]);
};
