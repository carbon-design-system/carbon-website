import React, { useContext, useRef } from 'react';
// import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  RadioButton,
  RadioButtonGroup,
  Checkbox,
} from 'carbon-components-react';

import carbonReactDocgen from '../../data/docgen';
import { DemoContext } from './DemoContext';

import {
  formContainer,
  formGroup,
  componentKnobWrapper,
  componentKnobTitle,
  formItem,
  checkboxWrapper,
} from './ComponentDemo.module.scss';

const Component = ({ component, knobs, code, setCode }) => {
  const booleanKnobs = [];
  const radioKnobs = [];

  Object.entries(knobs).forEach(knob => {
    const [, { type }] = knob;
    if (type.name === 'bool') {
      booleanKnobs.push(knob);
    } else {
      radioKnobs.push(knob);
    }
  });

  const componentGroupId = `${component}-knobs`;

  return (
    <>
      <div className={componentKnobTitle} id={componentGroupId}>
        {component}
      </div>
      <div
        role="group"
        aria-labelledby={componentGroupId}
        className={componentKnobWrapper}>
        <FormGroup className={formGroup} legendText="Modifiers">
          {booleanKnobs.map(([name, info], i) => (
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
        {radioKnobs.map(([name, info], i) => (
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
      </div>
    </>
  );
};

const Knob = ({ name, info, inputId, key, component, code, setCode }) => {
  const componentPropsRegex = new RegExp(`<${component}(.*?)>`);

  // stores whatever props are provided in the inital code
  const { current: defaultKnobProps } = useRef(
    code.match(componentPropsRegex)[1]
  );

  const { knobs, setKnobs } = useContext(DemoContext);
  const { description, defaultValue, type } = info;

  const updateKnob = val => {
    const newKnobs = {
      ...knobs,
      [component]: { ...knobs[component], [name]: val },
    };

    // Generates valid jsx props from a prop object
    const propString = Object.entries(newKnobs[component])
      .reduce((accumulator, [prop, value]) => {
        if (!value || value === `'default'`) return accumulator;
        if (typeof value === 'boolean') {
          return `${accumulator} ${prop}`;
        }
        return `${accumulator} ${prop}=${value}`;
      }, '')
      .concat(defaultKnobProps);

    setKnobs(newKnobs);
    setCode(code.replace(componentPropsRegex, `<${component}${propString}>`));
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
        className={formItem}
        wrapperClassName={checkboxWrapper}
        id={inputId}
      />
    );
  }

  if (type.name === 'enum') {
    const values = type.value;

    let defaultSelected = (defaultValue && defaultValue.value) || undefined;

    // some props (Button size) declare a default prop-type with no effect
    if (values.map(({ value }) => value).includes(`'default'`)) {
      defaultSelected = `'default'`;
    }

    return (
      <FormGroup className={formGroup} legendText={name}>
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

    if (!fullComponent) {
      console.error(`Error: no docgen data found for ${component}`);
      return [component, []];
    }

    knobs[component].forEach(knob => {
      requestedProps[knob] = fullComponent.props[knob];
    });

    return [component, requestedProps];
  });

  return (
    <Form style={{ maxHeight: leftPaneHeight }} className={formContainer}>
      {requestedKnobs.map(([component, componentKnobs]) => (
        <Component
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
