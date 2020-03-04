/* eslint-disable camelcase */
import React, { useState } from 'react';
import { pascalCase } from 'change-case';
import ActionBar from './ActionBar';

import {
  svgCard,
  svgCardInside,
  flexContainer,
  triggerText,
} from './SvgLibrary.module.scss';

const SvgCard = ({ icon, containerIsVisible, ...rest }) => {
  const { name, Component, friendlyName } = icon;
  const [isActionBarVisible, setIsActionBarVisible] = useState(false);

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
        {containerIsVisible && (
          <>
            <div className={flexContainer}>
              {Component ? (
                <Component {...rest}>
                  <title>{friendlyName}</title>
                </Component>
              ) : (
                <p>Error: no component found for {pascalCase(friendlyName)}</p>
              )}
            </div>
            <ActionBar
              name={name}
              component={Component}
              friendlyName={friendlyName}
              isActionBarVisible={isActionBarVisible}
              setIsActionBarVisible={setIsActionBarVisible}
            />
          </>
        )}
      </div>
    </li>
  );
};

export default SvgCard;
