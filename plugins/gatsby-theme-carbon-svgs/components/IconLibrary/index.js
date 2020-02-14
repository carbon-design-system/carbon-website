import React from 'react';
import IconLibrary from './IconLibrary';
import LibraryProvider from '../shared/LibraryProvider';

export default ({ site }) => (
  <LibraryProvider site={site} type="icon">
    <IconLibrary />
  </LibraryProvider>
);
