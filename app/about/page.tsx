import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Grant',
    role: 'Founder & CEO',
    image: '/images/team/sophia.jpg',
  },
  {
    name: 'Liam Carter',
    role: 'Creative Director',
    image: '/images/team/liam.jpg',
  },
  {
    name: 'Olivia Tran',
    role: 'Head of Marketing',
    image: '/images/team/olivia.jpg',
  },
]
const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-4xl font-extrabold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About GlamCS
      </motion.h1>

      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        GlamCS is a modern cosmetics brand committed to empowering beauty enthusiasts with luxurious, high-quality products. Our journey began in 2020, driven by a passion for all things beauty and the desire to make premium cosmetics accessible to everyone.
      </motion.p>

      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our Values
      </motion.h2>
      <motion.ul
        className="list-disc list-inside mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <li>Quality: We prioritize high-quality ingredients and standards in every product.</li>
        <li>Inclusivity: GlamCS celebrates diversity and inclusivity for all beauty enthusiasts.</li>
        <li>Innovation: Our commitment to continuous innovation keeps us at the forefront of beauty trends.</li>
      </motion.ul>

      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Meet Our Team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="rounded-full h-32 w-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
export default About;