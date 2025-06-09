import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/courses');
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error('Gabim në marrjen e kurseve');
      }
    };
    fetchCourses();
  }, []);

  const handleEnroll = (course) => {
    navigate('/checkout', { state: { course } });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#B43F3F] mb-8">Lista e Kurseve</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course._id} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="mb-4 text-sm">{course.description}</p>
            <p className="mb-2 font-medium">Çmimi: {course.price} €</p>
            <p className="mb-4 text-sm">Kohëzgjatja: {course.duration} orë</p>
            <button
              onClick={() => handleEnroll(course)}
              className="w-full bg-[#B43F3F] text-white py-2 rounded hover:bg-[#992e2e]"
            >
              Regjistrohu
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseList;
