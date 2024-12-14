import { Button } from "../../atoms";

const HeaderHome = () => {
  return (
    <header className="flex flex-col items-center justify-center h-1/2 bg-cover bg-center bg-black text-white">
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
        <Button to="/about" variant="glassmorphism" width="w-20">
          Explore
        </Button>
      </div>
    </header>
  );
};

export default HeaderHome;
