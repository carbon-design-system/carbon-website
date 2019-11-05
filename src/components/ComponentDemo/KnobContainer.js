import React from 'react';
import carbonReactDocgen from '../../data/react-docgen.json';

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
    <div>
      {requestedKnobs.map(([component, componentKnobs]) => (
        <div>
          <h1>{component}</h1>
          {Object.entries(componentKnobs).map(([knob, knobInfo]) => (
            <>
              <p>{knob}</p>
              <pre>{JSON.stringify(knobInfo, null, 2)}</pre>
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KnobContainer;
