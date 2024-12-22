import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"; // Add useNavigate
import { deleteMovie, getMovieById } from "../../config/redux/actions";
import { Button } from "../../components/atoms"; // Add Button import

const DetailMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add navigate
  const { currentMovie, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch, id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        await dispatch(deleteMovie(id));
        navigate("/");
      } catch (error) {
        console.error("Failed to delete movie:", error);
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  if (!currentMovie) {
    return <div className="text-center text-white mt-10">Movie not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black bg-opacity-60 rounded-lg p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mx-12 justify-items-end">
            <img
              src={currentMovie.image} // Remove concatenation with base URL
              alt={currentMovie.title}
              className="w-1/2 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-4">{currentMovie.title}</h1>
            <p className="text-gray-300 mb-4">{currentMovie.description}</p>

            {/* Genres Section */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Genres:</h2>
              <div className="flex flex-wrap gap-2">
                {currentMovie.genres?.map((genre) => (
                  <span
                    key={genre._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Year:</h2>
              <p className="text-gray-300">{currentMovie.year}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Author:</h2>
              <p className="text-gray-300">{currentMovie.author?.name}</p>
            </div>

            {/* Add buttons at the bottom */}
            <div className="flex gap-4 mt-8">
              <Button variant="glassmorphism" width="w-32" onClick={handleBack}>
                Back
              </Button>
              <Button variant="red" width="w-32" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailMovie;
