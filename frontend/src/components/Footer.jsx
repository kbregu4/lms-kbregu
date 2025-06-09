import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1E] text-white py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0">© 2025 Korca Tech Hub. Të gjitha të drejtat e rezervuara.</p>
        <div className="space-x-4">
          <Link to="/about" className="hover:underline">
            Rreth Nesh
          </Link>
          <Link to="/contact" className="hover:underline">
            Kontakt
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
