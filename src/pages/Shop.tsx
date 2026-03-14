import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, ShoppingCart, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Bike3DViewer from '@/components/Bike3DViewer';
import { products, categories } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import type { Product } from '@/data/products';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function Shop() {
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const [previewColorIdx, setPreviewColorIdx] = useState(0);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product: Product) => product.category === selectedCategory);

  const handleClosePreview = () => {
    setPreviewProduct(null);
    setPreviewColorIdx(0);
  };

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
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
                onSelect3D={(p) => setPreviewProduct(p)}
              />
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

      {/* 3D Preview Modal */}
      <Dialog open={!!previewProduct} onOpenChange={(open) => !open && handleClosePreview()}>
        <DialogContent className="w-[calc(100vw-20px)] lg:max-w-[1400px] p-0 bg-dark-gray border-white/10 rounded-[2rem] overflow-hidden shadow-2xl block h-auto max-h-[95vh] overflow-y-auto lg:overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>{previewProduct?.name} - 3D Preview</DialogTitle>
            <DialogDescription>
              Interact with the bike in 3D and customize its appearance.
            </DialogDescription>
          </DialogHeader>
          
          {previewProduct && (
            <div className="flex flex-col lg:flex-row h-full lg:min-h-[750px]">
              {/* Left - 3D Viewer */}
              <div className="flex-1 min-h-[400px] sm:min-h-[500px] lg:min-h-[750px] relative bg-gradient-to-b from-charcoal/50 to-transparent">
                <Bike3DViewer color={previewProduct.colors[previewColorIdx]} />
                
                {/* Product Name Overlay */}
                <div className="absolute top-8 left-8 sm:top-12 sm:left-12">
                  <span className="text-orange font-display font-bold tracking-widest uppercase text-xs sm:text-base mb-2 sm:mb-3 block">
                    360° Interaction
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tighter">
                    {previewProduct.name}
                  </h3>
                </div>
              </div>

              {/* Right - Controls and Info */}
              <div className="w-full lg:w-[450px] bg-white/[0.02] backdrop-blur-3xl p-8 sm:p-10 lg:p-16 flex flex-col border-t lg:border-t-0 lg:border-l border-white/10 relative">
                <div className="flex-1">
                  <div className="mb-6 sm:mb-8">
                    <label className="text-white/40 text-[10px] sm:text-xs tracking-widest uppercase font-semibold mb-3 sm:mb-4 block">
                      Customize Color
                    </label>
                    <div className="flex gap-2.5 sm:gap-3">
                      {previewProduct.colors.map((color, idx) => (
                        <button
                          key={idx}
                          onClick={() => setPreviewColorIdx(idx)}
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all ${
                            previewColorIdx === idx
                              ? 'border-orange scale-110 shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                              : 'border-white/10 hover:border-white/30'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/5">
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-2">Specifications</h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                      <li className="flex justify-between">
                        <span className="text-white/40">Frame</span>
                        <span className="text-white/80">{previewProduct.specs.frame}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/40">Weight</span>
                        <span className="text-white/80">{previewProduct.specs.weight}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/40">Drivetrain</span>
                        <span className="text-white/80">{previewProduct.specs.drivetrain}</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-white/60 text-xs sm:text-sm italic mb-8 lg:mb-10">
                    "Experience the precision engineering in every detail of the {previewProduct.name}."
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <button 
                    onClick={() => {
                      navigate(`/product/${previewProduct.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full btn-primary bg-orange hover:bg-orange-hover text-white py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 group/btn text-sm sm:text-base"
                  >
                    View Full Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <button 
                    onClick={() => addItem(previewProduct, 1, previewProduct.colors[previewColorIdx])}
                    className="w-full bg-white/5 hover:bg-white/10 text-white py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Quick Add - ${previewProduct.price.toLocaleString()}
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
