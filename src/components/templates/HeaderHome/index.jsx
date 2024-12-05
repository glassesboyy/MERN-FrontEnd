import React from "react";
import { Button } from "../../atoms";

const HeaderHome = () => {
  return (
    <header className="flex flex-col items-center justify-center h-1/2 bg-cover bg-center bg-black text-white">
      <img
        className="w-full mb-[-400px] h-1/2 object-cover"
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 cursor-pointer">
        Movie Zul
      </h1>
      <p className="text-sm md:text-xl text-center max-w-md">
        Discover the world of movies and explore your favorite genres with us.
      </p>
      <div className="flex justify-center mt-6">
        <Button variant="purple" width="w-40">
          Subscribe
        </Button>
        <Button variant="glassmorphism" width="w-20">
          Explore
        </Button>
      </div>
    </header>
  );
};

export default HeaderHome;
