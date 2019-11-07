import React, { useState } from 'react';

export const DemoContext = React.createContext({});

const DemoContextProvider = ({ children }) => {
  const [knobs, setKnobs] = useState({});

  return (
    <DemoContext.Provider value={{ knobs, setKnobs }}>
      {children}
    </DemoContext.Provider>
  );
};

export default DemoContextProvider;
