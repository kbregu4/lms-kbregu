import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/users/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword }),
      });
      const data = await res.json();
      setMessage(data.message || 'Fjalëkalimi u ndryshua me sukses!');
    } catch (err) {
      setMessage('Gabim në lidhje.');
    }
  };

  return (
    <section className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-[#B43F3F] mb-6">Vendos Fjalëkalimin e Ri</h2>
      <form onSubmit={handleReset} className="space-y-4">
        <input
          type="password"
          placeholder="Fjalëkalimi i ri"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-[#B43F3F] text-white py-2 rounded hover:bg-[#992e2e]"
        >
          Vendos Fjalëkalimin
        </button>
        {message && (
          <div className="mt-4 text-center text-sm text-[#B43F3F]">{message}</div>
        )}
      </form>
    </section>
  );
};

export default ResetPassword;
