import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeFromCart } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  const handleIncrease = () => {
    dispatch(increaseItemQuantity(item.id));
  };
  
  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(item.id));
  };
  
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
        
        <div className="quantity-controls">
          <button onClick={handleDecrease}>-</button>
          <span className="quantity-display">{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
      
      <div className="cart-item-actions">
        <button onClick={handleRemove} className="remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;