import React from 'react';

import Context from './Context.js';
import { useStorage } from '../../utils/useStorage.js';

const Provider = (props) => {
  const [token, setToken] = useStorage('token');

  return (
    <Context.Provider value={{ token, setToken }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
