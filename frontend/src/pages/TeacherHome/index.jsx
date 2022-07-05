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
            <form
              name="Admin"
              className="admin-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <FormItem
                title="Nome"
                name={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <FormItem
                title="Email"
                name={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
