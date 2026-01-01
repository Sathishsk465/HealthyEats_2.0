const Food = require('../models/Food');

// @desc    Fetch all foods
// @route   GET /api/foods
// @access  Public
const getFoods = async (req, res) => {
    const foods = await Food.find({});
    res.json(foods);
};

// @desc    Fetch single food
// @route   GET /api/foods/:id
// @access  Public
const getFoodById = async (req, res) => {
    const food = await Food.findById(req.params.id);

    if (food) {
        res.json(food);
    } else {
        res.status(404);
        throw new Error('Food item not found');
    }
};

// @desc    Delete a food
// @route   DELETE /api/foods/:id
// @access  Private/Admin
const deleteFood = async (req, res) => {
    const food = await Food.findById(req.params.id);

    if (food) {
        await food.deleteOne();
        res.json({ message: 'Food item removed' });
    } else {
        res.status(404);
        throw new Error('Food item not found');
    }
};

// @desc    Create a food
// @route   POST /api/foods
// @access  Private/Admin
const createFood = async (req, res) => {
    const { name, price, image, category, description } = req.body;

    const food = new Food({
        name,
        price,
        image,
        category,
        description,
    });

    const createdFood = await food.save();
    res.status(201).json(createdFood);
};

// @desc    Update a food
// @route   PUT /api/foods/:id
// @access  Private/Admin
const updateFood = async (req, res) => {
    const { name, price, description, image, category } = req.body;

    const food = await Food.findById(req.params.id);

    if (food) {
        food.name = name || food.name;
        food.price = price || food.price;
        food.description = description || food.description;
        food.image = image || food.image;
        food.category = category || food.category;

        const updatedFood = await food.save();
        res.json(updatedFood);
    } else {
        res.status(404);
        throw new Error('Food item not found');
    }
};

module.exports = {
    getFoods,
    getFoodById,
    deleteFood,
    createFood,
    updateFood,
};
