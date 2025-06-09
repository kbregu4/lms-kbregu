import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FDF5E6] px-4">
      <div className="text-center bg-white p-8 rounded-xl shadow-md max-w-md">
        <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">Pagesa u realizua me sukses!</h2>
        <p className="mb-6">Faleminderit për blerjen tuaj. Kursi juaj është aktiv.</p>
        <Link
          to="/profile"
          className="inline-block bg-[#2E8B57] text-white px-6 py-2 rounded hover:bg-[#256d47]"
        >
          Shko te Profili
        </Link>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
