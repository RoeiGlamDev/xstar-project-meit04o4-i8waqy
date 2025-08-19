import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormData {
  name: string
  email: string
  message: string
  reason: string
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name) newErrors.name = "Name is required."
    if (!formData.email) newErrors.email = "Email is required."
    if (!formData.message) newErrors.message = "Message is required."
    if (!formData.reason) newErrors.reason = "Please select a reason."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      console.log(formData)
      // Implement form submission logic here
    }
  }
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <motion.h2 
        className="text-3xl font-bold text-center text-orange-500 mb-4" 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-orange-500" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-orange-300'}}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-orange-500" htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-orange-300'}}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-orange-500" htmlFor="reason">Contact Reason</label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={w-full p-2 border rounded ${errors.reason ? 'border-red-500' : 'border-orange-300'}}
          >
            <option value="">Select Reason</option>
            <option value="product inquiry">Product Inquiry</option>
            <option value="partnership">Partnership</option>
            <option value="feedback">Feedback</option>
          </select>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>

        <div>
          <label className="block text-orange-500" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={w-full p-2 border rounded ${errors.message ? 'border-red-500' : 'border-orange-300'}}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <motion.button 
          type="submit" 
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-200" 
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-orange-500">Business Information</h3>
        <p className="text-gray-700">GlamCS</p>
        <p className="text-gray-700">123 Glam Street</p>
        <p className="text-gray-700">Beauty City, BE 12345</p>
        <p className="text-gray-700">Business Hours: Mon - Fri, 9 AM - 6 PM</p>
        <p className="text-gray-700">Email: support@glamcs.com</p>
      </div>
    </div>
  )
}
export default ContactSection;