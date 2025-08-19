import { ReactNode } from 'react'
/
 * Utility functions for the GlamCS cosmetics application.
 * These functions assist with common formatting and class name management.
 */

/
 * Interface representing the properties of a cosmetic product.
 */
export interface CosmeticProduct {
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
    category: string
}

/
 * Class name management function that combines base and additional class names.
 * This is useful for dynamically applying classes based on state or props.
 * 
 * @param base - The base class name.
 * @param additional - Optional additional class names.
 * @returns - A string containing the combined class names.
 */
export function cn(base: string, ...additional: string[]): string {
    return [base, ...additional].filter(Boolean).join(' ')
}

/
 * Formats the price of a cosmetic product into a string with currency.
 * 
 * @param price - The price of the cosmetic product as a number.
 * @returns - A formatted price string in USD.
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)}
}

/
 * Formats the description of a cosmetic product to be more visually appealing, adding emphasis.
 * 
 * @param description - The description of the cosmetic product.
 * @returns - A formatted description string suitable for display.
 */
export function formatDescription(description: string): string {
    return description.charAt(0).toUpperCase() + description.slice(1) + ' - Discover the beauty within!'
}

/
 * Generates a luxury 3D effect for product display.
 * 
 * @param children - The child elements to which the 3D effect should be applied.
 * @returns - A JSX element with 3D effects.
 */
export function Luxury3DEffect({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div style={{ transform: 'perspective(1000px)', margin: '20px', color: 'orange' }}>
            <div style={{
                transform: 'rotateY(20deg) scale(1.1)',
                transition: 'transform 0.5s',
                padding: '10px',
                backgroundColor: 'white',
            }}>
                {children}
            </div>
        </div>
    )
}