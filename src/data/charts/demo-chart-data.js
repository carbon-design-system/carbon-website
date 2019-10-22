import { DonutCenter, defaultColors } from '@carbon/charts';

export const groupedBarData = {
  labels: ['Qty', 'More', 'Sold', 'Restocking', 'Misc'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColors: [defaultColors[0]],
      data: [65000, -29123, -35213, 51213, 16932],
    },
    {
      label: 'Dataset 2',
      backgroundColors: [defaultColors[1]],
      data: [32432, -21312, -56456, -21312, 34234],
    },
    {
      label: 'Dataset 3',
      backgroundColors: [defaultColors[2]],
      data: [-12312, 23232, 34232, -12312, -34234],
    },
    {
      label: 'Dataset 4',
      backgroundColors: [defaultColors[3]],
      data: [-32423, 21313, 64353, 24134, 32423],
    },
  ],
};

export const groupedBarOptions = {
  scales: {
    x: {
      title: '2018 Annual Sales Figures',
    },
    y: {
      formatter: axisValue => `${axisValue / 1000}k`,
      yMaxAdjuster: yMaxValue => yMaxValue * 1.1,
    },
    y2: {
      ticks: {
        max: 1,
        min: 0,
      },
      formatter: axisValue => `${axisValue * 100}%`,
    },
  },
  legendClickable: true,
  containerResizable: true,
};

// Simple bar
export const simpleBarData = {
  labels: [
    '2016 Q1',
    '2016 Q2',
    '2016 Q3',
    '2016 Q4',
    '2017 Q1',
    '2017 Q2',
    '2017 Q3',
    '2017 Q4',
    '2018 Q1',
    '2018 Q2',
    '2018 Q3',
    '2018 Q4',
    '2019 Q1',
    '2019 Q2',
  ],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColors: defaultColors,
      data: [
        65000,
        29123,
        35213,
        51213,
        16932,
        65000,
        29123,
        35213,
        51213,
        16932,
        65000,
        29123,
        35213,
        51213,
        16932,
        65000,
        29123,
        35213,
        51213,
        16932,
      ],
    },
  ],
};

export const simpleBarOptions = {
  accessibility: false,
  scales: {
    x: {
      title: 'Quarter',
    },
    y: {
      formatter: axisValue => `${axisValue / 1000}k`,
      yMaxAdjuster: yMaxValue => yMaxValue * 1.1,
      stacked: false,
      title: 'No. of transactions',
    },
  },
  legendClickable: true,
  containerResizable: true,
};

// Stacked bar
export const stackedBarData = {
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
    {
      label: 'Dataset 4',
      backgroundColors: [defaultColors[3]],
      data: [32423, 21313, 64353, 24134, 32423],
    },
  ],
};

export const stackedBarOptions = {
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

export const curvedLineData = {
  labels: ['Qty', 'More', 'Sold', 'Restocking', 'Misc'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColors: [defaultColors[0]],
      data: [65000, 79000, 49213, 51213, 16932],
    },
    {
      label: 'Dataset 2',
      backgroundColors: [defaultColors[1]],
      data: [80000, 21312, 56456, 21312, 0],
    },
    {
      label: 'Dataset 3',
      backgroundColors: [defaultColors[2]],
      data: [12312, 34232, 39232, 12312, 34234],
    },
  ],
};

export const curvedLineOptions = {
  accessibility: false,
  scales: {
    x: {
      title: '2018 Annual Sales Figures',
    },
    y: {
      formatter: axisValue => `${axisValue / 1000}k`,
    },
    y2: {
      ticks: {
        max: 1,
        min: 0,
      },
    },
  },
  curve: 'curveNatural',
  legendClickable: true,
  containerResizable: true,
};

export const lineData = {
  labels: ['Qty', 'More', 'Sold', 'Restocking', 'Misc'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColors: [defaultColors[0]],
      data: [0, 0, 0, 0, 0],
    },
    {
      label: 'Dataset 2',
      backgroundColors: [defaultColors[1]],
      data: [0, 10000, 20000, 30000, 40000],
    },
    {
      label: 'Dataset 3',
      backgroundColors: [defaultColors[2]],
      data: [0, 20000, 40000, 60000, 80000],
    },
  ],
};

export const lineOptions = {
  accessibility: false,
  scales: {
    x: {
      title: '2018 Annual Sales Figures',
    },
    y: {
      formatter: axisValue => `${axisValue / 1000}k`,
    },
  },
  legendClickable: true,
  containerResizable: true,
};

export const demoPieOptions = {
  accessibility: false,
  legendClickable: true,
  containerResizable: true,
  defaultColors,
};

export const demoPieData = {
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
      backgroundColors: defaultColors,
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

export const demoDonutOptions = {
  accessibility: false,
  legendClickable: true,
  containerResizable: true,
  defaultColors,
  center: new DonutCenter({
    number: 25423,
    label: 'Browsers',
  }),
};

export const scatterData = {
  labels: ['Qty', 'More', 'Sold', 'Restocking', 'Misc'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColors: [defaultColors[0]],
      data: [32100, 23500, 53100, 42300, 12300],
    },
    {
      label: 'Dataset 2',
      backgroundColors: [defaultColors[1]],
      data: [34200, 53200, 42300, 21400, 0],
    },
    {
      label: 'Dataset 3',
      backgroundColors: [defaultColors[2]],
      data: [41200, 23400, 34210, 1400, 42100],
    },
  ],
};

export const scatterOptions = lineOptions;
