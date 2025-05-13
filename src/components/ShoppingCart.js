import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const ShoppingCart = () => {
  // Get cart items and totals from Redux store
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  
  if (cartItems.length === 0) {
    return (
      <div className="cart container">
        <h2>Your Shopping Cart</h2>
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="btn">Continue Shopping</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="cart container">
      <h2>Your Shopping Cart</h2>
      
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Items: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="cart-actions">
        <Link to="/products" className="btn">Continue Shopping</Link>
        <button className="checkout-btn" onClick={() => alert('Checkout feature coming soon!')}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;