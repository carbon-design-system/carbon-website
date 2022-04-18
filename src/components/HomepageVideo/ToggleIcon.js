import React from 'react';
import {
  PlayOutline,
  PlayOutlineFilled,
  PauseOutline,
  PauseOutlineFilled,
} from '@carbon/icons-react';

const Pause = ({ hovering }) =>
  hovering ? <PauseOutlineFilled size={24} /> : <PauseOutline size={24} />;

const Play = ({ hovering }) =>
  hovering ? <PlayOutlineFilled size={24} /> : <PlayOutline size={24} />;

const ToggleIcon = ({ paused, hovering }) =>
  paused ? <Play hovering={hovering} /> : <Pause hovering={hovering} />;

export default ToggleIcon;
