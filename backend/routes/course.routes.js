const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Të gjitha kurset (pa nevojë për autorizim)
router.get('/', courseController.getAllCourses);

// Krijo kurs (vetëm për instruktora)
router.post('/', authMiddleware.verifyToken, authMiddleware.isInstructor, courseController.createCourse);

// Merr kurs sipas id
router.get('/:id', courseController.getCourseById);

// Shto leksion në kurs (instruktor vetëm)
router.post('/:id/lectures', authMiddleware.verifyToken, authMiddleware.isInstructor, courseController.addLecture);

// Merr leksionet e kursit
router.get('/:id/lectures', courseController.getLectures);

// Shto review në kurs (student vetëm)
router.post('/:id/reviews', authMiddleware.verifyToken, authMiddleware.isStudent, courseController.addReview);

module.exports = router;
