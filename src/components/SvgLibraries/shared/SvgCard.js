/* eslint-disable camelcase */
import React from 'react';
import { pascal } from 'change-case';
import {
  svgCard,
  svgCardInside,
  flexContainer,
  triggerText,
} from './SvgLibrary.module.scss';

const IconCard = ({ icon }) => (
  <li className={svgCard}>
    <div className={svgCardInside}>
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
