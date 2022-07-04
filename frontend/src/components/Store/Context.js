import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  role: null,
  setToken: () => {},
  setRole: () => {},
  removeToken: () => {},
  removeRole: () => {},
});

export default StoreContext;
