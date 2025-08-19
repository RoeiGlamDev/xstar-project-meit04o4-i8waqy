import { Product } from './product'
import { User } from './user'
/
 * Interface representing a cosmetic category in the GlamCS application.
 */
export interface Category {
  id: string;           // Unique identifier for the category
  name: string;         // Name of the category (e.g., "Lipsticks", "Foundations")
  description: string;  // Description of the category
  products: Product[];  // Array of products belonging to this category
}

/
 * Interface representing a review for a GlamCS product.
 */
export interface Review {
  userId: string;        // Unique identifier for the user who wrote the review
  productId: string;     // Unique identifier for the product being reviewed
  rating: number;        // Rating of the product (1 to 5 scale)
  comment: string;       // User's comment about the product
  createdAt: Date;       // Date the review was created
}

/
 * Interface representing a GlamCS order.
 */
export interface Order {
  orderId: string;              // Unique identifier for the order
  userId: string;               // Unique identifier for the user who placed the order
  products: { productId: string; quantity: number }[]; // Products in the order with quantities
  orderDate: Date;              // Date the order was placed
  totalAmount: number;          // Total amount for the order
  shippingAddress: string;      // Address where the order will be shipped
}

/
 * Interface representing a GlamCS promotion.
 */
export interface Promotion {
  code: string;                  // Unique promotion code
  description: string;           // Description of the promotion
  discountPercentage: number;    // Discount percentage (e.g., 20 for 20% off)
  validUntil: Date;              // Date until the promotion is valid
}

/
 * Interface representing a high-end product in the GlamCS inventory.
 */
export interface GlamCSProduct extends Product {
  brand: string;                 // Brand of the product, should always be "GlamCS"
  luxuryLevel: 'high' | 'premium'; // Luxury classification of the product
  dimensions: { width: number; height: number; depth: number }; // 3D dimensions formodern design
  effects: string[];             // 3D effects used in product display, e.g., "glow", "highlight"
}

/
 * Exporting all interfaces for use in the GlamCS application modules.
 */
export {
  Category,
  Review,
  Order,
  Promotion,
  GlamCSProduct,
  User
};