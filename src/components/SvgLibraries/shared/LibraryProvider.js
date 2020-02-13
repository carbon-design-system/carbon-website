/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Location } from '@reach/router';
import { withPrefix } from 'gatsby';

export const LibraryContext = React.createContext();

export default ({ children, type, site }) => {
  const iconDirectory = withPrefix(`/${type}s/`);

  return (
    <Location>
      {({ location }) => {
        return (
          <LibraryContext.Provider
            value={{ site, baseUrl: location.origin + iconDirectory }}>
            {children}
          </LibraryContext.Provider>
        );
      }}
    </Location>
  );
};
