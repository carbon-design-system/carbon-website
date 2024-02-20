/* eslint-disable */
const colorTokens = {
  'background-tokens': {
    $background: {
      role: ['Default page background', 'UI Shell base color'],
      value: {
        white: {
          name: 'White',
          hex: '#ffffff',
        },
        g10: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g90: {
          name: 'Gray 90',
          hex: '#262626',
        },
        g100: {
          name: 'Gray 100',
          hex: '#161616',
        },
      },
    },
    '$background-hover': {
      role: [
        'Hover color for $background',
        'Hover color for transparent backgrounds',
      ],
      value: {
        white: {
          name: 'Gray 50, 12%',
          hex: '#8d8d8d @ 12%',
        },
        g10: {
          name: 'Gray 50, 12%',
          hex: '#8d8d8d @ 12%',
        },
        g90: {
          name: 'Gray 50, 16%',
          hex: '#8d8d8d @ 16%',
        },
        g100: {
          name: 'Gray 50, 16%',
          hex: '#8d8d8d @ 16%',
        },
      },
    },
    '$background-active': {
      role: ['Active color for $background'],
      value: {
        white: {
          name: 'Gray 50, 50%',
          hex: '#8d8d8d @ 50%',
        },
        g10: {
          name: 'Gray 50, 50%',
          hex: '#8d8d8d @ 50%',
        },
        g90: {
          name: 'Gray 50, 40%',
          hex: '#8d8d8d @ 40%',
        },
        g100: {
          name: 'Gray 50, 40%',
          hex: '#8d8d8d @ 40%',
        },
      },
    },
    '$background-selected': {
      role: ['Selected color for $background'],
      value: {
        white: {
          name: 'Gray 50, 20%',
          hex: '#8d8d8d @ 20%',
        },
        g10: {
          name: 'Gray 50, 20%',
          hex: '#8d8d8d @ 20%',
        },
        g90: {
          name: 'Gray 50, 24%',
          hex: '#8d8d8d @ 24%',
        },
        g100: {
          name: 'Gray 50, 24%',
          hex: '#8d8d8d @ 24%',
        },
      },
    },
    '$background-selected-hover': {
      role: ['Hover color for $background-selected'],
      value: {
        white: {
          name: 'Gray 50, 32%',
          hex: '#8d8d8d @ 32%',
        },
        g10: {
          name: 'Gray 50, 32%',
          hex: '#8d8d8d @ 32%',
        },
        g90: {
          name: 'Gray 50, 32%',
          hex: '#8d8d8d @ 32%',
        },
        g100: {
          name: 'Gray 50, 32%',
          hex: '#8d8d8d @ 32%',
        },
      },
    },
    '$background-inverse': {
      role: ['High contrast backgrounds', 'High contrast elements'],
      value: {
        white: {
          name: 'Gray 80',
          hex: '#393939',
        },
        g10: {
          name: 'Gray 80',
          hex: '#393939',
        },
        g90: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g100: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
      },
    },
    '$background-inverse-hover': {
      role: ['Hover color for $background-inverse'],
      value: {
        white: {
          name: 'Gray 80 hover',
          hex: '#4c4c4c',
        },
        g10: {
          name: 'Gray 80 hover',
          hex: '#4c4c4c',
        },
        g90: {
          name: 'Gray 10 hover',
          hex: '#e5e5e5',
        },
        g100: {
          name: 'Gray 10 hover',
          hex: '#e5e5e5',
        },
      },
    },
    '$background-brand': {
      role: ['Feature background color'],
      value: {
        white: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g10: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g90: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g100: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
      },
    },
  },
  'layer-tokens': {
    '$layer-01': {
      role: ['Container color on $background', 'Secondary page background'],
      value: {
        white: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g10: {
          name: 'White',
          hex: '#ffffff',
        },
        g90: {
          name: 'Gray 80',
          hex: '#393939',
        },
        g100: {
          name: 'Gray 90',
          hex: '#262626',
        },
      },
    },
    '$layer-02': {
      role: ['Container color on $layer-01'],
      value: {
        white: {
          name: 'White',
          hex: '#ffffff',
        },
        g10: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g90: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g100: {
          name: 'Gray 80',
          hex: '#393939',
        },
      },
    },
    '$layer-03': {
      role: ['Container color on $layer-02'],
      value: {
        white: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g10: {
          name: 'White',
          hex: '#ffffff',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$layer-hover-01': {
      role: ['Hover color for $layer-01'],
      value: {
        white: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g10: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g90: {
          name: 'Gray 80 hover',
          hex: '#474747',
        },
        g100: {
          name: 'Gray 90 hover',
          hex: '#333333',
        },
      },
    },
    '$layer-hover-02': {
      role: ['Hover color for $layer-02'],
      value: {
        white: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g10: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g90: {
          name: 'Gray 70 hover',
          hex: '#636363',
        },
        g100: {
          name: 'Gray 80 hover',
          hex: '#474747',
        },
      },
    },
    '$layer-hover-03': {
      role: ['Hover color for $layer-03'],
      value: {
        white: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g10: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g90: {
          name: 'Gray 60 hover',
          hex: '#5e5e5e',
        },
        g100: {
          name: 'Gray 70 hover',
          hex: '#636363',
        },
      },
    },
    '$layer-active-01': {
      role: ['Active color for $layer-01'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$layer-active-02': {
      role: ['Active color for $layer-02'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    '$layer-active-03': {
      role: ['Active color for $layer-03'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 80',
          hex: '#393939',
        },
        g100: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
      },
    },
    '$layer-selected-01': {
      role: ['Selected color for $layer-01'],
      value: {
        white: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g10: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g90: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g100: {
          name: 'Gray 80',
          hex: '#393939',
        },
      },
    },
    '$layer-selected-02': {
      role: ['Selected color for $layer-02'],
      value: {
        white: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g10: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$layer-selected-03': {
      role: ['Selected color for $layer-03'],
      value: {
        white: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g10: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g90: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    '$layer-selected-hover-01': {
      role: ['Hover color for $layer-selected-01'],
      value: {
        white: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g10: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g90: {
          name: 'Gray 70 hover',
          hex: '#656565',
        },
        g100: {
          name: 'Gray 80 hover',
          hex: '#4c4c4c',
        },
      },
    },
    '$layer-selected-hover-02': {
      role: ['Hover color for $layer-selected-02'],
      value: {
        white: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g10: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g90: {
          name: 'Gray 60 hover',
          hex: '#5e5e5e',
        },
        g100: {
          name: 'Gray 70 hover',
          hex: '#656565',
        },
      },
    },
    '$layer-selected-hover-03': {
      role: ['Hover color for $layer-selected-03'],
      value: {
        white: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g10: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g90: {
          name: 'Gray 70 hover',
          hex: '#656565',
        },
        g100: {
          name: 'Gray 60 hover',
          hex: '#5e5e5e',
        },
      },
    },
    '$layer-selected-inverse': {
      role: ['High contrast elements', '4.5:1 AA element contrast'],
      value: {
        white: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g10: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g90: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g100: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
      },
    },
    '$layer-selected-disabled': {
      role: ['Disabled color for selected layers'],
      value: {
        white: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g10: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g90: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
  },
  'layer-accent-tokens': {
    '$layer-accent-01': {
      role: ['Tertiary background paired with $layer-01'],
      value: {
        white: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g10: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g90: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g100: {
          name: 'Gray 80',
          hex: '#393939',
        },
      },
    },
    '$layer-accent-02': {
      role: ['Tertiary background paired with $layer-02'],
      value: {
        white: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g10: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$layer-accent-03': {
      role: ['Tertiary background paired with $layer-03'],
      value: {
        white: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g10: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g90: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    '$layer-accent-hover-01': {
      role: ['Hover color for $layer-accent-01'],
      value: {
        white: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g10: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g90: {
          name: 'Gray 70 hover',
          hex: '#656565',
        },
        g100: {
          name: 'Gray 80 hover',
          hex: '#4c4c4c',
        },
      },
    },
    '$layer-accent-hover-02': {
      role: ['Hover color for $layer-accent-02'],
      value: {
        white: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g10: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g90: {
          name: 'Gray 60 hover',
          hex: '#5e5e5e',
        },
        g100: {
          name: 'Gray 70 hover',
          hex: '#656565',
        },
      },
    },
    '$layer-accent-hover-03': {
      role: ['Hover color for $layer-accent-03'],
      value: {
        white: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g10: {
          name: 'Gray 20 hover',
          hex: '#cacaca',
        },
        g90: {
          name: 'Gray 50 hover',
          hex: '#7a7a7a',
        },
        g100: {
          name: 'Gray 60 hover',
          hex: '#5e5e5e',
        },
      },
    },
    '$layer-accent-active-01': {
      role: ['Active color for $layer-accent-01'],
      value: {
        white: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g10: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$layer-accent-active-02': {
      role: ['Active color for $layer-accent-02'],
      value: {
        white: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g10: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g90: {
          name: 'Gray 80',
          hex: '#393939',
        },
        g100: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
      },
    },
    '$layer-accent-active-03': {
      role: ['Active color for $layer-accent-03'],
      value: {
        white: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g10: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g90: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g100: {
          name: 'Gray 80',
          hex: '#393939',
        },
      },
    },
  },
  'field-tokens': {
    '$field-01': {
      role: ['Default input fields', 'Fields on $background'],
      value: {
        white: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g10: {
          name: 'White',
          hex: '#ffffff',
        },
        g90: {
          name: 'Gray 80',
          hex: '#393939',
        },
        g100: {
          name: 'Gray 90',
          hex: '#262626',
        },
      },
    },
    '$field-02': {
      role: ['Secondary input fields', 'Fields on $layer-01'],
      value: {
        white: {
          name: 'White',
          hex: '#ffffff',
        },
        g10: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g90: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g100: {
          name: 'Gray 80',
          hex: '#393939',
        },
      },
    },
    '$field-03': {
      role: ['Tertiary input fields', 'Fields on $layer-02'],
      value: {
        white: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g10: {
          name: 'White',
          hex: '#ffffff',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$field-hover-01': {
      role: ['Hover color for $field-01'],
      value: {
        white: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g10: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g90: {
          name: 'Gray 80 hover',
          hex: '#474747',
        },
        g100: {
          name: 'Gray 90 hover',
          hex: '#333333',
        },
      },
    },
    '$field-hover-02': {
      role: ['Hover color for $field-02'],
      value: {
        white: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g10: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g90: {
          name: 'Gray 70 hover',
          hex: '#636363',
        },
        g100: {
          name: 'Gray 80 hover',
          hex: '#474747',
        },
      },
    },
    '$field-hover-03': {
      role: ['Hover color for $field-03'],
      value: {
        white: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g10: {
          name: 'Gray 10 hover',
          hex: '#e8e8e8',
        },
        g90: {
          name: 'Gray 60 hover',
          hex: '#5e5e5e',
        },
        g100: {
          name: 'Gray 70 hover',
          hex: '#636363',
        },
      },
    },
  },
  'border-tokens': {
    '$border-interactive': {
      role: ['3:1 AA contrast', 'Selected borders', 'Active borders'],
      value: {
        white: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g10: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g90: {
          name: 'Blue 50',
          hex: '#4589ff',
        },
        g100: {
          name: 'Blue 50',
          hex: '#4589ff',
        },
      },
    },
    '$border-subtle-00': {
      role: ['Subtle borders paired with $background'],
      value: {
        white: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g100: {
          name: 'Gray 80',
          hex: '#393939',
        },
      },
    },
    '$border-subtle-01': {
      role: ['Subtle borders paired with $layer-01'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g90: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g100: {
          name: 'Gray 80',
          hex: '#393939',
        },
      },
    },
    '$border-subtle-02': {
      role: ['Subtle borders paired with $layer-02'],
      value: {
        white: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$border-subtle-03': {
      role: ['Subtle borders paired with $layer-03'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g90: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    '$border-subtle-selected-01': {
      role: ['Selected color for $border-subtle-01'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$border-subtle-selected-02': {
      role: ['Selected color for $border-subtle-02'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    '$border-subtle-selected-03': {
      role: ['Selected color for $border-subtle-03'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g100: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
      },
    },
    '$border-strong-01': {
      role: [
        'Medium contrast border',
        'Border-bottom paired with $field-01',
        '3:1 AA non-text contrast',
      ],
      value: {
        white: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g10: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g90: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    '$border-strong-02': {
      role: [
        'Medium contrast border',
        'Border-bottom paired with $field-02',
        '3:1 AA non-text contrast',
      ],
      value: {
        white: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g10: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g90: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g100: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
      },
    },
    '$border-strong-03': {
      role: [
        'Medium contrast border',
        'Border-bottom paired with $field-03',
        '3:1 AA non-text contrast',
      ],
      value: {
        white: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g10: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g90: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g100: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
      },
    },
    '$border-tile-01': {
      role: ['Operable tile indicator paired with $layer-01'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$border-tile-02': {
      role: ['Operable tile indicator paired with $layer-02'],
      value: {
        white: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    '$border-tile-03': {
      role: ['Operable tile indicator paired with $layer-03'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g90: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g100: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
      },
    },
    '$border-inverse': {
      role: ['High contrast border', '4.5:1 AA non-text contrast'],
      value: {
        white: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g10: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g90: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g100: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
      },
    },
    '$border-disabled': {
      role: ['Disabled border color (excluding border-subtles)'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 50, 50%',
          hex: '#8d8d8d @ 50%',
        },
        g100: {
          name: 'Gray 50, 50%',
          hex: '#8d8d8d @ 50%',
        },
      },
    },
  },
  'text-tokens': {
    '$text-primary': {
      role: [
        'Primary text',
        'Body copy',
        'Headers',
        'Hover text color for $text-secondary',
      ],
      value: {
        white: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g10: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g90: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g100: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
      },
    },
    '$text-secondary': {
      role: ['Secondary text', 'Input labels'],
      value: {
        white: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g10: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g90: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g100: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
      },
    },
    '$text-placeholder': {
      role: ['Placeholder text'],
      value: {
        white: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g10: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    '$text-on-color': {
      role: ['Text on interactive colors', 'Text on button colors'],
      value: {
        white: {
          name: 'White',
          hex: '#ffffff',
        },
        g10: {
          name: 'White',
          hex: '#ffffff',
        },
        g90: {
          name: 'White',
          hex: '#ffffff',
        },
        g100: {
          name: 'White',
          hex: '#ffffff',
        },
      },
    },
    '$text-on-color-disabled': {
      role: ['Disabled color for $text-on-color'],
      value: {
        white: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g10: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g90: {
          name: 'White – 25%',
          hex: '#ffffff – 25%',
        },
        g100: {
          name: 'White – 25%',
          hex: '#ffffff – 25%',
        },
      },
    },
    '$text-helper': {
      role: ['Tertiary text', 'Help text'],
      value: {
        white: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g10: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g90: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
      },
    },
    '$text-error': {
      role: ['Error message text'],
      value: {
        white: {
          name: 'Red 60',
          hex: '#da1e28',
        },
        g10: {
          name: 'Red 60',
          hex: '#da1e28',
        },
        g90: {
          name: 'Red 30',
          hex: '#ffb3b8',
        },
        g100: {
          name: 'Red 40',
          hex: '#ff8389',
        },
      },
    },
    '$text-inverse': {
      role: ['Inverse text color'],
      value: {
        white: {
          name: 'White',
          hex: '#ffffff',
        },
        g10: {
          name: 'White',
          hex: '#ffffff',
        },
        g90: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g100: {
          name: 'Gray 100',
          hex: '#161616',
        },
      },
    },
    '$text-disabled': {
      role: ['Disabled text color'],
      value: {
        white: {
          name: 'Gray 100 – 25%',
          hex: '#161616 – 25%',
        },
        g10: {
          name: 'Gray 100 – 25%',
          hex: '#161616 – 25%',
        },
        g90: {
          name: 'Gray 10 – 25%',
          hex: '#f4f4f4 – 25%',
        },
        g100: {
          name: 'Gray 10 – 25%',
          hex: '#f4f4f4 – 25%',
        },
      },
    },
  },
  'link-tokens': {
    '$link-primary': {
      role: ['Primary links'],
      value: {
        white: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g10: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g90: {
          name: 'Blue 40',
          hex: '#78a9ff',
        },
        g100: {
          name: 'Blue 40',
          hex: '#78a9ff',
        },
      },
    },
    '$link-primary-hover': {
      role: ['Hover color for $link-primary'],
      value: {
        white: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
        g10: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
        g90: {
          name: 'Blue 30',
          hex: '#a6c8ff',
        },
        g100: {
          name: 'Blue 30',
          hex: '#a6c8ff',
        },
      },
    },
    '$link-secondary': {
      role: ['Secondary link color for lower contrast backgrounds'],
      value: {
        white: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
        g10: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
        g90: {
          name: 'Blue 30',
          hex: '#a6c8ff',
        },
        g100: {
          name: 'Blue 30',
          hex: '#a6c8ff',
        },
      },
    },
    '$link-inverse': {
      role: ['Links on $background-inverse backgrounds'],
      value: {
        white: {
          name: 'Blue 40',
          hex: '#78a9ff',
        },
        g10: {
          name: 'Blue 40',
          hex: '#78a9ff',
        },
        g90: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g100: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
      },
    },
    '$link-visited': {
      role: ['Color for visited links'],
      value: {
        white: {
          name: 'Purple 60',
          hex: '#8a3ffc',
        },
        g10: {
          name: 'Purple 60',
          hex: '#8a3ffc',
        },
        g90: {
          name: 'Purple 40',
          hex: '#be95ff',
        },
        g100: {
          name: 'Purple 40',
          hex: '#be95ff',
        },
      },
    },
  },
  'icon-tokens': {
    '$icon-primary': {
      role: ['Primary icons'],
      value: {
        white: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g10: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g90: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g100: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
      },
    },
    '$icon-secondary': {
      role: ['Secondary icons'],
      value: {
        white: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g10: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g90: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g100: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
      },
    },
    '$icon-on-color': {
      role: [`Icons on interactive colors`, `Icons on non-layer colors`],
      value: {
        white: {
          name: 'White',
          hex: '#ffffff',
        },
        g10: {
          name: 'White',
          hex: '#ffffff',
        },
        g90: {
          name: 'White',
          hex: '#ffffff',
        },
        g100: {
          name: 'White',
          hex: '#ffffff',
        },
      },
    },
    '$icon-on-color-disabled': {
      role: ['Disabled color for $icon-on-color'],
      value: {
        white: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g10: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g90: {
          name: 'White – 25%',
          hex: '#ffffff – 25%',
        },
        g100: {
          name: 'White – 25%',
          hex: '#ffffff – 25%',
        },
      },
    },
    '$icon-interactive': {
      role: ['Icons that indicate operability'],
      value: {
        white: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g10: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g90: {
          name: 'White',
          hex: '#ffffff',
        },
        g100: {
          name: 'White',
          hex: '#ffffff',
        },
      },
    },
    '$icon-inverse': {
      role: ['Inverse icon color'],
      value: {
        white: {
          name: 'White',
          hex: '#ffffff',
        },
        g10: {
          name: 'White',
          hex: '#ffffff',
        },
        g90: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g100: {
          name: 'Gray 100',
          hex: '#161616',
        },
      },
    },
    '$icon-disabled': {
      role: ['Disabled icon color'],
      value: {
        white: {
          name: 'Gray 100 – 25%',
          hex: '#161616 – 25%',
        },
        g10: {
          name: 'Gray 100 – 25%',
          hex: '#161616 – 25%',
        },
        g90: {
          name: 'Gray 10 – 25%',
          hex: '#f4f4f4 – 25%',
        },
        g100: {
          name: 'Gray 10 – 25%',
          hex: '#f4f4f4 – 25%',
        },
      },
    },
  },
  'button-tokens': {
    '$button-primary': {
      role: ['Primary button color'],
      value: {
        white: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g10: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g90: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g100: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
      },
    },
    '$button-primary-hover': {
      role: ['Hover color for $button-primary'],
      value: {
        white: {
          name: 'Blue 60 hover',
          hex: '#0353e9',
        },
        g10: {
          name: 'Blue 60 hover',
          hex: '#0353e9',
        },
        g90: {
          name: 'Blue 60 hover',
          hex: '#0353e9',
        },
        g100: {
          name: 'Blue 60 hover',
          hex: '#0353e9',
        },
      },
    },
    '$button-primary-active': {
      role: ['Active color for $button-primary'],
      value: {
        white: {
          name: 'Blue 80',
          hex: '#002d9c',
        },
        g10: {
          name: 'Blue 80',
          hex: '#002d9c',
        },
        g90: {
          name: 'Blue 80',
          hex: '#002d9c',
        },
        g100: {
          name: 'Blue 80',
          hex: '#002d9c',
        },
      },
    },
    '$button-secondary': {
      role: ['Secondary button color'],
      value: {
        white: {
          name: 'Gray 80',
          hex: '#393939',
        },
        g10: {
          name: 'Gray 80',
          hex: '#393939',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    '$button-secondary-hover': {
      role: ['Hover color for $button-secondary'],
      value: {
        white: {
          name: 'Gray 80 hover',
          hex: '#4c4c4c',
        },
        g10: {
          name: 'Gray 80 hover',
          hex: '#4c4c4c',
        },
        g90: {
          name: 'Gray 60 hover',
          hex: '#606060',
        },
        g100: {
          name: 'Gray 60 hover',
          hex: '#606060',
        },
      },
    },
    '$button-secondary-active': {
      role: ['Active color for $button-secondary'],
      value: {
        white: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g10: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g90: {
          name: 'Gray 80',
          hex: '#393939',
        },
        g100: {
          name: 'Gray 80',
          hex: '#393939',
        },
      },
    },
    '$button-tertiary': {
      role: ['Tertiary button color', '4.5:1 AA text contrast'],
      value: {
        white: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g10: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g90: {
          name: 'White',
          hex: '#ffffff',
        },
        g100: {
          name: 'White',
          hex: '#ffffff',
        },
      },
    },
    '$button-tertiary-hover': {
      role: ['Hover color for $button-tertiary'],
      value: {
        white: {
          name: 'Blue 60 hover',
          hex: '#0353e9',
        },
        g10: {
          name: 'Blue 60 hover',
          hex: '#0353e9',
        },
        g90: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g100: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
      },
    },
    '$button-tertiary-active': {
      role: ['Active color for $button-tertiary'],
      value: {
        white: {
          name: 'Blue 80',
          hex: '#002d9c',
        },
        g10: {
          name: 'Blue 80',
          hex: '#002d9c',
        },
        g90: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g100: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
      },
    },
    '$button-danger-primary': {
      role: ['Primary danger button color', '3:1 AA non-text contrast'],
      value: {
        white: {
          name: 'Red 60',
          hex: '#da1e28',
        },
        g10: {
          name: 'Red 60',
          hex: '#da1e28',
        },
        g90: {
          name: 'Red 60',
          hex: '#da1e28',
        },
        g100: {
          name: 'Red 60',
          hex: '#da1e28',
        },
      },
    },
    '$button-danger-secondary': {
      role: [
        'Tertiary danger button color',
        'Ghost danger button color',
        '4.5:1 AA text contrast',
      ],
      value: {
        white: {
          name: 'Red 60',
          hex: '#da1e28',
        },
        g10: {
          name: 'Red 60',
          hex: '#da1e28',
        },
        g90: {
          name: 'Red 40',
          hex: '#ff8389',
        },
        g100: {
          name: 'Red 50',
          hex: '#fa4d56',
        },
      },
    },
    '$button-danger-hover': {
      role: [
        'Hover color for $danger-primary',
        'Hover color for $danger-secondary',
      ],
      value: {
        white: {
          name: 'Red 60 hover',
          hex: '#ba1b23',
        },
        g10: {
          name: 'Red 60 hover',
          hex: '#ba1b23',
        },
        g90: {
          name: 'Red 60 hover',
          hex: '#ba1b23',
        },
        g100: {
          name: 'Red 60 hover',
          hex: '#ba1b23',
        },
      },
    },
    '$button-danger-active': {
      role: [
        'Active color for $danger-primary',
        'Active color for $danger-secondary',
      ],
      value: {
        white: {
          name: 'Red 80',
          hex: '#750e13',
        },
        g10: {
          name: 'Red 80',
          hex: '#750e13',
        },
        g90: {
          name: 'Red 80',
          hex: '#750e13',
        },
        g100: {
          name: 'Red 80',
          hex: '#750e13',
        },
      },
    },
    '$button-separator': {
      role: ['Fluid button separator', '3:1 AA non-text contrast'],
      value: {
        white: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g10: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g90: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g100: {
          name: 'Gray 100',
          hex: '#161616',
        },
      },
    },
    '$button-disabled': {
      role: ['Disabled color for button elements'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
  },
  'support-tokens': {
    '$support-error': {
      role: ['Error', 'Invalid state'],
      value: {
        white: {
          name: 'Red 60',
          hex: '#da1e28',
        },
        g10: {
          name: 'Red 60',
          hex: '#da1e28',
        },
        g90: {
          name: 'Red 40',
          hex: '#ff8389',
        },
        g100: {
          name: 'Red 50',
          hex: '#fa4d56',
        },
      },
    },
    '$support-success': {
      role: ['Success', 'On'],
      value: {
        white: {
          name: 'Green 50',
          hex: '#24a148',
        },
        g10: {
          name: 'Green 50',
          hex: '#24a148',
        },
        g90: {
          name: 'Green 40',
          hex: '#42be65',
        },
        g100: {
          name: 'Green 40',
          hex: '#42be65',
        },
      },
    },
    '$support-warning': {
      role: ['Warning', 'Caution'],
      value: {
        white: {
          name: 'Yellow',
          hex: '#f1c21b',
        },
        g10: {
          name: 'Yellow',
          hex: '#f1c21b',
        },
        g90: {
          name: 'Yellow',
          hex: '#f1c21b',
        },
        g100: {
          name: 'Yellow',
          hex: '#f1c21b',
        },
      },
    },
    '$support-info': {
      role: ['Information'],
      value: {
        white: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
        g10: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
        g90: {
          name: 'Blue 50',
          hex: '#4589ff',
        },
        g100: {
          name: 'Blue 50',
          hex: '#4589ff',
        },
      },
    },
    '$support-error-inverse': {
      role: ['Error in high contrast moments'],
      value: {
        white: {
          name: 'Red 50',
          hex: '#fa4d56',
        },
        g10: {
          name: 'Red 50',
          hex: '#fa4d56',
        },
        g90: {
          name: 'Red 60',
          hex: '#da1e28',
        },
        g100: {
          name: 'Red 60',
          hex: '#da1e28',
        },
      },
    },
    '$support-success-inverse': {
      role: ['Success in high contrast moments'],
      value: {
        white: {
          name: 'Green 40',
          hex: '#42be65',
        },
        g10: {
          name: 'Green 40',
          hex: '#42be65',
        },
        g90: {
          name: 'Green 50',
          hex: '#24a148',
        },
        g100: {
          name: 'Green 50',
          hex: '#24a148',
        },
      },
    },
    '$support-warning-inverse': {
      role: ['Warning in high contrast moments'],
      value: {
        white: {
          name: 'Yellow',
          hex: '#f1c21b',
        },
        g10: {
          name: 'Yellow',
          hex: '#f1c21b',
        },
        g90: {
          name: 'Yellow',
          hex: '#f1c21b',
        },
        g100: {
          name: 'Yellow',
          hex: '#f1c21b',
        },
      },
    },
    '$support-info-inverse': {
      role: ['Information in high contrast moments'],
      value: {
        white: {
          name: 'Blue 50',
          hex: '#4589ff',
        },
        g10: {
          name: 'Blue 50',
          hex: '#4589ff',
        },
        g90: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
        g100: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
      },
    },
  },
  'focus-tokens': {
    $focus: {
      role: ['Focus border', 'Focus underline'],
      value: {
        white: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g10: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g90: {
          name: 'White',
          hex: '#ffffff',
        },
        g100: {
          name: 'White',
          hex: '#ffffff',
        },
      },
    },
    '$focus-inset': {
      role: ['Contrast border paired with $focus'],
      value: {
        white: {
          name: 'White',
          hex: '#ffffff',
        },
        g10: {
          name: 'White',
          hex: '#ffffff',
        },
        g90: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g100: {
          name: 'Gray 100',
          hex: '#161616',
        },
      },
    },
    '$focus-inverse': {
      role: ['Focus on high contrast moments'],
      value: {
        white: {
          name: 'White',
          hex: '#ffffff',
        },
        g10: {
          name: 'White',
          hex: '#ffffff',
        },
        g90: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g100: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
      },
    },
  },
  miscellaneous: {
    $interactive: {
      role: [
        '3:1 AA contrast',
        'Selected elements',
        'Active elements',
        'Accent icons',
      ],
      value: {
        white: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g10: {
          name: 'Blue 60',
          hex: '#0f62fe',
        },
        g90: {
          name: 'Blue 50',
          hex: '#4589ff',
        },
        g100: {
          name: 'Blue 50',
          hex: '#4589ff',
        },
      },
    },
    $highlight: {
      role: ['Highlight color'],
      value: {
        white: {
          name: 'Blue 20',
          hex: '#d0e2ff',
        },
        g10: {
          name: 'Blue 20',
          hex: '#d0e2ff',
        },
        g90: {
          name: 'Blue 80',
          hex: '#002d9c',
        },
        g100: {
          name: 'Blue 90',
          hex: '#001d6c',
        },
      },
    },
    '$toggle-off': {
      role: ['Off background', '3:1 AA contrast'],
      value: {
        white: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g10: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g90: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    $overlay: {
      role: ['Background overlay'],
      value: {
        white: {
          name: 'Gray 100, 50%',
          hex: '#161616 @ 50%',
        },
        g10: {
          name: 'Gray 100, 50%',
          hex: '#161616 @ 50%',
        },
        g90: {
          name: 'Gray 100, 70%',
          hex: '#161616 @70%',
        },
        g100: {
          name: 'Gray 100, 70%',
          hex: '#161616 @ 70%',
        },
      },
    },
    '$skeleton-element': {
      role: ['Skeleton color for text and UI elements'],
      value: {
        white: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g10: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g90: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$skeleton-background': {
      role: ['Skeleton color for containers'],
      value: {
        white: {
          name: 'Gray 10 hover',
          hex: '#e5e5e5',
        },
        g10: {
          name: 'Gray 10 hover',
          hex: '#e5e5e5',
        },
        g90: {
          name: 'Gray 80 hover',
          hex: '#353535',
        },
        g100: {
          name: 'Gray 80 hover',
          hex: '#353535',
        },
      },
    },
  },
  tag: {
    '$tag-background-gray': {
      role: ['Tag background'],
      value: {
        white: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g10: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g90: {
          name: 'Gray 70',
          hex: '#525252',
        },
        g100: {
          name: 'Gray 70',
          hex: '#525252',
        },
      },
    },
    '$tag-color-gray': {
      role: ['Tag text', 'Tag icon'],
      value: {
        white: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g10: {
          name: 'Gray 100',
          hex: '#161616',
        },
        g90: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
        g100: {
          name: 'Gray 20',
          hex: '#e0e0e0',
        },
      },
    },
    '$tag-hover-gray': {
      role: ['Hover color for $tag-background'],
      value: {
        white: {
          name: 'Gray 20 hover',
          hex: '#d1d1d1',
        },
        g10: {
          name: 'Gray 20 hover',
          hex: '#d1d1d1',
        },
        g90: {
          name: 'Gray 70 hover',
          hex: '#636363',
        },
        g100: {
          name: 'Gray 70 hover',
          hex: '#636363',
        },
      },
    },
    '$tag-border-gray': {
      role: ['Border for operational tag'],
      value: {
        white: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g10: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
        g90: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
      },
    },
    '$tag-background-cool-gray': {
      role: ['Tag background'],
      value: {
        white: {
          name: 'Cool gray 20',
          hex: '#dde1e6',
        },
        g10: {
          name: 'Cool gray 20',
          hex: '#dde1e6',
        },
        g90: {
          name: 'Cool gray 70',
          hex: '#4d5358',
        },
        g100: {
          name: 'Cool gray 70',
          hex: '#4d5358',
        },
      },
    },
    '$tag-color-cool-gray': {
      role: ['Tag text', 'Tag icon'],
      value: {
        white: {
          name: 'Cool gray 100',
          hex: '#121619',
        },
        g10: {
          name: 'Cool gray 100',
          hex: '#121619',
        },
        g90: {
          name: 'Cool gray 20',
          hex: '#dde1e6',
        },
        g100: {
          name: 'Cool gray 20',
          hex: '#dde1e6',
        },
      },
    },
    '$tag-hover-cool-gray': {
      role: ['Hover color for $tag-background'],
      value: {
        white: {
          name: 'Cool gray 20 hover',
          hex: '#cdd3da',
        },
        g10: {
          name: 'Cool gray 20 hover',
          hex: '#cdd3da',
        },
        g90: {
          name: 'Cool gray 70 hover',
          hex: '#5d646a',
        },
        g100: {
          name: 'Cool gray 70 hover',
          hex: '#5d646a',
        },
      },
    },
    '$tag-border-cool-gray': {
      role: ['Border for operational tag'],
      value: {
        white: {
          name: 'Cool gray 40',
          hex: '#a2a9b0',
        },
        g10: {
          name: 'Cool gray 40',
          hex: '#a2a9b0',
        },
        g90: {
          name: 'Cool gray 50',
          hex: '#878d96',
        },
        g100: {
          name: 'Cool gray 50',
          hex: '#878d96',
        },
      },
    },
    '$tag-background-warm-gray': {
      role: ['Tag background'],
      value: {
        white: {
          name: 'Warm gray 20',
          hex: '#e5e0df',
        },
        g10: {
          name: 'Warm gray 20',
          hex: '#e5e0df',
        },
        g90: {
          name: 'Warm gray 70',
          hex: '#565151',
        },
        g100: {
          name: 'Warm gray 70',
          hex: '#565151',
        },
      },
    },
    '$tag-color-warm-gray': {
      role: ['Tag text', 'Tag icon'],
      value: {
        white: {
          name: 'Warm gray 100',
          hex: '#171414',
        },
        g10: {
          name: 'Warm gray 100',
          hex: '#171414',
        },
        g90: {
          name: 'Warm gray 20',
          hex: '#e5e0df',
        },
        g100: {
          name: 'Warm gray 20',
          hex: '#e5e0df',
        },
      },
    },
    '$tag-hover-warm-gray': {
      role: ['Hover color for $tag-background'],
      value: {
        white: {
          name: 'Warm gray 20 hover',
          hex: '#d8d0cf',
        },
        g10: {
          name: 'Warm gray 20 hover',
          hex: '#d8d0cf',
        },
        g90: {
          name: 'Warm gray 70 hover',
          hex: '#696363',
        },
        g100: {
          name: 'Warm gray 70 hover',
          hex: '#696363',
        },
      },
    },
    '$tag-border-warm-gray': {
      role: ['Border for operational tag'],
      value: {
        white: {
          name: 'Warm gray 40',
          hex: '#ada8a8',
        },
        g10: {
          name: 'Warm gray 40',
          hex: '#ada8a8',
        },
        g90: {
          name: 'Warm gray 50',
          hex: '#8f8b8b',
        },
        g100: {
          name: 'Warm gray 50',
          hex: '#8f8b8b',
        },
      },
    },
    '$tag-background-red': {
      role: ['Tag background'],
      value: {
        white: {
          name: 'Red 20',
          hex: '#ffd7d9',
        },
        g10: {
          name: 'Red 20',
          hex: '#ffd7d9',
        },
        g90: {
          name: 'Red 70',
          hex: '#a2191f',
        },
        g100: {
          name: 'Red 70',
          hex: '#a2191f',
        },
      },
    },
    '$tag-color-red': {
      role: ['Tag text', 'Tag icon'],
      value: {
        white: {
          name: 'Red 70',
          hex: '#a2191f',
        },
        g10: {
          name: 'Red 70',
          hex: '#a2191f',
        },
        g90: {
          name: 'Red 20',
          hex: '#ffd7d9',
        },
        g100: {
          name: 'Red 20',
          hex: '#ffd7d9',
        },
      },
    },
    '$tag-hover-red': {
      role: ['Hover color for $tag-background'],
      value: {
        white: {
          name: 'Red 20 hover',
          hex: '#ffc2c5',
        },
        g10: {
          name: 'Red 20 hover',
          hex: '#ffc2c5',
        },
        g90: {
          name: 'Red 70 hover',
          hex: '#c21e25',
        },
        g100: {
          name: 'Red 70 hover',
          hex: '#c21e25',
        },
      },
    },
    '$tag-border-red': {
      role: ['Border for operational tag'],
      value: {
        white: {
          name: 'Red 40',
          hex: '#ff8389',
        },
        g10: {
          name: 'Red 40',
          hex: '#ff8389',
        },
        g90: {
          name: 'Red 50',
          hex: '#fa4d56',
        },
        g100: {
          name: 'Red 50',
          hex: '#fa4d56',
        },
      },
    },
    '$tag-background-magenta': {
      role: ['Tag background'],
      value: {
        white: {
          name: 'Magenta 20',
          hex: '#ffd6e8',
        },
        g10: {
          name: 'Magenta 20',
          hex: '#ffd6e8',
        },
        g90: {
          name: 'Magenta 70',
          hex: '#9f1853',
        },
        g100: {
          name: 'Magenta 70',
          hex: '#9f1853',
        },
      },
    },
    '$tag-color-magenta': {
      role: ['Tag text', 'Tag icon'],
      value: {
        white: {
          name: 'Magenta 70',
          hex: '#9f1853',
        },
        g10: {
          name: 'Magenta 70',
          hex: '#9f1853',
        },
        g90: {
          name: 'Magenta 20',
          hex: '#ffd6e8',
        },
        g100: {
          name: 'Magenta 20',
          hex: '#ffd6e8',
        },
      },
    },
    '$tag-hover-magenta': {
      role: ['Hover color for $tag-background'],
      value: {
        white: {
          name: 'Magenta 20 hover',
          hex: '#ffbdda',
        },
        g10: {
          name: 'Magenta 20 hover',
          hex: '#ffbdda',
        },
        g90: {
          name: 'Magenta 70 hover',
          hex: '#bf1d63',
        },
        g100: {
          name: 'Magenta 70 hover',
          hex: '#bf1d63',
        },
      },
    },
    '$tag-border-magenta': {
      role: ['Border for operational tag'],
      value: {
        white: {
          name: 'Magenta 40',
          hex: '#ff7eb6',
        },
        g10: {
          name: 'Magenta 40',
          hex: '#ff7eb6',
        },
        g90: {
          name: 'Magenta 50',
          hex: '#ee5396',
        },
        g100: {
          name: 'Magenta 50',
          hex: '#ee5396',
        },
      },
    },
    '$tag-background-purple': {
      role: ['Tag background'],
      value: {
        white: {
          name: 'Purple 20',
          hex: '#e8daff',
        },
        g10: {
          name: 'Purple 20',
          hex: '#e8daff',
        },
        g90: {
          name: 'Purple 70',
          hex: '#6929c4',
        },
        g100: {
          name: 'Purple 70',
          hex: '#6929c4',
        },
      },
    },
    '$tag-color-purple': {
      role: ['Tag text', 'Tag icon'],
      value: {
        white: {
          name: 'Purple 70',
          hex: '#6929c4',
        },
        g10: {
          name: 'Purple 70',
          hex: '#6929c4',
        },
        g90: {
          name: 'Purple 20',
          hex: '#e8daff',
        },
        g100: {
          name: 'Purple 20',
          hex: '#e8daff',
        },
      },
    },
    '$tag-hover-purple': {
      role: ['Hover color for $tag-background'],
      value: {
        white: {
          name: 'Purple 20 hover',
          hex: '#dcc7ff',
        },
        g10: {
          name: 'Purple 20 hover',
          hex: '#dcc7ff',
        },
        g90: {
          name: 'Purple 70 hover',
          hex: '#7c3dd6',
        },
        g100: {
          name: 'Purple 70 hover',
          hex: '#7c3dd6',
        },
      },
    },
    '$tag-border-purple': {
      role: ['Border for operational tag'],
      value: {
        white: {
          name: 'Purple 40',
          hex: '#be95ff',
        },
        g10: {
          name: 'Purple 40',
          hex: '#be95ff',
        },
        g90: {
          name: 'Purple 50',
          hex: '#a56eff',
        },
        g100: {
          name: 'Purple 50',
          hex: '#a56eff',
        },
      },
    },
    '$tag-background-blue': {
      role: ['Tag background'],
      value: {
        white: {
          name: 'Blue 20',
          hex: '#d0e2ff',
        },
        g10: {
          name: 'Blue 20',
          hex: '#d0e2ff',
        },
        g90: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
        g100: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
      },
    },
    '$tag-color-blue': {
      role: ['Tag text', 'Tag icon'],
      value: {
        white: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
        g10: {
          name: 'Blue 70',
          hex: '#0043ce',
        },
        g90: {
          name: 'Blue 20',
          hex: '#d0e2ff',
        },
        g100: {
          name: 'Blue 20',
          hex: '#d0e2ff',
        },
      },
    },
    '$tag-hover-blue': {
      role: ['Hover color for $tag-background'],
      value: {
        white: {
          name: 'Blue 20 hover',
          hex: '#b8d3ff',
        },
        g10: {
          name: 'Blue 20 hover',
          hex: '#b8d3ff',
        },
        g90: {
          name: 'Blue 70 hover',
          hex: '#0053ff',
        },
        g100: {
          name: 'Blue 70 hover',
          hex: '#0053ff',
        },
      },
    },
    '$tag-border-blue': {
      role: ['Border for operational tag'],
      value: {
        white: {
          name: 'Blue 40',
          hex: '#78a9ff',
        },
        g10: {
          name: 'Blue 40',
          hex: '#78a9ff',
        },
        g90: {
          name: 'Blue 50',
          hex: '#4589ff',
        },
        g100: {
          name: 'Blue 50',
          hex: '#4589ff',
        },
      },
    },
    '$tag-background-cyan': {
      role: ['Tag background'],
      value: {
        white: {
          name: 'Cyan 20',
          hex: '#bae6ff',
        },
        g10: {
          name: 'Cyan 20',
          hex: '#bae6ff',
        },
        g90: {
          name: 'Cyan 70',
          hex: '#00539a',
        },
        g100: {
          name: 'Cyan 70',
          hex: '#00539a',
        },
      },
    },
    '$tag-color-cyan': {
      role: ['Tag text', 'Tag icon'],
      value: {
        white: {
          name: 'Cyan 70',
          hex: '#00539a',
        },
        g10: {
          name: 'Cyan 70',
          hex: '#00539a',
        },
        g90: {
          name: 'Cyan 20',
          hex: '#bae6ff',
        },
        g100: {
          name: 'Cyan 20',
          hex: '#bae6ff',
        },
      },
    },
    '$tag-hover-cyan': {
      role: ['Hover color for $tag-background'],
      value: {
        white: {
          name: 'Cyan 20 hover',
          hex: '#99daff',
        },
        g10: {
          name: 'Cyan 20 hover',
          hex: '#99daff',
        },
        g90: {
          name: 'Cyan 70 hover',
          hex: '#bae6ff',
        },
        g100: {
          name: 'Cyan 70 hover',
          hex: '#bae6ff',
        },
      },
    },
    '$tag-border-cyan': {
      role: ['Border for operational tag'],
      value: {
        white: {
          name: 'Cyan 40',
          hex: '#33b1ff',
        },
        g10: {
          name: 'Cyan 40',
          hex: '#33b1ff',
        },
        g90: {
          name: 'Cyan 50',
          hex: '#1192e8',
        },
        g100: {
          name: 'Cyan 50',
          hex: '#1192e8',
        },
      },
    },
    '$tag-background-teal': {
      role: ['Tag background'],
      value: {
        white: {
          name: 'Teal 20',
          hex: '#9ef0f0',
        },
        g10: {
          name: 'Teal 20',
          hex: '#9ef0f0',
        },
        g90: {
          name: 'Teal 70',
          hex: '#005D5D',
        },
        g100: {
          name: 'Teal 70',
          hex: '#005D5D',
        },
      },
    },
    '$tag-color-teal': {
      role: ['Tag text', 'Tag icon'],
      value: {
        white: {
          name: 'Teal 70',
          hex: '#005d5d',
        },
        g10: {
          name: 'Teal 70',
          hex: '#005d5d',
        },
        g90: {
          name: 'Teal 20',
          hex: '#9ef0f0',
        },
        g100: {
          name: 'Teal 20',
          hex: '#9ef0f0',
        },
      },
    },
    '$tag-hover-teal': {
      role: ['Hover color for $tag-background'],
      value: {
        white: {
          name: 'Teal 20 hover',
          hex: '#57e5e5',
        },
        g10: {
          name: 'Teal 20 hover',
          hex: '#57e5e5',
        },
        g90: {
          name: 'Teal 70 hover',
          hex: '#007070',
        },
        g100: {
          name: 'Teal 70 hover',
          hex: '#007070',
        },
      },
    },
    '$tag-border-teal': {
      role: ['Border for operational tag'],
      value: {
        white: {
          name: 'Teal 40',
          hex: '#08bdba',
        },
        g10: {
          name: 'Teal 40',
          hex: '#08bdba',
        },
        g90: {
          name: 'Teal 50',
          hex: '#009d9a',
        },
        g100: {
          name: 'Teal 50',
          hex: '#009d9a',
        },
      },
    },
    '$tag-background-green': {
      role: ['Tag background'],
      value: {
        white: {
          name: 'Green 20',
          hex: '#a7f0ba',
        },
        g10: {
          name: 'Green 20',
          hex: '#a7f0ba',
        },
        g90: {
          name: 'Green 70',
          hex: '#0e6027',
        },
        g100: {
          name: 'Green 70',
          hex: '#0e6027',
        },
      },
    },
    '$tag-color-green': {
      role: ['Tag text', 'Tag icon'],
      value: {
        white: {
          name: 'Green 70',
          hex: '#0e6027',
        },
        g10: {
          name: 'Green 70',
          hex: '#0e6027',
        },
        g90: {
          name: 'Green 20',
          hex: '#a7f0ba',
        },
        g100: {
          name: 'Green 20',
          hex: '#a7f0ba',
        },
      },
    },
    '$tag-hover-green': {
      role: ['Hover color for $tag-background'],
      value: {
        white: {
          name: 'Green 20 hover',
          hex: '#74e792',
        },
        g10: {
          name: 'Green 20 hover',
          hex: '#74e792',
        },
        g90: {
          name: 'Green 70 hover',
          hex: '#11742f',
        },
        g100: {
          name: 'Green 70 hover',
          hex: '#11742f',
        },
      },
    },
    '$tag-border-green': {
      role: ['Border for operational tag'],
      value: {
        white: {
          name: 'Green 40',
          hex: '#42be65',
        },
        g10: {
          name: 'Green 40',
          hex: '#42be65',
        },
        g90: {
          name: 'Green 50',
          hex: '#24a148',
        },
        g100: {
          name: 'Green 50',
          hex: '#24a148',
        },
      },
    },
  },
};

export default colorTokens;