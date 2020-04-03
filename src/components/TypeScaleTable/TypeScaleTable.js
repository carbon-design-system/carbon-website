/* eslint-disable react/no-danger */
/* eslint-disable global-require */
import React, { Component } from 'react';

class TypeScaleTable extends Component {
  render() {
    const typographyTable = require('../../pages/guidelines/typography/_type-scale-table.md');
    return (
      <div className="bx--row">
        <div className="bx--col-lg-8 typography-table">
          <div dangerouslySetInnerHTML={{ __html: typographyTable }} />
        </div>
      </div>
    );
  }
}

export default TypeScaleTable;
