import React from 'react'
import Video from '../img/Ser.mp4'

const Service = () => {
    const services = [
        {
            title: "Fast & Reliable Shipping",
            icon: "🚚",
            description: "Get your favorite products delivered quickly & safely to your doorstep with real-time tracking.",
        },
        {
            title: "Secure Online Payments",
            icon: "💳",
            description: "We offer multiple payment options, including Cash on Delivery, Debit/Credit Cards, and Digital Wallets.",
        },
        {
            title: "Easy Returns & Refunds",
            icon: "🔄",
            description: "Not satisfied with your purchase? Enjoy our hassle-free return policy with easy refunds or exchanges.",
        },
        {
            title: "24/7 Customer Support",
            icon: "☎️",
            description: "Our support team is always ready to assist you with any queries or shopping assistance.",
        },
        {
            title: "Exclusive Deals & Discounts",
            icon: "🔥",
            description: "Enjoy limited-time sales, special discounts, and exciting offers on your favorite brands and products.",
        },
        {
            title: "Quality Assurance",
            icon: "✅",
            description: "We ensure genuine, high-quality products from trusted brands so you always get the best shopping experience.",
        },
    ]

    return (
        <>
            {/* HERO */}
            <div className='relative overflow-hidden h-screen'>
                <video src={Video} className='w-full h-full object-cover' autoPlay loop muted playsInline></video>
                <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20'></div>
                <div className='absolute inset-0 flex items-center justify-center p-6 text-white'>
                    <div className='max-w-2xl text-center'>
                        <span className='inline-block bg-pink-700 text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-5'>
                            Why ShopNexa
                        </span>
                        <h1 className='font-display text-4xl sm:text-6xl uppercase leading-tight'>Our Services</h1>
                        <p className='text-base sm:text-lg text-gray-200 mt-5 leading-relaxed'>
                            A seamless, secure shopping experience — designed for convenience and
                            built around your satisfaction at every step.
                        </p>
                        <button className='bg-white text-black px-7 py-3 mt-7 rounded-full font-bold text-sm uppercase tracking-wide transition-transform hover:scale-105 active:scale-95'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* SERVICES */}
            <div className="py-20 px-6 md:px-16 lg:px-24 bg-white">
                <div className='max-w-6xl mx-auto'>
                    <div className='flex items-end justify-between border-b-2 border-dashed border-gray-300 pb-3 mb-12'>
                        <div>
                            <span className='text-xs tracking-[0.3em] uppercase text-pink-700 font-bold'>What we offer</span>
                            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Our Services</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 p-7 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-pink-200"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-pink-50 flex items-center justify-center text-3xl mb-5 group-hover:bg-pink-700 transition-colors">
                                    <span className='group-hover:scale-110 transition-transform'>{service.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service