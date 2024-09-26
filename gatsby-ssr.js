import React from 'react';
import ogimage from './src/images/ogimage.png';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const script = `
  if(!window) window = {};
  window.idaPageIsSPA = false;
  window.digitalData = {
    page: {
      category: {
        primaryCategory: 'DESIGN',
      },
      pageInfo: {
        ibm: {
          siteID: 'CARBON_DESIGN_SYSTEM_WWW_v10',
          country: 'US',
          industry: 'Design',
          owner: 'carbon@us.ibm.com',
        },
      },
    },
  }`;

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
      key="video-player"
      type="module"
      src="https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/video-player.min.js" />,
  ]);

  setPostBodyComponents([
    <script key="digital-data" dangerouslySetInnerHTML={{ __html: script }} />,
    <script
      defer
      key="core-metrics"
      src="https://1.www.s81c.com/common/stats/ibm-common.js"
      type="text/javascript"
    />,
  ]);
};
