import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart, faStarHalfAlt, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useCart } from '../Context/CartContext'

const ProductDetails = ({ product, onClose }) => {
    const { addToCart } = useCart()

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
                    product ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            ></div>

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full overflow-y-auto w-full sm:w-[420px] bg-white shadow-2xl border-l z-50 transform transition-transform duration-300 ${
                    product ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <button
                    onClick={onClose}
                    aria-label='Close details'
                    className='absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-pink-700 hover:text-white transition-colors'
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                {product && (
                    <div className='p-6 pt-16 flex flex-col h-full'>
                        <div className='bg-gray-50 rounded-2xl h-56 flex items-center justify-center'>
                            <img className='h-4/5 w-auto object-contain mix-blend-multiply' src={product.image} alt={product.title} />
                        </div>

                        <span className='text-xs tracking-[0.3em] uppercase text-pink-700 font-bold mt-6'>
                            {product.category}
                        </span>
                        <h2 className='text-2xl font-black text-gray-900 mt-1 leading-snug'>{product.title}</h2>

                        <div className='flex items-center gap-6 mt-4 pb-4 border-b-2 border-dashed border-gray-200 text-sm text-gray-600'>
                            <span className='flex items-center gap-1.5'>
                                <FontAwesomeIcon icon={faStarHalfAlt} className='text-pink-700' />
                                {product.rating?.rate} rating
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <FontAwesomeIcon icon={faShoppingCart} className='text-pink-700' />
                                {product.rating?.count} sold
                            </span>
                        </div>

                        <p className='mt-4 text-gray-600 text-sm leading-relaxed flex-1'>{product.description}</p>

                        <div className='sticky bottom-0 bg-white pt-4 pb-6 mt-4 border-t border-gray-100'>
                            <p className='font-black text-3xl text-gray-900 mb-3'>${product.price}</p>
                            <button
                                onClick={() => { addToCart(product); onClose() }}
                                className='w-full py-3.5 rounded-xl bg-pink-700 text-white font-bold uppercase tracking-wide text-sm transition-transform hover:scale-[1.02] active:scale-95'
                            >
                                Add to cart 🛒
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductDetails