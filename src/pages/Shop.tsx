import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import type { Product } from '@/data/products';

export default function Shop() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product: Product) => product.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-charcoal pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating Helmet */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.img
                src="/bikes/helmet.png"
                alt="Premium Helmet"
                className="w-32 h-32 lg:w-48 lg:h-48 mx-auto object-contain cursor-pointer"
                onClick={() => navigate('/shop')}
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              "The mountain bike that gives you the{' '}
              <span className="text-orange">freedom</span> to challenge peaks and trails."
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/60 text-lg max-w-2xl mx-auto"
            >
              Discover our collection of premium bikes designed for every terrain and riding style.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="pb-20 lg:pb-32">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-white">
              The mountain bike
            </h2>

            <div className="flex items-center gap-4">
              {/* Category Filter */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-orange text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  All
                </button>
                {categories.slice(0, 4).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-orange text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 bg-orange hover:bg-orange-hover text-white px-5 py-2.5 rounded-full font-medium transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </motion.div>

          {/* Mobile Category Filter */}
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mb-6"
            >
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-orange text-white'
                      : 'bg-white/10 text-white/70'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-orange text-white'
                        : 'bg-white/10 text-white/70'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <SlidersHorizontal className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/60 text-lg">No products found in this category.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn-primary mt-4"
              >
                View All Products
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
