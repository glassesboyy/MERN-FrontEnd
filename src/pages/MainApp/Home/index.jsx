import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, MovieItem } from "../../../components";
import { HeaderHome } from "../../../components/templates";
import { setMovies } from "../../../config/redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const {
    movies,
    totalPages,
    currentPage,
    loading,
    error,
    selectedGenre,
    selectedYear,
  } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(setMovies(1, selectedGenre, "", selectedYear));
  }, []); // Initial load

  const memoizedMovies = useMemo(() => movies, [movies]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setMovies(currentPage + 1, selectedGenre, "", selectedYear));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setMovies(currentPage - 1, selectedGenre, "", selectedYear));
    }
  };

  if (loading) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeaderHome />
      </motion.div>

      <div className="flex flex-wrap justify-center">
        {memoizedMovies.map((movie, index) => (
          <motion.div
            key={movie._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <MovieItem
              id={movie._id}
              title={movie.title}
              imageUrl={movie.image}
              description={movie.description}
              genres={movie.genres}
              year={movie.year}
              margin="m-2"
              width="w-72"
              height="h-auto"
            />
          </motion.div>
        ))}
      </div>

      <div className="w-full flex justify-center items-center gap-4 mt-4">
        <Button
          variant="glassmorphism"
          width="w-32"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="text-xs font-semibold md:text-lg text-white">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="glassmorphism"
          width="w-32"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Home;
