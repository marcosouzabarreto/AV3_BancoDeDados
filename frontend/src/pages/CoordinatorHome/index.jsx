import React from 'react';
import { useContext } from 'react';
import StoreContext from '../../components/Store/Context';
import { useNavigate } from 'react-router-dom';

export const CoordinatorHome = () => {
  const { removeRole, removeToken } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div>
      <div>You're a Coordinator</div>
      <button
        onClick={() => {
          removeRole();
          removeToken();
          navigate('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
};
