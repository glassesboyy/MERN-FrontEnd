import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import { Button, MovieItem } from "../../components";
import { HeaderHome } from "../../components/templates";
import { setMovies } from "../../config/redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  useEffect(() => {
    dispatch(setMovies());
  }, [dispatch]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeaderHome />
      </motion.div>

      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-full flex justify-end mb-4">
          <Button
            variant="glassmorphism"
            to="/create-movie"
            color="purple"
            width="w-32"
          >
            Create
          </Button>
        </div>

        <div className="flex flex-wrap justify-center">
          {movies.map((movie, index) => (
            <motion.div
              key={movie._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <MovieItem
                title={movie.title}
                imageUrl={`http://localhost:4000/${movie.image}`}
                description={movie.description}
                genre={movie.genre}
                year={movie.year}
                margin="m-2"
                width="w-72"
                height="h-auto"
              />
            </motion.div>
          ))}
        </div>

        <div className="w-full flex justify-between mt-4">
          <Button
            variant="glassmorphism"
            width="w-32"
            margin="ml-10"
            className="hidden"
          >
            Previous
          </Button>
          <Button variant="glassmorphism" width="w-32" margin="mr-10">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
