import React, { useContext, useEffect, useState } from 'react'
import Video from '../img/Pro.mp4'
import CreateContext from '../Context/CreatContext'
import ProductDetails from '../Components/ProductDetails'
import { useCart } from '../Context/CartContext'

const CATEGORIES = [
    { label: 'All', value: '' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Jewelery', value: 'jewelery' },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
]

const Product = () => {
    const FetchingData = useContext(CreateContext)
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState('')
    const [activeCategory, setActiveCategory] = useState('')
    const { addToCart } = useCart()

    useEffect(() => {
        const fetchData = async () => {
            const result = await FetchingData()
            setData(result)
            setFilteredData(result)
        }
        fetchData()
    }, [FetchingData])

    const filterByCategory = async (category) => {
        setActiveCategory(category)
        const result = await FetchingData()
        if (category) {
            setFilteredData(result.filter(item => item.category === category))
        } else {
            setFilteredData(result)
        }
    }

    const showProductDetails = async (id) => {
        const result = await FetchingData()
        const product = result.find(item => item.id === id)
        setSelectedProduct(product)
    }

    const closeProductDetails = () => {
        setSelectedProduct(null)
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
        const filtered = data.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredData(filtered)
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
        let sortedData = [...filteredData]
        if (e.target.value === 'price') {
            sortedData.sort((a, b) => a.price - b.price)
        } else if (e.target.value === 'rating') {
            sortedData.sort((a, b) => b.rating.rate - a.rating.rate)
        } else if (e.target.value === 'count') {
            sortedData.sort((a, b) => b.rating.count - a.rating.count)
        }
        setFilteredData(sortedData)
    }

    return (
        <div>
            {/* HERO */}
            <div className='relative overflow-hidden h-screen'>
                <video src={Video} className='w-full h-full object-cover' autoPlay loop muted playsInline></video>
                <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20'></div>
                <div className='absolute inset-0 flex items-center justify-center p-6 text-white'>
                    <div className='max-w-2xl text-center'>
                        <span className='inline-block bg-pink-700 text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-5'>
                            The Catalog
                        </span>
                        <h1 className='font-display text-4xl sm:text-6xl uppercase leading-tight'>Our Product</h1>
                        <p className='text-base sm:text-lg text-gray-200 mt-5 leading-relaxed'>
                            Stylish cotton shirts for men and women — premium quality and everyday comfort, alongside electronics and jewelery worth a second look.
                        </p>
                        <button className='bg-white text-black px-7 py-3 mt-7 rounded-full font-bold text-sm uppercase tracking-wide transition-transform hover:scale-105 active:scale-95'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <div className='mt-16 w-11/12 max-w-6xl m-auto pb-20'>
                <div className='flex items-end justify-between border-b-2 border-dashed border-gray-300 pb-3 mb-8'>
                    <div>
                        <span className='text-xs tracking-[0.3em] uppercase text-pink-700 font-bold'>Browse</span>
                        <h2 className='text-3xl font-black text-gray-900 uppercase tracking-tight'>Every Product</h2>
                    </div>
                    <span className='hidden sm:block text-sm text-gray-400 font-medium'>{filteredData.length} results</span>
                </div>

                {/* Category pills */}
                <div className='flex flex-wrap justify-center gap-3 mb-8'>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.label}
                            onClick={() => filterByCategory(cat.value)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-colors border ${
                                activeCategory === cat.value
                                    ? 'bg-pink-700 text-white border-pink-700'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-pink-700 hover:text-pink-700'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Search + sort */}
                <div className='flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mb-10'>
                    <input
                        type='text'
                        placeholder='Search products…'
                        value={searchQuery}
                        onChange={handleSearch}
                        className='p-3 border-2 rounded-xl border-gray-200 flex-1 focus:outline-none focus:border-pink-700 transition-colors'
                    />
                    <select
                        value={filter}
                        onChange={handleFilterChange}
                        className='p-3 border-2 rounded-xl border-gray-200 sm:w-48 focus:outline-none focus:border-pink-700 transition-colors'
                    >
                        <option value=''>Sort by</option>
                        <option value='price'>Price</option>
                        <option value='rating'>Rating</option>
                        <option value='count'>Popularity</option>
                    </select>
                </div>

                {/* Grid */}
                {filteredData.length === 0 ? (
                    <div className='text-center py-24 text-gray-400'>
                        <p className='text-lg font-semibold'>No products match that search.</p>
                        <p className='text-sm mt-1'>Try a different keyword or clear the filters.</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {filteredData.map(item => (
                            <div
                                key={item.id}
                                className='group relative bg-white border border-gray-200 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-pink-200'
                            >
                                <span className='absolute -top-2 -right-2 bg-pink-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md rotate-3 group-hover:rotate-0 transition-transform'>
                                    ${item.rating?.rate ?? '—'} ★
                                </span>
                                <div className='overflow-hidden rounded-xl bg-gray-50 h-36 flex items-center justify-center'>
                                    <img
                                        className='h-full w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300'
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                                <h1 className='line-clamp-1 mt-4 text-sm font-semibold text-gray-800'>{item.title}</h1>
                                <p className='font-black text-xl mt-1 text-gray-900'>${item.price}</p>
                                <div className='flex flex-col gap-2 mt-4'>
                                    <button
                                        onClick={() => showProductDetails(item.id)}
                                        className='w-full py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold tracking-wide transition-colors hover:bg-pink-700'
                                    >
                                        View details
                                    </button>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className='w-full py-2.5 rounded-lg border-2 border-pink-700 text-pink-700 text-sm font-semibold tracking-wide transition-colors hover:bg-pink-700 hover:text-white'
                                    >
                                        Add to cart 🛒
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <ProductDetails product={selectedProduct} onClose={closeProductDetails} />
            </div>
        </div>
    )
}

export default Product