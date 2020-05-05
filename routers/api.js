const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

router.post('/', usersController.createUser);

router.get('/', usersController.getAllUsers);

module.exports = router