import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { FormItem } from '../../components/FormItem';
import api from '../../api';

export const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const handleSubmitForm = async () => {
    const response = await api.createAccount({ name, email, password, role });
    if (response) {
      navigate('/login');
    } else {
      setEmail('');
      setName('');
      setPassword('');
      setRole('');
    }
  };
  return (
    <div className="cad-container">
      <div className="cad-content">
        <h1>Cadastro</h1>

        <form
          name="cadastro"
          className="cad-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormItem
            title="Email"
            name={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormItem
            title="Nome"
            name={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <FormItem
            title="Senha"
            name={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormItem
            title="Funçao"
            name={role}
            type="text"
            onChange={(e) => setRole(e.target.value)}
          />
        </form>

        <div className="login-buttons-container">
          <button
            type="submit"
            onClick={() => navigate('/login')}
            className="btn btn-returnt-login"
          >
            Faça seu login
          </button>
          <button
            type="submit"
            onClick={handleSubmitForm}
            className="btn btn-cds"
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};
