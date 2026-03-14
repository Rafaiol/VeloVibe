import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CreditCard, Truck, Shield, Check, Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function Checkout() {
  const navigate = useNavigate();
  const { items: cartItems, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment'>('cart');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'US',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const subtotal = getTotalPrice();
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 150;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'cart') {
      setStep('shipping');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step === 'shipping') {
      setStep('payment');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step === 'payment') {
      setIsProcessing(true);
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsProcessing(false);
      setIsComplete(true);
      clearCart();
    }
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-charcoal pt-20 flex items-center justify-center"
      >
        <div className="text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Check className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Thank you for your purchase. Your order has been received and is being processed. 
            You will receive a confirmation email shortly.
          </p>
          <div className="bg-white/5 rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <p className="text-white/60 text-sm mb-2">Order Total</p>
            <p className="text-3xl font-bold text-white">${total.toLocaleString()}</p>
          </div>
          <button
            onClick={() => navigate('/shop')}
            className="btn-primary"
          >
            Continue Shopping
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-charcoal pt-20"
    >
      {/* Header */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
        <button
          onClick={() => {
            if (step === 'shipping') setStep('cart');
            else if (step === 'payment') setStep('shipping');
            else navigate('/shop');
          }}
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          {step === 'cart' ? 'Back to Shop' : 'Back'}
        </button>
      </div>

      {/* Progress Steps */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 pb-8">
        <div className="flex items-center justify-center gap-4">
          {['Cart', 'Shipping', 'Payment'].map((s, index) => {
            const isActive = step === s.toLowerCase();
            const isCompleted = 
              (step === 'shipping' && index === 0) ||
              (step === 'payment' && index < 2);
            return (
              <div key={s} className="flex items-center gap-4">
                <div className={`flex items-center gap-2 ${isActive ? 'text-orange' : isCompleted ? 'text-green-500' : 'text-white/40'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    isActive ? 'bg-orange text-white' : 
                    isCompleted ? 'bg-green-500 text-white' : 
                    'bg-white/10 text-white/40'
                  }`}>
                    {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">{s}</span>
                </div>
                {index < 2 && (
                  <div className={`w-12 h-0.5 ${isCompleted ? 'bg-green-500' : 'bg-white/10'}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 pb-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Cart Step */}
              {step === 'cart' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-display font-bold text-white mb-6">
                    Shopping Cart
                  </h2>

                  {cartItems.length === 0 ? (
                    <div className="text-center py-12 bg-white/5 rounded-2xl">
                      <ShoppingCart className="w-16 h-16 text-white/20 mx-auto mb-4" />
                      <p className="text-white/60">Your cart is empty</p>
                      <button
                        onClick={() => navigate('/shop')}
                        className="btn-primary mt-4"
                      >
                        Start Shopping
                      </button>
                    </div>
                  ) : (
                    cartItems.map((item) => (
                      <motion.div
                        key={`${item.product.id}-${item.selectedColor}`}
                        layout
                        className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 flex gap-4 sm:gap-6"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-24 h-24 sm:w-32 sm:h-32 object-contain bg-white/5 rounded-xl"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-white font-semibold text-lg">{item.product.name}</h3>
                            <button
                              onClick={() => removeItem(item.product.id, item.selectedColor)}
                              className="text-white/40 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <div 
                              className="w-4 h-4 rounded-full border border-white/20" 
                              style={{ backgroundColor: item.selectedColor }}
                            />
                            <p className="text-white/60 text-sm">Selected Color</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center bg-white/10 rounded-full">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)}
                                className="w-10 h-10 flex items-center justify-center text-white hover:text-orange transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-10 text-center text-white font-medium">{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
                                className="w-10 h-10 flex items-center justify-center text-white hover:text-orange transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="text-xl font-bold text-white">
                              ${(item.product.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}

                  {cartItems.length > 0 && (
                    <button type="submit" className="w-full btn-primary py-4">
                      Proceed to Shipping
                    </button>
                  )}
                </motion.div>
              )}

              {/* Shipping Step */}
              {step === 'shipping' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-display font-bold text-white mb-6">
                    Shipping Information
                  </h2>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
                    <div>
                      <label className="block text-white text-sm mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-white text-sm mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                          placeholder="San Francisco"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm mb-2">ZIP Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                          placeholder="94102"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm mb-2">Country</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors appearance-none cursor-pointer"
                        >
                          <option value="US" className="bg-charcoal">United States</option>
                          <option value="CA" className="bg-charcoal">Canada</option>
                          <option value="UK" className="bg-charcoal">United Kingdom</option>
                          <option value="AU" className="bg-charcoal">Australia</option>
                          <option value="DE" className="bg-charcoal">Germany</option>
                          <option value="FR" className="bg-charcoal">France</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <button type="submit" className="w-full btn-primary py-4">
                    Continue to Payment
                  </button>
                </motion.div>
              )}

              {/* Payment Step */}
              {step === 'payment' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-display font-bold text-white mb-6">
                    Payment Method
                  </h2>

                  {/* Payment Options */}
                  <div className="space-y-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        paymentMethod === 'card'
                          ? 'border-orange bg-orange/10'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        paymentMethod === 'card' ? 'bg-orange' : 'bg-white/10'
                      }`}>
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-white font-semibold">Credit Card</p>
                        <p className="text-white/60 text-sm">Visa, Mastercard, Amex</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'card' ? 'border-orange' : 'border-white/30'
                      }`}>
                        {paymentMethod === 'card' && <div className="w-3 h-3 bg-orange rounded-full" />}
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        paymentMethod === 'paypal'
                          ? 'border-orange bg-orange/10'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        paymentMethod === 'paypal' ? 'bg-orange' : 'bg-white/10'
                      }`}>
                        <span className="text-white font-bold text-lg">P</span>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-white font-semibold">PayPal</p>
                        <p className="text-white/60 text-sm">Pay with your PayPal account</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'paypal' ? 'border-orange' : 'border-white/30'
                      }`}>
                        {paymentMethod === 'paypal' && <div className="w-3 h-3 bg-orange rounded-full" />}
                      </div>
                    </button>
                  </div>

                  {/* Card Form */}
                  {paymentMethod === 'card' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6"
                    >
                      <div>
                        <label className="block text-white text-sm mb-2">Card Number</label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white text-sm mb-2">Expiry Date</label>
                          <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-white text-sm mb-2">CVC</label>
                          <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white text-sm mb-2">Name on Card</label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Security Badges */}
                  <div className="flex items-center justify-center gap-6 py-4">
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Shield className="w-5 h-5" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Truck className="w-5 h-5" />
                      <span>Free Shipping over $5,000</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-3"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5" />
                        Pay ${total.toLocaleString()}
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
              <h3 className="text-white font-semibold text-lg mb-6">Order Summary</h3>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain bg-white/5 rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium line-clamp-1">{item.product.name}</p>
                      <p className="text-white/60 text-xs">Qty: {item.quantity}</p>
                      <p className="text-white text-sm">${(item.product.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-6" />

              {/* Totals */}
              <div className="space-y-3">
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-6" />

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">Total</span>
                <span className="text-2xl font-bold text-orange">${total.toLocaleString()}</span>
              </div>

              {/* Promo Code */}
              {step === 'cart' && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <label className="block text-white/60 text-sm mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                      placeholder="Enter code"
                    />
                    <button className="px-4 py-2 bg-white/10 hover:bg-orange text-white text-sm rounded-xl transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
