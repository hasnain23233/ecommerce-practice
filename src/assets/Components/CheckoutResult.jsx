import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// ---------------------------------------------------------------
// Success and Cancel pages for the checkout flow.
// Stripe redirects here after payment; demo mode navigates here directly.
// ---------------------------------------------------------------

export const CheckoutSuccess = () => {
    const isDemo = new URLSearchParams(useLocation().search).get('demo') === '1'
    return (
        <div className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
            <div className='w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl mb-6'>✅</div>
            <h1 className='text-3xl font-bold mb-2'>Order confirmed!</h1>
            <p className='text-gray-600 max-w-md'>
                {isDemo
                    ? 'This was a demo checkout — no payment was processed. In production this page confirms a real Stripe payment.'
                    : 'Thank you for your purchase. A confirmation has been sent to your email.'}
            </p>
            <Link to='/product' className='mt-8 bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-800 transition'>
                Continue shopping
            </Link>
        </div>
    )
}

export const CheckoutCancel = () => (
    <div className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
        <div className='w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-4xl mb-6'>↩️</div>
        <h1 className='text-3xl font-bold mb-2'>Checkout cancelled</h1>
        <p className='text-gray-600 max-w-md'>No charge was made. Your cart is saved — come back any time.</p>
        <Link to='/product' className='mt-8 bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-800 transition'>
            Back to products
        </Link>
    </div>
)
