import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  mobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-orange-600">GlamCS</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.a
            href="#products"
            className="text-gray-800 hover:text-orange-600 transition ease-in-out duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.a
            href="#about"
            className="text-gray-800 hover:text-orange-600 transition ease-in-out duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="#contact"
            className="text-gray-800 hover:text-orange-600 transition ease-in-out duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <nav className="flex flex-col items-center py-4">
            <motion.a
              href="#products"
              className="text-gray-800 hover:text-orange-600 transition ease-in-out duration-300 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Products
            </motion.a>
            <motion.a
              href="#about"
              className="text-gray-800 hover:text-orange-600 transition ease-in-out duration-300 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.a
              href="#contact"
              className="text-gray-800 hover:text-orange-600 transition ease-in-out duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
export default Header;