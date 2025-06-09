const Course = require('../models/course.model');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'name email');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Gabim në marrjen e kurseve' });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('instructor', 'name email');
    if (!course) return res.status(404).json({ message: 'Kursi nuk u gjet' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Gabim në marrjen e kursit' });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const { title, description, price, duration } = req.body;
    const course = new Course({
      title,
      description,
      price,
      duration,
      instructor: req.user.id,
    });
    await course.save();
    res.status(201).json({ message: 'Kursi u krijua me sukses', course });
  } catch (err) {
    res.status(500).json({ message: 'Gabim në krijimin e kursit' });
  }
};

exports.addLecture = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: 'Kursi nuk u gjet' });

    if (!course.lectures) course.lectures = [];
    course.lectures.push({ title, content });

    await course.save();
    res.json({ message: 'Leksioni u shtua me sukses' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim në shtimin e leksionit' });
  }
};

exports.getLectures = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Kursi nuk u gjet' });

    res.json(course.lectures || []);
  } catch (err) {
    res.status(500).json({ message: 'Gabim në marrjen e leksioneve' });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user.id;

    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: 'Kursi nuk u gjet' });

    course.reviews.push({ user: userId, rating, comment });
    await course.save();

    res.json({ message: 'Review u shtua me sukses' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri' });
  }
};
