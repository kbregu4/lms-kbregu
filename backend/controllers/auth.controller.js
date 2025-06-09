const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'Emaili tashmë ekziston' });

    const user = new User({ name, email, password, role });
    await user.save();

    res.status(201).json({ message: 'Regjistrimi u krye me sukses' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim në regjistrim' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'Email ose fjalëkalim gabim' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: 'Email ose fjalëkalim gabim' });

    const token = jwt.sign(
      { id: user._id, role: user.role, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, message: 'Login i suksesshëm' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim në login' });
  }
};
