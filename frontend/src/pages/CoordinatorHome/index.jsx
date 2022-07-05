import React, { useState} from 'react';
import "./style.css";
import { FormItem } from '../../components/FormItem';
import { Drawer } from '../../components/Drawer';
  

export const CoordinatorHome = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [funcao, setFuncao] = useState();


  return (
    <div>
      <Drawer />
      <div><button id='btnCord' className='btn btn-coordinator' type="submit"><h2>Gerenciar Tarefas</h2></button></div>
      <div className="coordinator-container">
      <div className="coordinator-content">
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
           <FormItem
            title="Email"
            name={email}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
      </div>
    </div>
    </div>
    
  );
};
