import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  role: null,
  setToken: () => {},
  setRole: () => {},
});

export default StoreContext;
