import React, { useState, useEffect } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, LayoutDashboard, Utensils, IndianRupee, Loader } from 'lucide-react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFoods();
    }, []);

    const fetchFoods = async () => {
        try {
            const { data } = await API.get('/api/foods');
            setFoods(data);
        } catch (error) {
            toast.error('Failed to fetch food items');
        } finally {
            setLoading(false);
        }
    };

    const deleteHandler = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await API.delete(`/api/foods/${id}`);
                toast.success('Food item deleted successfully');
                fetchFoods();
            } catch (error) {
                toast.error('Failed to delete item');
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-primary-dark mb-2 tracking-tight">Admin Dashboard</h1>
                        <p className="text-gray-500 font-medium">Manage your South Indian menu items effortlessly.</p>
                    </div>
                    <Link
                        to="/admin/add"
                        className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
                    >
                        <Plus className="w-5 h-5" />
                        <span>Add New Item</span>
                    </Link>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-24">
                        <Loader className="w-10 h-10 text-primary animate-spin mb-4" />
                        <p className="text-gray-500 font-medium">Loading items...</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-gray-100">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-[#FDFBF7] border-b border-gray-100">
                                    <tr>
                                        <th className="px-8 py-6 text-sm font-bold text-primary tracking-wider uppercase">Item</th>
                                        <th className="px-8 py-6 text-sm font-bold text-primary tracking-wider uppercase">Category</th>
                                        <th className="px-8 py-6 text-sm font-bold text-primary tracking-wider uppercase text-right">Price</th>
                                        <th className="px-8 py-6 text-sm font-bold text-primary tracking-wider uppercase text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {foods.map((food) => (
                                        <motion.tr
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            key={food._id}
                                            className="hover:bg-gray-50/50 transition-colors"
                                        >
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <img src={food.image} alt={food.name} className="w-16 h-16 rounded-xl object-cover" />
                                                    <div>
                                                        <div className="font-bold text-gray-800">{food.name}</div>
                                                        <div className="text-xs text-gray-400 max-w-[200px] truncate">{food.description}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                                    {food.category}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-right font-bold text-gray-700">₹{food.price}</td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center justify-center gap-3">
                                                    <Link
                                                        to={`/admin/edit/${food._id}`}
                                                        className="p-2.5 bg-accent-yellow/10 text-accent-yellow hover:bg-accent-yellow hover:text-white rounded-xl transition-all"
                                                        title="Edit Item"
                                                    >
                                                        <Edit className="w-5 h-5" />
                                                    </Link>
                                                    <button
                                                        onClick={() => deleteHandler(food._id)}
                                                        className="p-2.5 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                                                        title="Delete Item"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {foods.length === 0 && (
                            <div className="py-24 text-center">
                                <Utensils className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                                <p className="text-gray-400 font-medium">No food items found. Start by adding one!</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
