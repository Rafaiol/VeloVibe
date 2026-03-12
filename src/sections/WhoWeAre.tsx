import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';

export default function WhoWeAre() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-charcoal py-20 lg:py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            WHO WE ARE
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/workshop.jpg"
                alt="Bike Workshop"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              
              {/* Category Tags */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {categories.slice(0, 5).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={handleExploreClick}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20 hover:bg-orange/50 transition-colors"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-10 -right-10 w-40 h-40 border border-orange/30 rounded-full"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We're more than just a bike shop. We're passion, freedom, and speed on two wheels. 
              We offer high-performance bikes and complete gear for a limitless riding experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-orange text-2xl mb-3">✦</div>
                <h3 className="text-white font-semibold mb-2">Premium Selection</h3>
                <p className="text-white/60 text-sm">
                  We chose to be the premier destination for cycling enthusiasts because we offer more than just products.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-orange text-2xl mb-3">✦</div>
                <h3 className="text-white font-semibold mb-2">Expert Service</h3>
                <p className="text-white/60 text-sm">
                  We provide quality, technology, and ongoing support to help you go further and discover your path.
                </p>
              </div>
            </div>

            <button 
              onClick={handleExploreClick}
              className="btn-primary"
            >
              Explore Our Collection
            </button>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            WHY CHOOSE US
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
