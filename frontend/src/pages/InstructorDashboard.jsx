import React, { useEffect, useState } from 'react';

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/instructor/courses', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error('Gabim në marrjen e kurseve');
      }
    };
    fetchCourses();
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[#B43F3F] text-center mb-8">Paneli i Instruktorit</h2>
      {courses.length > 0 ? (
        <ul className="space-y-4">
          {courses.map(course => (
            <li key={course._id} className="bg-white shadow rounded p-6">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-700 text-sm mt-1">{course.description}</p>
              <p className="text-sm mt-2">Regjistrime: {course.enrollments || 0}</p>
              <p className="text-sm">Kohëzgjatja: {course.duration} orë</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">Nuk keni ende kurse të krijuara.</p>
      )}
    </section>
  );
};

export default InstructorDashboard;
