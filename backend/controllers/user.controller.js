const User = require('../models/user.model');
const Course = require('../models/course.model');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const jwt = require('jsonwebtoken');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'Përdoruesi nuk u gjet' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Gabim në marrjen e profilit' });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'Përdoruesi nuk u gjet' });

    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) return res.status(400).json({ message: 'Fjalëkalimi i vjetër gabim' });

    user.password = newPassword;
    await user.save();

    res.json({ message: 'Fjalëkalimi u ndryshua me sukses' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim gjatë ndryshimit të fjalëkalimit' });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ message: 'Nëse ekziston llogaria, do të merrni email' });

    // Gjenero token resetimi
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');

    user.resetPasswordToken = resetTokenHash;
    user.resetPasswordExpire = Date.now() + 3600000; // 1 orë
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    const message = `Kliko në link për të ndryshuar fjalëkalimin:\n\n${resetUrl}`;

    try {
      await sendEmail({
        to: user.email,
        subject: 'Rivendosja e fjalëkalimit',
        text: message,
      });

      res.json({ message: 'Email me instruksione u dërgua' });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();
      res.status(500).json({ message: 'Dështoi dërgimi i emailit' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Gabim gjatë kërkesës për fjalëkalim' });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const resetTokenHash = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
      resetPasswordToken: resetTokenHash,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: 'Token i pavlefshëm ose i skaduar' });

    user.password = req.body.newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.json({ message: 'Fjalëkalimi u ndryshua me sukses' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim gjatë rivendosjes së fjalëkalimit' });
  }
};

exports.getMyEnrollments = async (req, res) => {
  try {
    // Gjenero listën e kurseve ku përdoruesi është regjistruar
    const courses = await Course.find({ 'enrollments.user': req.user.id });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Gabim në marrjen e regjistrimeve' });
  }
};
