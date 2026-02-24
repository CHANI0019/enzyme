import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const categories = ['All Products', 'Enzyme Powders', 'Fermented Extracts', 'Gift Sets'];

  const filteredProducts = activeCategory === 'All Products'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[250px] md:h-[400px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background-dark/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1540348563548-6ec47aa8021a?q=80&w=2000&auto=format&fit=crop"
            alt="Products Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 max-w-2xl">
          <h1 className="text-white text-4xl md:text-6xl font-black mb-4 tracking-tighter">Products</h1>
          <p className="text-white/90 text-sm md:text-xl font-medium leading-relaxed px-4">
            전통 발효 방식과 현대적인 웰빙의 만남. <br className="hidden md:block" /> 삶을 풍요롭게 하는 프리미엄 효소 컬렉션을 만나보세요.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 w-full">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-primary/10 pb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-slate-800 hover:bg-primary/20'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-500">Sort by:</span>
            <button className="flex items-center gap-2 bg-white border border-primary/20 px-4 py-2 rounded-lg text-sm font-semibold">
              Newest First
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-20 gap-2">
          <PaginationButton icon={<ChevronLeft className="w-4 h-4" />} />
          <PaginationButton label="1" active />
          <PaginationButton label="2" />
          <PaginationButton label="3" />
          <span className="mx-1">...</span>
          <PaginationButton label="12" />
          <PaginationButton icon={<ChevronRight className="w-4 h-4" />} />
        </div>
      </div>
    </div>
  );
}

function PaginationButton({ label, icon, active }: { label?: string; icon?: React.ReactNode; active?: boolean }) {
  return (
    <button className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${active
      ? 'bg-primary text-white border-primary font-bold'
      : 'border-primary/20 hover:bg-primary/10 text-slate-600'
      }`}>
      {label || icon}
    </button>
  );
}
