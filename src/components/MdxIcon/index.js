import React from 'react';
import { LogoGithub32, Bee32 } from '@carbon/icons-react';
import { mdxIcon } from './MdxIcon.module.scss';

import sketch from './icons/sketch.svg';
import ase from './icons/ase.png';
import codesandbox from './icons/codesandbox.svg';
import codepen from './icons/codepen.svg';
import illustrator from './icons/illustrator.svg';

const localIcons = {
  sketch,
  ase,
  codesandbox,
  codepen,
  illustrator,
};

const carbonIcons = {
  github: LogoGithub32,
  bee: Bee32,
};

const MdxIcon = ({ name }) => {
  if (localIcons[name]) {
    return (
      <img className={mdxIcon} alt={`${name} icon`} src={localIcons[name]} />
    );
  }

  if (carbonIcons[name]) {
    const Icon = carbonIcons[name];
    return <Icon className={mdxIcon} />;
  }

  return null;
};

export default MdxIcon;
