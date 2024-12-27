import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

const MovieItem = ({
  title,
  imageUrl = "",
  description,
  genres, // Changed from genre to genres
  year,
  productionSeries, // Add this prop
  margin = "m-2",
  width = "w-72",
  height = "h-auto",
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`
        ${margin}
        ${width}
        ${height}
        bg-black
        bg-opacity-60
        rounded-lg
        shadow-md
        overflow-hidden
        transition
        duration-300
        hover:bg-opacity-90
        group
      `}
    >
      <div className="relative cursor-pointer">
        <img
          src={imageUrl}
          alt={title}
          className="w-auto h-full object-cover transition-opacity duration-500 group-hover:opacity-20"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 hover:text-gray-500 transition duration-300">
            {title}
          </h3>

          <p className="text-white text-opacity-80 text-sm line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-semibold text-white text-opacity-80 mt-2">
            {genres.map((genre) => (
              <span
                key={genre._id}
                className="bg-black border border-gray-700 rounded-2xl px-3 py-1"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Add Production Series */}
          {productionSeries && (
            <div className="flex flex-wrap text-xs font-semibold text-white text-opacity-80 mt-2">
              <span className="bg-purple-900 border border-purple-700 rounded-2xl px-3 py-1">
                {productionSeries.name}
              </span>
            </div>
          )}

          <div className="flex flex-wrap text-sm text-white mt-2">
            <span>{year}</span>
          </div>

          <div className="flex justify-end mt-4">
            <Button
              to={`/detail-movie/${id}`}
              variant="glassmorphism"
              width="w-32"
            >
              Detail
            </Button>
            <Button variant="red" width="w-32">
              Watch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  productionSeries: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default MovieItem;
