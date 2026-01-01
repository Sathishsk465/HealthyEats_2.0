import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { totalItems } = useCart();
    const { user, logout, isAdmin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <Leaf className="text-primary w-8 h-8" />
                        <span className="text-2xl font-bold text-primary tracking-tight">
                            Healthy<span className="text-accent-brown">Eats</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">Home</Link>
                        <Link to="/menu" className="text-gray-700 hover:text-primary transition-colors font-medium">Menu</Link>
                        {isAdmin && (
                            <Link to="/admin" className="text-gray-700 hover:text-primary transition-colors font-medium">Admin</Link>
                        )}
                        <div className="flex items-center space-x-5">
                            <Link to="/cart" className="relative group">
                                <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                            {user ? (
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-medium text-gray-600">Hi, {user.name}</span>
                                    <button
                                        onClick={handleLogout}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-red-500"
                                    >
                                        <LogOut className="w-5 h-5" />
                                    </button>
                                </div>
                            ) : (
                                <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <User className="w-6 h-6 text-gray-700" />
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <Link to="/cart" className="relative">
                            <ShoppingCart className="w-6 h-6 text-gray-700" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700"
                        >
                            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">Home</Link>
                            <Link to="/menu" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">Menu</Link>
                            {isAdmin && (
                                <Link to="/admin" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">Admin</Link>
                            )}
                            {user ? (
                                <>
                                    <div className="px-3 py-2 text-sm font-semibold text-primary">Hi, {user.name}</div>
                                    <button
                                        onClick={() => { handleLogout(); setIsOpen(false); }}
                                        className="block w-full text-left px-3 py-2 text-red-500 font-medium"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link to="/login" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">Login</Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
