import React from 'react';
import cx from 'classnames';
import { LogoGithub, Bee } from '@carbon/icons-react';
import { mdxIcon, iconInverse } from './MdxIcon.module.scss';

import sketch from './icons/sketch.svg';
import ase from './icons/ase.png';
import codesandbox from './icons/codesandbox.svg';
import stackblitz from './icons/stackblitz.svg';
import codepen from './icons/codepen.svg';
import illustrator from './icons/illustrator.svg';
import react from './icons/react.png';
import vue from './icons/vue.png';
import angular from './icons/angular.png';
import webcomponents from './icons/webcomponents.png';
import npm from './icons/npm.svg';
import storybook from './icons/storybook.svg';
import medium from './icons/medium.svg';
import sass from './icons/sass.png';
import figma from './icons/figma.svg';
import yourlearning from './icons/yourlearning.svg';

const localIcons = {
  sketch,
  ase,
  codesandbox,
  stackblitz,
  codepen,
  illustrator,
  react,
  vue,
  angular,
  webcomponents,
  npm,
  storybook,
  medium,
  sass,
  figma,
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
