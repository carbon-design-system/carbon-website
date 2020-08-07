import React, { useState } from 'react';
import { ContentSwitcher, Switch, Dropdown } from 'carbon-components-react';
import cx from 'classnames';
import {
  categoricalLight,
  oneColorLight,
  twoColorLight,
  threeColorLight,
  fourColorLight,
  fiveColorLight,
  categoricalDark,
  oneColorDark,
  twoColorDark,
  threeColorDark,
  fourColorDark,
  fiveColorDark,
  monoColors,
  divergingColors,
  alert,
} from '../../data/data-visualization/palettes';
import ColorPaletteColor from './ColorPaletteColor';
import PalettesContainer from './PalettesContainer';

const ColorPalette = ({ type, isMono, isDiverging }) => {
  // STATES
  const [continuous, setContinuous] = useState(false);
  const [dark, setDark] = useState(false);
  const [groupNumber, setGroupNumber] = useState(1); // used for selected dropdown item
  let colors;

  // DETERMINE LIGHT/DARK
  const categorical = dark ? categoricalDark : categoricalLight;
  const oneColor = dark ? oneColorDark : oneColorLight;
  const twoColor = dark ? twoColorDark : twoColorLight;
  const threeColor = dark ? threeColorDark : threeColorLight;
  const fourColor = dark ? fourColorDark : fourColorLight;
  const fiveColor = dark ? fiveColorDark : fiveColorLight;

  // SET RENDERED COLORS
  const [colorGroup, setColorGroup] = useState(oneColor); // used to render type === "grouped" colors
  if (type === 'sequential' && isMono) {
    colors = monoColors;
  } else if (type === 'sequential' && isDiverging) {
    colors = divergingColors;
  } else if (type === 'categorical') {
    colors = categorical;
  } else if (type === 'alert') {
    colors = alert;
  }

  // DROPDOWN STUFF
  const dropdownItems = [
    {
      id: 1,
      label: '1-Color group',
    },
    {
      id: 2,
      label: '2-Color group',
    },
    {
      id: 3,
      label: '3-Color group',
    },
    {
      id: 4,
      label: '4-Color group',
    },
    {
      id: 5,
      label: '5-Color group',
    },
  ];

  const onDropdownChange = (e) => {
    // update selected option
    setGroupNumber(e.selectedItem.id);

    // update colors rendered
    switch (e.selectedItem.id) {
      case 1:
        setColorGroup(oneColor);
        break;
      case 2:
        setColorGroup(twoColor);
        break;
      case 3:
        setColorGroup(threeColor);
        break;
      case 4:
        setColorGroup(fourColor);
        break;
      case 5:
        setColorGroup(fiveColor);
        break;
      default:
    }
  };

  // SWITCHER STUFF
  const setTrue = () => {
    if (type === 'sequential') {
      setContinuous(true); // for sequential palettes
    } else {
      setDark(true); // for all other palettes
    }
  };

  const setFalse = () => {
    if (type === 'sequential') {
      setContinuous(false); // for sequential palettes
    } else {
      setDark(false); // for all other palettes
    }
  };

  const handleKeyboard = (e) => {
    if (e.key === 'ArrowRight') {
      setTrue();
    }

    if (e.key === 'ArrowLeft') {
      setFalse();
    }
  };

  const switcherOne = type === 'sequential' ? 'Discrete' : 'Light';
  const switcherTwo = type === 'sequential' ? 'Continuous' : 'Dark';

  return (
    <div>
      <div
        className={cx('palette-controls', {
          'group-controls': type === 'grouped',
          'sequential-controls': type === 'sequential',
          'dark-controls': dark,
        })}
      >
        <ContentSwitcher
          onChange={handleKeyboard}
          className="palette-switcher"
          selectionMode="automatic"
          selectedIndex={0}
        >
          <Switch text={switcherOne} onClick={setFalse} />
          <Switch text={switcherTwo} onClick={setTrue} />
        </ContentSwitcher>
        {type === 'grouped' && (
          <Dropdown
            label="Color group selection"
            id="color-group-dropdown"
            size="xl"
            light
            items={dropdownItems}
            onChange={onDropdownChange}
            selectedItem={dropdownItems[groupNumber - 1]}
            initialSelectedItem={dropdownItems[0]}
          />
        )}
      </div>

      {type === 'grouped' && (
        <PalettesContainer dark={dark}>
          {colorGroup.map((i, index) => (
            <div className="group-container" key={index}>
              <div className="group-option">Option {index + 1}</div>
              {i.map((j, jIndex) => (
                <ColorPaletteColor
                  index={jIndex}
                  lightText={j.light}
                  hex={j.hex}
                  name={j.name}
                />
              ))}
            </div>
          ))}
        </PalettesContainer>
      )}

      {(type === 'categorical' || type === 'alert') && (
        <PalettesContainer dark={dark} type={type}>
          {colors.map((i, index) => (
            <ColorPaletteColor
              isNumbered
              index={index}
              lightText={i.light}
              hex={i.hex}
              name={i.name}
            />
          ))}
        </PalettesContainer>
      )}

      {type === 'sequential' && (
        <div className="sequential-container">
          {colors.map((i, index) => (
            <PalettesContainer
              color={i.color}
              index={index}
              continuous={continuous}
            >
              <div className="group-option">Option {index + 1}</div>
              {i.data.map((j, jIndex) => (
                <ColorPaletteColor
                  index={jIndex}
                  lightText={j.light}
                  hex={j.hex}
                  name={j.name}
                  isSequential
                  continuous={continuous}
                />
              ))}
            </PalettesContainer>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPalette;
