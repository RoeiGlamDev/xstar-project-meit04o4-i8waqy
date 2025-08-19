import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {
  brandName: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ brandName }) => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-white h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Welcome to {brandName}
      </motion.h1>
      <motion.p 
        className="text-lg md:text-2xl text-gray-700 mb-8"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Elevate your beauty standards with our premium cosmetics tailored just for you.
      </motion.p>
      <div className="flex space-x-4">
        <motion.button 
          className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-orange-400 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.button>
        <motion.button 
          className="bg-white text-orange-500 border border-orange-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Get a Consultation
        </motion.button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.p 
          className="text-sm text-gray-600"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          Trusted by beauty lovers worldwide 
          <span className="text-orange-600 font-bold"> | GlamCS </span>
        </motion.p>
      </div>
    </section>
  )
}
export default HeroSection;