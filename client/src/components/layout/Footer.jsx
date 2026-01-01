import React from 'react';
import { Leaf, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-6">
                            <Leaf className="text-primary-light w-8 h-8" />
                            <span className="text-2xl font-bold tracking-tight">
                                Healthy<span className="text-accent-yellow">Eats</span>
                            </span>
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Bringing the authentic taste of South India to your doorstep. Fresh, healthy, and traditionally made.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-accent-yellow transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-accent-yellow transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-accent-yellow transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/menu" className="text-gray-300 hover:text-white transition-colors">Menu</Link></li>
                            <li><Link to="/cart" className="text-gray-300 hover:text-white transition-colors">Cart</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Categories</h4>
                        <ul className="space-y-4">
                            <li><Link to="/menu?category=Breakfast" className="text-gray-300 hover:text-white transition-colors">Breakfast</Link></li>
                            <li><Link to="/menu?category=Lunch" className="text-gray-300 hover:text-white transition-colors">Lunch</Link></li>
                            <li><Link to="/menu?category=Dinner" className="text-gray-300 hover:text-white transition-colors">Dinner</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li>123 Banana Leaf Lane,</li>
                            <li>Chennai, TN 600001</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Email: hello@healthyeats.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} HealthyEats. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
