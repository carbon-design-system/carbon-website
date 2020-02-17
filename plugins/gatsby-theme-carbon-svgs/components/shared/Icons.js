import React from 'react';
import { LogoGithub32 } from '@carbon/icons-react';
import { icon } from './SvgLibrary.module.scss';

export const Illustrator = () => (
  <svg
    className={icon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485">
    <path d="M168.404 305.486h68.192l18.428 61.115h57.887l-73.885-238.312h-70.621l-72.95 238.312h55.875l17.074-61.115zm32.795-136.94h.693c3.505 14.264 26.966 96.545 26.966 96.545h-52.75s21.55-82.281 25.091-96.545zM333.95 193.775h53.824v172.826H333.95zM360.533 172.503c17.769 0 29.012-12.078 29.012-26.86-.415-15.583-11.243-27.244-28.595-27.244-17.352 0-28.735 11.66-28.353 27.244-.382 14.782 11.001 26.86 27.936 26.86z" />
    <path d="M0 0v485h485V0H0zm455 455H30V30h425v425z" />
  </svg>
);

export const Github = () => <LogoGithub32 className={icon} />;
