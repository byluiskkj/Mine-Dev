import { useState, useEffect } from "react";
import "./Cart.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
    const [carrinho, setCarrinho] = useState([]);
    const [cliente, setCliente] = useState(null);
    const navigate = useNavigate();

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

    const confirmarCompra = async () => {
        if (!carrinho.length) {
            alert("Acrescente produtos ao carrinho para comprar");
            return;
        }

        const pedidos = [];
        pedidos.push({
            clienteName: cliente?.name || "Cliente Anônimo",
            paymentMethod: "Pix",
            products: carrinho,
            total: calcularTotal(),
        });

        try {
            await axios.post("http://localhost:5000/pedidos", pedidos);
            console.log(pedidos);

            setCarrinho([]);
            localStorage.removeItem("carrinho");

            alert("Compra confirmada com sucesso!");
            navigate("/");
        } catch (error) {
            console.error("Erro ao confirmar a compra:", error);
            alert("Erro ao confirmar a compra. Tente novamente.");
        }
    };

    return (
        <div className="container">
      <div className="cart-container">
        <h1 className="Cart-h1">Carrinho de Compras</h1>
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

            <div className="cart-summary">
              <p>
                <strong>Total:</strong> R$ {calcularTotal().toFixed(2)}
              </p>
              <button
                type="button"
                className="checkout-btn"
                onClick={confirmarCompra}
              >
                Finalizar Compra com Pix
              </button>
            </div>

            <img
              className="cart-gif"
              src="https://i.pinimg.com/originals/8b/59/50/8b59507616ba892351951ad2bee28dd1.gif"
              alt="Carrinho animado"
            />

            <button
              className="back-home-btn"
              onClick={() => navigate("/")}
            >
              Voltar para a Home
            </button>
          </div>
        ) : (
          <div>
            <h1>Carrinho vazio</h1>
            <button
              className="back-home-btn"
              onClick={() => navigate("/")}
            >
              Voltar para a Home
            </button>
          </div>
        )}
      </div>
    </div>
    );
}

export default Cart;
