import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';

export const PrivateRoutes = ({ children, allowedRoles }) => {
  const { token, role } = useContext(StoreContext);

  if (!token) return <Navigate to="/" />;
  if (!allowedRoles.includes(role))
    return <Navigate to="/user-not-authorized" />;

  return children;
};
