import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => (
  <section className="bg-orange-500 text-white h-screen flex items-center justify-center relative overflow-hidden">
    <div className="relative z-10 text-center p-5">
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to GlamCS
      </motion.h1>
      <motion.p
        className="text-2xl mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Discover the elegance of luxury cosmetics.
      </motion.p>
      <motion.button
        className="bg-white text-orange-500 py-2 px-4 rounded-full text-lg shadow-lg transition duration-300 hover:bg-orange-300"
        whileHover={{ scale: 1.05 }}
      >
        Shop Now
      </motion.button>
    </div>
  </section>
)
const Features = () => (
  <section className="bg-white text-orange-500 py-20">
    <div className="container mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Luxurious Features
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          className="p-5 bg-orange-100 rounded-lg shadow-md transition hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-3">High-Quality Ingredients</h3>
          <p>Our products are crafted with the finest, sustainably sourced ingredients for a luxurious experience.</p>
        </motion.div>
        <motion.div
          className="p-5 bg-orange-100 rounded-lg shadow-md transition hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-3">Elegant Packaging</h3>
          <p>Every GlamCS product is packaged with elegance and style, perfect for gifting or personal use.</p>
        </motion.div>
        <motion.div
          className="p-5 bg-orange-100 rounded-lg shadow-md transition hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h3 className="text-2xl font-semibold mb-3">Luxury Experience</h3>
          <p>Indulge in a luxurious shopping experience with personalized services and consultations.</p>
        </motion.div>
      </div>
    </div>
  </section>
)
const LuxuryDesign = () => (
  <section className="bg-orange-500 text-white py-20">
    <div className="container mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Experience Luxury
      </motion.h2>
      <motion.p
        className="text-lg mb-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        GlamCS is not just a brand; it's a lifestyle. Join us in embracing the world of elegance.
      </motion.p>
      <motion.button
        className="bg-white text-orange-500 py-2 px-4 rounded-full text-lg shadow-lg transition duration-300 hover:bg-orange-300"
        whileHover={{ scale: 1.05 }}
      >
        Discover Our Collection
      </motion.button>
    </div>
  </section>
)
const HomePage: React.FC = () => (
  <div>
    <Hero />
    <Features />
    <LuxuryDesign />
  </div>
)
export default HomePage;