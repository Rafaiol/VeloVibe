import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

const milestones = [
  { year: '2012', title: 'Founded', description: 'VeloVibe was born with a passion for cycling' },
  { year: '2015', title: 'First Store', description: 'Opened our flagship retail location' },
  { year: '2018', title: 'Expansion', description: 'Launched online store and shipping nationwide' },
  { year: '2021', title: 'Award Winner', description: 'Recognized as Best Bike Retailer' },
  { year: '2024', title: 'Global Reach', description: 'Serving customers in over 50 countries' },
];

const team = [
  {
    name: 'Michael Chen',
    role: 'Founder & CEO',
    image: '/images/team-1.jpg',
    bio: 'Former professional cyclist with 20+ years in the industry',
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Design',
    image: '/images/team-2.jpg',
    bio: 'Award-winning product designer passionate about innovation',
  },
  {
    name: 'David Park',
    role: 'Technical Director',
    image: '/images/team-3.jpg',
    bio: 'Engineering expert specializing in bike mechanics',
  },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower every rider with innovative bikes and gear that inspire freedom, performance, and limitless adventure.',
  },
  {
    icon: Users,
    title: 'Our Community',
    description: 'We believe in building a community of passionate cyclists who support and inspire each other.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'Every product we offer meets the highest standards of quality, safety, and performance.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'We constantly push boundaries to bring you the latest in cycling technology and design.',
  },
];

export default function About() {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    navigate('/contact');
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
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-dark-gray" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block text-orange text-sm uppercase tracking-widest mb-6"
            >
              About Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-8"
            >
              WE'RE MORE THAN
              <br />
              <span className="text-orange">JUST A BIKE SHOP</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto mb-10"
            >
              We're passion, freedom, and speed on two wheels. For over a decade, 
              we've been helping riders find their perfect bike and discover the joy of cycling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button 
                onClick={handleShopClick}
                className="btn-primary flex items-center gap-2 group"
              >
                Explore Our Bikes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleContactClick}
                className="btn-secondary"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="/images/workshop.jpg"
              alt="Our Workshop"
              className="w-full h-[400px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
            
            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: '12+', label: 'Years Experience' },
                  { value: '50K+', label: 'Happy Customers' },
                  { value: '500+', label: 'Bike Models' },
                  { value: '25+', label: 'Expert Staff' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl lg:text-5xl font-display font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              OUR VALUES
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                    <value.icon className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-dark-gray/30">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              OUR JOURNEY
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Key milestones in our story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-orange rounded-full" />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-white/10 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-orange font-display font-bold text-xl">
                    {milestone.year}
                  </span>
                  <h3 className="text-white font-semibold text-lg mt-1">{milestone.title}</h3>
                  <p className="text-white/60 mt-1">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              MEET OUR TEAM
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The passionate people behind VeloVibe
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover mx-auto border-4 border-white/10"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-orange/30 scale-110" />
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-orange text-sm mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm">{member.bio}</p>
                </motion.div>
              </motion.div>
            ))}
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Browse our collection of premium bikes and find the perfect ride for your next adventure.
            </p>
            <button 
              onClick={handleShopClick}
              className="btn-primary flex items-center gap-2 group mx-auto"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
