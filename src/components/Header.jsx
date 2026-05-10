import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-dark-bg/80 border-b border-gold-dark/20 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gold tracking-wider" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            Jouri Garden
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-1 font-light tracking-widest uppercase">
            Cafe & Restaurant
          </p>
        </motion.div>
      </div>
    </header>
  );
}
