import React from 'react'
import Video from '../img/Ser.mp4'

const Service = () => {
    const services = [
        {
            title: "Fast & Reliable Shipping",
            icon: "🚚",
            description:
                "Get your favorite products delivered quickly & safely to your doorstep with real-time tracking.",
        },
        {
            title: "Secure Online Payments",
            icon: "💳",
            description:
                "We offer multiple payment options, including Cash on Delivery, Debit/Credit Cards, and Digital Wallets.",
        },
        {
            title: "Easy Returns & Refunds",
            icon: "🔄",
            description:
                "Not satisfied with your purchase? Enjoy our hassle-free return policy with easy refunds or exchanges.",
        },
        {
            title: "24/7 Customer Support",
            icon: "☎️",
            description:
                "Our support team is always ready to assist you with any queries or shopping assistance.",
        },
        {
            title: "Exclusive Deals & Discounts",
            icon: "🔥",
            description:
                "Enjoy limited-time sales, special discounts, and exciting offers on your favorite brands and products.",
        },
        {
            title: "Quality Assurance",
            icon: "✅",
            description:
                "We ensure genuine, high-quality products from trusted brands so you always get the best shopping experience.",
        },
    ];

    return (
        <>
            <div className='overflow-hidden h-screen'>
                <video src={Video} className='w-full' autoPlay loop></video>
                <div className='absolute bg-black opacity-65 w-full p-12 flex items-center justify-center h-full top-0 transform text-white'>
                    <div className='w-6/12 m-auto text-center'>
                        <h1 className='text-4xl font-bold leading-loose'>Our Services – ShopNexa</h1>
                        <p className='text-lg'>At ShopNexa, we are committed to providing a seamless and enjoyable shopping experience. Our services are designed to ensure convenience, security, and customer satisfaction at every step of your journey.</p>
                        <button className='bg-white text-black px-5 py-2 mt-5 rounded-full'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    🛍️ Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Service
