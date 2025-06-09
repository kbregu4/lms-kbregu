const User = require('../models/user.model');
const Course = require('../models/course.model');
const Payment = require('../models/payment.model');

exports.getStats = async (req, res) => {
  try {
    const usersCount = await User.countDocuments();
    const coursesCount = await Course.countDocuments();
    const paymentsTotal = await Payment.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    const startupsCount = 0; 

    res.json({
      users: usersCount,
      courses: coursesCount,
      payments: paymentsTotal[0]?.total || 0,
      startups: startupsCount,
    });
  } catch (err) {
    res.status(500).json({ message: 'Gabim në marrjen e statistikave' });
  }
};
