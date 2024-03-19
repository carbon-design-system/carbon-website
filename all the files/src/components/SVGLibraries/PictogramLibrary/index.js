import React from 'react';
import Library from './PictogramLibrary';
import LibraryProvider from '../shared/LibraryProvider';

const PictogramLibrary = ({ site }) => (
  <LibraryProvider site={site} type="pictogram">
    <Library />
  </LibraryProvider>
);

export default PictogramLibrary;
