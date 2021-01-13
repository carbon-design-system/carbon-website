/* eslint-disable no-console */
import React, { useContext, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Close20 } from '@carbon/icons-react';
import nanoid from 'nanoid';

import {
  Form,
  FormGroup,
  RadioButton,
  RadioButtonGroup,
  Checkbox,
} from 'carbon-components-react';
import cx from 'classnames';

import carbonReactDocgen from '../../data/docgen';
import { DemoContext } from './DemoContext';

import {
  knobContainer,
  knobContainerCollapsed,
  formGroup,
  componentKnobWrapper,
  componentKnobTitle,
  formItem,
  checkboxWrapper,
  iconButton,
  iconButtonRow,
} from './ComponentDemo.module.scss';

// Components w/o react docgen data
// TODO: remove after all components have base code set
// import { pascalCase } from 'change-case';
// import { components } from '../../data/components.json';
// const docgenComponents = Object.keys(carbonReactDocgen);
// const componentNames = components.map(({ component }) => component);

// const noInfo = componentNames.filter(
//   name => !docgenComponents.includes(pascalCase(name))
// );

const Component = ({
  component,
  knobs,
  code,
  setCode,
  initialCode,
  variantId,
}) => {
  const booleanKnobs = [];
  const radioKnobs = [];
  const { current: uid } = useRef(nanoid());

  Object.entries(knobs).forEach((knob) => {
    const [, { type }] = knob;
    if (type.name === 'bool') {
      booleanKnobs.push(knob);
    } else {
      radioKnobs.push(knob);
    }
  });

  const componentGroupId = `${component}-knobs`;

  if (!booleanKnobs.length && !radioKnobs.length) {
    return (
      <>
        <div className={componentKnobTitle} id={componentGroupId}>
          {component}
        </div>
        <p style={{ padding: '1rem' }}>No docgen data found</p>
      </>
    );
  }

  return (
    <>
      <div className={componentKnobTitle} id={componentGroupId}>
        {component}
      </div>
      <div
        role="group"
        aria-labelledby={componentGroupId}
        className={componentKnobWrapper}>
        {booleanKnobs.length > 0 && (
          <FormGroup className={formGroup} legendText="Modifiers">
            {booleanKnobs.map(([name, info]) => (
              <Knob
                code={code}
                setCode={setCode}
                component={component}
                key={`${name}-${variantId}-${uid}`}
                inputId={`${name}-${variantId}-${uid}`}
                info={info}
                name={name}
                initialCode={initialCode}
              />
            ))}
          </FormGroup>
        )}
        {radioKnobs.map(([name, info]) => (
          <Knob
            code={code}
            setCode={setCode}
            component={component}
            key={`${name}-${variantId}-${uid}`}
            inputId={`${name}-${variantId}-${uid}`}
            info={info}
            name={name}
            initialCode={initialCode}
          />
        ))}
      </div>
    </>
  );
};

const useDefaultProps = (code, componentPropsRegex) => {
  const match = code.match(componentPropsRegex);
  if (match !== null) {
    return match[1];
  }
  return '';
};

const Knob = ({
  name,
  info,
  inputId,
  component,
  code,
  setCode,
  initialCode,
}) => {
  // eslint-disable-next-line no-useless-escape
  const pattern = `<${component}(\\s?>|\\s[\\s\\S]*?>)`;
  const componentPropsRegex = new RegExp(pattern);

  // stores whatever props are provided in the inital code
  const defaultKnobProps = useDefaultProps(
    initialCode,
    componentPropsRegex
  ).slice(0, -1);

  const { knobs, setKnobs } = useContext(DemoContext);

  const { description, defaultValue, type } = info;

  const updateKnob = (val) => {
    const newKnobs = {
      ...knobs,
      [component]: { ...knobs[component], ...{ [name]: val } },
    };

    const isSelfClosingTag =
      defaultKnobProps.charAt(defaultKnobProps.length - 1) === '/';

    const parsedKnobProps = isSelfClosingTag
      ? defaultKnobProps.slice(0, -2)
      : defaultKnobProps;

    // Generates valid jsx props from a prop object
    const propString = parsedKnobProps.concat(
      Object.entries(newKnobs[component]).reduce(
        (accumulator, [prop, value]) => {
          if (!value || value === `'default'`) return accumulator;
          if (typeof value === 'boolean') {
            return `${accumulator} ${prop}`;
          }
          return `${accumulator} ${prop}=${value}`;
        },
        ''
      )
    );

    setKnobs(newKnobs);
    if (isSelfClosingTag) {
      setCode(
        code.replace(componentPropsRegex, `<${component}${propString} />`)
      );
    } else {
      setCode(code.replace(componentPropsRegex, `<${component}${propString}>`));
    }
  };

  if (type.name === 'bool') {
    const defaultChecked =
      (defaultValue && defaultValue.value !== 'false') || undefined;
    return (
      <Checkbox
        onChange={(val) => updateKnob(val)}
        key={inputId}
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
          onChange={(val) => updateKnob(val)}
          defaultSelected={defaultSelected}
          name={name}
          orientation="vertical">
          {values.map(({ value }) => (
            <RadioButton
              key={`${inputId}-${value}`}
              value={value}
              labelText={value.replace(/'/g, '')}
            />
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

const KnobContainer = ({ knobs, code, setCode, initialCode, variantId }) => {
  const {
    isMobile,
    isKnobContainerCollapsed,
    setIsKnobContainerCollapsed,
  } = useContext(DemoContext);

  const requestedKnobs = Object.keys(knobs).map((component) => {
    const fullComponent = carbonReactDocgen[component];
    const requestedProps = {};

    if (!fullComponent) {
      console.error(`Error: no docgen data found for ${component}`);
      return [component, []];
    }

    knobs[component].forEach((knob) => {
      if (fullComponent.props[knob].type) {
        requestedProps[knob] = fullComponent.props[knob];
      } else {
        console.error(
          `Error: ${component} prop '${knob}' lacks sufficient docgen info.`
        );
      }
    });

    return [component, requestedProps];
  });

  return (
    <Form
      className={cx(knobContainer, {
        [knobContainerCollapsed]: isMobile && isKnobContainerCollapsed,
      })}>
      {isMobile && (
        <div className={iconButtonRow}>
          <button
            className={iconButton}
            type="button"
            onClick={() => setIsKnobContainerCollapsed(true)}>
            <Close20 />
          </button>
        </div>
      )}
      {requestedKnobs.map(([component, componentKnobs]) => (
        <Component
          key={component}
          code={code}
          setCode={setCode}
          component={component}
          knobs={componentKnobs}
          initialCode={initialCode}
          variantId={variantId}
        />
      ))}
    </Form>
  );
};

export default KnobContainer;
