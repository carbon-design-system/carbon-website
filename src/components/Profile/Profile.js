import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import {
  profileContainer,
  anchorContainer,
  cardContainer,
  contentContainer,
  imageContainer,
  nameStyle,
  titleStyle,
  buStyle,
} from './profile.module.scss';

const { prefix } = settings;

const Profile = ({ name, bu, title, serial, children, ...rest }) => (
  <div
    className={`${profileContainer} bx--col-md-4 bx--col-lg-4 bx--no-gutter-sm`}
  >
    <div className={`${prefix}--aspect-ratio ${prefix}--aspect-ratio--2x1`}>
      <div className={`${prefix}--aspect-ratio--object`}>
        <a
          href={`https://w3.ibm.com/bluepages/profile.html?uid=${serial}`}
          className={anchorContainer}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={cardContainer}>
            <div className={contentContainer}>
              <div className={nameStyle}>{name}</div>
              <div className={titleStyle}>{title}</div>
              <div className={buStyle}>{bu}</div>
            </div>
            <div className={imageContainer}>{children}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string,
  bu: PropTypes.string,
  title: PropTypes.string,
  serial: PropTypes.string,
  children: PropTypes.node,
};

export default Profile;
