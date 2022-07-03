import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormItem } from '../../components/FormItem';
import StoreContext from '../../components/Store/Context.js';
import api from '../../api';
import './style.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { setToken, setRole } = useContext(StoreContext);

  const handleSubmitForm = async () => {
    console.log(`
      form submitted with values =>
      email: ${email}
      password: ${password}
    `);

    const { token, role } = await api.login({ email, password });

    if (token && role) {
      setToken(token);
      setRole(role);
      if (role === 'admin') {
        return navigate('/admin-home');
      } else if (role === 'coordinator') {
        return navigate('/coordinator-home');
      } else if (role === 'teacher') {
        return navigate('/teacher-home');
      }
    } else {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Faca o login</h1>

        <form
          name="login"
          className="login-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormItem
            title="Email"
            name={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormItem
            title="Senha"
            name={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        {/* //Vou fazer o css do botao, ja comecei aqui, mas vou formatar meu pc antes pq ta paia */}
        <div className="login-buttons-container">
          <button
            type="submit"
            onClick={() => navigate('/cadastro')}
            className="btn btn-cadastro"
          >
            Faca seu cadastro
          </button>
          <button
            type="submit"
            onClick={handleSubmitForm}
            className="btn btn-login"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
