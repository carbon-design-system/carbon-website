/* eslint-disable camelcase */
import React from 'react';

import {
  iconCard,
  iconCardInside,
  flexContainer,
  iconCardLabel,
} from './IconLibrary.module.scss';

const IconCard = ({ icon }) => (
  <li className={iconCard}>
    <div className={iconCardInside}>
      <div className={flexContainer}>
        <span title={icon.friendly_name} className={iconCardLabel}>
          {icon.friendly_name}
        </span>
        <icon.Component>
          <title>{icon.friendly_name}</title>
        </icon.Component>
      </div>
    </div>
  </li>
);

export default IconCard;
