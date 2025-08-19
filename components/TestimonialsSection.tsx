import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
    name: string
    review: string
    rating: number
    photo: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Sophia L.',
        review: 'GlamCS transformed my makeup routine! The quality is simply unparalleled and the colors are vibrant and long-lasting.',
        rating: 5,
        photo: 'path/to/sophia.jpg',
    },
    {
        name: 'Emma R.',
        review: 'I've never felt more glamorous! The 3D effects in their product packaging are stunning and the products deliver professional results.',
        rating: 5,
        photo: 'path/to/emma.jpg',
    },
    {
        name: 'Olivia H.',
        review: 'GlamCS gives me the confidence to express myself. Their collections are stylish and perfect for all occasions!',
        rating: 5,
        photo: 'path/to/olivia.jpg',
    },
]
const TestimonialsSection: React.FC = () => {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl font-semibold text-orange-500 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    What Our Customers Say
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="border rounded-lg shadow-lg p-5 bg-orange-50 transition-transform transform hover:scale-105"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={testimonial.photo} alt={testimonial.name} className="rounded-full w-20 h-20 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-orange-500">{testimonial.name}</h3>
                            <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
                            <div className="flex justify-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 15l-5.125 3.266 1.312-5.053L1 7.59l5.312-.5L10 2l2.688 4.086L18 7.59l-5.187 5.623 1.312 5.053L10 15z" />
                                    </svg>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default TestimonialsSection;