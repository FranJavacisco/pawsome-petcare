import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Plus, Heart, ShoppingBag, Maximize2 } from 'lucide-react';
import { featuredProducts } from '../../data/products';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const isMobile = useIsMobile();

  const calculateTransform = useCallback((index) => {
    const totalItems = featuredProducts.length;
    const angleIncrement = 360 / totalItems;
    const radius = isMobile ? 180 : 400;
    const zOffset = isMobile ? 180 : 350;
    const angle = ((index - currentIndex) * angleIncrement);
    const zIndex = Math.round(Math.cos(angle * Math.PI / 180) * 100);
    const scale = Math.cos(angle * Math.PI / 180) * 0.3 + 0.7;

    return {
      transform: `
        rotateY(${angle}deg) 
        translateZ(${zOffset}px) 
        scale(${scale})
        ${Math.abs(angle) > 60 ? 'translateX(0)' : ''}
      `,
      opacity: Math.cos(angle * Math.PI / 180) * 0.6 + 0.4,
      zIndex,
      visibility: Math.abs(angle) > 90 ? 'hidden' : 'visible',
      filter: `blur(${Math.abs(angle) > 60 ? '2px' : '0px'})`,
    };
  }, [currentIndex, isMobile]);

  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isDragging]);

  const rotateCarousel = (direction) => {
    setCurrentIndex((prev) =>
      direction === 'next'
        ? (prev + 1) % featuredProducts.length
        : (prev - 1 + featuredProducts.length) % featuredProducts.length
    );
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      rotateCarousel(diff > 0 ? 'next' : 'prev');
      setIsDragging(false);
    }
  };

  const ProductCard = ({ product }) => (
    <div className="w-64 md:w-80 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden group transform transition-all duration-500">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-6 inset-x-6 flex justify-center gap-4">
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transform hover:scale-110 transition-all duration-300">
              <Heart className="w-5 h-5 text-white" />
            </button>
            <button className="p-3 bg-red-500/80 backdrop-blur-sm rounded-full hover:bg-red-600 transform hover:scale-110 transition-all duration-300">
              <ShoppingBag className="w-5 h-5 text-white" />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transform hover:scale-110 transition-all duration-300">
              <Maximize2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        {product.tag && (
          <span className="absolute top-4 left-4 bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-6 bg-gradient-to-b from-transparent to-black/40">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-white">{product.price}</span>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300">
            <Plus className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-indigo-900 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Collection
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our handpicked selection of premium pet fashion items
          </p>
        </div>

        <div 
          className="relative h-[500px] md:h-[600px] perspective-1000"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
        >
          <div className="absolute inset-0 flex items-center justify-center preserve-3d">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="absolute transition-all duration-500 ease-out backface-hidden"
                style={calculateTransform(index)}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Controles laterales */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-12 md:px-24 pointer-events-none">
            <button
              onClick={() => rotateCarousel('prev')}
              className="group flex items-center gap-2 bg-white/20 p-3 md:p-4 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm pointer-events-auto transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={() => rotateCarousel('next')}
              className="group flex items-center gap-2 bg-white/20 p-3 md:p-4 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm pointer-events-auto transform hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-6 bg-white' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
