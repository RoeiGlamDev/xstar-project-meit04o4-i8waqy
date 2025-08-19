import React from 'react'
import { motion } from 'framer-motion'
interface StatsProps {
  achievements: {
    title: string
    count: number
    description: string
  }[]
}

const StatsSection: React.FC<StatsProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-orange-600 mb-10">
          GlamCS Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-orange-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-orange-600 text-4xl font-bold">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="counter"
                >
                  {achievement.count}
                </motion.span>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {achievement.title}
              </h3>
              <p className="mt-2 text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default StatsSection;