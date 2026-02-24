import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/20"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.tag && (
          <span className={`absolute top-3 left-3 text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded ${product.tag === 'Best' ? 'bg-primary' :
              product.tag === 'New' ? 'bg-amber-500' : 'bg-slate-700'
            }`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-slate-500 text-xs mb-4">{product.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-primary font-extrabold text-xl">{product.price.toLocaleString()}원</span>
          <button className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
