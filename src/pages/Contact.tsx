import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check, ArrowRight } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShopClick = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Cycling Street', 'San Francisco, CA 94102'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@velovibe.com', 'support@velovibe.com'],
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Mon - Fri: 9AM - 7PM', 'Sat - Sun: 10AM - 5PM'],
    },
  ];

  const faqs = [
    'What is your return policy?',
    'How long does shipping take?',
    'Do you offer bike fitting services?',
    'What payment methods do you accept?',
  ];

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
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-dark-gray" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block text-orange text-sm uppercase tracking-widest mb-6"
            >
              Get In Touch
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-8"
            >
              CONTACT <span className="text-orange">US</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto"
            >
              Have a question or need assistance? We're here to help. 
              Reach out to us and we'll get back to you as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full"
                >
                  <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-white/60 text-sm">{detail}</p>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <p className="text-white/60 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-charcoal">Select a subject</option>
                    <option value="general" className="bg-charcoal">General Inquiry</option>
                    <option value="sales" className="bg-charcoal">Sales Question</option>
                    <option value="support" className="bg-charcoal">Technical Support</option>
                    <option value="warranty" className="bg-charcoal">Warranty Claim</option>
                    <option value="partnership" className="bg-charcoal">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-orange hover:bg-orange-hover text-white'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right - Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-dark-gray rounded-2xl overflow-hidden h-[300px] lg:h-[400px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-gray to-charcoal flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-orange mx-auto mb-4" />
                    <p className="text-white font-semibold text-lg">VeloVibe Headquarters</p>
                    <p className="text-white/60">123 Cycling Street, San Francisco, CA</p>
                  </div>
                </div>
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-4">Frequently Asked Questions</h3>
                <ul className="space-y-3">
                  {faqs.map((question, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => alert(`FAQ: ${question}\n\nAnswer: Please contact us for more information about this topic.`)}
                        className="text-white/60 hover:text-orange text-sm text-left transition-colors w-full text-left"
                      >
                        {question}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
                    <button
                      key={social}
                      onClick={() => alert(`Follow us on ${social}!`)}
                      className="px-4 py-2 bg-white/10 hover:bg-orange rounded-full text-white text-sm transition-colors"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-orange/10 border border-orange/20 rounded-3xl p-12 lg:p-20 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Can't Wait? Visit Our Store!
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Come see our bikes in person and take a test ride. Our expert staff is ready to help you find your perfect bike.
            </p>
            <button 
              onClick={handleShopClick}
              className="btn-primary flex items-center gap-2 group mx-auto"
            >
              Browse Bikes Online
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
