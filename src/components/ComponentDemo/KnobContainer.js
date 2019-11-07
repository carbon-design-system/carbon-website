import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  RadioButton,
  RadioButtonGroup,
  Checkbox,
} from 'carbon-components-react';
import carbonReactDocgen from '../../data/react-docgen.json';
import { DemoContext } from './DemoContext';

import {
  knobContainer,
  knobComponentGroup,
  knobComponentGroupWrapper,
  knobFormItem,
} from './ComponentDemo.module.scss';

const ComponentKnobGroup = ({ component, knobs, code, setCode, ...rest }) => (
  <div className={knobComponentGroupWrapper}>
    <FormGroup className={knobComponentGroup} legendText={component} {...rest}>
      {Object.entries(knobs).map(([name, info], i) => (
        <Knob
          code={code}
          setCode={setCode}
          component={component}
          key={name}
          inputId={`${name}-knob-${i}`}
          info={info}
          name={name}
        />
      ))}
    </FormGroup>
  </div>
);

const Knob = ({ name, info, inputId, key, component, code, setCode }) => {
  const { knobs, setKnobs } = useContext(DemoContext);
  const { type, description, defaultValue } = info;

  const updateKnob = val => {
    const newKnobs = {
      ...knobs,
      [component]: { ...knobs[component], [name]: val },
    };

    const propString = Object.entries(newKnobs[component]).reduce(
      (accumulator, [prop, value]) => {
        if (!value || value === `'default'`) return accumulator;
        if (typeof value === 'boolean') {
          return `${accumulator} ${prop}`;
        }
        return `${accumulator} ${prop}=${value}`;
      },
      ''
    );

    setKnobs(newKnobs);
    setCode(
      code.replace(
        new RegExp(`<${component}.*?>`),
        `<${component}${propString}>`
      )
    );
  };

  if (type.name === 'bool') {
    const defaultChecked =
      (defaultValue && defaultValue.value !== 'false') || undefined;
    return (
      <Checkbox
        onChange={val => updateKnob(val)}
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
          onChange={val => updateKnob(val)}
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

const KnobContainer = ({ knobs, leftPaneHeight, code, setCode }) => {
  const requestedKnobs = Object.keys(knobs).map(component => {
    const fullComponent = carbonReactDocgen[component];
    const requestedProps = {};
    knobs[component].forEach(knob => {
      requestedProps[knob] = fullComponent.props[knob];
    });
    return [component, requestedProps];
  });

  return (
    <Form style={{ maxHeight: leftPaneHeight }} className={knobContainer}>
      {requestedKnobs.map(([component, componentKnobs]) => (
        <ComponentKnobGroup
          code={code}
          setCode={setCode}
          component={component}
          knobs={componentKnobs}
        />
      ))}
    </Form>
  );
};

export default KnobContainer;
