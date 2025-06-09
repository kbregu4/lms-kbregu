import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutFail = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fff0f0] px-4">
      <div className="text-center bg-white p-8 rounded-xl shadow-md max-w-md">
        <h2 className="text-2xl font-bold text-[#B43F3F] mb-4">Pagesa dështoi!</h2>
        <p className="mb-6">Diçka shkoi keq gjatë përpunimit të pagesës. Ju lutemi provoni përsëri.</p>
        <Link
          to="/checkout"
          className="inline-block bg-[#B43F3F] text-white px-6 py-2 rounded hover:bg-[#992e2e]"
        >
          Provo Sërish
        </Link>
      </div>
    </section>
  );
};

export default CheckoutFail;
