import React from 'react';
import cx from 'classnames';
import { LogoGithub32, Bee32 } from '@carbon/icons-react';
import { mdxIcon, iconInverse } from './MdxIcon.module.scss';

import sketch from './icons/sketch.svg';
import ase from './icons/ase.png';
import codesandbox from './icons/codesandbox.svg';
import codepen from './icons/codepen.svg';
import illustrator from './icons/illustrator.svg';
import react from './icons/react.png';
import vue from './icons/vue.png';
import angular from './icons/angular.png';
import webcomponents from './icons/webcomponents.png';
import npm from './icons/npm.svg';

const localIcons = {
  sketch,
  ase,
  codesandbox,
  codepen,
  illustrator,
  react,
  vue,
  angular,
  webcomponents,
  npm,
};

const carbonIcons = {
  github: LogoGithub32,
  bee: Bee32,
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
    return <Icon className={cx(mdxIcon, iconColor[color])} />;
  }

  return null;
};

export default MdxIcon;
