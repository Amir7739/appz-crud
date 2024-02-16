
const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const employeeRoutes = require('./employee');

router.use('/user', userRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;
