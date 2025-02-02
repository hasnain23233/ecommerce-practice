import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

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
                    <ul className='flex gap-10'>
                        <header>
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </header>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
