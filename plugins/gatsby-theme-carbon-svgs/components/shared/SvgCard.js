/* eslint-disable camelcase */
import React, { useState, Suspense } from 'react';
import { pascalCase } from 'change-case';
import ActionBar from './ActionBar';

import {
  svgCard,
  svgCardInside,
  flexContainer,
  triggerText,
} from './SvgLibrary.module.scss';

const SvgCard = ({ icon, ...rest }) => {
  const [isActionBarVisible, setIsActionBarVisible] = useState(false);
  const { name, Component, friendlyName } = icon;

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
          <Suspense fallback={null}>
            {Component ? (
              <Component {...rest}>
                <title>{friendlyName}</title>
              </Component>
            ) : (
              <p>Error: no component found for {pascalCase(friendlyName)}</p>
            )}
          </Suspense>
        </div>
        <ActionBar
          name={name}
          component={Component}
          friendlyName={friendlyName}
          isActionBarVisible={isActionBarVisible}
          setIsActionBarVisible={setIsActionBarVisible}
        />
      </div>
    </li>
  );
};

export default SvgCard;
