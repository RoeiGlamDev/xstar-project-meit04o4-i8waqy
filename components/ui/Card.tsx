import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  imageSrc: string
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-30 rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-lg" />
      </div>
      <h3 className="text-orange-600 text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded transition-colors duration-300">
        Shop Now
      </button>
    </motion.div>
  )
}
export default Card;