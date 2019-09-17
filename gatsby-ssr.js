/* eslint-disable import/prefer-default-export */
import React from 'react';

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <link
      key="serif"
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap"
      rel="stylesheet"
    />,
  ]);
  setPostBodyComponents([
    <script
      key="docsearch"
      src="https://cdn.jsdelivr.net/npm/docsearch.js@2.6.2/dist/cdn/docsearch.min.js"
    />,
  ]);
};
