import React, { useState, useEffect } from 'react'

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {

        if (window.scrollY > 800) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        <div className='bg-purple-900'>
            <div className='w-10/12 pt-6 m-auto py-3'>
                <div className='flex lg:flex-row flex-col justify-between'>
                    <div className='lg:w-4/12 w-full  text-center mt-10'>
                        <p className='mt-10 text-start text-gray-400 w-11/12 font-light text-lg'>
                            Experienced and world-class remote
                            talent for hire. Let us create better
                            customer experiences that help your
                            brand grow.
                        </p>
                        <div className='flex mb-36 gap-2'>
                            <p className='mt-10 flex items-center text-white font-light text-lg justify-between cursor-pointer'>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_304_1021" fill="white">
                                        <path d="M0.189941 20C0.189941 8.95431 9.14425 0 20.1899 0C31.2356 0 40.1899 8.95431 40.1899 20C40.1899 31.0457 31.2356 40 20.1899 40C9.14425 40 0.189941 31.0457 0.189941 20Z" />
                                    </mask>
                                    <path d="M20.1899 39C9.69653 39 1.18994 30.4934 1.18994 20H-0.810059C-0.810059 31.598 8.59196 41 20.1899 41V39ZM39.1899 20C39.1899 30.4934 30.6834 39 20.1899 39V41C31.7879 41 41.1899 31.598 41.1899 20H39.1899ZM20.1899 1C30.6834 1 39.1899 9.50659 39.1899 20H41.1899C41.1899 8.40202 31.7879 -1 20.1899 -1V1ZM20.1899 -1C8.59196 -1 -0.810059 8.40202 -0.810059 20H1.18994C1.18994 9.50659 9.69653 1 20.1899 1V-1Z" fill="#FAAF00" mask="url(#path-1-inside-1_304_1021)" />
                                    <path d="M24.9566 15.4766C26.8529 15.4766 28.6716 16.1915 30.0125 17.4641C31.3533 18.7368 32.1066 20.4628 32.1066 22.2626V30.1796H27.34V22.2626C27.34 21.6626 27.0889 21.0873 26.6419 20.6631C26.195 20.2389 25.5887 20.0006 24.9566 20.0006C24.3245 20.0006 23.7183 20.2389 23.2714 20.6631C22.8244 21.0873 22.5733 21.6626 22.5733 22.2626V30.1796H17.8066V22.2626C17.8066 20.4628 18.5599 18.7368 19.9008 17.4641C21.2417 16.1915 23.0603 15.4766 24.9566 15.4766Z" stroke="#FAAF00" stroke-width="0.975" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.04 16.6074H8.27332V30.1794H13.04V16.6074Z" stroke="#FAAF00" stroke-width="0.975" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.6566 13.2144C11.9729 13.2144 13.04 12.2017 13.04 10.9524C13.04 9.70316 11.9729 8.69043 10.6566 8.69043C9.34037 8.69043 8.27332 9.70316 8.27332 10.9524C8.27332 12.2017 9.34037 13.2144 10.6566 13.2144Z" stroke="#FAAF00" stroke-width="0.975" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </p>
                            <p className='mt-10 flex items-center text-white font-light text-lg justify-end cursor-pointer'>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_304_1015" fill="white">
                                        <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" />
                                    </mask>
                                    <path d="M20 39C9.50659 39 1 30.4934 1 20H-1C-1 31.598 8.40202 41 20 41V39ZM39 20C39 30.4934 30.4934 39 20 39V41C31.598 41 41 31.598 41 20H39ZM20 1C30.4934 1 39 9.50659 39 20H41C41 8.40202 31.598 -1 20 -1V1ZM20 -1C8.40202 -1 -1 8.40202 -1 20H1C1 9.50659 9.50659 1 20 1V-1Z" fill="#FAAF00" mask="url(#path-1-inside-1_304_1015)" />
                                    <path d="M27.15 8.69043H23.575C21.9948 8.69043 20.4792 9.28622 19.3618 10.3467C18.2444 11.4073 17.6167 12.8456 17.6167 14.3454V17.7384H14.0417V22.2624H17.6167V31.3104H22.3834V22.2624H25.9584L27.15 17.7384H22.3834V14.3454C22.3834 14.0455 22.5089 13.7578 22.7324 13.5457C22.9559 13.3336 23.259 13.2144 23.575 13.2144H27.15V8.69043Z" stroke="#FAAF00" stroke-width="0.975" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>



                            </p>
                            <p className='mt-10 flex items-center text-white font-light text-lg justify-between cursor-pointer'>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_304_1026" fill="white">
                                        <path d="M0.780273 20C0.780273 8.95431 9.73458 0 20.7803 0C31.826 0 40.7803 8.95431 40.7803 20C40.7803 31.0457 31.826 40 20.7803 40C9.73458 40 0.780273 31.0457 0.780273 20Z" />
                                    </mask>
                                    <path d="M20.7803 39C10.2869 39 1.78027 30.4934 1.78027 20H-0.219727C-0.219727 31.598 9.18229 41 20.7803 41V39ZM39.7803 20C39.7803 30.4934 31.2737 39 20.7803 39V41C32.3783 41 41.7803 31.598 41.7803 20H39.7803ZM20.7803 1C31.2737 1 39.7803 9.50659 39.7803 20H41.7803C41.7803 8.40202 32.3783 -1 20.7803 -1V1ZM20.7803 -1C9.18229 -1 -0.219727 8.40202 -0.219727 20H1.78027C1.78027 9.50659 10.2869 1 20.7803 1V-1Z" fill="#FAAF00" mask="url(#path-1-inside-1_304_1026)" />
                                    <path d="M14.4103 4.83301H27.1503C32.0036 4.83301 35.9469 8.77634 35.9469 13.6297V26.3697C35.9469 28.7027 35.0201 30.9402 33.3704 32.5899C31.7207 34.2396 29.4833 35.1663 27.1503 35.1663H14.4103C9.55692 35.1663 5.61359 31.223 5.61359 26.3697V13.6297C5.61359 11.2967 6.54038 9.05919 8.19007 7.40949C9.83977 5.7598 12.0772 4.83301 14.4103 4.83301ZM14.1069 7.86634C12.6588 7.86634 11.2701 8.44159 10.2461 9.46554C9.22217 10.4895 8.64692 11.8783 8.64692 13.3263V26.673C8.64692 29.6912 11.0888 32.133 14.1069 32.133H27.4536C28.9017 32.133 30.2904 31.5578 31.3144 30.5338C32.3383 29.5099 32.9136 28.1211 32.9136 26.673V13.3263C32.9136 10.3082 30.4718 7.86634 27.4536 7.86634H14.1069ZM28.7428 10.1413C29.2456 10.1413 29.7278 10.3411 30.0833 10.6966C30.4388 11.0522 30.6386 11.5344 30.6386 12.0372C30.6386 12.54 30.4388 13.0222 30.0833 13.3777C29.7278 13.7333 29.2456 13.933 28.7428 13.933C28.2399 13.933 27.7577 13.7333 27.4022 13.3777C27.0467 13.0222 26.8469 12.54 26.8469 12.0372C26.8469 11.5344 27.0467 11.0522 27.4022 10.6966C27.7577 10.3411 28.2399 10.1413 28.7428 10.1413ZM20.7803 12.4163C22.7915 12.4163 24.7203 13.2153 26.1425 14.6374C27.5646 16.0596 28.3636 17.9884 28.3636 19.9997C28.3636 22.0109 27.5646 23.9398 26.1425 25.3619C24.7203 26.7841 22.7915 27.583 20.7803 27.583C18.769 27.583 16.8402 26.7841 15.418 25.3619C13.9959 23.9398 13.1969 22.0109 13.1969 19.9997C13.1969 17.9884 13.9959 16.0596 15.418 14.6374C16.8402 13.2153 18.769 12.4163 20.7803 12.4163ZM20.7803 15.4497C19.5735 15.4497 18.4162 15.929 17.5629 16.7823C16.7096 17.6356 16.2303 18.7929 16.2303 19.9997C16.2303 21.2064 16.7096 22.3637 17.5629 23.217C18.4162 24.0703 19.5735 24.5497 20.7803 24.5497C21.987 24.5497 23.1443 24.0703 23.9976 23.217C24.8509 22.3637 25.3303 21.2064 25.3303 19.9997C25.3303 18.7929 24.8509 17.6356 23.9976 16.7823C23.1443 15.929 21.987 15.4497 20.7803 15.4497Z" fill="#FAAF00" />
                                </svg>


                            </p>
                            <p className='mt-10 flex items-center text-white font-light text-lg justify-between cursor-pointer'>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_304_1029" fill="white">
                                        <path d="M0.379883 20C0.379883 8.95431 9.33419 0 20.3799 0C31.4256 0 40.3799 8.95431 40.3799 20C40.3799 31.0457 31.4256 40 20.3799 40C9.33419 40 0.379883 31.0457 0.379883 20Z" />
                                    </mask>
                                    <path d="M20.3799 39C9.88647 39 1.37988 30.4934 1.37988 20H-0.620117C-0.620117 31.598 8.7819 41 20.3799 41V39ZM39.3799 20C39.3799 30.4934 30.8733 39 20.3799 39V41C31.9779 41 41.3799 31.598 41.3799 20H39.3799ZM20.3799 1C30.8733 1 39.3799 9.50659 39.3799 20H41.3799C41.3799 8.40202 31.9779 -1 20.3799 -1V1ZM20.3799 -1C8.7819 -1 -0.620117 8.40202 -0.620117 20H1.37988C1.37988 9.50659 9.88647 1 20.3799 1V-1Z" fill="#FAAF00" mask="url(#path-1-inside-1_304_1029)" />
                                    <path d="M10.8466 10.9521H29.9133C31.2241 10.9521 32.2966 11.97 32.2966 13.2141V26.7861C32.2966 28.0302 31.2241 29.0481 29.9133 29.0481H10.8466C9.53576 29.0481 8.46326 28.0302 8.46326 26.7861V13.2141C8.46326 11.97 9.53576 10.9521 10.8466 10.9521Z" stroke="#FAAF00" stroke-width="0.975" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M32.2965 13.2148L20.3799 21.1318L8.4632 13.2148" stroke="#FAAF00" stroke-width="0.975" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </p>
                            <p className='mt-10 flex items-center text-white font-light text-lg justify-between cursor-pointer'>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_304_1018" fill="white">
                                        <path d="M0.589844 20C0.589844 8.95431 9.54415 0 20.5898 0C31.6355 0 40.5898 8.95431 40.5898 20C40.5898 31.0457 31.6355 40 20.5898 40C9.54415 40 0.589844 31.0457 0.589844 20Z" />
                                    </mask>
                                    <path d="M20.5898 39C10.0964 39 1.58984 30.4934 1.58984 20H-0.410156C-0.410156 31.598 8.99186 41 20.5898 41V39ZM39.5898 20C39.5898 30.4934 31.0833 39 20.5898 39V41C32.1878 41 41.5898 31.598 41.5898 20H39.5898ZM20.5898 1C31.0833 1 39.5898 9.50659 39.5898 20H41.5898C41.5898 8.40202 32.1878 -1 20.5898 -1V1ZM20.5898 -1C8.99186 -1 -0.410156 8.40202 -0.410156 20H1.58984C1.58984 9.50659 10.0964 1 20.5898 1V-1Z" fill="#FAAF00" mask="url(#path-1-inside-1_304_1018)" />
                                    <path d="M33.6984 9.82094C32.5573 10.5849 31.2938 11.1692 29.9566 11.5514C29.2389 10.7682 28.2851 10.2131 27.2241 9.9611C26.1632 9.70916 25.0463 9.77253 24.0246 10.1427C23.0028 10.5128 22.1255 11.1718 21.5112 12.0306C20.897 12.8894 20.5754 13.9065 20.5901 14.9444V16.0754C18.4959 16.1269 16.4208 15.6861 14.5495 14.7922C12.6783 13.8983 11.069 12.579 9.86508 10.9519C9.86508 10.9519 5.09842 21.1309 15.8234 25.6549C13.3692 27.236 10.4456 28.0288 7.48175 27.9169C18.2068 33.5719 31.3151 27.9169 31.3151 14.9104C31.314 14.5954 31.2821 14.2811 31.2198 13.9717C32.436 12.8334 33.2942 11.3961 33.6984 9.82094Z" stroke="#FAAF00" stroke-width="0.975" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </p>
                        </div>
                        <p className='mt-20 flex items-center justify-center lg:justify-start fixed top-96 lg:left-28 left-10 z-20'>
                            {isVisible && (
                                <a href='#' onClick={scrollToTop} className='text-white shadow-2xl font-simebold text-lg bg-purple-900 rounded-full'>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25ZM1.79286 25C1.79286 37.8169 12.1831 48.2071 25 48.2071C37.8169 48.2071 48.2071 37.8169 48.2071 25C48.2071 12.1831 37.8169 1.79286 25 1.79286C12.1831 1.79286 1.79286 12.1831 1.79286 25Z" fill="#FFD700" />
                                        <path d="M20.09 28.134L19.03 27.073L24.807 21.294C24.8996 21.2008 25.0096 21.1269 25.1309 21.0764C25.2521 21.026 25.3822 21 25.5135 21C25.6448 21 25.7749 21.026 25.8961 21.0764C26.0174 21.1269 26.1274 21.2008 26.22 21.294L32 27.073L30.94 28.133L25.515 22.709L20.09 28.134Z" fill="white" />
                                    </svg>
                                </a>
                            )}
                        </p>
                    </div>
                    <div className='w-3/12'>
                        <nav>
                            <ul className='text-white mt-10 '>
                                <h1 className='leading-10 mt-3 text-xl'>Menu</h1>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>Home</li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>Team</li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>Service</li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>FAQs</li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>About Us</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='w-3/12'>
                        <nav>
                            <ul className='text-white mt-10 '>
                                <h1 className='leading-10 mt-3 text-xl'>Services</h1>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>Fast & Reliable Shipping
                                </li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>Secure Online Payments</li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>Easy Returns & Refunds</li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>24/7 Customer Support</li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>Quality Assurance</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='w-3/12'>
                        <nav>
                            <ul className='text-white mt-10 '>
                                <h1 className='leading-10 mt-3 text-xl'>Contact Us</h1>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>Pak: +925811555558 <br />
                                    US: +19517770666
                                </li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>abc@gmail.com</li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>Office No 3, 5st Floor Khan Villas Near Appellate court, Jutail Gilgit.</li>
                                <li className='leading-10 mt-3 font-light text-gray-400 text-lg'>Privay Policy</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='bg-[#030E1A]'>
                <div className='w-11/12 m-auto text-white p-3 flex justify-center'>
                    <h1>&copy; Aidco IT Solutions Pvt Ltd, All Copyrights Reserved</h1>
                    <h1>Terms of Use Private Policy</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
