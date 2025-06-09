import React, { useEffect, useState } from 'react';

const MyEnrollments = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users/me/enrollments', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await res.json();
        setEnrollments(data);
      } catch (err) {
        console.error('Gabim në marrjen e regjistrimeve');
      }
    };
    fetchEnrollments();
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[#B43F3F] text-center mb-8">Kursët e mia</h2>
      {enrollments.length > 0 ? (
        <ul className="space-y-4">
          {enrollments.map((course) => (
            <li key={course._id} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-700 mt-2">{course.description}</p>
              <p className="text-sm text-gray-600 mt-1">Kohëzgjatja: {course.duration} orë</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">Nuk jeni regjistruar në asnjë kurs.</p>
      )}
    </section>
  );
};

export default MyEnrollments;
