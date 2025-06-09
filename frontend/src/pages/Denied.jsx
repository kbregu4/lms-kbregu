import React from 'react';
import { Link } from 'react-router-dom';

const Denied = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FFF5F0] px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-[#B43F3F] mb-4">Qasja e Ndaluar</h1>
        <p className="text-gray-700 mb-6">
          Nuk keni të drejta për të parë këtë faqe. Ju lutemi kthehuni ose identifikohuni me një llogari tjetër.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#B43F3F] text-white px-6 py-2 rounded hover:bg-[#992e2e]"
        >
          Kthehu në faqen kryesore
        </Link>
      </div>
    </section>
  );
};

export default Denied;
