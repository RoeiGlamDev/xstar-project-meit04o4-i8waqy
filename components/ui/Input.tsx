import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface InputProps {
  label: string
  type?: string
  placeholder: string
  validate?: (value: string) => boolean
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, validate }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setValue(inputValue)
    if (validate) {
      setError(validate(inputValue) ? '' : 'Invalid input. Please check.')
    }
  }
  return (
    <div className="mb-6">
      <label className="block text-white text-lg font-semibold mb-2">{label}</label>
      <motion.input
        type={type}
        className={bg-white border border-orange-400 rounded-lg py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-200 ease-in-out ${error ? 'border-red-500' : 'border-orange-400'}}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
export default Input;