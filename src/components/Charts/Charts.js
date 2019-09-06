import React from 'react';
import PropTypes from 'prop-types';
import { BarChart } from '@carbon/charts-react';
import '@carbon/charts/style.css';

import { stackedBarData, stackedBarOptions } from './bar-demo-data';

export default class Charts extends React.Component {
  static propTypes = {
    type: PropTypes.string,
  };

  render() {
    const { type } = this.props;

    const stackedBarDemo = typeof window !== 'undefined' && (
      <BarChart
        data={stackedBarData}
        options={stackedBarOptions}
        width="100%"
        height={400}
      />
    );

    return <div>{stackedBarDemo}</div>;
  }
}
