import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import {
  profileContainer,
  cardContainer,
  contentContainer,
  imageContainer,
  nameStyle,
  titleStyle,
} from './profile.module.scss';

const { prefix } = settings;

const Profile = ({ name, title, children, ...rest }) => (
  <div
    className={`${profileContainer} bx--col-md-4 bx--col-lg-4 bx--no-gutter-sm`}
  >
    <div className={`${prefix}--aspect-ratio ${prefix}--aspect-ratio--2x1`}>
      <div className={`${prefix}--aspect-ratio--object`}>
          <div className={cardContainer}>
            <div className={contentContainer}>
              <div className={nameStyle}>{name}</div>
              <div className={titleStyle}>{title}</div>
            </div>
            <div className={imageContainer}>{children}</div>
          </div>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Profile;
