import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import CartDrawer from './CartDrawer';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems, setIsOpen } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-charcoal/80 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-16 lg:h-22">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2 group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-xl lg:text-2xl font-display font-bold text-white tracking-tight"
              >
                Velo<span className="text-orange group-hover:text-orange-hover transition-colors">Vibe</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-white/5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group/nav ${
                    isActive(link.path)
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-orange rounded-full -z-0"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  {!isActive(link.path) && (
                    <div className="absolute inset-0 bg-white/0 group-hover/nav:bg-white/10 rounded-full transition-colors -z-0" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-1 lg:gap-3">
              <button className="p-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsOpen(true)}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all relative group/cart"
              >
                <ShoppingCart className="w-5 h-5 group-hover/cart:scale-110 transition-transform" />
                <AnimatePresence>
                  {getTotalItems() > 0 && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      key={getTotalItems()}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-orange text-white text-[8px] font-bold rounded-full flex items-center justify-center shadow-lg border border-charcoal"
                    >
                      {getTotalItems()}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              
              <div className="w-px h-6 bg-white/10 mx-1 hidden lg:block" />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-full transition-all ml-1"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-orange" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <CartDrawer />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-charcoal/95 backdrop-blur-2xl" />
            
            {/* Decorative background elements for mobile menu */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange/5 rounded-full blur-[120px]" />

            <nav className="relative flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ 
                    delay: index * 0.08, 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15 
                  }}
                >
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className={`text-4xl font-display font-black tracking-tighter uppercase italic transition-all ${
                      isActive(link.path) 
                        ? 'text-orange scale-110 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]' 
                        : 'text-white/40 hover:text-white hover:scale-105'
                    }`}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 flex gap-8"
              >
                <div className="text-white/20 text-xs tracking-widest uppercase font-bold">Instagram</div>
                <div className="text-white/20 text-xs tracking-widest uppercase font-bold">Facebook</div>
                <div className="text-white/20 text-xs tracking-widest uppercase font-bold">Twitter</div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
