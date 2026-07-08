import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

// ---------------------------------------------------------------
// Success and Cancel pages for the checkout flow.
// Stripe redirects here after payment; demo mode navigates here directly.
// ---------------------------------------------------------------

const fontStyles = (
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
    </>
)

const ResultShell = ({ eyebrow, eyebrowColor, watermark, children }) => (
    <div className='relative min-h-screen bg-gray-100 flex items-center justify-center px-4 overflow-hidden'>
        {fontStyles}
        <div className='absolute inset-0 opacity-[0.04] pointer-events-none select-none'>
            <span className='font-display text-[10rem] sm:text-[16rem] leading-none whitespace-nowrap absolute -left-4 top-1/2 -translate-y-1/2 text-gray-900'>
                {watermark}
            </span>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='relative bg-white border border-gray-200 rounded-2xl shadow-xl px-8 sm:px-14 py-14 max-w-lg w-full text-center'
        >
            <span className={`inline-block ${eyebrowColor} text-white text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6`}>
                {eyebrow}
            </span>
            {children}
        </motion.div>
    </div>
)

export const CheckoutSuccess = () => {
    const isDemo = new URLSearchParams(useLocation().search).get('demo') === '1'
    return (
        <ResultShell eyebrow='Order placed' eyebrowColor='bg-pink-700' watermark='THANKS'>
            <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15, type: 'spring' }}
                className='w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto mb-6 text-2xl'
            >
                ✓
            </motion.div>

            <h1 className='font-display text-3xl sm:text-4xl uppercase text-gray-900 leading-tight mb-4'>
                Order Confirmed
            </h1>

            <div className='border-t-2 border-dashed border-gray-200 pt-5 mb-2'>
                <p className='text-gray-600 leading-relaxed'>
                    {isDemo
                        ? 'This was a demo checkout — no payment was processed. In production this page confirms a real Stripe payment.'
                        : 'Thank you for your purchase. A confirmation has been sent to your email.'}
                </p>
            </div>

            {isDemo && (
                <span className='inline-block mt-3 text-[11px] font-bold uppercase tracking-widest text-pink-700'>
                    ✦ Demo Mode
                </span>
            )}

            <Link
                to='/product'
                className='inline-block mt-8 bg-gray-900 text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-wide text-sm transition-all hover:bg-pink-700 hover:scale-105 active:scale-95'
            >
                Continue Shopping
            </Link>
        </ResultShell>
    )
}

export const CheckoutCancel = () => (
    <ResultShell eyebrow='Checkout cancelled' eyebrowColor='bg-gray-900' watermark='WAIT UP'>
        <motion.div
            initial={{ rotate: -20, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15, type: 'spring' }}
            className='w-16 h-16 rounded-full bg-pink-700 text-white flex items-center justify-center mx-auto mb-6 text-2xl'
        >
            ↩
        </motion.div>

        <h1 className='font-display text-3xl sm:text-4xl uppercase text-gray-900 leading-tight mb-4'>
            No Charge Made
        </h1>

        <div className='border-t-2 border-dashed border-gray-200 pt-5'>
            <p className='text-gray-600 leading-relaxed'>
                Checkout was cancelled and nothing was charged. Your cart is saved — come back any time.
            </p>
        </div>

        <Link
            to='/product'
            className='inline-block mt-8 bg-gray-900 text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-wide text-sm transition-all hover:bg-pink-700 hover:scale-105 active:scale-95'
        >
            Back to Products
        </Link>
    </ResultShell>
)