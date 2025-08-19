import React, { useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const particles: THREE.Points[] = []
        const particleCount = 1000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)
        for (let i = 0; i < particleCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  10; // x
            positions[i  3 + 1] = (Math.random() - 0.5)  10; // y
            positions[i  3 + 2] = (Math.random() - 0.5)  10; // z
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const material = new THREE.PointsMaterial({
            size: 0.1,
            color: new THREE.Color(1, 0.647, 0), // orange color
            transparent: true,
            opacity: 0.6
        })
        const particleSystem = new THREE.Points(geometry, material)
        scene.add(particleSystem)
        particles.push(particleSystem)
        camera.position.z = 5
        const animate = () => {
            requestAnimationFrame(animate)
            particleSystem.rotation.x += 0.001
            particleSystem.rotation.y += 0.001
            renderer.render(scene, camera)
        }
        animate()
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div className="fixed inset-0 overflow-hidden">
            <canvas id="particle-canvas" className="w-full h-full"></canvas>
            <motion.div 
                className="absolute flex flex-col items-center justify-center w-full h-full text-white" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl font-bold mb-4 hover:text-orange-500 transition duration-300">Welcome to GlamCS</h1>
                <p className="text-lg text-center px-4">
                    Discover our luxurious range of cosmetics designed to enhance your natural beauty. 
                    With products crafted from the finest ingredients, let GlamCS be your go-to brand for elegance and style.
                </p>
                <button className="mt-6 bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-400 transition duration-300">
                    Shop Now
                </button>
            </motion.div>
        </div>
    )
}
export default ParticleBackground;