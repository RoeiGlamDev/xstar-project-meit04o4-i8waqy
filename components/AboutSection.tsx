import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Lee',
    role: 'Founder & CEO',
    imageUrl: '/images/sophia.jpg',
  },
  {
    name: 'Jordan Smith',
    role: 'Lead Chemist',
    imageUrl: '/images/jordan.jpg',
  },
  {
    name: 'Emma Carter',
    role: 'Marketing Director',
    imageUrl: '/images/emma.jpg',
  },
]
const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          About GlamCS
        </motion.h2>
        <motion.p 
          className="text-lg text-center mb-4" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GlamCS, we believe that beauty should be a reflection of individuality. Our journey began with a vision to create luxurious, high-quality cosmetics that empower and inspire our customers to express their unique beauty.
        </motion.p>
        <motion.p 
          className="text-lg text-center mb-4" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our mission is to formulate innovative, cruelty-free cosmetics that not only enhance beauty but also nourish the skin. We commit to sustainability, ethical sourcing, and transparency, ensuring that every GlamCS product meets the highest standards of luxury and quality.
        </motion.p>

        <motion.h3 
          className="text-3xl font-bold text-center my-8" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Meet the GlamCS Team
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.name} 
              className="bg-orange-100 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300" 
              initial={{ scale: 1 }} 
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-40 object-cover rounded-lg mb-4" 
                loading="lazy"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-md text-orange-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className="text-lg text-center mt-8" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          GlamCS embodies values of integrity, creativity, and excellence, striving for breakthroughs in the cosmetics industry, one luxurious product at a time.
        </motion.p>
      </div>
    </section>
  )
}
export default AboutSection;