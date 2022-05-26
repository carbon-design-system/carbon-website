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

const SvgCard = ({ icon, containerIsVisible, isLastCard, ...rest }) => {
  const { name, Component, friendlyName, assets, moduleInfo } = icon;
  const [isActionBarVisible, setIsActionBarVisible] = useState(false);

  let { source } = assets[0];

  if (assets.length > 1) {
    source = assets.find(({ size }) => size === 32).source;
  }

  return (
    <li
      onMouseEnter={() => {
        setIsActionBarVisible(true);
      }}
      onMouseLeave={() => {
        setIsActionBarVisible(false);
      }}
      className={svgCard}
    >
      <div className={svgCardInside}>
        <span className={triggerText}>{friendlyName}</span>
        {containerIsVisible && (
          <>
            <div className={flexContainer}>
              {Component ? (
                <Component size={32} {...rest}>
                  <title>{friendlyName}</title>
                </Component>
              ) : (
                <p>Error: no component found for {pascalCase(friendlyName)}</p>
              )}
            </div>
            <ActionBar
              isLastCard={isLastCard}
              name={name}
              source={source}
              moduleName={moduleInfo.global}
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
