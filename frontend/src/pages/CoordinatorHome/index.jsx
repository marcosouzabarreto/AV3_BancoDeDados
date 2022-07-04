import React, { useState } from 'react';
import { useContext } from 'react';
import StoreContext from '../../components/Store/Context';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

export const CoordinatorHome = () => {
  const { removeRole, removeToken, token } = useContext(StoreContext);
  const [courseName, setCourseName] = useState('');

  const navigate = useNavigate();

  const handleCreateCourse = async () => {
    const coord_id = await api.getCoordinatorId(token);
    const r = await api.createCourse(courseName, { coord_id });
    if (r) {
      alert('curso criado com sucesso');
    } else {
      alert('erro ao criar curso');
    }
  };

  return (
    <div>
      <div>You're a Coordinator</div>
      <div>
        <h1>Create Course</h1>
        <input
          type="text"
          onChange={(e) => setCourseName(e.target.value)}
          value={courseName}
          placeholder="Nome do curso"
        />
        <button onClick={handleCreateCourse}> CRIAR CURSO</button>
      </div>
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
