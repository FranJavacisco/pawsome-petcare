import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Tag, 
  Clock, 
  Truck, 
  Heart 
} from 'lucide-react';
import { saleItems } from '../../data/products.js';

const SaleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    setTouchEnd(null);
    setTouchStart(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % saleItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + saleItems.length) % saleItems.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900 py-12 md:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Special Offers
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Discover amazing deals on our latest pet fashion collections
          </p>
        </div>

        <div className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden rounded-xl md:rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {saleItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
                      {/* Contenedor de imagen optimizado */}
                      <div className="relative w-full aspect-square rounded-lg md:rounded-xl overflow-hidden bg-black/20">
                        <img 
                          src={`${import.meta.env.BASE_URL}${product.image}`} 
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-contain p-4"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent pointer-events-none" />
                        <button 
                          className="absolute top-2 right-2 md:top-4 md:right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          aria-label="Add to favorites"
                        >
                          <Heart className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </button>
                      </div>

                      {/* Contenido */}
                      <div className="text-white space-y-4 md:space-y-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                              {item.name || 'Flash Sale'}
                            </h3>
                            <p className="text-sm md:text-base text-gray-300">
                              Premium Pet Collection
                            </p>
                          </div>
                          <span className="bg-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-bold">
                            {item.discount}
                          </span>
                        </div>

                        <div className="space-y-3 text-sm md:text-base">
                          <div className="flex items-center gap-2 md:gap-3">
                            <Clock className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                            <span>Ends in 24 hours</span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3">
                            <Truck className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                            <span>Free shipping worldwide</span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3">
                            <Tag className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                            <span>Use code: PETLOVE</span>
                          </div>
                        </div>

                        <button className="w-full bg-white text-indigo-900 py-2 md:py-3 px-4 md:px-6 rounded-full text-sm md:text-base font-semibold hover:bg-indigo-100 transition-colors">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:left-4 md:right-4 flex justify-between pointer-events-none">
            <button 
              onClick={prevSlide}
              className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all transform hover:scale-110 pointer-events-auto"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all transform hover:scale-110 pointer-events-auto"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 md:mt-6 gap-2 md:gap-3">
            {saleItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-6 md:w-8 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/75'
                } h-2 rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleCarousel;