import React, { useState, useLayoutEffect } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import useMedia from 'use-media';
import { breakpoints } from '@carbon/elements';

export const DemoContext = React.createContext({});

const DemoContextProvider = ({ children }) => {
  const [knobs, setKnobs] = useState({});
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });
  const [isKnobContainerCollapsed, setIsKnobContainerCollapsed] = useState();

  useLayoutEffect(() => {
    setIsKnobContainerCollapsed(isMobile);
  }, [isMobile]);

  return (
    <DemoContext.Provider
      value={{
        knobs,
        setKnobs,
        isMobile,
        isKnobContainerCollapsed,
        setIsKnobContainerCollapsed,
      }}>
      {children}
    </DemoContext.Provider>
  );
};

export default DemoContextProvider;
