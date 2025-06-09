import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#FFF6F6] px-4 text-center">
      <h1 className="text-6xl font-bold text-[#B43F3F] mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">
        Faqja që po kërkoni nuk u gjet. Ju lutemi kontrolloni adresën.
      </p>
      <Link
        to="/"
        className="bg-[#B43F3F] text-white px-6 py-3 rounded-xl text-lg hover:bg-[#992e2e]"
      >
        Kthehu në faqen kryesore
      </Link>
    </section>
  );
};

export default NotFound;
