import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Box } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
  onSelect3D?: (product: Product) => void;
  minimal?: boolean;
}

export default function ProductCard({ product, index = 0, onSelect3D, minimal = false }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <div className="group relative">
        <Link to={`/product/${product.id}`}>
          <motion.div
            whileHover={{ y: minimal ? -8 : -12 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#0D0D0D]/90 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden cursor-pointer shadow-xl"
          >
            {/* Image Container */}
            <div className="relative aspect-square bg-gradient-to-br from-white/5 to-transparent p-8 flex items-center justify-center overflow-hidden">
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/5 transition-colors duration-500" />
              
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain relative z-10 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3"
              />
              
              {/* 3D Indicator Badge - Subtle */}
              {!minimal && (
                <div className="absolute top-4 left-4 bg-charcoal/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 z-20">
                  <Box className="w-3.5 h-3.5 text-orange" />
                  <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">3D View</span>
                </div>
              )}

              {/* Hover Arrow */}
              {!minimal && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 10 }}
                  whileHover={{ opacity: 1, scale: 1, x: 0 }}
                  className="absolute top-4 right-4 w-11 h-11 bg-orange rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-[0_8px_16px_rgba(249,115,22,0.4)]"
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 relative text-center sm:text-left">
              <h3 className="text-white font-bold text-xl mb-1.5 line-clamp-1 group-hover:text-orange transition-colors duration-300">
                {minimal ? product.name.replace('Specialized ', '') : product.name}
              </h3>
              <div className="flex items-center justify-center sm:justify-between">
                <p className="text-white/40 text-sm font-medium tracking-wide uppercase hidden sm:block">
                  {!minimal && product.category}
                </p>
                <p className="text-orange font-black text-lg">${product.price.toLocaleString()}</p>
              </div>
              
              {/* Subtle line decoration */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange group-hover:w-full transition-all duration-500" />
            </div>
          </motion.div>
        </Link>
        
        {/* 3D View Button - Floating & Magnetic */}
        {!minimal && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelect3D?.(product);
            }}
            className="absolute bottom-28 right-6 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-orange hover:border-orange transition-all opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 shadow-[0_12px_24px_rgba(0,0,0,0.5)] z-30"
            title="Interactive 3D View"
          >
            <Box className="w-6 h-6" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white rounded-2xl"
            />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
