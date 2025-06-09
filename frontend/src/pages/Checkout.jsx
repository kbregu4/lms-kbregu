import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const course = location.state?.course;

  const handlePayment = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/payments/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ courseId: course._id }),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = data.redirectUrl;
      }
    } catch (error) {
      console.error('Gabim gjatë pagesës');
    }
  };

  if (!course) return <p className="text-center mt-12">Nuk ka të dhëna për kursin.</p>;

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-[#B43F3F] mb-6 text-center">Pagesa për Kursin</h2>
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <p><span className="font-semibold">Titulli:</span> {course.title}</p>
        <p><span className="font-semibold">Përshkrimi:</span> {course.description}</p>
        <p><span className="font-semibold">Çmimi:</span> {course.price} €</p>
        <button
          onClick={handlePayment}
          className="w-full bg-[#B43F3F] text-white py-2 rounded hover:bg-[#992e2e]"
        >
          Paguaj Tani
        </button>
      </div>
    </section>
  );
};

export default Checkout;
