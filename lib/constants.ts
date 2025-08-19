export const BRAND_NAME = "GlamCS"
export const COLORS = {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF", // White
}
export const FONTS = {
    HEADER: "'Playfair Display', serif",
    BODY: "'Montserrat', sans-serif",
}
export const CONFIG = {
    SITE_TITLE: ${BRAND_NAME} Cosmetics,
    TAGLINE: "Elevate Your Beauty Experience",
    SLOGAN: "Luxury Redefined.",
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://instagram.com/GlamCS",
        FACEBOOK: "https://facebook.com/GlamCS",
        TWITTER: "https://twitter.com/GlamCS",
    },
    CONTACT: {
        EMAIL: "support@glamcs.com",
        PHONE: "+1 (800) 123-4567",
    },
}
export interface Product {
    id: number
    name: string
    description: string
    price: number
    category: string
    imageUrl: string
}

export interface Customer {
    id: number
    name: string
    email: string
    phone: string
    address: string
}

export interface Order {
    id: number
    customerId: number
    productId: number
    quantity: number
    orderDate: Date
    status: "pending" | "shipped" | "delivered" | "canceled"
}

export const PRODUCT_CATEGORIES = [
    "Makeup",
    "Skincare",
    "Fragrance",
    "Haircare",
    "Tools",
]
export const sampleProducts: Product[] = [
    {
        id: 1,
        name: "Luxe Lipstick",
        description: "A rich, creamy lipstick that glides on effortlessly for an elegant look.",
        price: 25.99,
        category: "Makeup",
        imageUrl: "https://example.com/images/luxe-lipstick.jpg",
    },
    {
        id: 2,
        name: "Radiant Glow Serum",
        description: "Illuminate your skin with our innovative radiance serum for all-day hydration.",
        price: 39.99,
        category: "Skincare",
        imageUrl: "https://example.com/images/radiant-glow-serum.jpg",
    },
]
export const getProductById = (id: number): Product | undefined => {
    return sampleProducts.find(product => product.id === id)
}
export const getProductsByCategory = (category: string): Product[] => {
    return sampleProducts.filter(product => product.category === category)
};