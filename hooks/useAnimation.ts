import { useEffect, useRef } from 'react'
/
 * Interface representing animation properties for GlamCS animations.
 */
interface AnimationProps {
  isVisible: boolean; // Boolean to control visibility for animations
  duration?: number; // Duration of the animation in milliseconds
}

/
 * Custom hook formanaging animations in the GlamCS cosmetics website
 * @param {AnimationProps} props - Properties to control animation behavior
 * @returns {React.RefObject<HTMLElement>} - Reference to the animated element
 */
const useAnimation = ({ isVisible, duration = 500 }: AnimationProps) => {
  const elementRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const element = elementRef.current
    if (element) {
      // Animate the element when it becomes visible
      if (isVisible) {
        element.style.transition = opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      } else {
        element.style.opacity = '0'
        element.style.transform = 'translateY(20px)'
      }
    }
  }, [isVisible, duration])
  return elementRef
}
export default useAnimation;