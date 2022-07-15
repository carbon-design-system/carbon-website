import React from 'react';
import ogimage from './static/og-image.png';

export const onRenderBody = ({ setHeadComponents }) => {
  const script = `
  if(!window) window = {};
  window.idaPageIsSPA = true;
  window.digitalData = {
    page: {
      category: {
        primaryCategory: 'DESIGN',
      },
      pageInfo: {
        ibm: {
          siteID: 'CARBON_DESIGN_SYSTEM',
          country: 'US',
          industry: 'Design',
          owner: 'carbon@us.ibm.com',
        },
      },
    },
  }`;

  return setHeadComponents([
    <meta
      key="description"
      name="description"
      content="Carbon is IBM’s open source design system for products and digital experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors."
    />,
    <meta key="image" name="image" content={ogimage} />,
    <meta
      key="og:url"
      property="og:url"
      content="https://www.carbondesignsystem.com"
    />,
    <meta key="og:title" property="og:title" content="Carbon Design System" />,
    <meta
      key="og:description"
      property="og:description"
      content="Carbon is IBM’s open source design system for products and digital experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors."
    />,
    <meta
      key="og:image"
      property="og:image"
      content={`https://www.carbondesignsystem.com${ogimage}`}
    />,
    <meta
      key="og:image:alt"
      property="og:image:alt"
      content="Carbon Design System logo"
    />,
    <meta
      key="twitter:image"
      name="twitter:image"
      content={`https://www.carbondesignsystem.com${ogimage}`}
    />,
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
    <meta
      key="twitter:creator"
      name="twitter:creator"
      content="@_carbondesign"
    />,
    <script
      src="https://cdn.usefathom.com/script.js"
      spa="auto"
      site="VMSGXQRS"
      key="fathom"
      defer
    />,
    <script key="digital-data" dangerouslySetInnerHTML={{ __html: script }} />,
    <script
      defer
      key="core-metrics"
      src="https://1.www.s81c.com/common/stats/ibm-common.js"
      type="text/javascript"
    />,
  ]);
};
