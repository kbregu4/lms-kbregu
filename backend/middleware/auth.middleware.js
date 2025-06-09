const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Nuk u gjet tokeni' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Tokeni jo i vlefshëm' });
    req.user = decoded;
    next();
  });
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role === 'admin') next();
    else res.status(403).json({ message: 'Qasja e ndaluar: Duhet të jesh admin' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri' });
  }
};

exports.isInstructor = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role === 'instructor') next();
    else res.status(403).json({ message: 'Qasja e ndaluar: Duhet të jesh instruktor' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri' });
  }
};

exports.isStudent = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role === 'student') next();
    else res.status(403).json({ message: 'Qasja e ndaluar: Duhet të jesh student' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri' });
  }
};
