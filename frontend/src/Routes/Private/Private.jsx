import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';

export const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      element={() =>
        token ? <Component {...rest} /> : <Navigate to="/login" />
      }
    ></Route>
  );
};
