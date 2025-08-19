import type { Config } from 'tailwindcss'
/.*?/
 * Tailwind CSS configuration for GlamCS cosmetics website.
 * This configuration establishes a modern, elegant design 
 * with a specific orange and white color scheme, includes 
 * animations, and custom styling pertinent to the cosmetics 
 * industry.
 */

const config: Config = {
  mode: 'jit',
  purge: ['./src//*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFA500', // Light orange for highlights
          DEFAULT: '#FF8C00', // Main orange color for buttons and accents
          dark: '#FF4500', // Darker orange for hover effects
        },
        white: '#FFFFFF', // Pure white for backgrounds and text
      },
      animations: {
        fadeIn: 'fadeIn 0.5s ease-in',
        fadeOut: 'fadeOut 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glam: '0 4px 30px rgba(0, 0, 0, 0.1)', // Luxurious shadow effect
      },
    },
  },
  variants: {
    extend: {
      opacity: ['hover', 'focus', 'active'],
      translate: ['hover', 'focus', 'active'],
      scale: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
export default config;