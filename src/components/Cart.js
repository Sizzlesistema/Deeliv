// src/components/Cart.js

import React from 'react';
import './cart.css';

const Cart = ({ carrinho, removeFromCart, clearCart }) => {
  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return carrinho.reduce((total, item) => {
      const price = parseFloat(item.price.replace('R$', '').replace(',', '.').trim()) || 0;
      return total + price;
    }, 0);
  };

  // Função para formatar o total como moeda
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <div className="cart-container">
      <h2>Carrinho de Compras</h2>
      <div className="cart-items">
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((item, index) => (
            <div className="cart-item" key={index}>
              <p>{item.name} - {item.price}</p>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                Remover
              </button>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h3>Total: {formatCurrency(calculateTotal())}</h3>
      </div>
      {carrinho.length > 0 && (
        <button className="clear-cart-btn" onClick={clearCart}>
          Limpar Carrinho
        </button>
      )}
    </div>
  );
};

export default Cart;
