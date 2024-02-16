const Employee = require('../models/employee');

// save data of employee in database
exports.createEmployee = async (req, res, next) => {
  try {
    const { empId, empName,empDesg, empSal,empCompany } = req.body;
    const employee = new Employee({ empId, empName, empDesg, empSal, empCompany });
    await employee.save();
    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    next(error);
  }
};

// get all employee
exports.getAllUsers = async (req, res, next) => {
  try {
    const emp = await Employee.find();
    res.status(200).json(emp);
  } catch (error) {
    next(error);
  }
};


// Get Employee by Id
exports.getEmployeeById = async (req, res, next) => {
  try {
    const employeeId = req.params.employeeId;
    const user = await Employee.findById(employeeId);
    if (!user) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Define a route handler for updating an employee
exports.updateEmployee = async (req, res) => {
  const id = req.params.id;
  const update = req.body;

  try {
      // Update the employee record in the database
      const updatedEmployee = await Employee.findByIdAndUpdate(id, update, { new: true });

      if (!updatedEmployee) {
          return res.status(404).json({ message: 'Employee not found' });
      }

      // Return the updated employee
      res.json(updatedEmployee);
  } catch (error) {
      console.error('Error updating employee:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};


// Delete user by Id
exports.deleteEmployee = async (req, res, next) => {
  try {
    const employeeId = req.params.employeeId;
    const deletedEmployee = await Employee.findByIdAndDelete(employeeId);
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    next(error);
  }
};