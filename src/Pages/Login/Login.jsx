import React from 'react'
import './Login.css'

function Login() {

  return (

    <div className='container-page-login'>
      <div className='container-login'>
        <form className=''>
          <h1>Login</h1>
          
          <div className='input-box-login'>
            <input type="email" placeholder='Email' required autoFocus/>
            <i><box-icon type='solid' name='user'></box-icon></i>
          </div>
          <div className='input-box-login'>
            <input type="password" placeholder='Senha' required/>
            <i><box-icon type='solid' name='lock'></box-icon></i>
          </div>

          <button type='submit' className='btn'>Logar</button>

          <div className='login-link'>
            <p>Não tem uma conta? <a href="/">Registrar</a></p>
          </div>
          
        </form>
    </div>
    </div>
  );

}

export default Login
