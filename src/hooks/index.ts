import { storesContext } from 'contexts';
import { useContext } from 'react';

export const useStore = () => useContext(storesContext);
