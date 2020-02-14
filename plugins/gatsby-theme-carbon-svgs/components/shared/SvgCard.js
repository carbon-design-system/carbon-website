/* eslint-disable camelcase */
import React, { useState } from 'react';
import { pascal } from 'change-case';
import ActionBar from './ActionBar';

import {
  svgCard,
  svgCardInside,
  flexContainer,
  triggerText,
} from './SvgLibrary.module.scss';

const SvgCard = ({ icon, ...rest }) => {
  const [isActionBarVisible, setIsActionBarVisible] = useState(false);
  const { name, Component, friendly_name: friendlyName } = icon;

  return (
    <li
      onMouseEnter={() => {
        setIsActionBarVisible(true);
      }}
      onMouseLeave={() => {
        setIsActionBarVisible(false);
      }}
      className={svgCard}>
      <div className={svgCardInside}>
        <span className={triggerText}>{friendlyName}</span>
        <div className={flexContainer}>
          {Component ? (
            <Component {...rest}>
              <title>{friendlyName}</title>
            </Component>
          ) : (
            <p>Error: no component found for {pascal(friendlyName)}</p>
          )}
        </div>
        <ActionBar
          name={name}
          friendlyName={friendlyName}
          isActionBarVisible={isActionBarVisible}
          setIsActionBarVisible={setIsActionBarVisible}
        />
      </div>
    </li>
  );
};

export default SvgCard;
