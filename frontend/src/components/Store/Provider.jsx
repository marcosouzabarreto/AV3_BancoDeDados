import React from 'react';

import Context from './Context.js';
import { useStorage } from '../../utils/useStorage.js';

const Provider = (props) => {
  const [token, setToken, removeToken] = useStorage('token');
  const [role, setRole, removeRole] = useStorage('role');

  return (
    <Context.Provider
      value={{ token, setToken, removeToken, role, setRole, removeRole }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
