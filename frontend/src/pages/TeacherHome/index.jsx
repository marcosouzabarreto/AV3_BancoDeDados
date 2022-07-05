import React, { useState, useContext } from 'react';
import StoreContext from '../../components/Store/Context';
import { useEffect } from 'react';
import api from '../../api';
import { FormItem } from '../../components/FormItem';


export const TeacherHome = () => {;
  const { removeRole, removeToken} = useContext(StoreContext);

  const navigate = useNavigate();
  const [materias, setMaterias] = useState([]);
  const [loading, setLoading] = useState(false);

  const { token } = useContext(StoreContext);

  useEffect(() => {
    setLoading(true);
    api.getTeacherId(token).then((r) => {
      api
        .getTeacherSubjects(r)
        .then((r) => {
          setMaterias(r);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, [token]);

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
