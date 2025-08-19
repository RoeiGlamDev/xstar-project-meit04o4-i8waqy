import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  const modalVariants = {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  }
  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-4">{title}</h2>
            <p className="text-gray-700 mb-6">{content}</p>
            <button
              onClick={onClose}
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
export default Modal;