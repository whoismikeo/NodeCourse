const path = require('path')

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('It\'s ya boi!');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // Allows us to attach a body of any type (including a file)
});

module.exports = router;