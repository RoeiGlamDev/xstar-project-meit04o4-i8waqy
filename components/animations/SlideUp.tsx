import { motion } from 'framer-motion'
import React from 'react'
interface SlideUpProps {
  children: React.ReactNode
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ translateY: 20, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white text-orange-500 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
      role="alert"
      aria-live="polite"
    >
      {children}
    </motion.div>
  )
}
export default SlideUp;