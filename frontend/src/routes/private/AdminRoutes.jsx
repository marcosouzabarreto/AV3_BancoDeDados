import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';

export const AdminRoutes = ({ children }) => {
  const { token, role } = useContext(StoreContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  } else if (role !== 'admin') {
    // TODO: User not authorized page
    return () => {
      return <div>Usuario nao autorizado</div>;
    };
  } else {
    return children;
  }
};
