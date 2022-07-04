import { useState } from 'react';
import storage from './storage';

export const useStorage = (key) => {
  const [state, setState] = useState(() => storage.get(key));

  const set = (newValue) => {
    storage.set(key, newValue);
  };

  const remove = () => {
    storage.remove(key);
    setState(undefined);
  };
  return [state, set, remove];
};
