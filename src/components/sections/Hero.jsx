import React from 'react';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
        {/* Círculos decorativos */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-500/30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Contenido */}
          <div className="text-center lg:text-left z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <span className="text-white/90 text-sm">New Collection 2024</span>
            </div>

            {/* Título y descripción */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Style Your Pet with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Elegance
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover our exclusive collection of fashionable and comfortable pet wear, designed for style and comfort.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                Shop Now
                <ShoppingBag className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
                View Collection
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-gray-400 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10k+</div>
                <div className="text-gray-400 text-sm">Happy Pets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/20 to-purple-600/20 rounded-full filter blur-3xl" />
            <img 
              src="/pawsome-petcare/images/hero.png"
              alt="hero"
              className="relative w-auto max-h-[60vh] lg:max-h-[80vh] object-contain transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;