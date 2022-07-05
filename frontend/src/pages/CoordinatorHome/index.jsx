import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import StoreContext from '../../components/Store/Context';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

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

  return loading ? (
    <div>
      <div>
        <h1>PAGE LOADING</h1>
      </div>
    </div>
  ) : (
    <div>
      <div>You're a Coordinator - id:{coordId}</div>
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

      <div>
        <h1>Your courses</h1>
        {coordCourses.length === 0 ? (
          <div>
            <h1>Sem cursos para esse usuario</h1>
          </div>
        ) : (
          coordCourses.map((course) => (
            <>
              <h2>Course name = {course.name}</h2>
              <h3>id: {course.id}</h3>
            </>
          ))
        )}
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
