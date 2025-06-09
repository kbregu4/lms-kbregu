import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await fetch('http://localhost:5000/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data._id) setUser(data);
      } catch (err) {
        console.error('Gabim në marrjen e të dhënave');
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <p className="text-center mt-12">Duke ngarkuar profilin...</p>;

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[#B43F3F] mb-6 text-center">Profili i Përdoruesit</h2>
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <p><span className="font-semibold">Emri:</span> {user.name}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Roli:</span> {user.role}</p>
        <p><span className="font-semibold">Krijuar më:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
    </section>
  );
};

export default Profile;
