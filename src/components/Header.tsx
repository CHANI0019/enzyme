import { Leaf, Search, ShoppingBag, User, Menu } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  onNavigate: (page: 'home' | 'products') => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <Leaf className="text-primary w-8 h-8" />
          <h1 className="text-2xl font-black tracking-tighter text-deep-green">효소명가</h1>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`text-sm font-semibold hover:text-primary transition-colors ${(currentPage === 'products' && item.label === 'Products') ? 'text-primary' : ''
                }`}
              onClick={(e) => {
                if (item.label === 'Products') {
                  e.preventDefault();
                  onNavigate('products');
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-primary/10 rounded-lg px-3 py-1.5">
            <Search className="w-4 h-4 text-primary mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:ring-0 text-sm w-32 placeholder:text-primary/60"
            />
          </div>
          <button className="p-2 text-slate-700 hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-700 hover:text-primary transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="bg-primary hover:bg-primary/90 text-deep-green px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20 hidden sm:block">
            Contact Us
          </button>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
