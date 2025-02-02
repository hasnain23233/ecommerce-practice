import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ product, onClose }) => {
    return (
        <div className={`fixed top-0 right-0 h-full overflow-auto w-1/3 bg-white shadow-lg p-4 border-l transition-transform z-50 transform ${product ? 'translate-x-0' : 'translate-x-full'}`}>
            <button onClick={onClose} className='absolute top-4 right-4 text-gray-500'>Close</button>
            {product && (
                <>
                    <img className='w-5/12 m-auto' src={product.image} alt="" />
                    <h2 className='text-2xl font-bold mb-4'>{product.title}</h2>
                    <p className='mt-4 text-gray-700'>{product.description}</p>
                    <div className='flex justify-center gap-8 mt-5'>
                        <p>{product.rating.rate}<FontAwesomeIcon icon={faStarHalfAlt} /></p>
                        <p>{product.rating.count}<FontAwesomeIcon icon={faShoppingCart} /></p>
                    </div>
                    <p className='font-bold text-xl mt-3 text-pink-700'>${product.price}</p>
                    <button className='p-2 w-10/12 border rounded bg-pink-700 text-white mt-10'>Buy Now</button>
                </>
            )}
        </div>
    )
}

export default ProductDetails
