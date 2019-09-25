/* eslint-disable import/prefer-default-export */
import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="serif"
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap"
      rel="stylesheet"
    />,
  ]);
};
