// src/controllers/userController.js
const User = require('../models/User');
const Address = require('../models/Address');

const registerUser = async (req, res) => {
    const { name, address } = req.body;

    try {
        // Create a new user
        const newUser = new User({ name });
        await newUser.save();

        // Create a new address linked to the user
        const newAddress = new Address({ userId: newUser._id, address });
        await newAddress.save();

        res.status(201).send('User and address registered successfully!');
    } catch (error) {
        res.status(500).send('Error registering user and address: ' + error.message);
    }
};

module.exports = { registerUser };
