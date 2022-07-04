import React, { useContext } from 'react';
import StoreContext from '../../components/Store/Context';
import { useNavigate } from 'react-router-dom';

export const UserNotAuthorized = () => {
  const navigate = useNavigate();

  const { role } = useContext(StoreContext);

  return (
    <div>
      <h1>Usuario nao autorizado</h1>

      <button
        onClick={() => {
          if (role === 'admin') {
            navigate('/admin-home');
          } else if (role === 'teacher') {
            navigate('/teacher-home');
          } else if (role === 'coordinator') {
            navigate('/coordinator-home');
          } else {
            navigate('/login');
          }
        }}
      >
        Retornar para a home
      </button>
    </div>
  );
};
