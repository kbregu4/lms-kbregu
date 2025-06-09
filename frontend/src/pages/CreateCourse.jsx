import React, { useState } from 'react';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ title, description, price, duration }),
      });
      const data = await res.json();
      setMessage(data.message || 'Kursi u krijua me sukses!');
    } catch (err) {
      setMessage('Gabim në krijimin e kursit.');
    }
  };

  return (
    <section className="max-w-lg mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-[#B43F3F] mb-6">Krijo Kurs të Ri</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titulli"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Përshkrimi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        ></textarea>
        <input
          type="number"
          placeholder="Çmimi (€)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Kohëzgjatja (orë)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-[#B43F3F] text-white py-2 rounded hover:bg-[#992e2e]"
        >
          Krijo Kursin
        </button>
        {message && (
          <div className="mt-4 text-center text-sm text-[#B43F3F]">{message}</div>
        )}
      </form>
    </section>
  );
};

export default CreateCourse;
