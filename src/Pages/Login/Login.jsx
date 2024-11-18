import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [message, setMessage] = useState(null);
	const [messageType, setMessageType] = useState("");
	const navigate = useNavigate();

	async function handleLogin(e) {
		e.preventDefault();

		try {
			const response = await axios.get("http://localhost:5000/clientes", {
				params: { email, senha },
			});

			if (response.data.length > 0) {
				const userData = response.data[0];
				localStorage.setItem("client", JSON.stringify(userData));

				setMessage("Login efetuado com sucesso");
				setMessageType("success");
				setTimeout(() => navigate("/"), 2000);

				setEmail("");
				setSenha("");
			} else {
				setMessage("Email ou senha inválidos");
				setMessageType("error");
			}
		} catch (error) {
			console.error("Erro ao fazer login:", error);
			setMessage("Erro ao fazer login");
			setMessageType("error");
		}
	}
	return (
		<div className="container-page-login">
			<div className="container-login">
				<form onSubmit={handleLogin} className="">
					<h1>Login</h1>

					{message && (
						<div
							className={`${
								messageType === "success"
									? "bg-green-100 border-green-400 text-green-700"
									: "bg-red-100 border-red-400 text-red-700"
							} border p-3 rounded-md mb-3`}
						>
							{message}
						</div>
					)}
					<div className="input-box-login">
						<input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
						<i>
							<box-icon type="solid" name="user" />
						</i>
					</div>
					<div className="input-box-login">
						<input type="password" placeholder="Senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
						<i>
							<box-icon type="solid" name="lock" />
						</i>
					</div>

					<button type="submit" className="btn">
						Logar
					</button>

					<div className="login-link">
						<p>
							Não tem uma conta? <a href="/registro">Registrar</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
