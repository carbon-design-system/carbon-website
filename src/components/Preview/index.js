import React from 'react';
import { preview } from './Preview.module.scss';

const Preview = ({ title, ...props }) => (
  <iframe title={title} {...props} className={preview} />
);

export default Preview;
