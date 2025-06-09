const Payment = require('../models/payment.model');

exports.checkout = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;

    
    const payment = new Payment({
      user: userId,
      course: courseId,
      amount: req.body.amount || 0,
      status: 'pending',
      paymentMethod: 'dummy',
    });

    await payment.save();

   
    res.json({
      success: true,
      redirectUrl: 'https://example-payment-gateway.com/pay',
    });
  } catch (err) {
    res.status(500).json({ message: 'Gabim gjatë pagesës' });
  }
};


exports.webhook = (req, res) => {
 
  res.status(200).send('Webhook received');
};