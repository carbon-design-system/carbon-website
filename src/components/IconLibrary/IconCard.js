/* eslint-disable camelcase */
import React from 'react';
import { TooltipDefinition } from 'carbon-components-react';
import {
  iconCard,
  iconCardInside,
  flexContainer,
  tooltipDefinition,
} from './IconLibrary.module.scss';

const IconCard = ({ icon }) => (
  <li className={iconCard}>
    <div className={iconCardInside}>
      <TooltipDefinition
        align="start"
        direction="top"
        className={tooltipDefinition}
        tooltipText={icon.friendly_name}>
        {icon.friendly_name}
      </TooltipDefinition>
      <div className={flexContainer}>
        {icon.Component ? (
          <icon.Component>
            <title>{icon.friendly_name}</title>
          </icon.Component>
        ) : (
          <p>Error: no Component found for {icon.friendly_name}</p>
        )}
      </div>
    </div>
  </li>
);

export default IconCard;
