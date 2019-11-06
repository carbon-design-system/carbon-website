import React from 'react';
// import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  RadioButton,
  RadioButtonGroup,
  Checkbox,
} from 'carbon-components-react';
import carbonReactDocgen from '../../data/react-docgen.json';

import {
  knobContainer,
  knobComponentGroup,
  knobComponentGroupWrapper,
  knobFormItem,
} from './ComponentDemo.module.scss';

const ComponentKnobGroup = ({ component, knobs, ...rest }) => (
  <div className={knobComponentGroupWrapper}>
    <FormGroup className={knobComponentGroup} legendText={component} {...rest}>
      {Object.entries(knobs).map(([name, info], i) => (
        <Knob
          key={name}
          inputId={`${name}-knob-${i}`}
          info={info}
          name={name}
        />
      ))}
    </FormGroup>
  </div>
);

const Knob = ({ name, info, inputId, key }) => {
  const { type, description, defaultValue } = info;

  if (type.name === 'bool') {
    const defaultChecked =
      (defaultValue && defaultValue.value !== 'false') || undefined;
    return (
      <Checkbox
        key={key}
        title={description}
        defaultChecked={defaultChecked}
        labelText={name}
        className={knobFormItem}
        id={inputId}
      />
    );
  }

  if (type.name === 'enum') {
    const values = type.value;

    let defaultSelected =
      (defaultValue && defaultValue.value !== 'false') || undefined;

    // some props (Button size) declare a default prop-type with no effect
    if (values.map(({ value }) => value).includes(`'default'`)) {
      defaultSelected = `'default'`;
    }

    return (
      <FormGroup legendText={name}>
        <RadioButtonGroup
          defaultSelected={defaultSelected}
          orientation="vertical">
          {values.map(({ value }) => (
            <RadioButton value={value} labelText={value.replace(/'/g, '')} />
          ))}
        </RadioButtonGroup>
      </FormGroup>
    );
  }
  return '';
};

Knob.propTypes = {
  info: (props, propName) => {
    if (!/(enum|bool)/.test(props[propName].type.name)) {
      return new Error(
        `Knob '${props[propName]}' does not have a valid prop-type. Use a knob with an enum or boolean value.`
      );
    }
    return null;
  },
};

const KnobContainer = ({ knobs }) => {
  const requestedKnobs = Object.keys(knobs).map(component => {
    const fullComponent = carbonReactDocgen[component];
    const requestedProps = {};
    knobs[component].forEach(knob => {
      requestedProps[knob] = fullComponent.props[knob];
    });
    return [component, requestedProps];
  });

  return (
    <Form className={knobContainer}>
      {requestedKnobs.map(([component, componentKnobs]) => (
        <ComponentKnobGroup component={component} knobs={componentKnobs} />
      ))}
    </Form>
  );
};

export default KnobContainer;
