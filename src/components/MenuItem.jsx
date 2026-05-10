import { motion } from 'framer-motion';

export default function MenuItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="flex justify-between items-center py-4 px-2 border-b border-dark-lighter hover:bg-dark-lighter/50 transition-colors rounded-md"
    >
      <div className="flex-1 pr-2">
        <h3 className="text-lg md:text-xl font-medium text-gray-100">{item.name}</h3>
      </div>
      
      {/* Decorative dotted line */}
      <div className="hidden sm:block flex-1 border-b-2 border-dotted border-dark-lighter mx-4 opacity-50 relative top-1"></div>
      
      <div className="pl-2">
        <span className="text-lg md:text-xl font-bold text-gold tracking-wide whitespace-nowrap">
          {item.price}
        </span>
      </div>
    </motion.div>
  );
}
