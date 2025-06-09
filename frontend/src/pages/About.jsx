import React from "react";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#B43F3F]">Rreth Korca Tech Hub</h1>
      <p className="text-lg text-gray-800 mb-6 text-center">
        Qendra për inovacion, sipërmarrje dhe zhvillim IT. Kurse në programim, soft skills,
        trajnime “Ready to Work” dhe akselerim startups.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white shadow rounded-xl p-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Pandeli_Sotiri.jpg"
            alt="Pandeli Sotiri"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold">Pandeli Sotiri</h3>
          <p className="text-gray-700 mt-2">
            "Dija është çelësi i përparimit. Kombi që lexon, nuk vdes kurrë."
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/71/Kristoforidhi.jpg"
            alt="K. Kristoforidhi"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold">Kostandin Kristoforidhi</h3>
          <p className="text-gray-700 mt-2">
            "Gjuha dhe arsimi janë themeli i identitetit të një populli."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
