import React, { Component } from 'react';
import { BarChart } from '@carbon/charts-react';
import '@carbon/charts/style.css';

import { stackedBarData, stackedBarOptions } from './bar-demo-data';

const stackedBarDemo = typeof window !== 'undefined' && (
  <BarChart
    data={stackedBarData}
    options={stackedBarOptions}
    width="100%"
    height={400}
  />
);

class StackedBar extends Component {
  render() {
    return <>{stackedBarDemo}</>;
  }
}

export default StackedBar;
