import React from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-center items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
                        <ShoppingBag className="w-12 h-12 text-primary/30" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
                    <p className="text-gray-500 mb-10">
                        Looks like you haven't added anything to your cart yet. Discover our delicious South Indian menu!
                    </p>
                    <Link
                        to="/menu"
                        className="bg-primary text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center space-x-2 hover:bg-primary-dark transition-all transform hover:scale-105"
                    >
                        <span>Explore Menu</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDFBF7] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-primary-dark mb-12">Shopping Cart ({totalItems})</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        <AnimatePresence>
                            {cart.map((item) => (
                                <motion.div
                                    key={item._id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="bg-white p-4 rounded-3xl shadow-sm flex items-center gap-6 border border-gray-100"
                                >
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                            <button
                                                onClick={() => removeFromCart(item._id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-4">{item.category}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center bg-gray-50 rounded-xl px-2 py-1">
                                                <button
                                                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                                    className="p-1 hover:text-primary transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-10 text-center font-bold text-gray-700">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                                    className="p-1 hover:text-primary transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <span className="font-bold text-lg text-primary">₹{item.price * item.quantity}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 sticky top-28">
                            <h3 className="text-xl font-bold text-gray-800 mb-8">Order Summary</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-500">
                                    <span>Subtotal</span>
                                    <span>₹{totalPrice}</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Delivery Fee</span>
                                    <span className="text-primary font-bold">FREE</span>
                                </div>
                                <div className="border-t pt-4 flex justify-between text-xl font-bold text-primary-dark">
                                    <span>Total</span>
                                    <span>₹{totalPrice}</span>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20">
                                <span>Checkout</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-6">
                                Secure SSL Encrypted Checkout
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
