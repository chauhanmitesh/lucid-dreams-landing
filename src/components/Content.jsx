import { motion } from 'framer-motion';

function Content() {
  return (
    <section className="py-24 px-6 text-center text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-serif mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Record, Tag, and Visualize Your Dreams
      </motion.h2>
      <motion.p
        className="text-lg text-purple-200 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        Our app helps you document your dreams, tag recurring themes, and visualize patterns. Dive into the world of lucid dreaming and explore the subconscious with beautiful tools.
      </motion.p>
    </section>
  );
}

export default Content;