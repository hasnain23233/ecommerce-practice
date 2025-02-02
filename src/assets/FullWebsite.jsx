import React, { Suspense } from 'react'
const Navbar = React.lazy(() => import('./Navbar'))
import Home from './Components/home'
import Product from './Components/Product'
import Service from './Components/Service'
import Contact from './Components/Contact'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'

const FullWebsite = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='product' element={<Product />} />
                    <Route path='service' element={<Service />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
                <Footer />
            </Suspense>
        </div>
    )
}

export default FullWebsite
