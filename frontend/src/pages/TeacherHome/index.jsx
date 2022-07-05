import React, { useState} from 'react';
import { FormItem } from '../../components/FormItem';
import { Drawer } from '../../components/Drawer';

export const TeacherHome = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [materia, setMateria] = useState();

  return (
    <div>
      <Drawer />
      <div><button id='btnCord' className='btn btn-teacher' type="submit"><h2>Area do Professor</h2></button></div>
    <div>
          <div className="teacher-container">
      <div className="teacher-content">
        <form
          name='Admin'
          className='admin-form'
          onSubmit={(e) => e.preventDefault()}
        >
          <FormItem
            title='Nome'
            name={name}
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
          <FormItem
            title="Email"
            name={email}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormItem
            title="Materia"
            name={materia}
            type='select'
            onChange={(e) => setMateria(e.target.value)}
          >
          </FormItem>
        </form>
      </div>
    </div>
    </div>
    </div> 
  );
};
