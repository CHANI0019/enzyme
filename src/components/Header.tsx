import { useState } from 'react';
import { Leaf, Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'products') => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (item: any, e: React.MouseEvent) => {
    if (item.label === 'Products') {
      e.preventDefault();
      onNavigate('products');
    }
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            onNavigate('home');
            closeMenu();
          }}
        >
          <Leaf className="text-primary w-8 h-8" />
          <h1 className="text-2xl font-black tracking-tighter text-deep-green">효소명가</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`text-sm font-semibold hover:text-primary transition-colors ${(currentPage === 'products' && item.label === 'Products') ? 'text-primary' : ''
                }`}
              onClick={(e) => handleLinkClick(item, e)}
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
          <a
            href="https://map.naver.com/v5/search/%EC%9D%B8%EC%B2%9C%20%EC%84%9C%EA%B5%AC%20%EC%84%9D%EB%82%A8%EB%8F%99%20455"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-deep-green px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20 hidden sm:block"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-20 z-40 bg-white md:hidden"
          >
            <nav className="flex flex-col p-8 gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-2xl font-bold hover:text-primary transition-colors ${(currentPage === 'products' && item.label === 'Products') ? 'text-primary' : ''
                    }`}
                  onClick={(e) => handleLinkClick(item, e)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
                <a
                  href="https://map.naver.com/v5/search/%EC%9D%B8%EC%B2%9C%20%EC%84%9C%EA%B5%AC%20%EC%84%9D%EB%82%A8%EB%8F%99%20455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-deep-green text-center py-4 rounded-xl font-black text-lg shadow-lg shadow-primary/20"
                  onClick={closeMenu}
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
