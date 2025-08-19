import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormData {
  name: string
  email: string
  message: string
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit the form data
    console.log('Submitting form:', formData)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
      <motion.h1
        className="text-4xl font-bold mb-8 text-orange-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h1>
      <motion.form
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500 transition duration-200"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500 transition duration-200"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="message">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500 transition duration-200"
            placeholder="Type your message here..."
          />
        </div>
        <motion.button
          type="submit"
          className="w-full p-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-500 transition duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-orange-600">Our Location</h2>
        <p className="text-gray-600">Visit us at:</p>
        <p className="text-gray-800">123 Glamour St.</p>
        <p className="text-gray-800">Beauty City, BC 12345</p>
        <p className="text-gray-800">Phone: (123) 456-7890</p>
        <h2 className="text-2xl font-bold text-orange-600 mt-8">Business Hours</h2>
        <p className="text-gray-800">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-gray-800">Saturday: 10 AM - 4 PM</p>
        <p className="text-gray-800">Sunday: Closed</p>
      </div>
    </div>
  )
}
export default ContactPage;