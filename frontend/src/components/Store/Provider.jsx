import React from 'react';

import Context from './Context.js';
import { useStorage } from '../../utils/useStorage.js';

const Provider = (props) => {
  const [token, setToken] = useStorage('token');
  const [role, setRole] = useStorage('role');

  return (
    <Context.Provider value={{ token, setToken, role, setRole }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
