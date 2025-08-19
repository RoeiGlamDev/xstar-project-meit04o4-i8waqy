import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="bg-white text-orange-600 py-10">
            <div className="container mx-auto flex flex-col items-center px-4">
                <motion.h2
                    className="text-3xl font-semibold mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Discover GlamCS
                </motion.h2>
                <motion.p
                    className="text-lg text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Elevate your beauty routine with our luxurious cosmetics, designed to empower and inspire.
                </motion.p>
                <div className="flex space-x-4 mb-5">
                    <motion.a 
                        href="/about" 
                        className="hover:text-orange-500 transition-colors duration-200" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.7 }}
                    >
                        About Us
                    </motion.a>
                    <motion.a 
                        href="/products" 
                        className="hover:text-orange-500 transition-colors duration-200" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.8 }}
                    >
                        Products
                    </motion.a>
                    <motion.a 
                        href="/contact" 
                        className="hover:text-orange-500 transition-colors duration-200" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.9 }}
                    >
                        Contact
                    </motion.a>
                </div>
                <div className="flex space-x-4">
                    <motion.a 
                        href="https://instagram.com/glamcs" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-orange-500 transition-colors duration-200" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.0 }}
                    >
                        Instagram
                    </motion.a>
                    <motion.a 
                        href="https://facebook.com/glamcs" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-orange-500 transition-colors duration-200" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.1 }}
                    >
                        Facebook
                    </motion.a>
                    <motion.a 
                        href="https://twitter.com/glamcs" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-orange-500 transition-colors duration-200" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.2 }}
                    >
                        Twitter
                    </motion.a>
                </div>
                <motion.p
                    className="mt-5 text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.3 }}
                >
                    © 2023 GlamCS. All rights reserved. 
                </motion.p>
            </div>
        </footer>
    )
}
export default Footer;