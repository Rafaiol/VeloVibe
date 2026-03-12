import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

export default function Gallery() {
  const navigate = useNavigate();

  const handleCategoryClick = (_categoryId: string) => {
    navigate('/shop');
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-charcoal leading-tight max-w-4xl">
            "FROM MOUNTAINS TO CITY STREETS{' '}
            <span className="text-orange">✦</span> WE'VE GOT YOUR RIDE."
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCategoryClick(category.id)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5]"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-orange transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/60 text-sm group-hover:text-white transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange rounded-2xl transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
