import React, { createContext, useContext, useEffect, useState } from 'react'

// ---------------------------------------------------------------
// Cart state for the whole app.
// - add / remove / change quantity
// - persists to localStorage so the cart survives page refresh
// - also controls whether the cart drawer is open
// ---------------------------------------------------------------

const CartContext = createContext()

// Custom hook — use this in any component: const { items, addToCart } = useCart()
export const useCart = () => useContext(CartContext)

const STORAGE_KEY = 'shopnexa_cart'

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        // Load saved cart on first render
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
        } catch {
            return []
        }
    })
    const [isOpen, setIsOpen] = useState(false)

    // Save to localStorage whenever the cart changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }, [items])

    const addToCart = (product) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === product.id)
            if (existing) {
                // Already in cart — increase quantity
                return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
            }
            return [...prev, { id: product.id, title: product.title, price: product.price, image: product.image, qty: 1 }]
        })
        setIsOpen(true) // show the drawer so the user sees it worked
    }

    const removeFromCart = (id) => setItems(prev => prev.filter(i => i.id !== id))

    const changeQty = (id, delta) => {
        setItems(prev => prev
            .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
            .filter(i => i.qty > 0)) // qty 0 removes the item
    }

    const clearCart = () => setItems([])

    const count = items.reduce((sum, i) => sum + i.qty, 0)
    const total = items.reduce((sum, i) => sum + i.qty * i.price, 0)

    return (
        <CartContext.Provider value={{
            items, count, total,
            addToCart, removeFromCart, changeQty, clearCart,
            isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false),
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
