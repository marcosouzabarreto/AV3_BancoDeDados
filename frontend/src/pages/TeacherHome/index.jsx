import React, { useState, useContext } from 'react';
import StoreContext from '../../components/Store/Context';
import { useEffect } from 'react';
import api from '../../api';
import { FormItem } from '../../components/FormItem';

export const TeacherHome = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
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
        <button id="btnCord" className="btn btn-teacher" type="submit">
          <h2>Area do Professor</h2>
        </button>
      </div>
      <div>
        <div className="teacher-container">
          <div className="teacher-content">
            <h2>Area do Professor</h2>
            <form
              name='Teacher'
              className='teacher-form'
            >
              <select className='select-curso'>
                <option disabled selected>Materia</option>
                <option value="Materia 1">Fisica</option>
                <option value="Materia 2">Matematica</option>
                <option value="Materia 3">Biologia</option>
              </select>
              <select className='select-aluno'>
                <option disabled selected>Aluno</option>
                <option value="Materia 1">Roberto</option>
                <option value="Materia 2">Mario</option>
                <option value="Materia 3">Rodrigo</option>
              </select>
            </form>
            <button className='btn'>Selecionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
/* import React from 'react';
import "./style.css";

export const TeacherHome = () => {

  return (
    <div className="teacher-container">
      <div className="teacher-content">
        <h1>Área do Professor</h1>

        <h2>Seleciona sua materia</h2>
        <form
          name='Teacher'
          className='teacher-form'
        >
          <select className='select-curso'>
            <option disabled selected>Materia</option>
            <option value="Materia 1">Fisica</option>
            <option value="Materia 2">Matematica</option>
            <option value="Materia 3">Biologia</option>
          </select>
        </form>
        <button className='btn'>Selecionar</button>
      </div>
    </div>
  );
};
 */