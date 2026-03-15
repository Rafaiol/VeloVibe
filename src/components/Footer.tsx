import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ],
  categories: [
    { name: 'Mountain Bikes', path: '/shop' },
    { name: 'Road Bikes', path: '/shop' },
    { name: 'City Bikes', path: '/shop' },
    { name: "Carbon Bikes", path: '/shop' },
    { name: 'E-Bikes', path: '/shop' },
  ],
};

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal">
      {/* Marquee Banner */}
      <div className="overflow-hidden border-y border-white/10 py-4">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <span className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-wider">
                PERFORMANCE
              </span>
              <span className="text-orange text-2xl md:text-4xl">✦</span>
              <span className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-wider">
                INNOVATION
              </span>
              <span className="text-orange text-2xl md:text-4xl">✦</span>
              <span className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-wider">
                FREEDOM
              </span>
              <span className="text-orange text-2xl md:text-4xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button 
              onClick={() => handleNavClick('/')}
              className="inline-block mb-6"
            >
              <span className="text-2xl font-display font-bold text-white">
                Velo<span className="text-orange">Vibe</span>
              </span>
            </button>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-orange hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-orange hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-orange hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-orange hover:text-white transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="text-white/60 hover:text-orange transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="text-white/60 hover:text-orange transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange mt-0.5" />
                <div>
                  <p className="text-white text-sm">+213 0989878979</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange mt-0.5" />
                <div>
                  <p className="text-white text-sm">info@velovibe.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange mt-0.5" />
                <div>
                  <p className="text-white/60 text-sm">www.facebook.com</p>
                  <p className="text-white/60 text-sm">www.instagram.com</p>
                  <p className="text-white/60 text-sm">www.whatsapp.com</p>
                </div>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-orange"
                />
                <button className="bg-orange hover:bg-orange-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2024 VeloVibe. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => handleNavClick('/contact')}
                className="text-white/40 hover:text-orange text-sm transition-colors"
              >
                Contact Us
              </button>
              <a href="#" className="text-white/40 hover:text-orange text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-orange text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
