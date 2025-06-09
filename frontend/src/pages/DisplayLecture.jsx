import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DisplayLecture = () => {
  const { courseId } = useParams();
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/courses/${courseId}/lectures`);
        const data = await res.json();
        setLectures(data);
      } catch (err) {
        console.error('Gabim në marrjen e leksioneve');
      }
    };
    fetchLectures();
  }, [courseId]);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-[#B43F3F] mb-6 text-center">Leksionet e Kursit</h2>
      {lectures.length > 0 ? (
        <ul className="space-y-4">
          {lectures.map((lecture) => (
            <li key={lecture._id} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-1">{lecture.title}</h3>
              <p className="text-sm text-gray-700">{lecture.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">Nuk ka leksione për këtë kurs.</p>
      )}
    </section>
  );
};

export default DisplayLecture;
