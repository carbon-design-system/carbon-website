import React from 'react';
import Library from './IconLibrary';
import LibraryProvider from '../shared/LibraryProvider';

const IconLibrary = ({ site }) => (
  <LibraryProvider site={site} type="icon">
    <Library />
  </LibraryProvider>
);

export default IconLibrary;
