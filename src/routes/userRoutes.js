const express = require('express');
const User = require('../models/User');
const Address = require('../models/Address');

const router = express.Router();

// GET users and addresses
router.get('/details', async (req, res) => {
    try {
        const users = await User.find();
        const addresses = await Address.find();
        res.json({ users, addresses });    // http://localhost:3000/api/users/details
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving details', error });
    }
});

module.exports = router;
