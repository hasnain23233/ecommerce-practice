import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCart } from './Context/CartContext'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()
    const { count, openCart } = useCart()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const isContactPage = location.pathname === '/contact'

    return (
        <div>
            <header className={`fixed w-full z-40 transition-colors duration-300 ${isScrolled || isContactPage ? 'bg-gray-800 opacity-70' : 'bg-transparent'} text-white`}>
                <nav className='flex justify-between items-center px-5 h-16'>
                    <h1 className='font-bold text-3'>ShopNexa</h1>
                    <ul className='flex gap-10'>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/product">PRODUCT</Link></li>
                        <li><Link to="/service">SERVICE</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                    <ul className='flex gap-6 items-center'>
                        {/* Cart button with live item count */}
                        <li>
                            <button onClick={openCart} className='relative' aria-label='Open cart'>
                                <FontAwesomeIcon icon={faShoppingCart} className='text-xl' />
                                {count > 0 && (
                                    <span className='absolute -top-2 -right-3 bg-pink-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                                        {count}
                                    </span>
                                )}
                            </button>
                        </li>
                        <li>
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
