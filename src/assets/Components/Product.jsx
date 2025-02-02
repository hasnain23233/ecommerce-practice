import React, { useContext, useEffect, useState } from 'react'
import Video from '../img/Pro.mp4'
import CreateContext from '../Context/CreatContext'
import ProductDetails from '../Components/ProductDetails'

const Product = () => {
    const FetchingData = useContext(CreateContext)
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const result = await FetchingData()
            setData(result)
            setFilteredData(result)
        }
        fetchData()
    }, [FetchingData])

    const filterByCategory = async (category) => {
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
            <div className='overflow-hidden h-screen'>
                <video src={Video} className='w-full' autoPlay loop></video>
                <div className='absolute bg-black opacity-65 w-full p-12 flex items-center justify-center h-full top-0 transform text-white'>
                    <div className='w-6/12 m-auto text-center'>
                        <h1 className='text-4xl font-bold leading-loose'>Our Product</h1>
                        <p className='text-lg'>At ShopNexa Stylish Cotton Shirt for Men and Women s – Premium Quality & Comfort</p>
                        <button className='bg-white text-black px-5 py-2 mt-5 rounded-full'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='mt-10 w-10/12 m-auto text-center'>
                <h2 className='text-2xl font-bold text-gray-800 py-4'>Our Product</h2>
                <div className='flex justify-center space-x-4 my-4'>
                    <button onClick={() => filterByCategory('')} className='p-2 w-10/12 border rounded bg-pink-700 text-white'>All</button>
                    <button onClick={() => filterByCategory('electronics')} className='p-2 w-10/12 border rounded bg-pink-700 text-white'>Electronics</button>
                    <button onClick={() => filterByCategory('jewelery')} className='p-2 w-10/12 border rounded bg-pink-700 text-white'>Jewelery</button>
                    <button onClick={() => filterByCategory("men's clothing")} className='p-2 w-10/12 border rounded bg-pink-700 text-white'>Men's Clothing</button>
                    <button onClick={() => filterByCategory("women's clothing")} className='p-2 w-10/12 border rounded bg-pink-700 text-white'>Women's Clothing</button>
                </div>
                <div className='flex justify-between items-center my-4'>
                    <input
                        type='text'
                        placeholder='Search products...'
                        value={searchQuery}
                        onChange={handleSearch}
                        className='p-2 border-2 rounded-xl border-gray-300 w-2/3'
                    />
                    <select value={filter} onChange={handleFilterChange} className='p-2 border-2 rounded-xl border-gray-300 w-2/12'>
                        <option value=''>Sort By</option>
                        <option value='price'>Price</option>
                        <option value='rating'>Rating</option>
                        <option value='count'>Count</option>
                    </select>
                </div>
                <div className='grid grid-cols-4 gap-10 mt-10'>
                    {filteredData.map(item => {
                        return (
                            <div key={item.id} className='hover:scale-110 transition-transform duration-300 border cursor-pointer bg-gray-100 p-4 rounded-xl text-center hover:transform'>
                                <h1 className='line-clamp-1'>{item.title}</h1>
                                <img className='w-8/12 m-auto mt-4 h-3/6 rounded-full' src={item.image} alt="" />
                                <p className='font-bold text-xl mt-3'>${item.price}</p>
                                <button onClick={() => showProductDetails(item.id)} className='p-2 w-10/12 border rounded bg-pink-700 text-white'>More Details</button>
                            </div>
                        )
                    })}
                </div>
                <ProductDetails product={selectedProduct} onClose={closeProductDetails} />
            </div> <br /><br /><br />
        </div>
    )
}

export default Product
