import React from 'react';
import { JobStore, SearchStore } from 'stores';

export const storesContext = React.createContext({
  JobsStore: JobStore,
  SearchStore: SearchStore,
});
