import React from 'react'
import { motion } from 'framer-motion'
interface CTASectionProps {
    title: string
    subtitle: string
    buttonLabel: string
    onButtonClick: () => void
}

const CTASection: React.FC<CTASectionProps> = ({ 
    title = "Elevate Your Beauty with GlamCS", 
    subtitle = "Discover the luxurious world of cosmetics designed exclusively for you.", 
    buttonLabel = "Shop Now", 
    onButtonClick 
}) => {
    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2 
                    className="text-3xl md:text-5xl font-bold text-orange-500 mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h2>
                <motion.p 
                    className="text-lg md:text-xl text-gray-700 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
                <motion.button 
                    className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
                    onClick={onButtonClick}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    {buttonLabel}
                </motion.button>
            </div>
        </section>
    )
}
export default CTASection;