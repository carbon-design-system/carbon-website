import React, { Component } from 'react';
import { defaultColors } from '@carbon/charts';
import { BarChart } from '@carbon/charts-react';
import { Button } from 'carbon-components-react';
import '@carbon/charts/style.css';

const stackedBarOptions = {
  accessibility: false,
  scales: {
    x: {
      title: '2018 Annual Sales Figures',
    },
    y: {
      formatter: axisValue => `${axisValue / 1000}k`,
      yMaxAdjuster: yMaxValue => yMaxValue * 1.1,
      stacked: true,
    },
  },
  legendClickable: true,
  containerResizable: true,
};

class StackedBar extends Component {
  state = {
    data: {
      labels: ['Qty', 'More', 'Sold', 'Restocking', 'Misc'],
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColors: [defaultColors[0]],
          data: [65000, 29123, 35213, 51213, 16932],
        },
        {
          label: 'Dataset 2',
          backgroundColors: [defaultColors[1]],
          data: [32432, 21312, 56456, 21312, 34234],
        },
        {
          label: 'Dataset 3',
          backgroundColors: [defaultColors[2]],
          data: [12312, 23232, 34232, 12312, 34234],
        },
      ],
    },
  };

  updateData = () => {
    const data = this.state.data;
    data.datasets[0].data[0] = Math.random() * 65000;
    data.datasets[0].data[3] = Math.random() * 51213;

    this.setState({
      ...this.state,
      data,
    });
  };

  render() {
    return (
      <>
        <BarChart
          data={this.state.data}
          options={stackedBarOptions}
          width="100%"
          height={400}
        />

        <Button onClick={this.updateData}>Update data</Button>
      </>
    );
  }
}

export default StackedBar;
