import React, { Component } from 'react';
import { DonutChart } from '@carbon/charts-react';
import { DonutCenter } from '@carbon/charts';
import '@carbon/charts/style.css';

const colors = ['#00a68f', '#3b1a40', '#473793', '#3c6df0', '#56D2BB'];

const donutData = {
  labels: [
    '2V2N-9KYPM version 1',
    'L22I-P66EP-L22I-P66EP-L22I-P66EP',
    'JQAI-2M4L1',
    'J9DZ-F37AP',
    'YEL48-Q6XK-YEL48',
    'P66EP-L22I-L22I',
    'Q6XK-YEL48',
    'XKB5-L6EP',
    'YEL48-Q6XK',
    'L22I-P66EP-L22I',
  ],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColors: colors,
      data: [
        100000,
        200000,
        600000,
        100000,
        400000,
        450000,
        300000,
        70000,
        20000,
        120000,
      ],
    },
  ],
};

const donutOptions = {
  accessibility: false,
  legendClickable: true,
  containerResizable: true,
  colors,
  center: new DonutCenter({
    number: 25423,
    label: 'Browsers',
  }),
};

class Donut extends Component {
  render() {
    return (
      <>
        <DonutChart
          data={donutData}
          options={donutOptions}
          width="100%"
          height={400}
        />
      </>
    );
  }
}

export default Donut;
