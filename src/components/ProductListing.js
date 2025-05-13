import React from 'react';
import { useSelector } from 'react-redux';
import PlantCard from './PlantCard';

const ProductListing = () => {
  // Get plants from Redux store
  const plants = useSelector(state => state.plants.plants);
  
  // Get all unique categories
  const categories = [...new Set(plants.map(plant => plant.category))];
  
  return (
    <div className="products container">
      <h2>Our Plant Collection</h2>
      
      {categories.map(category => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="products-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;