import PropTypes from "prop-types";
import React from "react";
import { Button } from "../../atoms";

const MovieItem = ({
  title,
  imageUrl = "",
  description,
  margin = "m-2",
  width = "w-72",
  height = "h-auto",
}) => {
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
      <div className="relative cursor-pointer ">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover transition-opacity duration-500 group-hover:opacity-20"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 hover:text-gray-500 transition duration-300">
            {title}
          </h3>

          <p className="text-white text-opacity-80 text-sm line-clamp-3">
            {description}
          </p>

          <div className="flex justify-end mt-2">
            <Button to="/detail-movie" variant="glassmorphism" width="w-32">
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
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default MovieItem;
