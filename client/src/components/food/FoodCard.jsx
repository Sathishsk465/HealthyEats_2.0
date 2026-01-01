import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const FoodCard = ({ food }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-primary-light text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {food.category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{food.name}</h3>
                    <span className="text-primary font-bold text-lg">₹{food.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 h-10">
                    {food.description}
                </p>
                <button
                    onClick={() => addToCart(food)}
                    className="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-colors group-hover:shadow-lg active:scale-95 duration-200"
                >
                    <Plus className="w-5 h-5" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </motion.div>
    );
};

export default FoodCard;
