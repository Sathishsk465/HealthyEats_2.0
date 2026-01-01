const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Food = require('../models/Food');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const seedData = async () => {
    try {
        // Clear existing data
        await User.deleteMany();
        await Food.deleteMany();

        // Create Admin User
        const adminUser = await User.create({
            name: 'Admin User',
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
            isAdmin: true,
        });

        console.log('Admin user created');

        // Sample Food Items
        const foods = [
            {
                name: 'Masala Dosa',
                price: 120,
                image: '/images/hero-dosa.png',
                category: 'Breakfast',
                description: 'Crispy rice crepe filled with spicy potato mash, served with sambar and chutneys.',
            },
            {
                name: 'Soft Idli (2 Nos)',
                price: 60,
                image: '/images/idli-vada.png',
                category: 'Breakfast',
                description: 'Steamed rice cakes, fluffy and light, served with aromatic sambar and coconut chutney.',
            },
            {
                name: 'Medu Vada (2 Nos)',
                price: 70,
                image: '/images/idli-vada.png',
                category: 'Breakfast',
                description: 'Crispy deep-fried lentil donuts with a soft interior, spiced with peppercorns.',
            },
            {
                name: 'South Indian Meals',
                price: 250,
                image: '/images/thali.png',
                category: 'Lunch',
                description: 'Full traditional thali with rice, sambar, rasam, kootu, poriyal, curd, and papad.',
            },
            {
                name: 'Ven Pongal',
                price: 90,
                image: '/images/hero-dosa.png',
                category: 'Breakfast',
                description: 'Comforting rice and lentil porridge tempered with ghee, pepper, and cashews.',
            },
            {
                name: 'Filter Coffee',
                price: 40,
                image: '/images/idli-vada.png',
                category: 'Beverages',
                description: 'Authentic South Indian decoction coffee with frothy hot milk.',
            }
        ];

        await Food.insertMany(foods);
        console.log('Food items seeded');

        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedData();
