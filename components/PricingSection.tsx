import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  title: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Glam Starter',
    price: '$29/mo',
    features: [
      'Basic Makeup Consultation',
      'Personalized Skincare Routine',
      'Weekly Tips & Tricks',
    ],
  },
  {
    title: 'Glam Premier',
    price: '$59/mo',
    features: [
      'Everything in Glam Starter',
      'Monthly Makeup Tutorials',
      'Exclusive Product Samples',
      'Priority Customer Support',
    ],
  },
  {
    title: 'Glam Luxe',
    price: '$99/mo',
    features: [
      'Everything in Glam Premier',
      'One-on-One Makeup Sessions',
      'Early Access to New Products',
      'Luxury Gift Package',
    ],
  },
]
const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your GlamCS Experience
        </motion.h2>
        <div className="flex flex-wrap justify-center mt-10">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white m-4 rounded-lg shadow-lg border border-white transform transition-transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{tier.title}</h3>
                <p className="text-3xl font-bold mb-4">{tier.price}</p>
                <ul className="list-disc list-inside mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <motion.button
                  className="bg-white text-orange-600 py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default PricingSection;