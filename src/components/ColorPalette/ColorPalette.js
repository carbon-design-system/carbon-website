import React, { useState } from 'react';
import { ContentSwitcher, Switch } from 'carbon-components-react';
import cx from 'classnames';

const ColorPalette = ({ type }) => {
  const categorical = [
    {
      name: 'Purple 70',
      hex: '6929c4',
      light: true,
    },
    {
      name: 'Cyan 50',
      hex: '1192e8',
      light: false,
    },
    {
      name: 'Teal 70',
      hex: '005d5d',
      light: true,
    },
    {
      name: 'Magenta 70',
      hex: '9f1853',
      light: true,
    },
    {
      name: 'Red 50',
      hex: 'fa4d56',
      light: false,
    },
    {
      name: 'Red 90',
      hex: '570408',
      light: true,
    },
    {
      name: 'Green 60',
      hex: '198038',
      light: true,
    },
    {
      name: 'Blue 80',
      hex: '002d9c',
      light: true,
    },
    {
      name: 'Magenta 50',
      hex: 'ee538b',
      light: false,
    },
  ];

  const monoSequentialOne = [
    {
      name: 'Blue 10',
      hex: 'edf5ff',
      light: false,
    },
    {
      name: 'Blue 20',
      hex: 'd0e2ff',
      light: false,
    },
    {
      name: 'Blue 30',
      hex: 'a6c8ff',
      light: false,
    },
    {
      name: 'Blue 40',
      hex: '78a9ff',
      light: false,
    },
    {
      name: 'Blue 50',
      hex: '4589ff',
      light: false,
    },
    {
      name: 'Blue 60',
      hex: '0f62fe',
      light: true,
    },
    {
      name: 'Blue 70',
      hex: '0043ce',
      light: true,
    },
    {
      name: 'Blue 80',
      hex: '002d9c',
      light: true,
    },
    {
      name: 'Blue 90',
      hex: '001d6c',
      light: true,
    },
    {
      name: 'Blue 100',
      hex: '001141',
      light: true,
    },
  ];

  const monoSequentialTwo = [
    {
      name: 'Purple 10',
      hex: 'f6f2ff',
      light: false,
    },
    {
      name: 'Purple 20',
      hex: 'e8daff',
      light: false,
    },
    {
      name: 'Purple 30',
      hex: 'd4bbff',
      light: false,
    },
    {
      name: 'Purple 40',
      hex: 'be95ff',
      light: false,
    },
    {
      name: 'Purple 50',
      hex: 'a56eff',
      light: false,
    },
    {
      name: 'Purple 60',
      hex: '8a3ffc',
      light: true,
    },
    {
      name: 'Purple 70',
      hex: '6929c4',
      light: true,
    },
    {
      name: 'Purple 80',
      hex: '491d8b',
      light: true,
    },
    {
      name: 'Purple 90',
      hex: '31135e',
      light: true,
    },
    {
      name: 'Purple 100',
      hex: '1c0f30',
      light: true,
    },
  ];

  const [continuous, setContinuous] = useState(false);
  console.log('initial state', continuous);

  const setTrue = () => {
    setContinuous(true);
  };

  const setFalse = () => {
    setContinuous(false);
  };

  return (
    <div className="color-palette-container">
      <ContentSwitcher
        onChange={() => {
          console.log('changed');
        }}
        className="palette-switcher"
        selectionMode="automatic"
        selectedIndex={0}
      >
        <Switch
          text={type === 'categorical' ? 'Light' : 'Discrete'}
          onClick={setFalse}
        />
        <Switch
          text={type === 'categorical' ? 'Dark' : 'Continuous'}
          onClick={setTrue}
        />
      </ContentSwitcher>
      {type === 'categorical' && (
        <div className="palettes-container">
          {categorical.map((i, index) => (
            <div
              className={cx('color-palette-color', { 'light-text': i.light })}
              style={{ background: `#${i.hex}` }}
            >
              <span>
                {`0${index + 1}.`} {i.name}
              </span>{' '}
              <span>{i.hex}</span>
            </div>
          ))}
        </div>
      )}

      {type === 'sequential' && (
        <div className="sequential-container">
          <div
            className={cx('palettes-container sequential', {
              'gradient-blue': continuous,
            })}
          >
            {monoSequentialOne.map((i, index) => (
              <div
                className={cx('color-palette-color', {
                  'light-text': i.light,
                })}
                style={!continuous ? { background: `#${i.hex}` } : null}
              >
                <span>{i.name}</span> <span>{i.hex}</span>
              </div>
            ))}
            )}
          </div>
          <div
            className={cx('palettes-container sequential', {
              'gradient-purple': continuous,
            })}
          >
            {monoSequentialTwo.map((i, index) => (
              <div
                className={cx('color-palette-color', {
                  'light-text': i.light,
                })}
                style={!continuous ? { background: `#${i.hex}` } : null}
              >
                <span>{i.name}</span> <span>{i.hex}</span>
              </div>
            ))}
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPalette;
