import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Premium Quality Products',
    description: 'At GlamCS, we ensure that every product meets the highest standards of quality, providing you with the luxury you deserve.',
    icon: <i className="fas fa-star" />,
  },
  {
    title: 'Luxurious Packaging',
    description: 'Our cosmetics come in elegant, eco-friendly packaging that enhances the unboxing experience and reflects our luxurious brand identity.',
    icon: <i className="fas fa-gift" />,
  },
  {
    title: 'Expert Consultation',
    description: 'Our beauty experts are here to guide you in finding your perfect match, enhancing your natural beauty with our top-tier products.',
    icon: <i className="fas fa-user-alt" />,
  },
  {
    title: 'Innovative Formulations',
    description: 'GlamCS prides itself on cutting-edge formulations that blend beauty and care, providing you with stunning results.',
    icon: <i className="fas fa-flask" />,
  },
]
const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
          Discover GlamCS Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-lg p-6 bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-orange-600 text-3xl mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FeaturesSection;