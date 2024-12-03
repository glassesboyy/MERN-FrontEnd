import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, MovieItem } from "../../components";
import { HeaderHome } from "../../components/templates";
import { setMovies } from "../../config/redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const totalPages = useSelector((state) => state.movies.totalPages);
  const currentPage = useSelector((state) => state.movies.currentPage);
  const limit = useSelector((state) => state.movies.limit);

  useEffect(() => {
    dispatch(setMovies(currentPage));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setMovies(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setMovies(currentPage - 1));
    }
  };

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

        <div className="w-full flex justify-center items-center gap-4 mt-4">
          <Button variant="glassmorphism" width="w-32" onClick={handlePrevPage}>
            Previous
          </Button>
          <span className="text-xs font-semibold md:text-lg text-white">
            Page {currentPage} of {totalPages}
          </span>
          <Button variant="glassmorphism" width="w-32" onClick={handleNextPage}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
