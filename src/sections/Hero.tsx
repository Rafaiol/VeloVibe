import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { stats } from '@/data/products';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

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
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="w-[calc(100vw-20px)] lg:max-w-6xl p-0 bg-charcoal border-white/10 overflow-hidden shadow-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>VeloVibe Brand Video</DialogTitle>
            <DialogDescription>
              Watch our brand story and the passion behind VeloVibe bikes.
            </DialogDescription>
          </DialogHeader>
          <div className="w-full aspect-video bg-dark-gray flex items-center justify-center relative">
            <div className="text-center">
              <Play className="w-16 h-16 text-orange mx-auto mb-4" />
              <p className="text-white/60">Video Player Placeholder</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
                className="btn-primary flex items-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Explore Bikes</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <motion.div 
                  className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                />
              </button>
              <button 
                onClick={() => setShowVideo(true)}
                className="btn-secondary flex items-center gap-2 relative group"
              >
                <div className="relative">
                  <Play className="w-5 h-5 relative z-10" />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-orange rounded-full -z-0"
                  />
                </div>
                <span>Watch Video</span>
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
                onClick={() => {
                  navigate('/product/2');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
