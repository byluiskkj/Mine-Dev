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
				setProdutos(response.data); // Atualiza o estado com os produtos
			} catch (error) {
				console.error("Erro ao buscar produtos:", error);
			}
		}

		fetchProducts();

		const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
		setCarrinho(carrinhoSalvo);
	}, []); // O array vazio [] garante que o useEffect será executado apenas na montagem

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
			<div className="navbar">
				<div className="conteúdo interno do cabeçalho">
					<h1 className="logo">
						Mine <span>Dev</span>
					</h1>
					<nav>
						<ul>
							<li>
								<a href="/">Sobre nosso site!</a>
							</li>
							<li>
								<a href="/">Contato!</a>
							</li>
							<li>
								<a href="/">Somos confiáveis!?</a>
							</li>
						</ul>
					</nav>
					<div className="nav-img-container">
						<img src="/src/assets/cart.png" alt="IMAGEM DO CART!" />
						<img src="/src/assets/menu.png" alt="IMAGEM DO MENU!" />
					</div>
				</div>
			</div>
			<div className="container">
				{produtos.map((product) => (
					<div key={product.id} className="card card1">
						<img src={product.imgUrl} alt={product.name} />
						<h1>{product.name}</h1>
						<p>{product.descricao}</p>
						<button type="button" className="btn-1" onClick={() => adicionarAoCarrinho(product)}>{`R$ ${product.price}`}</button>
					</div>
				))}
			</div>

			<footer>
				<div className="footer-container">
					<div className="footer-section">
						<h3>Links Importantes</h3>
						<ul>
							<li>
								<a href="/">Sobre Nós</a>
							</li>
							<li>
								<a href="/">Serviços</a>
							</li>
							<li>
								<a href="/">Contato</a>
							</li>
						</ul>
					</div>

					<div className="footer-section">
						<div className="social-icons">
							<a href="https://wa.me/91983075446" title="WhatsApp">
								<img src="/src/assets/footer Whatsapp.jpg" alt="WhatsApp" />
							</a>
							<a href="https://www.instagram.com/luiiskkj/" title="Instagram">
								<img src="/src/assets/instagram footer.jpg" alt="Instagram" />
							</a>
						</div>
					</div>
				</div>

				<div className="footer-bottom">&copy; 2024 MineDev. Feito por Luis.</div>
			</footer>
		</header>
	);
};

export default Home;
