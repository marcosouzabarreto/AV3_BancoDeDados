import React, { useState } from 'react';

export const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = () => {
    console.log(`
      form submitted with values =>
      name: ${name}
      password: ${password}
    `);
    // TODO: Send this data to the backend, probably will be available in 1 week
  };

  return (
    <div>
      <h1>Crie sua conta</h1>

      <form name="login">
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </form>
      <button type="submit" onClick={handleSubmitForm}>
        Login
      </button>
    </div>
  );
};
