import React from 'react';
import {
  PlayOutline24,
  PlayOutlineFilled24,
  PauseOutline24,
  PauseOutlineFilled24,
} from '@carbon/icons-react';

const Pause = ({ hovering }) =>
  hovering ? <PauseOutlineFilled24 /> : <PauseOutline24 />;

const Play = ({ hovering }) =>
  hovering ? <PlayOutlineFilled24 /> : <PlayOutline24 />;

const ToggleIcon = ({ paused, hovering }) =>
  paused ? <Play hovering={hovering} /> : <Pause hovering={hovering} />;

export default ToggleIcon;
