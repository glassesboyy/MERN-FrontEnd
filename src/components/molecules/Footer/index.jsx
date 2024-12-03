import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
