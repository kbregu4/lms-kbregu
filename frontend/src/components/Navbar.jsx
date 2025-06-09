import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className="bg-[#B43F3F] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Korca Tech Hub
        </Link>
        <nav className="space-x-4">
          <Link to="/about" className="hover:underline">
            Rreth Nesh
          </Link>
          <Link to="/courses" className="hover:underline">
            Kurset
          </Link>
          <Link to="/contact" className="hover:underline">
            Kontakt
          </Link>

          {!isAuthenticated && (
            <>
              <Link to="/login" className="bg-white text-[#B43F3F] px-3 py-1 rounded hover:bg-gray-100">
                Hyr
              </Link>
              <Link to="/signup" className="border border-white px-3 py-1 rounded hover:bg-white hover:text-[#B43F3F]">
                Regjistrohu
              </Link>
            </>
          )}

          {isAuthenticated && user?.role === "admin" && (
            <Link to="/admin" className="bg-white text-[#B43F3F] px-3 py-1 rounded">
              Admin Panel
            </Link>
          )}

          {isAuthenticated && user?.role === "instructor" && (
            <Link to="/instructor" className="bg-white text-[#B43F3F] px-3 py-1 rounded">
              Instruktor
            </Link>
          )}

          {isAuthenticated && user?.role === "student" && (
            <Link to="/profile" className="bg-white text-[#B43F3F] px-3 py-1 rounded">
              Profili
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
