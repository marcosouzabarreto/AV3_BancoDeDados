import React from 'react';
/* import { useContext } from 'react';
import StoreContext from '../../components/Store/Context'; */
import { useNavigate } from 'react-router-dom';
import { FormItem } from '../../components/FormItem';
import './style.css';

export const AdminHome = () => {
  /* const { removeRole, removeToken } = useContext(StoreContext); */

  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <button className="btn btn-admin">Gerenciar Usuarios</button>
        <div className="admin-content">
        <form 
        name='Admin'
        className='admin-form'
        >
          <FormItem
          title='Nome'
          name='Nome'
          type='text'
          />
          <FormItem 
          title="Email"
          name='Email'
          type='email'
          />
        </form>
      </div>
    </div>

  );
};
