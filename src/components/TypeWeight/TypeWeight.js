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
        <div className="cds--row">
          <div className="cds--col-lg-8 cds--col-md-6 type-weight">
            <div dangerouslySetInnerHTML={{ __html: typeTypes.default }} />
          </div>
        </div>
      );
    }

    if (type === 'italic') {
      return (
        <div className="cds--row">
          <div className="cds--col-lg-8 cds--col-md-6 type-weight">
            <div
              dangerouslySetInnerHTML={{ __html: typeWeightItalic.default }}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="cds--row">
        <div className="cds--col-lg-8 cds--col-md-6 type-weight">
          <div dangerouslySetInnerHTML={{ __html: typeWeight.default }} />
        </div>
      </div>
    );
  }
}

TypeWeight.propTypes = {
  type: PropTypes.string,
};
