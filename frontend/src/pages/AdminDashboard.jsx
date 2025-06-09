import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/admin/stats', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error('Gabim në marrjen e statistikave');
      }
    };
    fetchStats();
  }, []);

  if (!stats) return <p className="text-center mt-12">Duke ngarkuar...</p>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#B43F3F] mb-8">Paneli i Administratorit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Përdorues</h3>
          <p className="text-2xl font-bold text-[#2E8B57]">{stats.users}</p>
        </div>
        <div className="bg-white shadow rounded p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Kurse</h3>
          <p className="text-2xl font-bold text-[#2E8B57]">{stats.courses}</p>
        </div>
        <div className="bg-white shadow rounded p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Pagesa</h3>
          <p className="text-2xl font-bold text-[#2E8B57]">{stats.payments} €</p>
        </div>
        <div className="bg-white shadow rounded p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Startups në zhvillim</h3>
          <p className="text-2xl font-bold text-[#2E8B57]">{stats.startups}</p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
