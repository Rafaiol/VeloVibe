import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Checkout from '@/pages/Checkout';

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: 20,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      x: -20,
      filter: "blur(10px)",
    },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div 
              variants={pageVariants} 
              initial="initial" 
              animate="animate" 
              exit="exit"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/shop" 
          element={
            <motion.div 
              variants={pageVariants} 
              initial="initial" 
              animate="animate" 
              exit="exit"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Shop />
            </motion.div>
          } 
        />
        <Route 
          path="/product/:id" 
          element={
            <motion.div 
              variants={pageVariants} 
              initial="initial" 
              animate="animate" 
              exit="exit"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ProductDetail />
            </motion.div>
          } 
        />
        <Route 
          path="/about" 
          element={
            <motion.div 
              variants={pageVariants} 
              initial="initial" 
              animate="animate" 
              exit="exit"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <About />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div 
              variants={pageVariants} 
              initial="initial" 
              animate="animate" 
              exit="exit"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Contact />
            </motion.div>
          } 
        />
        <Route 
          path="/checkout" 
          element={
            <motion.div 
              variants={pageVariants} 
              initial="initial" 
              animate="animate" 
              exit="exit"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Checkout />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal">
        <CustomCursor />
        <ScrollToTop />
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
