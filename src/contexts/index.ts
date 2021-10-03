import React from 'react';
import { JobStore } from 'stores';

export const storesContext = React.createContext({
  JobsStore: new JobStore(),
});
