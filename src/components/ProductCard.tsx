import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="group bg-dark-gray rounded-2xl overflow-hidden cursor-pointer"
        >
          {/* Image Container */}
          <div className="relative aspect-square bg-gradient-to-b from-gray-700/50 to-dark-gray p-6 flex items-center justify-center">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Hover Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4 w-10 h-10 bg-orange rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2 group-hover:text-orange transition-colors">
              {product.name}
            </h3>
            <p className="text-white/60 text-sm">{product.price.toLocaleString()} $</p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
