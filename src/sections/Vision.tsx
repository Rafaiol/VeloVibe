import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section className="bg-cream py-20 lg:py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm text-charcoal/50 uppercase tracking-widest mb-8"
          >
            Our Vision
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-charcoal leading-relaxed"
          >
            "OUR VISION IS TO EMPOWER EVERY RIDER WITH INNOVATIVE BIKES AND GEAR THAT INSPIRE{' '}
            <span className="text-orange">FREEDOM</span>,{' '}
            <span className="text-orange">PERFORMANCE</span>, AND{' '}
            <span className="text-orange">LIMITLESS ADVENTURE</span>."
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-20 h-1 bg-orange rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
