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
  const [groupNumber, setGroupNumber] = useState(1);

  // SET COLORS
  const categorical = dark ? categoricalDark : categoricalLight;
  const oneColor = dark ? oneColorDark : oneColorLight;
  const twoColor = dark ? twoColorDark : twoColorLight;
  const threeColor = dark ? threeColorDark : threeColorLight;
  const fourColor = dark ? fourColorDark : fourColorLight;
  const fiveColor = dark ? fiveColorDark : fiveColorLight;

  // grouped colors won't update "light" / "dark" versions if selectedGroup is a state
  // for this reason, I made it into a switch case. Light/dark switcher works if it's a variable.
  // however, when the dropdown is then updated, the rendered groups don't change.
  // for this reason, I made a state (groupNumber), which will change on dropdown change,
  // and the selectedGroup variable is switched based on the groupNumber state.
  // this way both switcher and dropdown changes work.
  let selectedGroup;
  if (type === 'grouped') {
    switch (groupNumber) {
      case 1:
        selectedGroup = oneColor;
        break;
      case 2:
        selectedGroup = twoColor;
        break;
      case 3:
        selectedGroup = threeColor;
        break;
      case 4:
        selectedGroup = fourColor;
        break;
      case 5:
        selectedGroup = fiveColor;
        break;
      default:
    }
  } else if (type === 'sequential' && isMono) {
    selectedGroup = monoColors;
  } else if (type === 'sequential' && isDiverging) {
    selectedGroup = divergingColors;
  } else if (type === 'categorical') {
    selectedGroup = categorical;
  } else if (type === 'alert') {
    selectedGroup = alert;
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
    setGroupNumber(e.selectedItem.id);
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
          onChange={() => {}} // switcher won't work w/o func
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
            initialSelectedItem={dropdownItems[0]}
          />
        )}
      </div>

      {type === 'grouped' && (
        <PalettesContainer dark={dark}>
          {selectedGroup.map((i, index) => (
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
          {selectedGroup.map((i, index) => (
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
          {selectedGroup.map((i, index) => (
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
