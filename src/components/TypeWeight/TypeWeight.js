/* eslint-disable react/no-danger */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

export default class TypeWeight extends React.Component {
  render() {
    const { type } = this.props;
    const typeWeight = require('../../pages/guidelines/typography/_type-weight.md');
    const typeWeightItalic = require('../../pages/guidelines/typography/_type-weight-italic.md');
    const typeTypes = require('../../pages/guidelines/typography/_type-types.md');

    if (type === 'types') {
      return (
        <div className="bx--row">
          <div className="bx--col-lg-8 bx--col-md-6 type-weight">
            <div dangerouslySetInnerHTML={{ __html: typeTypes }} />
          </div>
        </div>
      );
    }

    if (type === 'italic') {
      return (
        <div className="bx--row">
          <div className="bx--col-lg-8 bx--col-md-6 type-weight">
            <div dangerouslySetInnerHTML={{ __html: typeWeightItalic }} />
          </div>
        </div>
      );
    }

    return (
      <div className="bx--row">
        <div className="bx--col-lg-8 bx--col-md-6 type-weight">
          <div dangerouslySetInnerHTML={{ __html: typeWeight }} />
        </div>
      </div>
    );
  }
}

TypeWeight.propTypes = {
  type: PropTypes.string,
};
