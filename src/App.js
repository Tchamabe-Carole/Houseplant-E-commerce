import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={
            <>
              <Header />
              <ProductListing />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <ShoppingCart />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;