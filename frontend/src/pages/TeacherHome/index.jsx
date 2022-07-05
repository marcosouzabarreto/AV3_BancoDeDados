import React from 'react';
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
