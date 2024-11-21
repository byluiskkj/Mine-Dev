import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
	const [produtos, setProdutos] = useState([]);
	const [carrinho, setCarrinho] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await axios.get("http://localhost:5000/produtos");
				setProdutos(response.data);
			} catch (error) {
				console.error("Erro ao buscar produtos:", error);
			}
		}

		fetchProducts();

		const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
		setCarrinho(carrinhoSalvo);
	}, []);

	useEffect(() => {
		if (carrinho.length > 0) {
			localStorage.setItem("carrinho", JSON.stringify(carrinho));
		}
	}, [carrinho]);

	const adicionarAoCarrinho = (produto) => {
		const produtoExistente = carrinho.find((item) => item.id === produto.id);

		if (produtoExistente) {
			const carrinhoAtualizado = carrinho.map((item) =>
				item.id === produto.id
					? { ...item, quantity: item.quantity + 1 }
					: item,
			);
			setCarrinho(carrinhoAtualizado);
		} else {
			const carrinhoAtualizado = [...carrinho, { ...produto, quantity: 1 }];
			setCarrinho(carrinhoAtualizado);
		}
	};

	return (
		<header>
			<div class="navbar">
				<div class="conteúdo-interno-cabeçalho">
					<h1 class="logo">
						Mine <span>Dev</span>
					</h1>
					<nav>
						<ul>
							<li>
								<a href="/sobresite">Sobre nosso site!</a>
							</li>
							<li>
								<a
									target="_blank"
									rel="noreferrer"
									href="mailto:davi.alencar.luis@gmail.com"
								>
									Contato!
								</a>
							</li>
							<li>
								<a href="/trust">Somos confiáveis!?</a>
							</li>
						</ul>
					</nav>
					<div class="nav-img-container">
						<a href="/Cart">
							<img
								className="img-navbar"
								src="/src/assets/cart.png"
								alt="IMAGEM DO CART!"
							/>
						</a>
					</div>
					<div class="menu-button" id="menu-btn"></div>
				</div>
			</div>

			<div class="container">
				{produtos.map((product) => (
					<div key={product.id} className="card card1">
						<img src={product.imgUrl} alt={product.name} />
						<h1>{product.name}</h1>
						<p class="descricao-produto">{product.descricao}</p>
						<button
							type="button"
							className="btn-1"
							onClick={() => adicionarAoCarrinho(product)}
						>{`R$ ${product.price}`}</button>
					</div>
				))}
			</div>

			<footer className="footer">
				<div class="footer-container">
					<div class="footer-section">
						<h3>Links Importantes</h3>
						<ul>
							<li>
								<a href="/sobreMim">Sobre Mim</a>
							</li>
							<li>
								<a href="/services">Serviços</a>
							</li>
							<li>
								<a href="mailto:davi.alencar.luis@gmail.com">Contato</a>
							</li>
						</ul>
					</div>

					<div class="footer-section">
						<div class="social-icons">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://wa.me/91983075446"
								title="WhatsApp"
							>
								<img
									src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
									alt="WhatsApp"
								/>
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.instagram.com/luiiskkj/"
								title="Instagram"
							>
								<img
									src="https://store-images.s-microsoft.com/image/apps.43327.13510798887167234.cadff69d-8229-427b-a7da-21dbaf80bd81.79b8f512-1b22-45d6-9495-881485e3a87e"
									alt="Instagram"
								/>
							</a>
						</div>
					</div>
				</div>

				<div class="footer-bottom">&copy; 2024 MineDev. Feito por Luis.</div>
			</footer>
		</header>
	);
};

export default Home;
