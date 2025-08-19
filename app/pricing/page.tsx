import React from 'react'
import { motion } from 'framer-motion'
interface PricingOption {
  title: string
  price: string
  description: string
  features: string[]
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Luxury Makeup Package',
    price: '$199',
    description: 'Indulge in our premium makeup service for any occasion.',
    features: [
      'Personal consultation',
      'Custom makeup application',
      'Long-lasting products',
      'Free touch-up kit'
    ]
  },
  {
    title: 'Bridal Glam Experience',
    price: '$299',
    description: 'Ensure you look stunning on your special day.',
    features: [
      'Bridal consultation and trial',
      'On-site application',
      'Luxe product range',
      'Touch-up services included'
    ]
  },
  {
    title: 'Skincare and Makeup Combo',
    price: '$249',
    description: 'Perfect for a fresh and flawless look.',
    features: [
      'Skin analysis',
      'Custom skincare application',
      'Complete makeup look',
      'GlamCS exclusive skincare products'
    ]
  }
]
const FAQ = [
  {
    question: 'What is included in the Luxury Makeup Package?',
    answer: 'Our Luxury Makeup Package includes a personal consultation, custom makeup application, a free touch-up kit, and the use of high-end products to ensure a stunning look.'
  },
  {
    question: 'Do you provide services for events other than weddings?',
    answer: 'Absolutely! We cater to all kinds of events, including parties, photoshoots, and corporate gatherings. Our skilled artists are here to bring your vision to life.'
  },
  {
    question: 'Can I schedule a trial before booking?',
    answer: 'Yes, we recommend a trial for bridal services to ensure you are completely satisfied with the look. Trials are included in the Bridal Glam Experience package.'
  }
]
const Page = () => (
  <div className="bg-white p-8">
    <motion.h1 className="text-4xl font-bold text-orange-600 text-center mb-6" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      GlamCS Pricing
    </motion.h1>
    <motion.p className="text-center text-gray-600 mb-12" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
      Discover our exclusive cosmetics services designed to elevate your beauty.
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pricingOptions.map(option => (
        <motion.div key={option.title} className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-orange-600">{option.title}</h2>
          <p className="text-xl font-bold text-gray-800">{option.price}</p>
          <p className="text-gray-700 mb-4">{option.description}</p>
          <ul className="list-disc list-inside mb-4">
            {option.features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
          <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300">Book Now</button>
        </motion.div>
      ))}
    </div>

    <div className="mt-12">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">Frequently Asked Questions</h2>
      <div className="bg-orange-50 p-6 rounded-lg">
        {FAQ.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-gray-800">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)
export default Page;