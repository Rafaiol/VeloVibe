import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';
import { stats } from '@/data/products';

export default function Hero() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleExploreClick = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video play failed:", err));
    }
  }, [showVideo]);

  return (
    <section className={`relative min-h-screen overflow-hidden pt-20 transition-colors duration-700 ${showVideo ? 'bg-black' : 'bg-cream'}`}>
      {/* Background Pattern - Hidden when video is playing */}
      {!showVideo && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-orange blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange blur-3xl" />
        </div>
      )}

      {/* Seamless Background Video */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0 overflow-hidden"
          >
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className="absolute w-full h-full object-cover scale-105" // Slight scale to avoid edges
            >
              <source src="/Vedios/Bike_Video_Generated_In_Wild.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-20 z-10">
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
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6 transition-colors duration-500 ${showVideo ? 'text-white' : 'text-charcoal'}`}
            >
              <span className="text-orange">POWER</span> YOUR RIDE,
              <br />
              <span className={showVideo ? 'text-white' : 'text-charcoal'}>DEFINE</span> YOUR PATH
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-lg mb-8 max-w-lg transition-colors duration-500 ${showVideo ? 'text-white/80' : 'text-charcoal/70'}`}
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
                onClick={() => setShowVideo(!showVideo)}
                className={`flex items-center gap-2 relative group px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  showVideo 
                    ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md' 
                    : 'bg-charcoal text-white hover:bg-charcoal/90'
                }`}
              >
                <div className="relative">
                  {showVideo ? (
                    <X className="w-5 h-5 relative z-10" />
                  ) : (
                    <>
                      <Play className="w-5 h-5 relative z-10" />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-orange rounded-full -z-0"
                      />
                    </>
                  )}
                </div>
                <span>{showVideo ? 'Close Video' : 'Watch Video'}</span>
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
                  <div className={`text-2xl lg:text-3xl font-display font-bold transition-colors duration-500 ${showVideo ? 'text-white' : 'text-charcoal'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm transition-colors duration-500 ${showVideo ? 'text-white/60' : 'text-charcoal/60'}`}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Bike Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`order-1 lg:order-2 relative transition-opacity duration-500 ${showVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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
