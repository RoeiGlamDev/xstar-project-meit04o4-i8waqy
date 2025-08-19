import React from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 0 10px rgba(255, 165, 0, 0.7)' },
  tap: { scale: 0.95 },
}
const GlamCSButton: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, className = '' }) => {
  const baseStyle = "transition duration-300 ease-in-out focus:outline-none rounded-md px-6 py-2 font-semibold text-lg text-white"
  const variantStyle = variant === 'primary'
    ? "bg-orange-500 hover:bg-orange-400"
    : "bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
  return (
    <motion.button
      className={${baseStyle} ${variantStyle} ${className}}
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      aria-label={Button - ${children}}
    >
      {children}
    </motion.button>
  )
}
export default GlamCSButton;