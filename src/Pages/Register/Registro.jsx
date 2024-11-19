import axios from 'axios';
import React, { useState } from 'react';
import './Registro.css'
import { useNavigate } from 'react-router-dom';

function Register() {
	const [clientName, setClientName] = useState("");
	const [clientEmail, setClientEmail] = useState("");
	const [clientSenha, setClientSenha] = useState("");
	const [message, setMessage] = useState(null);
	const [messageType, setMessageType] = useState("");
	const navigate = useNavigate();

	async function createAccount(e) {
		e.preventDefault();

		try {
			const api = await axios.get("http://localhost:5000/clientes");
			const client_Exists = api.data.filter(
				(client) => client.email === clientEmail,
			).length;

			if (!client_Exists) {
				const newClients = {
					name: clientName,
					email: clientEmail,
					senha: clientSenha,
				};
				await axios.post("http://localhost:5000/clientes", newClients);

				setMessage("Conta criada com sucesso");
				setMessageType("success");
				setTimeout(() => navigate("/login"), 2000);

				setClientEmail("");
				setClientName("");
				setClientSenha("");

			} else {
				setMessage("Email já cadastrado");
				setMessageType("error");
			}
		} catch (error) {
			console.log(error);
			setMessage("Erro ao criar conta");
			setMessageType("error");
		}
	}
  return (


    <div className='container-page-registro'>
      <div className="container-registro">
      <form onSubmit={createAccount}>
        <h1>Registro</h1>
        {message && (
						<div
							className={`${
								messageType === "success" ? "bg-green-100" : "bg-red-100 border-red-400 text-red-700"
							} p-2 text-center text-sm text-gray-600 rounded-md mb-2`}
						>
							{message}
						</div>
					)}
        <div className="input-box-registro">
          <input type="text" placeholder="Nome" value={clientName} onChange={(e) => setClientName(e.target.value)} required autoFocus />
          <i><box-icon type="solid" name="user"></box-icon></i>
        </div>
        <div className="input-box-registro">
          <input type="email"  placeholder="Email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required />
          <i><box-icon type="solid" name="envelope"></box-icon></i>
        </div>
        <div className="input-box-registro">
          <input type="password" placeholder="Senha" value={clientSenha} onChange={(e) => setClientSenha(e.target.value)} required />
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