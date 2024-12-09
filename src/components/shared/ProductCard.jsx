import React from 'react';
import { Heart, ShoppingBag, Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden group">
      <div className="relative aspect-square">
        <img
          src={`${import.meta.env.BASE_URL}${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 inset-x-4 flex justify-center gap-3">
            <button className="p-2 bg-white rounded-full hover:bg-indigo-50 transition-colors">
              <Heart className="w-5 h-5 text-indigo-600" />
            </button>
            <button className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
              <ShoppingBag className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        {product.tag && (
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-indigo-600">{product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
            )}
          </div>
          <button className="p-1.5 hover:bg-indigo-50 rounded-full transition-colors">
            <Plus className="w-5 h-5 text-indigo-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;