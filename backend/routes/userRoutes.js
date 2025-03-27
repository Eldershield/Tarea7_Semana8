const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.getUsers);

module.exports = router;
