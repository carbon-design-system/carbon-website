/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';
import {
  baseFontSize,
  breakpoints as carbonBreakpoints,
} from '@carbon/elements';
import { findLastIndex, values } from 'lodash-es';

import InputRange from './InputRange';
import StickyContainer from './StickyContainer';
import TypesetExample from './TypesetExample';

const { prefix } = settings;

const typeScale = {
  'caption-01': {
    sm: {
      step: 1,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.75,
      'line-height': 1,
      'letter-spacing': 0.32,
    },
  },
  'caption-02': {
    sm: {
      step: 1,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.875,
      'line-height': 1.125,
      'letter-spacing': 0.16,
    },
  },
  'label-01': {
    sm: {
      step: 1,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.75,
      'line-height': 1,
      'letter-spacing': 0.32,
    },
  },
  'label-02': {
    sm: {
      step: 1,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.875,
      'line-height': 1.125,
      'letter-spacing': 0.16,
    },
  },
  'helper-text-01': {
    sm: {
      step: 1,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.75,
      'line-height': 1,
      'letter-spacing': 0.32,
    },
  },
  'helper-text-02': {
    sm: {
      step: 1,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.875,
      'line-height': 1.125,
      'letter-spacing': 0.16,
    },
  },

  'body-short-01': {
    sm: {
      step: 2,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.875,
      'line-height': 1.125,
      'letter-spacing': 0.16,
    },
  },
  'body-short-02': {
    sm: {
      step: 3,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1,
      'line-height': 1.375,
      'letter-spacing': 0,
    },
  },
  'body-long-01': {
    sm: {
      step: 2,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 0.875,
      'line-height': 1.25,
      'letter-spacing': 0.16,
    },
  },
  'body-long-02': {
    sm: {
      step: 3,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1,
      'line-height': 1.5,
      'letter-spacing': 0,
    },
  },
  'code-01': {
    sm: {
      step: 1,
      font: 'IBM Plex Mono',
      'font-weight': '400',
      'font-size': 0.75,
      'line-height': 1,
      'letter-spacing': 0.32,
    },
  },
  'code-02': {
    sm: {
      step: 1,
      font: 'IBM Plex Mono',
      'font-weight': '400',
      'font-size': 0.875,
      'line-height': 1.25,
      'letter-spacing': 0.32,
    },
  },
  'productive-heading-01': {
    sm: {
      step: 2,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 0.875,
      'line-height': 1.125,
      'letter-spacing': 0.16,
    },
  },
  'productive-heading-02': {
    sm: {
      step: 3,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 1,
      'line-height': 1.375,
      'letter-spacing': 0,
    },
  },
  'productive-heading-03': {
    sm: {
      step: 3,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.25,
      'line-height': 1.75,
      'letter-spacing': '0',
    },
  },
  'productive-heading-04': {
    sm: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
  },
  'productive-heading-05': {
    sm: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
  },
  'productive-heading-06': {
    sm: {
      step: 9,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
    },
  },
  'productive-heading-07': {
    sm: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 3.375,
      'line-height': 4,
      'letter-spacing': '0',
    },
  },
  'expressive-heading-01': {
    sm: {
      step: 2,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 0.875,
      'line-height': 1.25,
      'letter-spacing': 0.16,
    },
  },
  'expressive-heading-02': {
    sm: {
      step: 3,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 1,
      'line-height': 1.5,
      'letter-spacing': 0,
    },
  },
  'expressive-heading-03': {
    sm: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.25,
      'line-height': 1.75,
      'letter-spacing': '0',
    },
    max: {
      step: 13,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.5,
      'line-height': 1.75,
      'letter-spacing': '0',
    },
  },
  'expressive-heading-04': {
    sm: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    md: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    lg: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    xlg: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    max: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
  },
  'expressive-heading-05': {
    sm: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    md: {
      step: 9,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2.25,
      'line-height': 2.75,
      'letter-spacing': '0',
    },
    lg: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
    },
    xlg: {
      step: 11,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 3,
      'line-height': 3.5,
      'letter-spacing': '0',
    },
    max: {
      step: 13,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
    },
  },
  'expressive-heading-06': {
    sm: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    md: {
      step: 9,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 2.25,
      'line-height': 2.75,
      'letter-spacing': '0',
    },
    lg: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
    },
    xlg: {
      step: 11,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 3,
      'line-height': 3.5,
      'letter-spacing': '0',
    },
    max: {
      step: 13,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
    },
  },
  'expressive-paragraph-01': {
    sm: {
      step: 6,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 1.5,
      'line-height': 1.875,
      'letter-spacing': '0',
    },
    md: {
      step: 6,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 1.5,
      'line-height': 1.875,
      'letter-spacing': '0',
    },
    lg: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    xlg: {
      step: 7,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    max: {
      step: 8,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
  },
  'quotation-01': {
    sm: {
      step: 5,
      font: 'IBM Plex Serif',
      'font-weight': '400',
      'font-size': 1.25,
      'line-height': 1.625,
      'letter-spacing': '0',
    },
    md: {
      step: 5,
      font: 'IBM Plex Serif',
      'font-weight': '400',
      'font-size': 1.25,
      'line-height': 1.625,
      'letter-spacing': '0',
    },
    lg: {
      step: 6,
      font: 'IBM Plex Serif',
      'font-weight': '400',
      'font-size': 1.5,
      'line-height': 1.875,
      'letter-spacing': '0',
    },
    xlg: {
      step: 7,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    max: {
      step: 8,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
  },
  'quotation-02': {
    sm: {
      step: 8,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    md: {
      step: 9,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 2.25,
      'line-height': 2.75,
      'letter-spacing': '0',
    },
    lg: {
      step: 10,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
    },
    xlg: {
      step: 11,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 3,
      'line-height': 3.5,
      'letter-spacing': '0',
    },
    max: {
      step: 13,
      font: 'IBM Plex Serif',
      'font-weight': '300',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
    },
  },
  'display-01': {
    sm: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    md: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    lg: {
      step: 12,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 3.375,
      'line-height': 4,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    xlg: {
      step: 13,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    max: {
      step: 15,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 4.75,
      'line-height': 5.375,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
  },
  'display-02': {
    sm: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    md: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    lg: {
      step: 12,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 3.375,
      'line-height': 4,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    xlg: {
      step: 13,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    max: {
      step: 15,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 4.75,
      'line-height': 5.375,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
  },
  'display-03': {
    sm: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    md: {
      step: 14,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 4.25,
      'line-height': 4.875,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    lg: {
      step: 17,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 5.75,
      'line-height': 6.375,
      'letter-spacing': '-0.64',
      warning: 'Never use this style as the main headline',
    },
    xlg: {
      step: 20,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 7.625,
      'line-height': 8.125,
      'letter-spacing': '-0.64',
      warning: 'Never use this style as the main headline',
    },
    max: {
      step: 23,
      font: 'IBM Plex Sans',
      'font-weight': '300',
      'font-size': 9.75,
      'line-height': 10.25,
      'letter-spacing': '-0.96',
      warning: 'Never use this style as the main headline',
    },
  },
  'display-04': {
    sm: {
      step: 10,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    md: {
      step: 14,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 4.25,
      'line-height': 4.875,
      'letter-spacing': '0',
      warning: 'Never use this style as the main headline',
    },
    lg: {
      step: 17,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 5.75,
      'line-height': 6.375,
      'letter-spacing': -0.64,
      warning: 'Never use this style as the main headline',
    },
    xlg: {
      step: 20,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 7.625,
      'line-height': 8.125,
      'letter-spacing': -0.64,
      warning: 'Never use this style as the main headline',
    },
    max: {
      step: 23,
      font: 'IBM Plex Sans',
      'font-weight': '600',
      'font-size': 9.75,
      'line-height': 10.25,
      'letter-spacing': -0.96,
      warning: 'Never use this style as the main headline',
    },
  },
};

const typeSets = {
  supportingStyle: [
    {
      description:
        'This is for inline code snippets and smaller code elements.',
      version: 'mono',
      key: 'code-01',
      name: 'code-01',
    },
    {
      description: 'This is for large code snippets and larger code elements.',
      version: 'mono',
      key: 'code-02',
      name: 'code-02',
    },
    {
      description:
        'This is for captions or legal content in a layout — not for body copy.',
      key: 'caption-01',
      name: 'caption-01',
    },
    {
      description:
        'This is for captions or legal content in a layout — not for body copy.',
      key: 'caption-02',
      name: 'caption-02',
    },
    {
      description:
        'This is for explanatory helper text that appears below a field title within a component.',
      key: 'helper-text-01',
      name: 'helper-text-01',
    },
    {
      description:
        'This is for explanatory helper text that appears below a field title within a component.',
      key: 'helper-text-02',
      name: 'helper-text-02',
    },
    {
      description:
        'This is a multipurpose type style that can be used for field labels in components, error messages, and captions. It should not be used for body copy.',
      key: 'label-02',
      name: 'label-02',
    },
  ],
  supportingStyles: [
    {
      description:
        'This is for inline code snippets and smaller code elements.',
      version: 'mono',
      key: 'code-01',
      name: 'code-01',
    },
    {
      description: 'This is for large code snippets and larger code elements.',
      version: 'mono',
      key: 'code-02',
      name: 'code-02',
    },
    {
      description: 'This is for field labels in components and error messages.',
      key: 'label-01',
      name: 'label-01',
    },
    {
      description:
        'This is for explanatory helper text that appears below a field title within a component.',
      key: 'helper-text-01',
      name: 'helper-text-01',
    },
  ],
  body: [
    {
      description:
        'This is for short paragraphs with no more than four lines and is commonly used in components.',
      key: 'body-short-01',
      name: 'body-short-01',
    },
    {
      description:
        'This is commonly used in both the expressive and the productive type theme layouts for long paragraphs with more than four lines. It is a good size for comfortable, long-form reading. Use this for longer body copy in components such as accordion or structured list. Always left-align this type; never center it.',
      key: 'body-long-01',
      name: 'body-long-01',
    },
    {
      description:
        'This is for short paragraphs with no more than four lines and is commonly used in the expressive type theme for layouts.',
      key: 'body-short-02',
      name: 'body-short-02',
    },
    {
      description:
        'This is commonly used in the expressive type theme layouts for long paragraphs with more than four lines. The looser line height and larger size makes for comfortable, long-form reading, in mediums that allow for more space. This size type is rarely used for body copy in components. Always left-align type; never center it.',
      key: 'body-long-02',
      name: 'body-long-02',
    },
  ],
  fixedHeadings: [
    {
      description: 'This is for component and layout headings.',
      key: 'productive-heading-01',
      name: 'productive-heading-01',
    },
    {
      description: 'This is for component and layout headings.',
      key: 'productive-heading-02',
      name: 'productive-heading-02',
    },
    {
      description: 'This is for component and layout headings.',
      key: 'productive-heading-03',
      name: 'productive-heading-03',
    },
    {
      description: 'This is for layout headings.',
      key: 'productive-heading-04',
      name: 'productive-heading-04',
    },
    {
      description: 'This is for layout headings.',
      key: 'productive-heading-05',
      name: 'productive-heading-05',
    },
    {
      description: 'This is for layout headings.',
      key: 'productive-heading-06',
      name: 'productive-heading-06',
    },
    {
      description: 'This is for layout headings.',
      key: 'productive-heading-07',
      name: 'productive-heading-07',
    },
  ],
  headings: [
    {
      description: 'This is for component and layout headings.',
      key: 'expressive-heading-01',
      name: 'expressive-heading-01',
    },
    {
      description: 'This is for component and layout headings.',
      key: 'expressive-heading-02',
      name: 'expressive-heading-02',
    },
    {
      description: 'This is for component and layout headings.',
      key: 'expressive-heading-03',
      name: 'expressive-heading-03',
    },
    {
      description: 'Heading style',
      key: 'expressive-heading-04',
      name: 'expressive-heading-04',
    },
    {
      description: 'Heading style',
      key: 'expressive-heading-05',
      name: 'expressive-heading-05',
    },
    {
      description: 'Heading style',
      key: 'expressive-heading-06',
      name: 'expressive-heading-06',
    },
  ],
  paragraphsAndQuotes: [
    {
      description: 'Paragraph',
      key: 'expressive-paragraph-01',
      name: 'expressive-paragraph-01',
    },
    {
      description: '“Quote.”',
      key: 'quotation-01',
      name: 'quotation-01',
    },
    {
      description: '“Quote.”',
      key: 'quotation-02',
      name: 'quotation-02',
    },
  ],
  display: [
    {
      description: 'Display',
      key: 'display-01',
      name: 'display-01',
    },
    {
      description: 'Display',
      key: 'display-02',
      name: 'display-02',
    },
    {
      description: 'Display',
      key: 'display-03',
      name: 'display-03',
    },
    {
      description: 'Display',
      key: 'display-04',
      name: 'display-04',
    },
  ],
};

const breakpoints = {
  sm: Number(carbonBreakpoints.sm.width.replace('rem', '')) * baseFontSize,
  md: Number(carbonBreakpoints.md.width.replace('rem', '')) * baseFontSize,
  lg: Number(carbonBreakpoints.lg.width.replace('rem', '')) * baseFontSize,
  xlg: Number(carbonBreakpoints.xlg.width.replace('rem', '')) * baseFontSize,
  max: Number(carbonBreakpoints.max.width.replace('rem', '')) * baseFontSize,
};

const nextLargerBreakpointPx = (viewportWidth) =>
  values(breakpoints)[indexOfCurrentBreakpoint(viewportWidth) + 1];

const indexOfCurrentBreakpoint = (viewportWidth) =>
  findLastIndex(values(breakpoints), (width) => viewportWidth >= width);

const isWithinBreakpoint = (viewportWidth, currentBreakpoint) => {
  if (viewportWidth === currentBreakpoint) return true;
  return (
    viewportWidth >= currentBreakpoint &&
    viewportWidth < nextLargerBreakpointPx(currentBreakpoint)
  );
};

class TypesetStyle extends React.Component {
  state = {
    simulatedScreenWidth: 1056,
    tab: 0,
    sticky: false,
    mobile: false,
  };

  componentDidMount() {
    if (window.innerWidth < 500) {
      this.setState({
        mobile: true,
      });
    }
    this.addResizeListener();
    this.addScrollListener();
  }

  addScrollListener() {
    document.addEventListener('scroll', () => {
      if (this.refs.stickyBar) {
        if (this.refs.stickyBar.getBoundingClientRect().top <= 112) {
          this.setState({
            sticky: true,
          });
        } else if (this.refs.stickyBar.getBoundingClientRect().top > 112) {
          this.setState({
            sticky: false,
          });
        }
      }
    });
  }

  addResizeListener() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 500) {
        this.setState({
          mobile: true,
        });
      } else if (window.innerWidth > 500) {
        this.setState({
          mobile: false,
        });
      }
    });
  }

  toggleBreakpoint = (e) => {
    this.setState({ simulatedScreenWidth: Number(e.target.value) });
  };

  toggleSet = (value) => {
    this.setState({ tab: value });
  };

  getButtons = () =>
    Object.keys(breakpoints).map((breakpointName) => (
      <button
        className={`${prefix}--typeset-style-button ${prefix}--type-body-long-01 ${
          isWithinBreakpoint(
            this.state.simulatedScreenWidth,
            breakpoints[breakpointName]
          )
            ? 'selected'
            : ''
        }`}
        value={breakpoints[breakpointName]}
        selected={isWithinBreakpoint(
          this.state.simulatedScreenWidth,
          breakpoints[breakpointName]
        )}
        onClick={this.toggleBreakpoint}
        key={`breakpoint-tab${breakpointName}`}>
        {breakpointName}
      </button>
    ));

  render() {
    const { navBar, banner, secondary, top, breakpointControls, typesets } =
      this.props;

    const typesetStyleStickyClassnames = classnames(
      [`${prefix}--typeset-style-controls-sticky`],
      [`${prefix}--row`],
      {
        [`${prefix}--typeset-style-controls-sticky-stuck`]: this.state.sticky,
      }
    );

    return (
      <div className={`${prefix}--typeset-style-container`}>
        <StickyContainer
          navBar={navBar || true}
          banner={banner || true}
          secondary={secondary || false}
          top={top || null}>
          {breakpointControls && (
            <>
              <div
                className={`${prefix}--typeset-style-title-shiv ${prefix}--row`}
              />
              <div ref="stickyBar" className={typesetStyleStickyClassnames}>
                <div className={`${prefix}--typeset-style-breakpoint-controls`}>
                  <span
                    className={`${prefix}--type-body-long-01 ibm-padding--horizontal`}
                    style={{ marginBottom: 0 }}>
                    Breakpoints
                  </span>
                  <div
                    className={`${prefix}--typeset-style-button-controls-container`}>
                    {this.getButtons()}
                  </div>
                </div>
                <div className={`${prefix}--typeset-style-screen-controls`}>
                  <span
                    className={`${prefix}--type-body-long-01 ${prefix}--typeset-style-screen-width-label`}
                    style={{ marginBottom: 0, whiteSpace: 'nowrap' }}>
                    Screen width
                  </span>
                  <InputRange
                    id="screenWidthInput"
                    min={breakpoints.sm}
                    max={breakpoints.max}
                    value={this.state.simulatedScreenWidth}
                    onChange={this.toggleBreakpoint}
                  />
                  <label
                    className={`${prefix}--typeset-style-screen-label ${prefix}--type-body-long-01`}
                    htmlFor="screenWidthInput">
                    {this.state.simulatedScreenWidth}
                  </label>
                </div>
              </div>
            </>
          )}
        </StickyContainer>
        <div>
          {typesets
            .replace(', ', ',')
            .split(',')
            .map((typeset, i) => (
              <>
                <h4 className="page-h4">
                  {typeset
                    .replace(/fixed/g, '')
                    .replace(/([a-z])([A-Z])/g, '$1 $2')
                    .toLowerCase()}
                </h4>
                <TypesetExample
                  key={i}
                  simulatedScreenWidth={this.state.simulatedScreenWidth}
                  name={typeset}
                  typeSet={typeSets[typeset]}
                  typeScale={typeScale}
                />
              </>
            ))}
        </div>
      </div>
    );
  }
}

export default TypesetStyle;

// these props are passed onto the sticky container
TypesetStyle.propTypes = {
  // if site has banner at top ( ex. go to v1)
  banner: PropTypes.bool,

  // if page navBar is showing / hiding, toggle this on/off
  navBar: PropTypes.bool,

  // for items that are on pages that already have a sticky item
  secondary: PropTypes.bool,

  // if custom top is necessary, must include units - (rem, px, etc)
  top: PropTypes.string,

  // show / hide breakpoint controls
  breakpointControls: PropTypes.bool,

  // comma separated list of typesets to display
  typesets: PropTypes.string,
};
