import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // Get total quantity from the cart state
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">Green Haven</Link>
        
        <div className="nav-links">
          <Link to="/products">Shop Plants</Link>
          <Link to="/cart" className="cart-icon">
            <span role="img" aria-label="shopping cart">🛒</span>
            {cartQuantity > 0 && <span className="cart-count">{cartQuantity}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;