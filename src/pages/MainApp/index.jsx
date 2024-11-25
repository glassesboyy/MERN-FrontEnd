import React from "react";
import { Link, Outlet } from "react-router-dom";
import CreateMovie from "../CreateMovie";
import DetailMovie from "../DetailMovie";
import Home from "../Home";

const MainApp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="bg-gradient-to-b from-purple-900 to-black-900 shadow-xl backdrop-blur-2xl sticky top-0 z-10 shadow-black">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-700">
            <Link
              to="home"
              className="hover:text-white transition duration-300"
            >
              Movie Zul
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

      <main className="flex-grow p-8">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>

      <footer className="bg-black bg-opacity-60 backdrop-blur-3xl shadow-xl ">
        <div className="container mx-auto px-6 py-10 text-center">
          <p className="text-gray-400">
            &copy; 2024 Movie Zul. Belajar Fullstack MERN Kang.
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/glassesboyy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-200 mx-2 transition duration-300 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/suryazulfikarr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-200 mx-2 transition duration-300 ease-in-out"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

MainApp.Home = Home;
MainApp.CreateMovie = CreateMovie;
MainApp.DetailMovie = DetailMovie;

export default MainApp;
