import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import Bike3DViewer from '@/components/Bike3DViewer';
import ProductCard from '@/components/ProductCard';
import StarRating from '@/components/StarRating';
import { products } from '@/data/products';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.id === id);
  const suggestedProducts = products.filter((p) => p.id !== id).slice(0, 6);

  if (!product) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Product not found</h1>
          <button 
            onClick={() => {
              navigate('/shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-orange hover:underline"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const handleCheckout = () => {
    navigate('/checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-charcoal pt-20"
    >
      {/* Back Navigation */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
        <button
          onClick={() => {
            navigate('/shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Shop
        </button>
      </div>

      {/* Hero with 3D Viewer */}
      <section className="relative py-10 lg:py-20 overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[8vw] lg:text-[10vw] font-display font-bold text-white/[0.03] uppercase tracking-wider">
            {product.category} Bikes
          </h1>
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          {/* Product Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <StarRating rating={product.rating} showValue reviewCount={product.reviews} />
            <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mt-4">
              {product.name}
            </h1>
          </motion.div>

          {/* 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <Bike3DViewer color={product.colors[selectedColor]} />

            {/* Color Selector */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === index
                      ? 'border-orange scale-110'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Info */}
      <section className="py-10 lg:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-gray rounded-3xl p-8 lg:p-12 flex items-center justify-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md"
              />
            </motion.div>

            {/* Right - Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2">
                {product.name}
              </h2>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-white">
                  ${product.price.toLocaleString()}
                </span>
                <StarRating rating={product.rating} showValue reviewCount={product.reviews} />
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="text-white/60 text-sm mb-3 block">Color</label>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === index
                          ? 'border-orange scale-110'
                          : 'border-white/30 hover:border-white/60'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <div className="flex items-center bg-white/10 rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-white hover:text-orange transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-12 text-center text-white font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-white hover:text-orange transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 min-w-[200px] px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all ${
                    addedToCart 
                      ? 'bg-green-500 text-white' 
                      : 'bg-orange hover:bg-orange-hover text-white'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to cart
                    </>
                  )}
                </button>
              </div>

              {/* Buy Now Button */}
              <button 
                onClick={handleCheckout}
                className="w-full bg-transparent border-2 border-orange text-orange hover:bg-orange hover:text-white px-8 py-4 rounded-full font-semibold transition-all mb-10"
              >
                Buy Now - Checkout
              </button>

              {/* Accordions */}
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="details" className="border border-white/10 rounded-xl overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-white/5">
                    Product Details
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/70">
                    <p>{product.description}</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex justify-between">
                        <span className="text-white/50">Category</span>
                        <span className="capitalize">{product.category}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/50">Rating</span>
                        <span>{product.rating}/5</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/50">Reviews</span>
                        <span>{product.reviews}</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="specs" className="border border-white/10 rounded-xl overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-white/5">
                    Technical Specifications
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-3 text-white/70">
                      <li className="flex justify-between">
                        <span className="text-white/50">Frame</span>
                        <span>{product.specs.frame}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/50">Fork</span>
                        <span>{product.specs.fork}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/50">Drivetrain</span>
                        <span>{product.specs.drivetrain}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/50">Brakes</span>
                        <span>{product.specs.brakes}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/50">Wheels</span>
                        <span>{product.specs.wheels}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/50">Weight</span>
                        <span>{product.specs.weight}</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="geometry" className="border border-white/10 rounded-xl overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-white/5">
                    Geometry
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-white/50 border-b border-white/10">
                            <th className="text-left py-2">Size</th>
                            <th className="text-left py-2">Seat Tube</th>
                            <th className="text-left py-2">Top Tube</th>
                            <th className="text-left py-2">Head Tube</th>
                            <th className="text-left py-2">Chainstay</th>
                            <th className="text-left py-2">Wheelbase</th>
                          </tr>
                        </thead>
                        <tbody className="text-white/70">
                          {product.geometry.map((geo) => (
                            <tr key={geo.size} className="border-b border-white/5">
                              <td className="py-2">{geo.size}</td>
                              <td className="py-2">{geo.seatTube}</td>
                              <td className="py-2">{geo.topTube}</td>
                              <td className="py-2">{geo.headTube}</td>
                              <td className="py-2">{geo.chainstay}</td>
                              <td className="py-2">{geo.wheelbase}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Suggested Products */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
              SUGGESTED <span className="text-orange">✦</span> PRODUCTS
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
