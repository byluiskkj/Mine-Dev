import { useState, useEffect } from "react";
import "./Kart.css";
import axios from "axios";

function Kart() {
	const [payType, setPayType] = useState("");
	const [carrinho, setCarrinho] = useState([]);
	const [cliente, setCliente] = useState(null);

	console.log(carrinho);

	useEffect(() => {
		const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
		setCarrinho(carrinhoSalvo);

		const clienteLogado = JSON.parse(localStorage.getItem("client"));
		setCliente(clienteLogado);
	}, []);

	const calcularTotal = () => {
		return carrinho.reduce(
			(total, item) => total + item.price * item.quantity,
			0,
		);
	};

	const aumentarQuantidade = (id) => {
		const novoCarrinho = carrinho.map((item) => {
			if (item.id === id) {
				return { ...item, quantity: Number(item.quantity) + 1 };
			}
			return item;
		});
		setCarrinho(novoCarrinho);
		localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
	};

	const diminuirQuantidade = (id) => {
		const novoCarrinho = carrinho.map((item) => {
			if (item.id === id) {
				if (item.quantity > 1) {
					return { ...item, quantity: Number(item.quantity) - 1 };
				}
				return null;
			}
			return item;
		});

		const carrinhoAtualizado = novoCarrinho.filter((item) => item !== null);

		setCarrinho(carrinhoAtualizado);
		localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
	};

	const handlePayTypeChange = (event) => {
		setPayType(event.target.value);
	};

	const confirmarCompra = async () => {
		if (!carrinho.length) {
			alert("Acrescente produtos ao carrinho para comprar");
			return;
		}
		if (!payType) {
			alert("Por favor, selecione um método de pagamento.");
			return;
		}

		const pedidos = [];
		pedidos.push({
			clienteName: cliente.name,
			paymentMethod: payType,
			products: carrinho,
			total: calcularTotal(),
		});

		await axios.post("http://localhost:5000/pedidos", pedidos);
		console.log(pedidos);

		setCarrinho([]);
		localStorage.removeItem("carrinho");
	};

	return (
		<div className="container">
			<div className="cart-container">
				<h1 className="Kart-h1">Carrinho de Compras</h1>
				{carrinho.length > 0 ? (
					<div>
						<div className="cart">
							{carrinho.map((item) => (
								<div key={item.id} className="cart-item">
									<img src={item.imgUrl} alt={item.name} />
									<div className="item-details">
										<p className="item-name">{item.name}</p>
										<p className="item-price">R$ {item.price.toFixed(2)}</p>
									</div>
									<div className="item-quantity">
										<button
											type="button"
											className="quantity-btn"
											onClick={() => diminuirQuantidade(item.id)}
										>
											-
										</button>
										<input
											type="number"
											className="quantity-input"
											value={item.quantity}
											readOnly
										/>
										<button
											type="button"
											className="quantity-btn"
											onClick={() => aumentarQuantidade(item.id)}
										>
											+
										</button>
									</div>
									<button
										type="button"
										className="remove-btn"
										onClick={() => diminuirQuantidade(item.id)}
									>
										Remover
									</button>
								</div>
							))}
						</div>

						<div className="payment-options">
							<h2>Selecione o Método de Pagamento</h2>
							<div>
								<label>
									<input
										type="radio"
										name="payType"
										value="Pix"
										checked={payType === "Pix"}
										onChange={handlePayTypeChange}
									/>
									Pix
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										name="payType"
										value="Crédito"
										checked={payType === "Crédito"}
										onChange={handlePayTypeChange}
									/>
									Cartão de Crédito
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										name="payType"
										value="Débito"
										checked={payType === "Débito"}
										onChange={handlePayTypeChange}
									/>
									Cartão de Débito
								</label>
							</div>
						</div>

						<div className="cart-summary">
							<p>
								<strong>Total:</strong> R$ {calcularTotal().toFixed(2)}
							</p>
							<button
								type="button"
								className="checkout-btn"
								onClick={confirmarCompra}
							>
								Finalizar Compra
							</button>
						</div>

						<img
							className="cart-gif"
							src="https://i.pinimg.com/originals/8b/59/50/8b59507616ba892351951ad2bee28dd1.gif"
							alt="Carrinho animado"
						/>
					</div>
				) : (
					<div>
						<h1>Carrinho vazio</h1>
					</div>
				)}
			</div>
		</div>
	);
}

export default Kart;
