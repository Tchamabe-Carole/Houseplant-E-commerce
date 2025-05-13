import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  
  // Check if this plant is already in the cart
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);
  
  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart} 
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default PlantCard;