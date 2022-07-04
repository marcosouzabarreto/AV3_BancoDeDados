import React, { useContext } from 'react';
import StoreContext from '../../components/Store/Context';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const Header = () => {
  const navigate = useNavigate();

  const { role } = useContext(StoreContext);

  return (
    <div className="header">
      <h1 className="header-title">SGE</h1>
      <div className="header-options">
        <button className='btn btn-primary' type="submit"
             onClick={() => {if (role === 'admin') {
              navigate('/admin-home');
              } else if (role === 'teacher') {
              navigate('/teacher-home');
              } else if (role === 'coordinator') {
              navigate('/coordinator-home');
              } else {
              navigate('/login');
              }} }>Home</button>
        </div>
    </div>
  );
};
