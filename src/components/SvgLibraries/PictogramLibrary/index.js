import React from 'react';
import PictogramLibrary from './PictogramLibrary';
import LibraryProvider from '../shared/LibraryProvider';

export default ({ site = 'carbon' }) => (
  <LibraryProvider site={site} type="pictogram">
    <PictogramLibrary />
  </LibraryProvider>
);
