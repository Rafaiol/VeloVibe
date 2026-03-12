import { motion } from 'framer-motion';
import Hero from '@/sections/Hero';
import WhoWeAre from '@/sections/WhoWeAre';
import Gallery from '@/sections/Gallery';
import TopPicks from '@/sections/TopPicks';
import Vision from '@/sections/Vision';
import Reviews from '@/sections/Reviews';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <WhoWeAre />
      <Gallery />
      <TopPicks />
      <Vision />
      <Reviews />
    </motion.div>
  );
}
