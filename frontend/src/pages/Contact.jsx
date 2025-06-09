import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesazhi u dërgua me sukses!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#B43F3F] mb-6">Na Kontaktoni</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Emri juaj"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email-i juaj"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Mesazhi juaj"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-[#B43F3F] text-white px-6 py-2 rounded hover:bg-[#992e2e]"
        >
          Dërgo Mesazhin
        </button>
      </form>
    </section>
  );
};

export default Contact;
