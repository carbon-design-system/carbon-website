import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';

const { prefix } = settings;

const InputRange = ({ step, min, max, value, onChange, id }) => (
  <input
    id={id}
    type="range"
    step={step || 1}
    min={min}
    max={max}
    value={value}
    onChange={onChange}
    style={{ '--track-width': `${((value - min) / (max - min)) * 100}%` }}
    className={`${prefix}--input-range`}
  />
);

InputRange.propTypes = {
  // input step
  step: PropTypes.number,

  // input min
  min: PropTypes.number.isRequired,

  // input max
  max: PropTypes.number.isRequired,

  // input value
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // onChange function
  onChange: PropTypes.func.isRequired,

  // input id
  id: PropTypes.string,
};

export default InputRange;
