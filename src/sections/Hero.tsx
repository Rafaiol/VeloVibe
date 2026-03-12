import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';
import { stats } from '@/data/products';

export default function Hero() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  const handleExploreClick = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-cream overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-orange blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange blur-3xl" />
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 text-white hover:text-orange transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-4xl aspect-video bg-dark-gray rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-orange mx-auto mb-4" />
                <p className="text-white/60">Video Player Placeholder</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-orange/10 text-orange rounded-full text-sm font-medium">
                New Collection 2024
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-charcoal leading-tight mb-6"
            >
              <span className="text-orange">POWER</span> YOUR RIDE,
              <br />
              <span className="text-charcoal">DEFINE</span> YOUR PATH
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-charcoal/70 text-lg mb-8 max-w-lg"
            >
              Every bike is not just a means of transportation, but the beginning of 
              an adventure that you create yourself and leave your own mark on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button 
                onClick={handleExploreClick}
                className="btn-primary flex items-center gap-2 group"
              >
                Explore Bikes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setShowVideo(true)}
                className="btn-secondary flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Video
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-display font-bold text-charcoal">
                    {stat.value}
                  </div>
                  <div className="text-sm text-charcoal/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Bike Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 w-32 h-32 border-2 border-dashed border-orange/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-dashed border-charcoal/10 rounded-full"
              />

              {/* Main Bike Image */}
              <motion.img
                src="/bikes/hero-bike.png"
                alt="Premium Mountain Bike"
                className="relative z-10 w-full max-w-2xl mx-auto cursor-pointer"
                onClick={handleExploreClick}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-10 left-0 lg:-left-10 bg-white rounded-2xl shadow-xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                    <span className="text-orange text-xl">✦</span>
                  </div>
                  <div>
                    <div className="font-bold text-charcoal">Premium</div>
                    <div className="text-sm text-charcoal/60">Quality</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-20 right-0 lg:-right-5 bg-white rounded-2xl shadow-xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <span className="text-green-500 text-xl">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-charcoal">Verified</div>
                    <div className="text-sm text-charcoal/60">Warranty</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
