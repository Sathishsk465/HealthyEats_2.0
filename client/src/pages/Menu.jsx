import React, { useState, useEffect } from 'react';
import API from '../services/api';
import FoodCard from '../components/food/FoodCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

const Menu = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('All');
    const [search, setSearch] = useState('');

    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Beverages'];

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const { data } = await API.get('/api/foods');
                setFoods(data);
            } catch (error) {
                console.error('Error fetching foods:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchFoods();
    }, []);

    const filteredFoods = foods.filter(food => {
        const matchesCategory = category === 'All' || food.category === category;
        const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white pb-24">
            <div className="bg-[#FDFBF7] py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl font-bold text-primary-dark mb-4 tracking-tight">Our Menu</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Explore our wide range of authentic South Indian delicacies, prepared with love and tradition.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Filters */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <div className="flex items-center space-x-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${category === cat
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-white text-gray-500 border border-gray-200 hover:border-primary/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search dishes..."
                            className="pl-12 pr-6 py-3 bg-gray-50 border border-gray-200 rounded-2xl w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all transition-all duration-200"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Food Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="bg-gray-100 animate-pulse h-96 rounded-3xl" />
                        ))}
                    </div>
                ) : filteredFoods.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredFoods.map((food) => (
                                <FoodCard key={food._id} food={food} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500 font-medium">No items found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
