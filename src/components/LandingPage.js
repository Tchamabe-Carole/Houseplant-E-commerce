import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <div className="landing-content">
        <h1>Green Haven</h1>
        <p>
          At Green Haven, we believe in the power of plants to transform spaces and improve well-being.
          Since 2010, we've been dedicated to bringing the highest quality houseplants to plant
          enthusiasts across the country. Our carefully curated selection includes rare finds and
          popular favorites, all grown with sustainable practices and delivered right to your doorstep.
          Join our community of plant lovers and bring nature's beauty into your home.
        </p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;