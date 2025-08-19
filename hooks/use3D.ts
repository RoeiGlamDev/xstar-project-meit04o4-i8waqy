import { useEffect, useRef } from 'react'
import * as THREE from 'three'
/
 * Custom hook for creating 3D interactions for GlamCS cosmetic products.
 * This hook initializes a 3D scene that can be used to display interactive cosmetic products.
 * @returns {Object} An object containing the 3D scene and related methods.
 */
const use3D = () => {
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  useEffect(() => {
    // Create a 3D scene for showcasing GlamCS products
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff); // white background for elegance

    // Set up a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera
    // Set up a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    rendererRef.current = renderer
    // Lighting to enhance the luxury feel
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xff7f50, 1, 100)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)
    // Adding a 3D model for GlamCS product example
    const geometry = new THREE.SphereGeometry(1, 32, 32); // Example shape - replace with real 3D models
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // GlamCS orange color
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      sphere.rotation.x += 0.01
      sphere.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()
    // Resize the renderer on window resize
    const handleResize = () => {
      if (rendererRef.current && cameraRef.current) {
        const width = window.innerWidth
        const height = window.innerHeight
        rendererRef.current.setSize(width, height)
        cameraRef.current.aspect = width / height
        cameraRef.current.updateProjectionMatrix()
      }
    }
    window.addEventListener('resize', handleResize)
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      document.body.removeChild(renderer.domElement)
    }
  }, [])
  return {
    scene: sceneRef.current,
    renderer: rendererRef.current,
    camera: cameraRef.current,
  }
}
export default use3D;