import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface NewsletterProps {
  onSubmit: (email: string) => void
}

const NewsletterSection: React.FC<NewsletterProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email)
    setEmail('')
    setSubmitted(true)
  }
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold mb-4 text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the GlamCS Community
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Subscribe to our newsletter for exclusive updates on the latest cosmetics trends, promotions, and tips.
        </motion.p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="border border-orange-400 p-2 rounded-l-md focus:outline-none focus:ring focus:ring-orange-200 w-64"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <motion.button 
            type="submit"
            className="bg-orange-600 text-white px-4 py-2 rounded-r-md font-semibold transition-all hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
        {submitted && (
          <motion.p 
            className="mt-4 text-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to GlamCS!
          </motion.p>
        )}
      </div>
    </section>
  )
}
export default NewsletterSection;