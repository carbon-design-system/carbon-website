/* eslint-disable camelcase */
import React from 'react';
import { pascal } from 'change-case';
import {
  iconCard,
  iconCardInside,
  flexContainer,
  triggerText,
} from './IconLibrary.module.scss';

const IconCard = ({ icon }) => (
  <li className={iconCard}>
    <div className={iconCardInside}>
      <span className={triggerText}>{icon.friendly_name}</span>
      <div className={flexContainer}>
        {icon.Component ? (
          <icon.Component>
            <title>{icon.friendly_name}</title>
          </icon.Component>
        ) : (
          <p>Error: no component found for {pascal(icon.friendly_name)}</p>
        )}
      </div>
    </div>
  </li>
);

export default IconCard;
