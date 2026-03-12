import { motion } from 'framer-motion';
import StarRating from '@/components/StarRating';
import { reviews } from '@/data/products';

export default function Reviews() {
  return (
    <section className="bg-cream py-20 lg:py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-charcoal">
            CUSTOMER <span className="text-orange">✦</span> REVIEWS
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg h-full"
              >
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-charcoal">{review.name}</h4>
                    <StarRating rating={review.rating} size={14} />
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
