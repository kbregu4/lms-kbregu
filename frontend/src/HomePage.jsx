import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="bg-[#FDF5E6] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#B43F3F] mb-6">
          Mirë se vini në Korca Tech Hub
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Platforma më e avancuar në Shqipëri për kurse online në programim,
          zhvillim personal dhe nxitje të inovacionit.
        </p>
        <Link
          to="/courses"
          className="bg-[#B43F3F] text-white px-6 py-3 rounded-xl text-lg hover:bg-[#992e2e]"
        >
          Eksploro Kurset
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
