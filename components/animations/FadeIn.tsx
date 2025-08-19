import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useInView as useIntersectionObserver } from 'react-intersection-observer'
interface FadeInProps {
    children: React.ReactNode
    className?: string
    threshold?: number
}

const FadeIn: React.FC<FadeInProps> = ({ children, className = '', threshold = 0.1 }) => {
    const { ref, inView } = useIntersectionObserver({ threshold })
    const isInView = useInView(ref, { once: true })
    return (
        <motion.div
            ref={ref}
            className={transition-opacity duration-700 ease-in-out ${className} ${isInView ? 'opacity-100' : 'opacity-0'}}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
        >
            {children}
        </motion.div>
    )
}
export default FadeIn;