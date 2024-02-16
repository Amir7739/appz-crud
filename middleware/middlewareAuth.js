const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  try {
      // Get token from request headers
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(401).json({ message: 'Unauthorized: No token provided' });
      }

      const token = authHeader.substring(7); // Remove "Bearer " prefix
      console.log(token);

      // Verify token
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log('Decoded token:', decoded); // Log the decoded token payload
      req.userId = decoded.userId;

      // Check if the user exists
      const user = await User.findById(req.userId);
      if (!user) {
          return res.status(401).json({ message: 'Unauthorized: User not found' });
      }

      // Attach user ID to request object
      req.user = user;

      next(); // Proceed to the next middleware
  } catch (error) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = authMiddleware;
