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
    '$link-inverse-hover': {
      role: ['Hover color for links on $background-inverse backgrounds'],
      value: {
        white: {
          name: 'Blue 30',
          hex: '#a6c8ff',
        },
        g10: {
          name: 'Blue 30',
          hex: '#a6c8ff',
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
    '$link-inverse-active': {
      role: ['Active color for links on $background-inverse backgrounds'],
      value: {
        white: {
          name: 'Gray 10',
          hex: '#f4f4f4',
        },
        g10: {
          name: 'Gray 10',
          hex: '#f4f4f4',
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
    '$link-inverse-visited': {
      role: ['Color for visited links on $background-inverse backgrounds'],
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
          name: 'Purple 60',
          hex: '#8a3ffc',
        },
        g100: {
          name: 'Purple 60',
          hex: '#8a3ffc',
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
      role: ['Gray tag background'],
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
      role: ['Gray tag text', 'Gray tag icon'],
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
      role: ['Gray tag hover for $tag-background-gray'],
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
      role: ['Gray tag border for operational tag'],
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
      role: ['Cool gray tag background'],
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
      role: ['Cool gray tag text', 'Cool gray tag icon'],
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
      role: ['Cool gray tag hover for $tag-background-cool-gray'],
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
      role: ['Cool gray tag border for operational tag'],
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
      role: ['Warm gray tag background'],
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
      role: ['Warm gray tag text', 'Warm gray tag icon'],
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
      role: ['Warm gray tag hover for $tag-background-warm-gray'],
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
      role: ['Warm gray tag border for operational tag'],
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
      role: ['Red tag background'],
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
      role: ['Red tag text', 'Red tag icon'],
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
      role: ['Red tag hover for $tag-background-red'],
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
      role: ['Red tag border for operational tag'],
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
      role: ['Magenta tag background'],
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
      role: ['Magenta tag text', 'Magenta tag icon'],
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
      role: ['Magenta tag hover for $tag-background-magenta'],
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
      role: ['Magenta tag border for operational tag'],
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
      role: ['Purple tag background'],
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
      role: ['Purple tag text', 'Purple tag icon'],
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
      role: ['Purple tag hover for $tag-background-purple'],
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
      role: ['Purple tag border for operational tag'],
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
      role: ['Blue tag background'],
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
      role: ['Blue tag text', 'Blue tag icon'],
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
      role: ['Blue tag hover for $tag-background-blue'],
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
      role: ['Blue tag border for operational tag'],
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
      role: ['Cyan tag background'],
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
      role: ['Cyan tag text', 'Cyan tag icon'],
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
      role: ['Cyan tag hover for $tag-background-cyan'],
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
          hex: '#0066bd',
        },
        g100: {
          name: 'Cyan 70 hover',
          hex: '#0066bd',
        },
      },
    },
    '$tag-border-cyan': {
      role: ['Cyan tag border for operational tag'],
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
      role: ['Teal tag background'],
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
      role: ['Teal tag text', 'Teal tag icon'],
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
      role: ['Teal tag hover for $tag-background-teal'],
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
      role: ['Teal tag border for operational tag'],
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
      role: ['Green tag background'],
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
      role: ['Green tag text', 'Green tag icon'],
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
      role: ['Green tag hover for $tag-background-green'],
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
      role: ['Green tag border for operational tag'],
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
  ai: {
    '$ai-aura-start': {
      role: ['Linear gradient start value for large AI layers'],
      value: {
        white: {
          name: 'Blue 50, 10%',
          hex: '#4589ff @ 10%',
        },
        g10: {
          name: 'Blue 50, 10%',
          hex: '#4589ff @ 10%',
        },
        g90: {
          name: 'Blue 50, 10%',
          hex: '#4589ff @ 10%',
        },
        g100: {
          name: 'Blue 50, 10%',
          hex: '#4589ff @ 10%',
        },
      },
    },
    '$ai-aura-start-sm': {
      role: ['Linear gradient start value for small AI layers'],
      value: {
        white: {
          name: 'Blue 50, 16%',
          hex: '#4589ff @ 16%',
        },
        g10: {
          name: 'Blue 50, 16%',
          hex: '#4589ff @ 16%',
        },
        g90: {
          name: 'Blue 50, 16%',
          hex: '#4589ff @ 16%',
        },
        g100: {
          name: 'Blue 50, 16%',
          hex: '#4589ff @ 16%',
        },
      },
    },
    '$ai-aura-end': {
      role: ['Linear gradient start value for all AI layers'],
      value: {
        white: {
          name: 'White, 0%',
          hex: '#ffffff @ 0%',
        },
        g10: {
          name: 'White, 0%',
          hex: '#ffffff @ 0%',
        },
        g90: {
          name: 'Black, 0%',
          hex: '#000000 @ 0%',
        },
        g100: {
          name: 'Black, 0%',
          hex: '#000000 @ 0%',
        },
      },
    },
    '$ai-aura-hover-start': {
      role: ['Linear gradient start value for the AI aura hover'],
      value: {
        white: {
          name: 'Blue 50, 32%',
          hex: '#4589ff',
        },
        g10: {
          name: 'Blue 50, 32%',
          hex: '#4589ff',
        },
        g90: {
          name: 'Blue 50, 40%',
          hex: '#4589ff @ 40%',
        },
        g100: {
          name: 'Blue 50, 40%',
          hex: '#4589ff @ 40%',
        },
      },
    },
    '$ai-aura-hover-end': {
      role: ['Linear gradient end value for the AI aura hover'],
      value: {
        white: {
          name: 'White, 0%',
          hex: '#ffffff @ 0%',
        },
        g10: {
          name: 'White, 0%',
          hex: '#ffffff @ 0%',
        },
        g90: {
          name: 'Black, 0%',
          hex: '#000000 @ 0%',
        },
        g100: {
          name: 'Black, 0%',
          hex: '#000000 @ 0%',
        },
      },
    },
    '$ai-aura-hover-background': {
      role: ['Hover background color for AI layers'],
      value: {
        white: {
          name: 'Blue 10',
          hex: '#edf5ff',
        },
        g10: {
          name: 'Blue 10',
          hex: '#edf5ff',
        },
        g90: {
          name: '$layer-hover',
          hex: '#e8e8e8',
        },
        g100: {
          name: '$layer-hover',
          hex: '#e8e8e8',
        },
      },
    },
    '$ai-border-start': {
      role: ['Linear gradient start value for AI borders'],
      value: {
        white: {
          name: 'Blue 30, 64%',
          hex: '#a6c8ff @ 64%',
        },
        g10: {
          name: 'Blue 30, 64%',
          hex: '#a6c8ff @ 64%',
        },
        g90: {
          name: 'Blue 30, 36%',
          hex: '#a6c8ff @ 36%',
        },
        g100: {
          name: 'Blue 30, 36%',
          hex: '#a6c8ff @ 36%',
        },
      },
    },
    '$ai-border-end': {
      role: ['Linear gradient end value for AI borders'],
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
          name: 'Red 50',
          hex: '#4589ff',
        },
        g100: {
          name: 'Red 50',
          hex: '#4589ff',
        },
      },
    },
    '$ai-border-strong': {
      role: [
        'Medium contrast border for AI elements',
        'Border-bottom paired with AI fields',
        '3:1 AA non-text contrast',
      ],
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
          name: 'Blue 40',
          hex: '#78a9ff',
        },
        g100: {
          name: 'Blue 40',
          hex: '#78a9ff',
        },
      },
    },
    '$ai-drop-shadow': {
      role: ['Drop shadow for the AI layer'],
      value: {
        white: {
          name: 'Blue 60, 10%',
          hex: '#0f62fe @ 10%',
        },
        g10: {
          name: 'Blue 60, 10%',
          hex: '#0f62fe @ 10%',
        },
        g90: {
          name: 'Black, 28%',
          hex: '#000000 @ 28%',
        },
        g100: {
          name: 'Black, 28%',
          hex: '#000000 @ 28%',
        },
      },
    },
    '$ai-inner-shadow': {
      role: ['Inner shadow for the AI layer'],
      value: {
        white: {
          name: 'Blue 50, 10%',
          hex: '#4589ff @ 10%',
        },
        g10: {
          name: 'Blue 50, 10%',
          hex: '#4589ff @ 10%',
        },
        g90: {
          name: 'Blue 50, 16%',
          hex: '#4589ff @ 16%',
        },
        g100: {
          name: 'Blue 50, 16%',
          hex: '#4589ff @ 16%',
        },
      },
    },
    '$ai-popover-background': {
      role: ['Background color for the AI explainability popover'],
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
    '$ai-popover-shadow-outer-01': {
      role: ['1 of 2 shadow colors for the AI explainability popover'],
      value: {
        white: {
          name: 'Blue 70, 6%',
          hex: '#0043ce @ 6%',
        },
        g10: {
          name: 'Blue 70, 6%',
          hex: '#0043ce @ 6%',
        },
        g90: {
          name: 'Black, 12%',
          hex: '#000000 @ 12%',
        },
        g100: {
          name: 'Black, 12%',
          hex: '#000000 @ 12%',
        },
      },
    },
    '$ai-popover-shadow-outer-02': {
      role: ['2 of 2 shadow colors for the AI explainability popover'],
      value: {
        white: {
          name: 'Black, 4%',
          hex: '#000000 @ 4%',
        },
        g10: {
          name: 'Black, 4%',
          hex: '#000000 @ 4%',
        },
        g90: {
          name: 'Black, 8%',
          hex: '#000000 @ 8%',
        },
        g100: {
          name: 'Black, 8%',
          hex: '#000000 @ 8%',
        },
      },
    },
    '$ai-skeleton-element': {
      role: ['Skeleton color for AI text and UI elements'],
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
          name: 'Blue 40, 30%',
          hex: '#78a9ff @ 30%',
        },
        g100: {
          name: 'Blue 40, 30%',
          hex: '#78a9ff @ 30%',
        },
      },
    },
    '$ai-skeleton-background': {
      role: ['Skeleton color for AI containers'],
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
          name: 'Blue 40, 50%',
          hex: '#78a9ff @ 50%',
        },
        g100: {
          name: 'Blue 40, 50%',
          hex: '#78a9ff @ 50%',
        },
      },
    },
    '$ai-overlay': {
      role: ['Background overlay for AI components'],
      value: {
        white: {
          name: 'Blue 100, 50%',
          hex: '#001141 @ 50%',
        },
        g10: {
          name: 'Blue 100, 50%',
          hex: '#001141 @ 50%',
        },
        g90: {
          name: 'Black, 50%',
          hex: '#000000 @ 50%',
        },
        g100: {
          name: 'Black, 50%',
          hex: '#000000 @ 50%',
        },
      },
    },
  },
  chat: {
    '$chat-avatar-bot': {
      role: ['Chat avatar background color for bots'],
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
    '$chat-avatar-agent': {
      role: ['Chat avatar background color for agents'],
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
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g100: {
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
      },
    },
    '$chat-avatar-user': {
      role: ['Chat avatar background color for users'],
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
    '$chat-bubble-user': {
      role: ['Chat bubble background color for users'],
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
          name: 'Gray 80',
          hex: '#393939',
        },
        g100: {
          name: 'Gray 80',
          hex: '#393939',
        },
      },
    },
    '$chat-bubble-agent': {
      role: ['Chat bubble background color for agents'],
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
          name: 'Gray 90',
          hex: '#262626',
        },
        g100: {
          name: 'Gray 90',
          hex: '#262626',
        },
      },
    },
    '$chat-bubble-border': {
      role: ['Chat bubble border color for agents'],
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
    '$chat-prompt-background': {
      role: ['Background color for chat prompt input'],
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
    '$chat-prompt-border-start': {
      role: ['Linear gradient start value for chat prompts border'],
      value: {
        white: {
          name: 'Gray 10',
          hex: '#f4f4f4',
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
          name: 'Gray 90',
          hex: '#262626',
        },
      },
    },
    '$chat-prompt-border-end': {
      role: ['Linear gradient end value for chat prompts border'],
      value: {
        white: {
          name: 'Gray 10, 0%',
          hex: '#f4f4f4 @ 0%',
        },
        g10: {
          name: 'Gray 10, 0%',
          hex: '#f4f4f4 @ 0%',
        },
        g90: {
          name: 'Gray 90, 0%',
          hex: '#262626 @ 0%',
        },
        g100: {
          name: 'Gray 90, 0%',
          hex: '#262626 @ 0%',
        },
      },
    },
    '$chat-shell-background': {
      role: ['Chat shell background color'],
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
          name: 'Gray 90',
          hex: '#262626',
        },
        g100: {
          name: 'Gray 90',
          hex: '#262626',
        },
      },
    },
    '$chat-header-background': {
      role: ['Chat header background color'],
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
          name: 'Gray 90',
          hex: '#262626',
        },
        g100: {
          name: 'Gray 90',
          hex: '#262626',
        },
      },
    },
  },
  'chat-button': {
    '$chat-button': {
      role: ['Chat quick action button color'],
      value: {
        white: {
          name: '$link-primary',
          hex: '#0f62fe',
        },
        g10: {
          name: '$link-primary',
          hex: '#0f62fe',
        },
        g90: {
          name: '$link-primary',
          hex: '#78a9ff',
        },
        g100: {
          name: '$link-primary',
          hex: '#78a9ff',
        },
      },
    },
    '$chat-button-hover': {
      role: ['Hover color for $chat-button'],
      value: {
        white: {
          name: '$background-hover',
          hex: '#8d8d8d @ 12%',
        },
        g10: {
          name: '$background-hover',
          hex: '#8d8d8d @ 12%',
        },
        g90: {
          name: '$background-hover',
          hex: '#8d8d8d @ 16%',
        },
        g100: {
          name: '$background-hover',
          hex: '#8d8d8d @ 16%',
        },
      },
    },
    '$chat-button-text-hover': {
      role: ['Text color for hovered chat button'],
      value: {
        white: {
          name: '$link-primary-hover',
          hex: '#0043ce',
        },
        g10: {
          name: '$link-primary-hover',
          hex: '#0043ce',
        },
        g90: {
          name: '$link-primary-hover',
          hex: '#a6c8ff',
        },
        g100: {
          name: '$link-primary-hover',
          hex: '#a6c8ff',
        },
      },
    },
    '$chat-button-active': {
      role: ['Active color for $chat-button'],
      value: {
        white: {
          name: '$background-active',
          hex: '#8d8d8d @ 50%',
        },
        g10: {
          name: '$background-active',
          hex: '#8d8d8d @ 50%',
        },
        g90: {
          name: '$background-active',
          hex: '#8d8d8d @ 40%',
        },
        g100: {
          name: '$background-active',
          hex: '#8d8d8d @ 40%',
        },
      },
    },
    '$chat-button-selected': {
      role: ['Selected color for $chat-button'],
      value: {
        white: {
          name: '$background-selected',
          hex: '#8d8d8d @ 20%',
        },
        g10: {
          name: '$background-selected',
          hex: '#8d8d8d @ 20%',
        },
        g90: {
          name: '$background-selected',
          hex: '#8d8d8d @ 24%',
        },
        g100: {
          name: '$background-selected',
          hex: '#8d8d8d @ 24%',
        },
      },
    },
    '$chat-button-text-selected': {
      role: ['Text color for selected chat-button'],
      value: {
        white: {
          name: '$text-secondary',
          hex: '#525252',
        },
        g10: {
          name: '$text-secondary',
          hex: '#525252',
        },
        g90: {
          name: '$text-secondary',
          hex: '#c6c6c6',
        },
        g100: {
          name: '$text-secondary',
          hex: '#c6c6c6',
        },
      },
    },
  },
};

export default colorTokens;
