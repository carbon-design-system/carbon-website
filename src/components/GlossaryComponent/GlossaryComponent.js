import React, { Component } from 'react';
import GlossaryList from './GlossaryList';
import GlossaryNav from './GlossaryNav';

class GlossaryComponent extends Component {
  render() {
    const glossary = require('../../data/guidelines/glossary'); // eslint-disable-line
    return (
      <div className="glossary">
        <GlossaryNav />
        <div className="bx--row">
          <div className="bx--col-lg-7">
            <GlossaryList glossary={glossary} />
          </div>
          <div className="bx--col-lg-1" />
        </div>
      </div>
    );
  }
}

export default GlossaryComponent;
