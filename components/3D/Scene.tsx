import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
interface SceneProps {
  className?: string
}

const GlamCSScene: React.FC<SceneProps> = ({ className }) => {
  const { nodes, materials } = useGLTF('/models/cosmetics-display.glb') as any
  return (
    <div className={w-full h-full ${className}}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls />
        <motion.group
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <mesh
            geometry={nodes.CosmeticsDisplay.geometry}
            material={materials.Base}
            onPointerOver={(event) => (event.target.material.color.set('orange'))}
            onPointerOut={(event) => (event.target.material.color.set('white'))}
          >
            <motion.meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.5}
              metalness={0.5}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          </mesh>
        </motion.group>
      </Canvas>
    </div>
  )
}
export default GlamCSScene;