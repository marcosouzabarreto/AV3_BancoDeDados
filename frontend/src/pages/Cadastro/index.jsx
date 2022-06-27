import React, { useState } from "react";
import './style.css';
import { FormItem } from '../../components/FormItem';

export const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmitForm = () => {
        console.log(`
          form submitted with values =>
          email: ${email}
          password: ${password}
          nome: ${name}
        `);
    };
    return (
        <div className="cad-container">
            <div className="cad-content">
                <h1>Cadastro</h1>


                <form name="cadastro" className="cad-form">
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
                </form>

                //salve padrinho queria tua ajuda com essa troca de tela aqui entre login e cadastro
                <button type="submit" onClick={handleSubmitForm}>Faca seu Login</button>
                <button type="submit" onClick={handleSubmitForm}>Cadastro</button>
            </div>
        </div>
    );
};
