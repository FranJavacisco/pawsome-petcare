import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import FeaturedProducts from './components/sections/FeaturedProducts.jsx';
import SaleCarousel from './components/sections/SaleCarousel.jsx';
import Footer from './components/layout/Footer.jsx';
import Events from './components/sections/Events.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Events />
      <SaleCarousel />
      <Footer />
    </div>
  );
};

export default App;