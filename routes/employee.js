const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController')
const authMiddleware = require('../middleware/middlewareAuth')

router.post('/createEmployee', employeeController.createEmployee);
// protected route
router.use(authMiddleware);
router.get('/', employeeController.getAllUsers);
router.get('/:employeeId',employeeController.getEmployeeById);
router.put('/:employeeId',employeeController.updateEmployee);
router.delete('/:employeeId',employeeController.deleteEmployee);
module.exports = router;
