import React from 'react';
import cx from 'classnames';
import { LogoGithub, Bee } from '@carbon/icons-react';
import { mdxIcon, iconInverse } from './MdxIcon.module.scss';

import angular from './icons/angular.png';
import ase from './icons/ase.png';
import carbon from './icons/carbon.svg';
import codepen from './icons/codepen.svg';
import codesandbox from './icons/codesandbox.svg';
import figma from './icons/figma.svg';
import illustrator from './icons/illustrator.svg';
import medium from './icons/medium.svg';
import npm from './icons/npm.svg';
import react from './icons/react.png';
import sass from './icons/sass.png';
import sketch from './icons/sketch.svg';
import stackblitz from './icons/stackblitz.svg';
import storybook from './icons/storybook.svg';
import svelte from './icons/svelte.png';
import vue from './icons/vue.png';
import webcomponents from './icons/webcomponents.png';
import yourlearning from './icons/yourlearning.svg';

const localIcons = {
  angular,
  ase,
  carbon,
  codepen,
  codesandbox,
  figma,
  illustrator,
  medium,
  npm,
  react,
  sass,
  sketch,
  stackblitz,
  storybook,
  svelte,
  vue,
  webcomponents,
  yourlearning,
};

const carbonIcons = {
  github: LogoGithub,
  bee: Bee,
};

const iconColor = {
  inverse: iconInverse,
};

const MdxIcon = ({ name, color }) => {
  if (localIcons[name]) {
    return (
      <img className={mdxIcon} alt={`${name} icon`} src={localIcons[name]} />
    );
  }

  if (carbonIcons[name]) {
    const Icon = carbonIcons[name];
    return <Icon className={cx(mdxIcon, iconColor[color])} size={32} />;
  }

  return null;
};

export default MdxIcon;
