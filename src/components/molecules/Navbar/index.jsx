import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="bg-white/15
        my-4
        mx-32
        sticky
        top-0
        z-50
        backdrop-blur-lg
        border border-white/40
        hover:border-black/15
        hover:bg-white/5
        transition-all
        duration-300
        hover:shadow-lg
        hover:shadow-purple-900 rounded-xl"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-700">
          <Link to="home" className="hover:text-white transition duration-300">
            MovieZul
          </Link>
        </h1>
        <nav className="flex items-center space-x-6">
          <Link
            to="login"
            className="hover:text-purple-300 hover:underline transition duration-300"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
