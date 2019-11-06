import React from 'react';
import {
  Form,
  FormGroup,
  // RadioButton,
  // RadioButtonGroup,
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

const Knob = ({ name, info, inputId }) => {
  const { type, description, defaultValue } = info;
  if (type.name === 'bool') {
    return (
      <Checkbox
        title={description}
        defaultChecked={defaultValue && defaultValue.value}
        labelText={name}
        className={knobFormItem}
        id={inputId}
      />
    );
  }
  return '';
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
