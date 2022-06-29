import React, { useState } from 'react';
import { FormItem } from '../../components/FormItem';
import './style.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = () => {
    console.log(`
      form submitted with values =>
      email: ${email}
      password: ${password}
    `);
    // TODO: Send this data to the backend, probably will be available in 1 week.
    // It's been over a week btw  ASS:Tyrone.
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Faca o login</h1>

        <form name="login" className="login-form">
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
            onClick={handleSubmitForm}
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
