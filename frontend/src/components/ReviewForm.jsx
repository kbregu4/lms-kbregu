import React, { useState } from 'react';

const ReviewForm = ({ courseId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/courses/${courseId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ rating, comment }),
      });
      const data = await res.json();
      setMessage(data.message || 'Vlerësimi u dërgua me sukses.');
      setRating(0);
      setComment('');
    } catch (error) {
      setMessage('Gabim gjatë dërgimit të vlerësimit.');
    }
  };

  return (
    <form onSubmit={submitReview} className="bg-white p-6 rounded shadow space-y-4">
      <h3 className="text-lg font-semibold">Lër një vlerësim</h3>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full px-4 py-2 border rounded"
        required
      >
        <option value="">Zgjidh një vlerësim</option>
        <option value={1}>1 - Dobët</option>
        <option value={2}>2 - Nën mesatare</option>
        <option value={3}>3 - Mesatare</option>
        <option value={4}>4 - Mirë</option>
        <option value={5}>5 - Shkëlqyeshëm</option>
      </select>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Komenti juaj"
        className="w-full px-4 py-2 border rounded"
        rows={4}
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-[#B43F3F] text-white py-2 rounded hover:bg-[#992e2e]"
      >
        Dërgo Vlerësimin
      </button>
      {message && <p className="text-sm text-[#B43F3F] text-center">{message}</p>}
    </form>
  );
};

export default ReviewForm;
