import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function TopPicks() {
  const navigate = useNavigate();
  const featuredProduct = products[3]; // City bike
  const topProducts = products.slice(0, 3);

  const handleViewDetails = () => {
    navigate(`/product/${featuredProduct.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-cream py-20 lg:py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-charcoal leading-tight max-w-3xl">
            "OUR TOP PICKS,{' '}
            <span className="text-orange">YOUR NEXT RIDE.</span>"
          </h2>
        </motion.div>

        {/* Featured Product */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-dark-gray rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative p-8 lg:p-12">
                <motion.img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full max-w-lg mx-auto cursor-pointer"
                  onClick={handleViewDetails}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                {/* Decorative */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange/10 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 lg:pl-0">
                <span className="inline-block px-4 py-1 bg-orange/20 text-orange rounded-full text-sm font-medium mb-4">
                  Featured
                </span>
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                  {featuredProduct.name}
                </h3>
                <p className="text-white/60 mb-6 max-w-md">
                  {featuredProduct.description}
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold text-white">
                    ${featuredProduct.price.toLocaleString()}
                  </span>
                  <span className="text-white/40 line-through">
                    ${(featuredProduct.price * 1.2).toFixed(0)}
                  </span>
                </div>
                <button 
                  onClick={handleViewDetails}
                  className="btn-primary flex items-center gap-2 group"
                >
                  View Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
