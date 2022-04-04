/* eslint-disable */
const colorTokens = {
  'core-tokens': {
    $background: {
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
    '$background-brand': {
      role: ['Primary interactive color'],
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
    '$button-primary': {
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
    '$button-secondary': {
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
    '$button-tertiary': {
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
    '$button-danger-primary': {
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
    '$button-danger-secondary': {
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
    '$layer-01': {
      role: [
        'Container background on $background',
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
    '$layer-02': {
      role: ['Container background on $layer-01'],
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
      role: ['Container background on $layer-02'],
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
    '$layer-selected-inverse': {
      role: ['4.5:1 aa element contrast', 'Emphasis elements'],
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
    '$layer-accent-01': {
      role: ['Tertiary background'],
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
      role: ['Tertiary background'],
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
      role: ['Tertiary background'],
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
    '$toggle-off': {
      role: ['3:1 aa element contrast'],
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
    '$border-interactive': {
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
    '$border-subtle-00': {
      role: ['Subtle border'],
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
    '$border-subtle-01': {
      role: ['Subtle border'],
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
    '$border-subtle-02': {
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
    '$border-subtle-03': {
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
          name: 'Gray 50',
          hex: '#8d8d8d',
        },
        g100: {
          name: 'Gray 60',
          hex: '#6f6f6f',
        },
      },
    },
    '$border-strong-01': {
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
    '$border-strong-02': {
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
          name: 'Gray 30',
          hex: '#c6c6c6',
        },
        g100: {
          name: 'Gray 40',
          hex: '#a8a8a8',
        },
      },
    },
    '$border-inverse': {
      role: ['4.5:1 aa element contrast', 'High contrast border'],
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
    '$field-03': {
      role: ['“Light” variant input fields', 'Fields on $ui-01 backgrounds'],
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
    '$focus-inset': {
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
    '$support-error': {
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
    '$support-success': {
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
    '$support-warning': {
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
    $overlay: {
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
    '$button-primary-hover': {
      role: ['$button-primary hover'],
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
    '$button-secondary-hover': {
      role: ['$button-secondary hover'],
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
    '$button-tertiary-hover': {
      role: ['$button-tertiary hover'],
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
    '$button-danger-hover': {
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
    '$button-primary-active': {
      role: ['$button-primary active'],
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
    '$button-secondary-active': {
      role: ['$button-secondary active'],
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
    '$button-tertiary-active': {
      role: ['$button-tertiary active'],
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
    '$button-danger-active': {
      role: ['Danger active', '$support-error active'],
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
    '$button-disabled': {
      role: ['Disabled elements'],
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
    '$background-hover': {
      role: ['$background hover', 'Transparent background hover'],
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
    '$background-selected-hover': {
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
    '$background-inverse-hover': {
      role: ['Hover for $background-inverse'],
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
    '$background-active': {
      role: ['$background active'],
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
    '$background-selected': {
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
    '$layer-hover-01': {
      role: ['$layer-01 hover', 'Transparent background hover'],
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
    '$layer-hover-02': {
      role: ['$layer-02 hover'],
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
    '$layer-hover-03': {
      role: ['$layer-03 hover'],
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
          name: 'Gray 60 hover',
          hex: '#5e5e5e',
        },
        g100: {
          name: 'Gray 70 hover',
          hex: '#656565',
        },
      },
    },
    '$layer-accent-hover-01': {
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
    '$layer-accent-hover-02': {
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
          name: 'Gray 50 hover',
          hex: '#7a7a7a',
        },
        g100: {
          name: 'Gray 60 hover',
          hex: '#5e5e5e',
        },
      },
    },
    '$layer-selected-hover-01': {
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
    '$layer-selected-hover-02': {
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
          name: 'Gray 60 hover',
          hex: '#5e5e5e',
        },
      },
    },
    '$layer-active-01': {
      role: ['$layer-01 active'],
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
      role: ['$layer-02 active'],
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
      role: ['$layer-02 active'],
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
    '$layer-selected-02': {
      role: ['$layer-02 selected'],
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
      role: ['$layer-02 selected'],
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
    '$layer-accent-active-01': {
      role: ['$layer-accent-01 active'],
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
    '$layer-accent-active-02': {
      role: ['$layer-accent-02 active'],
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
      role: ['$layer-accent-03 active'],
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
    '$layer-selected-disabled': {
      role: ['Disabled selected layer'],
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
    '$field-hover-01': {
      role: ['$field-01 hover', 'Transparent background hover'],
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
    '$field-hover-02': {
      role: ['$field-02 hover', 'Transparent background hover'],
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
    '$field-hover-03': {
      role: ['$field-02 hover', 'Transparent background hover'],
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
          name: 'Gray 60 hover',
          hex: '#5e5e5e',
        },
        g100: {
          name: 'Gray 70 hover',
          hex: '#636363',
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
    '$skeleton-background': {
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
    '$skeleton-element': {
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
    '$link-primary-hover': {
      role: ['$button-primary text hover'],
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
    '$link-visited': {
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
    '$border-subtle-selected-01': {
      role: ['$border-subtle-01 selected'],
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
      role: ['$border-subtle-02 selected'],
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
      role: ['$border-subtle-03 selected'],
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
    '$border-disabled': {
      role: ['Disabled border'],
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
    '$text-disabled': {
      role: ['Disabled text'],
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
    '$icon-disabled': {
      role: ['Disabled icons'],
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
    '$icon-on-color-disabled': {
      role: ['Disabled icon'],
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
    '$text-on-color-disabled': {
      role: ['Disabled text'],
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
