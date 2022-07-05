import React, { useState, useEffect } from 'react';
import './style.css';
import { useContext } from 'react';
import StoreContext from '../../components/Store/Context';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { FormItem } from '../../components/FormItem';


export const CoordinatorHome = () => {
  const { removeRole, removeToken, token } = useContext(StoreContext);
  const [courseName, setCourseName] = useState('');
  const [coordId, setCoordId] = useState(null);
  const [coordCourses, setCoordCourses] = useState([]);
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();


  useEffect(() => {
    setLoading(true);
    api.getCoordinatorId(token).then((r) => {
      setCoordId(r);
      api
        .getCoordinatorCourses(r)
        .then((r) => {
          setCoordCourses(r);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, [token]);

  const handleCreateCourse = async () => {
    const r = await api.createCourse(courseName, { coord_id: coordId });
    if (r) {
      alert('curso criado com sucesso');
    } else {
      alert('erro ao criar curso');
    }
  };

  return false ? (
    //TODO remove false 
    <div>
      <div>
        <h1>PAGE LOADING</h1>
      </div>
    </div>
  ) : (
    <div className='coordinator-container'>
      <div className='coordinator-content'>
      <div>
        <h1>Criando curso</h1>
         <form
          name='Curso'
          className='coordinator-form'
        >
          <FormItem
          title='Nome do curso'
          type="text"
          onChange={(e) => setCourseName(e.target.value)}
          value={courseName}
          placeholder="Nome do curso"
          />
           <button onClick={handleCreateCourse} className="btn btn-cursos"> CRIAR CURSO</button>
          <h2>Adicionando professor</h2>
          <select className='select-teacher'>
            <option disabled selected>Professor</option>
            <option value="Professor 1">Marco</option>
            <option value="Professor 2">Pedro</option>
            <option value="Professor 3">Caio</option>
            <option value="Professor 4">Celso</option>
          </select>
          <select className='select-curso'>
            <option disabled selected>Materia</option>
            <option value="Materia 1">Fisica</option>
            <option value="Materia 2">Matematica</option>
            <option value="Materia 3">Biologia</option>
          </select>
          <button onClick={handleCreateCourse} className="btn btn-teacher">Adicionar</button>
          </form>
      </div>
      </div>

      <div className='curso-container'>
        <div className='curso-content'>
        <div className='curso-form'>   
        <h2>Seus Cursos</h2>
        {coordCourses.length === 0 ? (
          <div>
            <h4>Sem cursos para esse usuario</h4>
          </div>
        ) : (
          coordCourses.map((course) => (
            <>
              <h2>Course name = {course.name}</h2>
              <h3>id: {course.id}</h3>
            </>
          ))
        )}
         <button className='btn btn-logout'
        onClick={() => {
          removeRole();
          removeToken();
          navigate('/login');
        }}
      >
        Logout
      </button>

      </div>
      </div>
      </div>
    </div>
  );
};
