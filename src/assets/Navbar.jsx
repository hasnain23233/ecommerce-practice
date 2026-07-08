import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useCart } from './Context/CartContext'

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/product', label: 'Product' },
    { to: '/service', label: 'Service' },
    { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const { count, openCart } = useCart()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 200)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

    const isContactPage = location.pathname === '/contact'
    const solid = isScrolled || isContactPage || isMenuOpen

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${solid ? 'bg-gray-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'} text-white`}>
            <nav className='flex justify-between items-center px-5 sm:px-8 h-16 border-b border-dashed border-white/0 data-[solid=true]:border-white/10'>
                <Link to="/" className='font-display text-xl tracking-tight uppercase'>
                    Shop<span className='text-pink-500'>Nexa</span>
                </Link>

                {/* Desktop links */}
                <ul className='hidden md:flex gap-9 text-xs font-semibold uppercase tracking-[0.2em]'>
                    {NAV_LINKS.map(link => {
                        const active = location.pathname === link.to
                        return (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    className={`relative pb-1 transition-colors hover:text-pink-500 ${active ? 'text-pink-500' : 'text-white'}`}
                                >
                                    {link.label}
                                    {active && <span className='absolute -bottom-[3px] left-0 right-0 h-[2px] bg-pink-500 rounded-full'></span>}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <ul className='flex gap-5 sm:gap-6 items-center'>
                    <li>
                        <button onClick={openCart} className='relative transition-transform hover:scale-110' aria-label='Open cart'>
                            <FontAwesomeIcon icon={faShoppingCart} className='text-lg' />
                            {count > 0 && (
                                <span className='absolute -top-2 -right-3 bg-pink-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                                    {count}
                                </span>
                            )}
                        </button>
                    </li>
                    <li className='hidden sm:block'>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </li>
                    {/* Mobile menu toggle */}
                    <li className='md:hidden'>
                        <button
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            className='text-lg'
                        >
                            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Mobile menu panel */}
            <div
                className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-gray-950/95 border-t border-dashed border-white/10 ${isMenuOpen ? 'max-h-72' : 'max-h-0'}`}
            >
                <ul className='flex flex-col px-6 py-4 gap-1 text-sm font-semibold uppercase tracking-widest'>
                    {NAV_LINKS.map(link => {
                        const active = location.pathname === link.to
                        return (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    className={`block py-3 border-b border-white/5 last:border-none transition-colors ${active ? 'text-pink-500' : 'text-white'}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                    <li className='pt-3 sm:hidden'>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar