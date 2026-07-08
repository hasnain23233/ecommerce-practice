import React, { useContext, useEffect, useState } from 'react'
import Video from '../img/bg.mp4'
import CreateContext from '../Context/CreatContext'
import ProductDetails from './ProductDetails'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const home = () => {
    const FetchingData = useContext(CreateContext)
    const [data, setData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await FetchingData()
            setData(result)
        }
        fetchData()
    }, [FetchingData])

    const showProductDetails = async (id) => {
        const result = await FetchingData()
        const product = result.find(item => item.id === id)
        setSelectedProduct(product)
    }

    const closeProductDetails = () => {
        setSelectedProduct(null)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const filterByCategory = (category) => {
        return data.filter(item => item.category === category)
    }

    const renderCategory = (label, eyebrow, category) => (
        <div className='mb-20'>
            <div className='flex items-end justify-between border-b-2 border-dashed border-gray-300 pb-3 mb-8'>
                <div>
                    <span className='text-xs tracking-[0.3em] uppercase text-pink-700 font-bold'>{eyebrow}</span>
                    <h2 className='text-3xl font-black text-gray-900 uppercase tracking-tight'>{label}</h2>
                </div>
                <span className='hidden sm:block text-sm text-gray-400 font-medium'>{filterByCategory(category).length} items</span>
            </div>
            <Slider {...settings}>
                {filterByCategory(category).map(item => (
                    <div key={item.id} className='px-3'>
                        <div className='group relative bg-white border border-gray-200 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-pink-200'>
                            <span className='absolute -top-2 -right-2 bg-pink-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md rotate-3 group-hover:rotate-0 transition-transform'>
                                New
                            </span>
                            <div className='overflow-hidden rounded-xl bg-gray-50 h-40 flex items-center justify-center'>
                                <img
                                    className='h-full w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300'
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>
                            <h1 className='line-clamp-1 mt-4 text-sm font-semibold text-gray-800'>{item.title}</h1>
                            <p className='font-black text-2xl mt-1 text-gray-900'>${item.price}</p>
                            <button
                                onClick={() => showProductDetails(item.id)}
                                className='mt-4 w-full py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold tracking-wide transition-colors hover:bg-pink-700'
                            >
                                View details
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <style>{`
                .font-display { font-family: 'Archivo Black', system-ui, sans-serif; }
                body { font-family: 'Work Sans', system-ui, sans-serif; }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    animation: marquee 18s linear infinite;
                    white-space: nowrap;
                }
                @media (prefers-reduced-motion: reduce) {
                    .marquee-track { animation: none; }
                }
            `}</style>

            {/* HERO */}
            <div className='relative overflow-hidden h-screen'>
                <video src={Video} className='w-full h-full object-cover' autoPlay loop muted playsInline></video>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10'></div>

                <div className='absolute bottom-16 left-6 sm:left-12 right-6 sm:right-auto text-white max-w-xl'>
                    <span className='inline-block bg-pink-700 text-white text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-5'>
                        Est. ShopNexa
                    </span>
                    <h1 className='font-display text-4xl sm:text-6xl leading-[1.05] uppercase'>
                        Shop the <span className='text-pink-500'>whole</span> thing
                    </h1>
                    <p className='text-base sm:text-lg text-gray-200 mt-5 leading-relaxed'>
                        Fashion, electronics, and home essentials — curated, priced fairly,
                        and shipped fast. This is the internet's clearance rack, minus the mess.
                    </p>
                    <button className='bg-white text-black px-7 py-3 mt-7 rounded-full font-bold text-sm uppercase tracking-wide transition-transform hover:scale-105 active:scale-95'>
                        Get Started
                    </button>
                </div>

                <div className='absolute bottom-6 right-6 hidden sm:flex items-center gap-2 text-white/60 text-xs uppercase tracking-widest'>
                    <span className='w-6 h-px bg-white/60'></span> Scroll
                </div>
            </div>

            {/* MARQUEE TICKER */}
            <div className='bg-gray-900 text-white overflow-hidden py-3 border-y-4 border-pink-700'>
                <div className='marquee-track inline-block'>
                    {Array(2).fill(0).map((_, i) => (
                        <span key={i} className='mx-6 text-sm font-bold uppercase tracking-widest inline-flex items-center gap-6'>
                            <span>✦ Friday Sale Live</span>
                            <span>✦ Free Shipping Over $50</span>
                            <span>✦ New Electronics Weekly</span>
                            <span>✦ 50% Off Storewide</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* CATEGORIES */}
            <div className='mt-16 w-11/12 max-w-6xl m-auto'>
                {renderCategory("Men's Shirts", "Category 01", "men's clothing")}
                {renderCategory("Women's Products", "Category 02", "women's clothing")}
                {renderCategory("Electronics", "Category 03", "electronics")}
                <ProductDetails product={selectedProduct} onClose={closeProductDetails} />
            </div>

            {/* BIG SALE BANNER */}
            <div className="BigSa relative h-screen mt-4 flex items-center overflow-hidden">
                <div className='absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent'></div>
                <div className='relative w-11/12 max-w-6xl m-auto text-white'>
                    <span className='inline-block text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-4'>
                        Limited time
                    </span>
                    <h1 className='font-display text-5xl sm:text-7xl uppercase leading-none'>
                        Friday Sale <br /> is Here
                    </h1>
                    <p className='text-lg sm:text-xl text-gray-300 mt-6 max-w-md leading-relaxed'>
                        50% off everything, storewide. No codes, no fine print — just fewer zeros at checkout.
                    </p>
                    <button className='mt-8 px-8 py-3.5 rounded-xl bg-pink-700 text-white font-bold uppercase tracking-wide text-sm transition-transform hover:scale-105 active:scale-95'>
                        Shop Now
                    </button>
                </div>
            </div>

            {/* MAP / VISIT US */}
            <div className='w-11/12 max-w-6xl m-auto py-16'>
                <div className='flex items-end justify-between border-b-2 border-dashed border-gray-300 pb-3 mb-8'>
                    <div>
                        <span className='text-xs tracking-[0.3em] uppercase text-pink-700 font-bold'>Find us</span>
                        <h2 className='text-3xl font-black text-gray-900 uppercase tracking-tight'>Visit the Showroom</h2>
                    </div>
                </div>
                <div className='rounded-2xl overflow-hidden shadow-xl border border-gray-200'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.176650728229!2d73.08699437412143!3d33.73024793466672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc0804bbfbbe3%3A0xf2596a934964569e!2sGilgit-Baltistan%20House!5e0!3m2!1sen!2s!4v1738493959091!5m2!1sen!2s"
                        className='w-full'
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="ShopNexa location"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default home