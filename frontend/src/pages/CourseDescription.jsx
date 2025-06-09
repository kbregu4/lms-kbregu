import React from 'react';
import { useLocation } from 'react-router-dom';

const CourseDescription = () => {
  const location = useLocation();
  const course = location.state?.course;

  if (!course) return <p className="text-center mt-12">Nuk ka të dhëna për këtë kurs.</p>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[#B43F3F] mb-4 text-center">{course.title}</h2>
      <p className="mb-4 text-lg text-gray-700">{course.description}</p>
      <ul className="mb-6 text-gray-700 space-y-2">
        <li><strong>Çmimi:</strong> {course.price} €</li>
        <li><strong>Kohëzgjatja:</strong> {course.duration} orë</li>
        <li><strong>Numri i pjesëmarrësve:</strong> {course.enrolled}</li>
        <li><strong>Instruktori:</strong> {course.instructor?.name || 'N/A'}</li>
      </ul>
    </section>
  );
};

export default CourseDescription;
