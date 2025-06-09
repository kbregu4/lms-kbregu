import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        setMessage('Login i suksesshëm!');
      } else {
        setMessage(data.message || 'Gabim!');
      }
    } catch (error) {
      setMessage('Gabim në lidhje me serverin.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FDF5E6] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#B43F3F] mb-6">Hyr në llogarinë tënde</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Përdoruesi"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Fjalëkalimi"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#B43F3F] text-white py-2 rounded-md hover:bg-[#992e2e]"
          >
            Hyr
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center text-sm text-[#B43F3F]">{message}</div>
        )}
      </div>
    </section>
  );
}
