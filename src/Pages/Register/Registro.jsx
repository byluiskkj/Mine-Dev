import axios from 'axios';
import React, { useState } from 'react';
import './Registro.css'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function registro(e) {
    e.preventDefault();
    const newRegister = { name, email, senha };

    try {
      const response = await axios.post('http://localhost:5000/clientes', newRegister);
      console.log('Usuário registrado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  }

  return (


    <div className='container-page-registro'>
      <div className="container-registro">
      <form onSubmit={registro}>
        <h1>Registro</h1>
        <div className="input-box-registro">
          <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required autoFocus />
          <i><box-icon type="solid" name="user"></box-icon></i>
        </div>
        <div className="input-box-registro">
          <input type="email"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <i><box-icon type="solid" name="envelope"></box-icon></i>
        </div>
        <div className="input-box-registro">
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          <i><box-icon type="solid" name="lock"></box-icon></i>
        </div>

        <button type="submit" className="btn">Registrar</button>

        <div className="login-registro">
          <p>Já tem uma conta? <a href="Login">Logar</a></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Register;