import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="text-center py-16 text-white">
      <motion.h1
        className="text-6xl font-serif"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Lucid Dreams
      </motion.h1>
      <motion.p
        className="text-xl text-pink-300 mt-4 font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        Where your dreams become memories.
      </motion.p>
    </header>
  );
}

export default Header;