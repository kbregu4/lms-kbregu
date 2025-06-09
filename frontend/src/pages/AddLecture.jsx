import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AddLecture = () => {
  const { courseId } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleAddLecture = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/courses/${courseId}/lectures`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      setMessage(data.message || 'Leksioni u shtua me sukses.');
    } catch (err) {
      setMessage('Gabim në shtimin e leksionit.');
    }
  };

  return (
    <section className="max-w-lg mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-[#B43F3F] mb-6">Shto Leksion të Ri</h2>
      <form onSubmit={handleAddLecture} className="space-y-4">
        <input
          type="text"
          placeholder="Titulli i Leksionit"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Përmbajtja"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#B43F3F] text-white py-2 rounded hover:bg-[#992e2e]"
        >
          Shto Leksionin
        </button>
        {message && (
          <div className="mt-4 text-center text-sm text-[#B43F3F]">{message}</div>
        )}
      </form>
    </section>
  );
};

export default AddLecture;
