import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus, faLock } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../Context/CartContext'

// ---------------------------------------------------------------
// Slide-over cart drawer.
// Checkout flow:
//   1. POST cart items to /api/checkout (Vercel serverless function)
//   2. Stripe mode  -> redirect to the secure Stripe Checkout page
//   3. Demo mode    -> simulate a successful order (no key needed)
// ---------------------------------------------------------------

const CartDrawer = () => {
    const { items, total, isOpen, closeCart, changeQty, removeFromCart, clearCart } = useCart()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleCheckout = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items }),
            })
            const data = await res.json()

            if (data.url) {
                // Real Stripe Checkout — redirect to Stripe's hosted page
                window.location.href = data.url
            } else if (data.demo) {
                // Demo mode — no Stripe key configured on the server
                clearCart()
                closeCart()
                navigate('/success?demo=1')
            } else {
                throw new Error(data.error || 'Checkout failed')
            }
        } catch (e) {
            // Running locally with `vite dev` there is no /api — offer demo flow
            clearCart()
            closeCart()
            navigate('/success?demo=1')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {/* Dark overlay behind the drawer */}
            {isOpen && <div onClick={closeCart} className='fixed inset-0 bg-black/50 z-40' />}

            <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header */}
                <div className='flex justify-between items-center p-4 border-b'>
                    <h2 className='text-xl font-bold'>Your Cart</h2>
                    <button onClick={closeCart} className='text-gray-500 hover:text-black'>✕ Close</button>
                </div>

                {/* Items */}
                <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                    {items.length === 0 && (
                        <p className='text-gray-500 text-center mt-10'>Your cart is empty.<br />Add some products!</p>
                    )}
                    {items.map(item => (
                        <div key={item.id} className='flex gap-3 border rounded-xl p-3 items-center'>
                            <img src={item.image} alt={item.title} className='w-14 h-14 object-contain' />
                            <div className='flex-1'>
                                <p className='text-sm font-medium line-clamp-1'>{item.title}</p>
                                <p className='text-pink-700 font-bold'>${item.price}</p>
                                <div className='flex items-center gap-3 mt-1'>
                                    <button onClick={() => changeQty(item.id, -1)} className='w-6 h-6 border rounded text-xs'><FontAwesomeIcon icon={faMinus} /></button>
                                    <span className='text-sm font-semibold'>{item.qty}</span>
                                    <button onClick={() => changeQty(item.id, 1)} className='w-6 h-6 border rounded text-xs'><FontAwesomeIcon icon={faPlus} /></button>
                                    <button onClick={() => removeFromCart(item.id)} className='ml-auto text-red-500 text-sm'><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer: total + checkout */}
                {items.length > 0 && (
                    <div className='p-4 border-t space-y-3'>
                        <div className='flex justify-between font-bold text-lg'>
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        {error && <p className='text-red-500 text-sm'>{error}</p>}
                        <button
                            onClick={handleCheckout}
                            disabled={loading}
                            className='w-full bg-pink-700 text-white py-3 rounded-xl font-semibold disabled:opacity-50 hover:bg-pink-800 transition'
                        >
                            <FontAwesomeIcon icon={faLock} className='mr-2' />
                            {loading ? 'Redirecting…' : 'Secure Checkout'}
                        </button>
                        <p className='text-[11px] text-gray-400 text-center'>Test mode — powered by Stripe Checkout. No real payment is taken.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default CartDrawer
