import React from 'react';
import PropTypes from 'prop-types';
import { BarChart } from '@carbon/charts-react';
import '@carbon/charts/style.css';

import {
  groupedBarData,
  groupedBarOptions,
  simpleBarData,
  simpleBarOptions,
  stackedBarData,
  stackedBarOptions,
} from './bar-demo-data';

export default class Charts extends React.Component {
  static propTypes = {
    /**
     * Specify 'stackedBar', 'simpleBar', 'groupedBar'
     * to show different bar chart example
     */
    type: PropTypes.string,
  };

  static defaultProps = {
    type: 'simpleBar',
  };

  render() {
    const { type } = this.props;

    const groupedBarDemo = typeof window !== 'undefined' && (
      <BarChart
        data={groupedBarData}
        options={groupedBarOptions}
        width="100%"
        height={400}
      />
    );

    const stackedBarDemo = typeof window !== 'undefined' && (
      <BarChart
        data={stackedBarData}
        options={stackedBarOptions}
        width="100%"
        height={400}
      />
    );

    if (type === 'simpleBar') {
      return (
        <BarChart
          data={simpleBarData}
          options={simpleBarOptions}
          width="100%"
          height={400}
        />
      );
    }

    if (type === 'groupedBar') {
      return <div>{groupedBarDemo}</div>;
    }

    if (type === 'stackedBar') {
      return <div>{stackedBarDemo}</div>;
    }

    return null;
  }
}
