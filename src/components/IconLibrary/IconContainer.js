/* eslint-disable camelcase */
import React from 'react';

import {
  iconContainer,
  iconContainerInside,
  flexContainer,
  name,
} from './IconLibrary.module.scss';

const IconContainer = ({ icon }) => (
  <div className={iconContainer}>
    <div className={iconContainerInside}>
      <div className={flexContainer}>
        <span className={name}>{icon.friendly_name}</span>
        <icon.Component>
          <title>{icon.friendly_name}</title>
        </icon.Component>
      </div>
    </div>
  </div>
);

export default IconContainer;
