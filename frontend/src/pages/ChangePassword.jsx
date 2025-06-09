import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('http://localhost:5000/api/users/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      const data = await res.json();
      setMessage(data.message || 'Fjalëkalimi u ndryshua!');
    } catch (err) {
      setMessage('Gabim në lidhje.');
    }
  };

  return (
    <section className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-[#B43F3F] mb-6">Ndrysho Fjalëkalimin</h2>
      <form onSubmit={handleChange} className="space-y-4">
        <input
          type="password"
          placeholder="Fjalëkalimi i vjetër"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
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
          Ndrysho
        </button>
        {message && (
          <div className="mt-4 text-center text-sm text-[#B43F3F]">{message}</div>
        )}
      </form>
    </section>
  );
};

export default ChangePassword;
