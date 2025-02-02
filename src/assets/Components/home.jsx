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

    return (
        <>
            <div className='overflow-hidden h-screen'>
                <video src={Video} className='w-full' autoPlay loop></video>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-2/2 -translate-y-1/2 text-white'>
                    <h1 className='text-4xl font-bold leading-loose'>Welcome to ShopNexa</h1>
                    <p className='text-lg'>ShopNexa is your go-to online shopping destination, offering a wide range of products at great prices. Whether you're looking for fashion, electronics, home essentials, or more, we make shopping easy and convenient.</p>
                    <button className='bg-white text-black px-5 py-2 mt-5 rounded-full'>Get Started</button>
                </div>
            </div>
            <div className='mt-10 w-10/12 m-auto text-center'>
                <h2 className='text-2xl font-bold text-gray-800 py-4'>Men's Shirts</h2>
                <Slider {...settings}>
                    {filterByCategory("men's clothing").map(item => (
                        <div key={item.id} className='p-4'>
                            <div className='border cursor-pointer bg-gray-100 p-4 rounded-xl text-center hover:transform'>
                                <h1 className='line-clamp-1'>{item.title}</h1>
                                <img className='w-8/12 m-auto mt-4 h-3/6 rounded-full' src={item.image} alt="" />
                                <p className='font-bold text-xl mt-3'>${item.price}</p>
                                <button onClick={() => showProductDetails(item.id)} className='p-2 w-10/12 border rounded bg-pink-700 text-white'>More Details</button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <br /><br />
                <h2 className='text-2xl font-bold text-gray-800 py-4'>Women's Products</h2>
                <Slider {...settings}>
                    {filterByCategory("women's clothing").map(item => (
                        <div key={item.id} className='p-4'>
                            <div className='border cursor-pointer bg-gray-100 p-4 rounded-xl text-center hover:transform'>
                                <h1 className='line-clamp-1'>{item.title}</h1>
                                <img className='w-8/12 m-auto mt-4 h-3/6 rounded-full' src={item.image} alt="" />
                                <p className='font-bold text-xl mt-3'>${item.price}</p>
                                <button onClick={() => showProductDetails(item.id)} className='p-2 w-10/12 border rounded bg-pink-700 text-white'>More Details</button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <br /><br />
                <h2 className='text-2xl font-bold text-gray-800 py-4'>Electronics</h2>
                <Slider {...settings}>
                    {filterByCategory("electronics").map(item => (
                        <div key={item.id} className='p-4'>
                            <div className='border cursor-pointer h-3/6  bg-gray-100 p-4 overflow-hidden rounded-xl text-center hover:transform'>
                                <h1 className='line-clamp-1'>{item.title}</h1>
                                <img className='w-8/12 m-auto mt-4 h-3/6 rounded-full' src={item.image} alt="" />
                                <p className='font-bold text-xl mt-3'>${item.price}</p>
                                <button onClick={() => showProductDetails(item.id)} className='p-2 w-10/12 border rounded bg-pink-700 text-white'>More Details</button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <ProductDetails product={selectedProduct} onClose={closeProductDetails} />
            </div>
            <div className="BigSa h-screen mt-10 flex items-center justify-start">
                <div className='w-10/12 m-auto text-white '>
                    <h1 className='text-3xl font-bold leading-loose'>Hurray! Friday Sale is Here!</h1>
                    <p className='text-xl leading-loose font-light'>Get 50% OFF on ALL Products! 🛍️Limited-Time Offer <br /> Shop Now Before It’s Gone! </p>
                    <button className='p-2 w-2/12 border rounded-xl bg-white text-gray-900 mt-4 font-bold'>Shop Now</button>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.176650728229!2d73.08699437412143!3d33.73024793466672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc0804bbfbbe3%3A0xf2596a934964569e!2sGilgit-Baltistan%20House!5e0!3m2!1sen!2s!4v1738493959091!5m2!1sen!2s" className='w-full' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default home
