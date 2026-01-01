import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Clock, Star, ShieldCheck } from 'lucide-react';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-[#FDFBF7] to-[#F5F2EA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-primary-light/10 text-primary px-4 py-2 rounded-full mb-6">
                            <Leaf className="w-4 h-4" />
                            <span className="text-sm font-bold uppercase tracking-wider">Authentic South Indian</span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold text-primary-dark mb-6 leading-tight">
                            Healthy Eats, <br />
                            <span className="text-accent-brown">Traditional</span> soul.
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                            Experience the true essence of South Indian cuisine. Freshly ground spices, traditional recipes, and a commitment to your health.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                to="/menu"
                                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
                            >
                                <span>Order Now</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/menu"
                                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-primary/5 transition-all"
                            >
                                View Menu
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center space-x-8">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center text-accent-yellow mb-1">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-sm font-bold text-gray-700">10k+ Happy Customers</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            style={{ y: y1, rotate }}
                            className="relative z-10 w-full max-w-lg mx-auto"
                        >
                            <img
                                src="/images/hero-dosa.png"
                                alt="Masala Dosa"
                                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[2rem]"
                            />
                        </motion.div>

                        {/* Parallax elements */}
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute -top-20 -right-10 w-32 h-32 bg-accent-yellow/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            style={{ y: y1 }}
                            className="absolute -bottom-10 -left-20 w-48 h-48 bg-primary-light/10 rounded-full blur-3xl"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Leaf, title: "100% Organic", desc: "We use only organic vegetables and hand-picked spices for authentic taste." },
                            { icon: Clock, title: "Fast Delivery", desc: "Get your hot meals delivered within 30 minutes of preparation." },
                            { icon: ShieldCheck, title: "Hygienic Prep", desc: "Our kitchens follow strict safety standards for a clean dining experience." }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl bg-[#FDFBF7] border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories / Teaser Section */}
            <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Our Specialties</h2>
                        <div className="w-24 h-1 bg-accent-yellow mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            className="relative rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <img src="/images/idli-vada.png" alt="Breakfast Specialties" className="w-full" />
                        </motion.div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-serif italic">Morning Bliss</h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                From fluffy idlis to crispy vadas, our breakfast selection is designed to give you the perfect start to your day.
                            </p>
                            <Link to="/menu?category=Breakfast" className="text-primary font-bold flex items-center space-x-2 hover:translate-x-2 transition-transform">
                                <span>Explore Breakfast Items</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
