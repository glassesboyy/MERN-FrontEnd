import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../../components";
import { getMovieById } from "../../config/redux/actions";

const DetailMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentMovie, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch, id]);

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
    <div className="p-6 font-sans flex flex-col md:flex-row gap-10 bg-black rounded-3xl p-10">
      <img
        src={`http://localhost:4000/${currentMovie.image}`}
        alt={currentMovie.title}
        className="w-full md:w-72 rounded-lg shadow-md shadow-white"
      />

      <div className="mt-6 flex-1">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          {currentMovie.title}
        </h1>
        <p className="text-white mt-5 text-sm md:text-base">
          {currentMovie.description}
        </p>
        <div className="mt-4">
          <p className="text-white">
            <span className="font-bold">Genre:</span> {currentMovie.genre}
          </p>
          <p className="text-white">
            <span className="font-bold">Year:</span> {currentMovie.year}
          </p>
        </div>
        <div className="mt-16 flex justify-end">
          <Button to="/home" variant="glassmorphism" width="w-1/5">
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
