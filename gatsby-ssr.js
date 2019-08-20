/* eslint-disable import/prefer-default-export */
import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) =>
  setPostBodyComponents([
    <script
      key="docsearch"
      src="https://cdn.jsdelivr.net/npm/docsearch.js@2.6.2/dist/cdn/docsearch.min.js"
    />,
  ]);
