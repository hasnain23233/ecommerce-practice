import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus, faLock, faBagShopping } from '@fortawesome/free-solid-svg-icons'
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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <style>{`
                .font-display { font-family: 'Archivo Black', system-ui, sans-serif; }
                body { font-family: 'Work Sans', system-ui, sans-serif; }
            `}</style>

            {/* Dark overlay behind the drawer */}
            {isOpen && <div onClick={closeCart} className='fixed inset-0 bg-black/50 z-40 backdrop-blur-[1px]' />}

            <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Header */}
                <div className='flex justify-between items-center px-5 py-5 border-b-2 border-dashed border-gray-200'>
                    <div>
                        <span className='text-[11px] tracking-[0.25em] uppercase text-pink-700 font-bold'>Your Cart</span>
                        <h2 className='font-display text-xl uppercase text-gray-900'>
                            {items.length > 0 ? `${items.length} item${items.length > 1 ? 's' : ''}` : 'Empty'}
                        </h2>
                    </div>
                    <button
                        onClick={closeCart}
                        className='w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition-colors flex items-center justify-center'
                    >
                        ✕
                    </button>
                </div>

                {/* Items */}
                <div className='flex-1 overflow-y-auto px-5 py-5 space-y-4'>
                    {items.length === 0 && (
                        <div className='text-center mt-16'>
                            <div className='w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 text-gray-400 text-xl'>
                                <FontAwesomeIcon icon={faBagShopping} />
                            </div>
                            <p className='text-gray-900 font-semibold'>Your cart is empty</p>
                            <p className='text-gray-400 text-sm mt-1'>Add something you'll love.</p>
                        </div>
                    )}
                    {items.map(item => (
                        <div
                            key={item.id}
                            className='flex gap-3 border border-gray-200 rounded-2xl p-3 items-center transition-shadow hover:shadow-md'
                        >
                            <div className='w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden'>
                                <img src={item.image} alt={item.title} className='h-full w-auto object-contain mix-blend-multiply' />
                            </div>
                            <div className='flex-1 min-w-0'>
                                <p className='text-sm font-semibold text-gray-900 line-clamp-1'>{item.title}</p>
                                <p className='text-pink-700 font-black'>${item.price}</p>
                                <div className='flex items-center gap-2 mt-2'>
                                    <button
                                        onClick={() => changeQty(item.id, -1)}
                                        className='w-6 h-6 rounded-md border border-gray-200 text-xs text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors'
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span className='text-sm font-bold text-gray-900 w-4 text-center'>{item.qty}</span>
                                    <button
                                        onClick={() => changeQty(item.id, 1)}
                                        className='w-6 h-6 rounded-md border border-gray-200 text-xs text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors'
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className='ml-auto text-gray-300 hover:text-pink-700 transition-colors text-sm'
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer: total + checkout */}
                {items.length > 0 && (
                    <div className='px-5 py-5 border-t-2 border-dashed border-gray-200 space-y-3'>
                        <div className='flex justify-between items-baseline'>
                            <span className='text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500'>Total</span>
                            <span className='font-display text-2xl text-gray-900'>${total.toFixed(2)}</span>
                        </div>
                        {error && <p className='text-pink-700 text-sm font-medium'>{error}</p>}
                        <button
                            onClick={handleCheckout}
                            disabled={loading}
                            className='w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold uppercase tracking-wide text-sm disabled:opacity-50 transition-all hover:bg-pink-700 active:scale-[0.98]'
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