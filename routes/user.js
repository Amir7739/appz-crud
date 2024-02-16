const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/middlewareAuth')

router.post('/signup', userController.signup);
router.post('/login', userController.login);
// router.use(authMiddleware);
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);


module.exports = router;
