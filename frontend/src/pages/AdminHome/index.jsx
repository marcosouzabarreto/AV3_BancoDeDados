import React, {useState} from 'react';
import { FormItem } from '../../components/FormItem';
import './style.css';
import { Drawer  } from '../../components/Drawer';

export const AdminHome = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [funcao, setFuncao] = useState();
 
 


  return (
    <div>
      <Drawer/>
      <button className="btn btn-admin"><h2>Gerenciar Usuarios</h2></button>
    <div className="admin-container">
        <div className="admin-content">
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
          title="Funçao"
          name={funcao}
          type='select'
          onChange={(e) => setFuncao(e.target.value)}
          >
          <option value="Professor">Professor</option>
          <option value="Cordenador">Cordenador</option>
          </FormItem>
        </form>
      </div>
    </div>
    </div> 
    

  );
};
