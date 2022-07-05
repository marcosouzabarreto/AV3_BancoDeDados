import React, { useState } from 'react';
import { FormItem } from '../../components/FormItem';
import './style.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';



export const TeacherHome = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [materia, setMateria] = useState();
  const { removeRole, removeToken, token } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="teacher-container">
          <div className="teacher-content">
            <div className="teacher-form">
              <h1>Área do professor</h1>
              <h4>Seu perfil</h4>
              <form
                name='Admin'
                className='admin-form'
                onSubmit={(e) => e.preventDefault()}
              >
                <select className='select-curso'>
                  <option disabled selected>Materia</option>
                  <option value="Materia 1">Fisica</option>
                  <option value="Materia 2">Matematica</option>
                  <option value="Materia 3">Biologia</option>
                </select>
                <div className="login-buttons-container">
                  <button className='btn btn-logout'
                    onClick={() => {
                      removeRole();
                      removeToken();
                      navigate('/login');
                    }}
                  >
                    Logout
                  </button>
                  <button className="btn btn-cursos">Entrar na materia</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
