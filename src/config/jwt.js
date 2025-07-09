const jwt = require('jsonwebtoken');
//JWT token genereation 
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '1d'
  });
};

module.exports = { generateToken };
