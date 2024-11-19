import "./Kart.css";

function Kart() {
  return (
    <div className="container">
  <div className="cart-container">
    <h1 className="Kart-h1">Carrinho de Compras</h1>
    <div className="cart">
      <div className="cart-item">
        <img src="https://via.placeholder.com/150" alt="Produto 1" />
        <div className="item-details">
          <p className="item-name">Produto 1</p>
          <p className="item-price">R$ 100</p>
        </div>
        <div className="item-quantity">
          <button className="quantity-btn">-</button>
          <input type="number" value={1} className="quantity-input" />
          <button className="quantity-btn">+</button>
        </div>
        <button className="remove-btn">Remover</button>
      </div>
      <div className="cart-item">
        <img src="https://via.placeholder.com/150" alt="Produto 2" />
        <div className="item-details">
          <p className="item-name">Produto 2</p>
          <p className="item-price">R$ 100</p>
        </div>
        <div className="item-quantity">
          <button className="quantity-btn">-</button>
          <input type="number" value="1" className="quantity-input" />
          <button className="quantity-btn">+</button>
        </div>
        <button className="remove-btn">Remover</button>
      </div>
    </div>
    <div className="cart-summary">
      <p><strong>Total:</strong> R$ 149,80</p>
      <button className="checkout-btn">Finalizar Compra</button>
    </div>
    <img className="cart-gif" src="https://i.pinimg.com/originals/8b/59/50/8b59507616ba892351951ad2bee28dd1.gif" alt="Carrinho animado" />
  </div>
</div>


  );
}

export default Kart;
