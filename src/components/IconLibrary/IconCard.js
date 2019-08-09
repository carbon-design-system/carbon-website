/* eslint-disable camelcase */
import React from 'react';

import {
  iconCard,
  iconCardInside,
  flexContainer,
  name,
} from './IconLibrary.module.scss';

const IconCard = ({ icon }) => (
  <div className={iconCard}>
    <div className={iconCardInside}>
      <div className={flexContainer}>
        <span className={name}>{icon.friendly_name}</span>
        <icon.Component>
          <title>{icon.friendly_name}</title>
        </icon.Component>
      </div>
    </div>
  </div>
);

export default IconCard;
