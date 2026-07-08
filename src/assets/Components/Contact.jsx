import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    const contactPoints = [
        { label: "Address", value: "Gilgit, Pakistan" },
        { label: "Email", value: "hasnainkhushii@gmail.com" },
        { label: "Phone", value: "0355 542 6257" },
    ];

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

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

            {/* PAGE HEADER */}
            <div className="relative bg-gray-950 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none">
                    <span className="font-display text-[14rem] leading-none whitespace-nowrap absolute -left-8 -top-6">
                        SAY HI
                    </span>
                </div>
                <div className="relative w-11/12 max-w-6xl m-auto">
                    <span className="inline-block bg-pink-700 text-white text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-5">
                        Get in touch
                    </span>
                    <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] uppercase">
                        Let's start a <span className="text-pink-500">conversation</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 mt-5 max-w-xl leading-relaxed">
                        Questions about an order, a product, or just want to talk shop?
                        Drop us a line below — a real person reads every message.
                    </p>
                </div>
            </div>

            {/* MARQUEE TICKER */}
            <div className="bg-gray-900 text-white overflow-hidden py-3 border-y-4 border-pink-700">
                <div className="marquee-track inline-block">
                    {Array(2).fill(0).map((_, i) => (
                        <span key={i} className="mx-6 text-sm font-bold uppercase tracking-widest inline-flex items-center gap-6">
                            <span>✦ We Reply Within 24hrs</span>
                            <span>✦ Real Humans Only</span>
                            <span>✦ Showroom Open Daily</span>
                            <span>✦ No Bots, Promise</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* CONTACT CONTENT */}
            <div className="bg-gray-100 py-16">
                <div className="w-11/12 max-w-6xl m-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

                    {/* LEFT: CONTACT DETAILS */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 flex flex-col justify-between"
                    >
                        <div>
                            <span className="text-xs tracking-[0.3em] uppercase text-pink-700 font-bold">
                                Details
                            </span>
                            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mt-1 mb-8">
                                Reach Us Directly
                            </h2>

                            <div className="space-y-6">
                                {contactPoints.map((point) => (
                                    <div
                                        key={point.label}
                                        className="bg-white border border-gray-200 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-pink-200"
                                    >
                                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-pink-700">
                                            {point.label}
                                        </span>
                                        <p className="text-gray-900 font-semibold mt-1 break-words">
                                            {point.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:block mt-10 border-t-2 border-dashed border-gray-300 pt-6">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Showroom visits welcome by appointment — see the map on
                                our home page for directions.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT: FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-3 bg-white shadow-xl rounded-2xl border border-gray-200 p-6 sm:p-8"
                    >
                        <div className="flex items-end justify-between border-b-2 border-dashed border-gray-300 pb-3 mb-8">
                            <div>
                                <span className="text-xs tracking-[0.3em] uppercase text-pink-700 font-bold">
                                    Message us
                                </span>
                                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
                                    Send a Note
                                </h2>
                            </div>
                        </div>

                        <AnimatePresence>
                            {showAlert && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="bg-gray-900 text-white text-sm font-semibold p-3 rounded-xl text-center mb-6 flex items-center justify-center gap-2"
                                >
                                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                                    Message sent successfully
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1.5">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your full name"
                                    className="w-full border border-gray-300 p-3 rounded-xl outline-none transition-colors focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1.5">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                    className="w-full border border-gray-300 p-3 rounded-xl outline-none transition-colors focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell us what's up"
                                    className="w-full border border-gray-300 p-3 rounded-xl outline-none transition-colors focus:border-pink-500 focus:ring-2 focus:ring-pink-100 resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold uppercase tracking-wide text-sm transition-colors hover:bg-pink-700"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Contact;