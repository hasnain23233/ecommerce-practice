import React, { useState, useEffect } from 'react'

const socialIcons = [
    {
        label: 'Instagram',
        path: (
            <>
                <path d="M14.4103 4.83301H27.1503C32.0036 4.83301 35.9469 8.77634 35.9469 13.6297V26.3697C35.9469 28.7027 35.0201 30.9402 33.3704 32.5899C31.7207 34.2396 29.4833 35.1663 27.1503 35.1663H14.4103C9.55692 35.1663 5.61359 31.223 5.61359 26.3697V13.6297C5.61359 11.2967 6.54038 9.05919 8.19007 7.40949C9.83977 5.7598 12.0772 4.83301 14.4103 4.83301ZM14.1069 7.86634C12.6588 7.86634 11.2701 8.44159 10.2461 9.46554C9.22217 10.4895 8.64692 11.8783 8.64692 13.3263V26.673C8.64692 29.6912 11.0888 32.133 14.1069 32.133H27.4536C28.9017 32.133 30.2904 31.5578 31.3144 30.5338C32.3383 29.5099 32.9136 28.1211 32.9136 26.673V13.3263C32.9136 10.3082 30.4718 7.86634 27.4536 7.86634H14.1069ZM28.7428 10.1413C29.2456 10.1413 29.7278 10.3411 30.0833 10.6966C30.4388 11.0522 30.6386 11.5344 30.6386 12.0372C30.6386 12.54 30.4388 13.0222 30.0833 13.3777C29.7278 13.7333 29.2456 13.933 28.7428 13.933C28.2399 13.933 27.7577 13.7333 27.4022 13.3777C27.0467 13.0222 26.8469 12.54 26.8469 12.0372C26.8469 11.5344 27.0467 11.0522 27.4022 10.6966C27.7577 10.3411 28.2399 10.1413 28.7428 10.1413ZM20.7803 12.4163C22.7915 12.4163 24.7203 13.2153 26.1425 14.6374C27.5646 16.0596 28.3636 17.9884 28.3636 19.9997C28.3636 22.0109 27.5646 23.9398 26.1425 25.3619C24.7203 26.7841 22.7915 27.583 20.7803 27.583C18.769 27.583 16.8402 26.7841 15.418 25.3619C13.9959 23.9398 13.1969 22.0109 13.1969 19.9997C13.1969 17.9884 13.9959 16.0596 15.418 14.6374C16.8402 13.2153 18.769 12.4163 20.7803 12.4163ZM20.7803 15.4497C19.5735 15.4497 18.4162 15.929 17.5629 16.7823C16.7096 17.6356 16.2303 18.7929 16.2303 19.9997C16.2303 21.2064 16.7096 22.3637 17.5629 23.217C18.4162 24.0703 19.5735 24.5497 20.7803 24.5497C21.987 24.5497 23.1443 24.0703 23.9976 23.217C24.8509 22.3637 25.3303 21.2064 25.3303 19.9997C25.3303 18.7929 24.8509 17.6356 23.9976 16.7823C23.1443 15.929 21.987 15.4497 20.7803 15.4497Z" fill="currentColor" />
            </>
        )
    },
    {
        label: 'Facebook',
        path: (
            <path d="M27.15 8.69043H23.575C21.9948 8.69043 20.4792 9.28622 19.3618 10.3467C18.2444 11.4073 17.6167 12.8456 17.6167 14.3454V17.7384H14.0417V22.2624H17.6167V31.3104H22.3834V22.2624H25.9584L27.15 17.7384H22.3834V14.3454C22.3834 14.0455 22.5089 13.7578 22.7324 13.5457C22.9559 13.3336 23.259 13.2144 23.575 13.2144H27.15V8.69043Z" stroke="currentColor" strokeWidth="0.975" strokeLinecap="round" strokeLinejoin="round" />
        )
    },
    {
        label: 'LinkedIn',
        path: (
            <>
                <path d="M13.04 16.6074H8.27332V30.1794H13.04V16.6074Z" stroke="currentColor" strokeWidth="0.975" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.6566 13.2144C11.9729 13.2144 13.04 12.2017 13.04 10.9524C13.04 9.70316 11.9729 8.69043 10.6566 8.69043C9.34037 8.69043 8.27332 9.70316 8.27332 10.9524C8.27332 12.2017 9.34037 13.2144 10.6566 13.2144Z" stroke="currentColor" strokeWidth="0.975" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24.9566 15.4766C26.8529 15.4766 28.6716 16.1915 30.0125 17.4641C31.3533 18.7368 32.1066 20.4628 32.1066 22.2626V30.1796H27.34V22.2626C27.34 21.6626 27.0889 21.0873 26.6419 20.6631C26.195 20.2389 25.5887 20.0006 24.9566 20.0006C24.3245 20.0006 23.7183 20.2389 23.2714 20.6631C22.8244 21.0873 22.5733 21.6626 22.5733 22.2626V30.1796H17.8066V22.2626C17.8066 20.4628 18.5599 18.7368 19.9008 17.4641C21.2417 16.1915 23.0603 15.4766 24.9566 15.4766Z" stroke="currentColor" strokeWidth="0.975" strokeLinecap="round" strokeLinejoin="round" />
            </>
        )
    },
    {
        label: 'Mail',
        path: (
            <>
                <path d="M10.8466 10.9521H29.9133C31.2241 10.9521 32.2966 11.97 32.2966 13.2141V26.7861C32.2966 28.0302 31.2241 29.0481 29.9133 29.0481H10.8466C9.53576 29.0481 8.46326 28.0302 8.46326 26.7861V13.2141C8.46326 11.97 9.53576 10.9521 10.8466 10.9521Z" stroke="currentColor" strokeWidth="0.975" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32.2965 13.2148L20.3799 21.1318L8.4632 13.2148" stroke="currentColor" strokeWidth="0.975" strokeLinecap="round" strokeLinejoin="round" />
            </>
        )
    },
    {
        label: 'Twitter',
        path: (
            <path d="M33.6984 9.82094C32.5573 10.5849 31.2938 11.1692 29.9566 11.5514C29.2389 10.7682 28.2851 10.2131 27.2241 9.9611C26.1632 9.70916 25.0463 9.77253 24.0246 10.1427C23.0028 10.5128 22.1255 11.1718 21.5112 12.0306C20.897 12.8894 20.5754 13.9065 20.5901 14.9444V16.0754C18.4959 16.1269 16.4208 15.6861 14.5495 14.7922C12.6783 13.8983 11.069 12.579 9.86508 10.9519C9.86508 10.9519 5.09842 21.1309 15.8234 25.6549C13.3692 27.236 10.4456 28.0288 7.48175 27.9169C18.2068 33.5719 31.3151 27.9169 31.3151 14.9104C31.314 14.5954 31.2821 14.2811 31.2198 13.9717C32.436 12.8334 33.2942 11.3961 33.6984 9.82094Z" stroke="currentColor" strokeWidth="0.975" strokeLinecap="round" strokeLinejoin="round" />
        )
    },
]

const FOOTER_COLUMNS = [
    {
        title: 'Menu',
        items: ['Home', 'Team', 'Service', 'FAQs', 'About Us'],
    },
    {
        title: 'Services',
        items: ['Fast & Reliable Shipping', 'Secure Online Payments', 'Easy Returns & Refunds', '24/7 Customer Support', 'Quality Assurance'],
    },
]

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.scrollY > 800)
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className='bg-gray-950 text-white border-t-4 border-pink-700 relative'>
            <div className='w-11/12 max-w-6xl m-auto pt-16 pb-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
                    {/* Brand + newsletter */}
                    <div className='lg:col-span-1'>
                        <h2 className='font-display text-2xl uppercase tracking-tight'>
                            Shop<span className='text-pink-500'>Nexa</span>
                        </h2>
                        <p className='text-gray-400 font-light text-sm leading-relaxed mt-4'>
                            Experienced, world-class remote talent for hire.
                            We build customer experiences that help your brand grow.
                        </p>

                        <div className='flex gap-3 mt-7'>
                            {socialIcons.map(({ label, path }) => (
                                <a
                                    key={label}
                                    href='#'
                                    aria-label={label}
                                    className='w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-pink-500 transition-colors hover:bg-pink-700 hover:text-white hover:border-pink-700'
                                >
                                    <svg width="18" height="18" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {path}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {FOOTER_COLUMNS.map(col => (
                        <nav key={col.title}>
                            <h3 className='text-xs font-bold uppercase tracking-[0.25em] text-pink-500 mb-5'>{col.title}</h3>
                            <ul className='flex flex-col gap-3'>
                                {col.items.map(item => (
                                    <li key={item} className='font-light text-gray-400 text-sm hover:text-white transition-colors cursor-pointer'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    <nav>
                        <h3 className='text-xs font-bold uppercase tracking-[0.25em] text-pink-500 mb-5'>Contact Us</h3>
                        <ul className='flex flex-col gap-3 font-light text-gray-400 text-sm'>
                            <li>Pak: +925811555558<br />US: +19517770666</li>
                            <li>abc@gmail.com</li>
                            <li>Office No 3, 5th Floor, Khan Villas, Near Appellate Court, Jutial, Gilgit.</li>
                            <li className='hover:text-white transition-colors cursor-pointer'>Privacy Policy</li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Back to top */}
            {isVisible && (
                
                <a    href='#'
                    onClick={scrollToTop}
                    aria-label='Back to top'
                    className='fixed bottom-8 right-6 sm:right-10 z-30 w-12 h-12 rounded-full bg-pink-700 flex items-center justify-center shadow-xl transition-transform hover:-translate-y-1'
                >
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.09 28.134L19.03 27.073L24.807 21.294C24.8996 21.2008 25.0096 21.1269 25.1309 21.0764C25.2521 21.026 25.3822 21 25.5135 21C25.6448 21 25.7749 21.026 25.8961 21.0764C26.0174 21.1269 26.1274 21.2008 26.22 21.294L32 27.073L30.94 28.133L25.515 22.709L20.09 28.134Z" fill="white" transform="translate(-8,-11)" />
                    </svg>
                </a>
            )}

            {/* Bottom bar */}
            <div className='border-t border-dashed border-white/10 bg-black/30'>
                <div className='w-11/12 max-w-6xl m-auto py-4 flex flex-col sm:flex-row gap-2 justify-between text-xs text-gray-400'>
                    <p>&copy; {new Date().getFullYear()} Aidco IT Solutions Pvt Ltd. All rights reserved.</p>
                    <p className='hover:text-white transition-colors cursor-pointer'>Terms of Use · Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer