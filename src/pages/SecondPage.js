
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import '../SecondPage.css';
import '../CartContext.css';

function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

 
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Корзина</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} width="100" height="100" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Цена: {item.price} руб.</p>
                <p>
                  Количество: 
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </p>
                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
              </div>
            </div>
          ))
        ) : (
          <p>Корзина пуста</p>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Общая сумма: {totalAmount} руб.</h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;