/* eslint-disable */
const colorTokens = {
  'core-tokens': {
    '$ui-background': {
      role: ['Default page background'],
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
    '$interactive-01': {
      role: ['Primary interactive color', 'Primary buttons'],
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
    '$interactive-02': {
      role: ['Secondary interactive color', 'Secondary button'],
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
    '$interactive-03': {
      role: ['4.5:1 AA contrast', 'Tertiary button'],
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
    '$interactive-04': {
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
    '$danger-01': {
      role: ['Danger button background', '3:1 AA contrast'],
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
    '$danger-02': {
      role: ['Danger button variant', 'Text', 'Icon', 'Border'],
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
    '$ui-01': {
      role: [
        'Container background on $ui-background',
        'Secondary page background',
      ],
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
    '$ui-02': {
      role: ['Container background on $ui-01', '`Light` variant background'],
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
    '$ui-03': {
      role: ['Subtle border', 'Tertiary background'],
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
    '$ui-04': {
      role: ['3:1 aa element contrast', 'Medium contrast border'],
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
    '$ui-05': {
      role: [
        '4.5:1 aa element contrast',
        'High contrast border',
        'Emphasis elements',
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
    '$button-separator': {
      role: ['3:1 aa element contrast', 'Fluid button separator'],
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
    '$decorative-01': {
      role: ['“Light” variant elements'],
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
    '$text-01': {
      role: [
        'Primary text',
        'Body copy',
        'Headers',
        'Hover text color for $text-02',
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
    '$text-02': {
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
    '$text-03': {
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
    '$text-04': {
      role: ['Text on interactive colors'],
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
    '$text-05': {
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
    '$link-01': {
      role: ['Primary links', 'Ghost button'],
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
    '$link-02': {
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
    '$inverse-link': {
      role: ['Links on $inverse-02 backgrounds'],
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
    '$icon-01': {
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
    '$icon-02': {
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
    '$icon-03': {
      role: [`Icons on interactive colors`, `Icons on non-ui colors`],
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
    '$field-01': {
      role: ['Default input fields', 'Fields on $ui-backgrounds'],
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
      role: ['“Light” variant input fields', 'Fields on $ui-01 backgrounds'],
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
    '$inverse-01': {
      role: ['Inverse text color', 'Inverse icon color'],
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
    '$inverse-02': {
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
    '$support-01': {
      role: ['Error'],
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
    '$support-02': {
      role: ['Success'],
      value: {
        white: {
          name: 'Green 60',
          hex: '#198038',
        },
        g10: {
          name: 'Green 60',
          hex: '#198038',
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
    '$support-03': {
      role: ['Warning'],
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
    '$support-04': {
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
    '$inverse-support-01': {
      role: ['Danger in high contrast moments'],
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
    '$inverse-support-02': {
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
    '$inverse-support-03': {
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
    '$inverse-support-04': {
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
    '$overlay-01': {
      role: ['Background overlay'],
      value: {
        white: {
          name: 'Gray 100',
          hex: '#161616 @ 50%',
        },
        g10: {
          name: 'Gray 100',
          hex: '#161616 @ 50%',
        },
        g90: {
          name: 'Gray 100',
          hex: '#161616 @ 70%',
        },
        g100: {
          name: 'Gray 100',
          hex: '#161616 @ 70%',
        },
      },
    },
  },
  'interaction-tokens': {
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
    '$inverse-focus-ui': {
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
    '$hover-primary': {
      role: ['$interactive-01 hover'],
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
    '$hover-primary-text': {
      role: ['$interactive-01 text hover'],
      value: {
        white: {
          name: 'Blue 70',
          hex: '#054ada',
        },
        g10: {
          name: 'Blue 70',
          hex: '#054ada',
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
    '$hover-secondary': {
      role: ['$interactive-02 hover'],
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
    '$hover-tertiary': {
      role: ['$interactive-03 hover', '$inverse-01 hover'],
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
    '$hover-ui': {
      role: ['$ui-01 hover', '$ui-02 hover', 'Transparent background hover'],
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
          hex: '#4c4c4c',
        },
        g100: {
          name: 'Gray 90 hover',
          hex: '#353535',
        },
      },
    },
    '$hover-light-ui': {
      role: ['“Light” variant hover'],
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
          name: 'Gray 70 hover',
          hex: '#656565',
        },
        g100: {
          name: 'Gray 80 hover',
          hex: '#4c4c4c',
        },
      },
    },
    '$hover-selected-ui': {
      role: ['Selected row hover'],
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
    '$hover-danger': {
      role: ['Danger hover', '$support-01 hover'],
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
    '$hover-row': {
      role: ['Row hover'],
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
          hex: '#4c4c4c',
        },
        g100: {
          name: 'Gray 90 hover',
          hex: '#353535',
        },
      },
    },
    '$inverse-hover-ui': {
      role: ['Hover for $inverse-02'],
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
    '$active-primary': {
      role: ['$interactive-01 active'],
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
    '$active-secondary': {
      role: ['$interactive-02 active', '$inverse-01 active'],
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
    '$active-tertiary': {
      role: ['$interactive-03 active'],
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
    '$active-ui': {
      role: ['$ui-01 active', '$ui-02 active'],
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
    '$active-light-ui': {
      role: ['“Light” variant active'],
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
    '$active-danger': {
      role: ['Danger active', '$support-01 active'],
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
    '$selected-ui': {
      role: ['Selected UI elements'],
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
    '$selected-light-ui': {
      role: ['“Light” variant selected'],
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
    $highlight: {
      role: ['$interactive-01 highlight'],
      value: {
        white: {
          name: 'Blue 20',
          hex: '#d0e2ff',
        },
        g10: {
          name: 'Blue 10',
          hex: '#edf5ff',
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
    '$skeleton-01': {
      role: ['Skeleton state of graphics'],
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
    '$skeleton-02': {
      role: ['Skeleton state of texts'],
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
    '$visited-link': {
      role: ['Visited links'],
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
    '$disabled-01': {
      role: ['Disabled fields', 'Disabled backgrounds', 'Disabled border'],
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
    '$disabled-02': {
      role: [
        'Disabled elements on $disabled-01',
        'Disabled label',
        'Disabled text on $disabled-01',
        'Disabled icons',
        'Disabled border',
      ],
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
    '$disabled-03': {
      role: ['Disabled text on $disabled-02', 'Disabled icons on $disabled-02'],
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
};

export default colorTokens;
