import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/users/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message || 'Nëse ekziston një llogari, do të merrni email për ndryshim fjalëkalimi.');
    } catch (err) {
      setMessage('Gabim në lidhje me serverin.');
    }
  };

  return (
    <section className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-[#B43F3F] mb-6">Keni harruar fjalëkalimin?</h2>
      <form onSubmit={handleForgot} className="space-y-4">
        <input
          type="email"
          placeholder="Emaili juaj"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-[#B43F3F] text-white py-2 rounded hover:bg-[#992e2e]"
        >
          Dërgo linkun për rivendosje
        </button>
        {message && (
          <div className="mt-4 text-center text-sm text-[#B43F3F]">{message}</div>
        )}
      </form>
    </section>
  );
};

export default ForgotPassword;
