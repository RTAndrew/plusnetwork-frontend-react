import React from 'react';
import { CompaniesStore, JobStore, SearchStore } from 'stores';

export const storesContext = React.createContext({
  JobsStore: JobStore,
  SearchStore: SearchStore,
  CompaniesStore: CompaniesStore,
});
