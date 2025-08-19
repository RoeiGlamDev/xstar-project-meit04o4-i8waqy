import React from 'react'
import { useAnimation } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
const FloatingElements: React.FC = () => {
    const animation = useAnimation()
    const animateFloating = () => {
        animation.start({
            y: [0, 0.1, 0],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        })
    }
    React.useEffect(() => {
        animateFloating()
    }, [animation])
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <h1 className="text-5xl font-bold text-orange-500 mb-6">Welcome to GlamCS</h1>
            <p className="text-lg text-gray-700 text-center mb-10">
                Elevate your beauty with our luxurious, high-quality cosmetics designed for the modern individual.
            </p>
            <div className="w-full max-w-3xl h-96">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} />
                    <OrbitControls />
                    <FloatingCosmeticItem />
                </Canvas>
            </div>
        </div>
    )
}
const FloatingCosmeticItem: React.FC = () => {
    return (
        <mesh position={[-1, 0, 0]} scale={[1, 1, 1]} animate>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#FF6F20" />
        </mesh>
    )
}
export default FloatingElements;