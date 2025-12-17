import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="App">
      {showProductList ? (
        <ProductList />
      ) : (
        <div className="landing-page">
          <AboutUs />
          <div className="about-us-container">
            <button className="get-started-button" style={{fontSize: '20px', padding: '10px 20px', marginTop: '20px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px'}} onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
