import Axios from "axios";

// Action to set movies (Read)
export const setMovies = (page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const result = await Axios.get(
        `http://localhost:4000/v1/movie/posts?page=${page}&limit=8`
      );
      const responseAPI = result.data;
      dispatch({
        type: "SET_MOVIES",
        payload: {
          movies: responseAPI.data,
          totalItems: responseAPI.total_items,
          totalPages: responseAPI.total_pages,
          currentPage: responseAPI.current_page,
          limit: responseAPI.limit,
        },
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error.response?.data?.message ||
          "Error cik, Aktifin BackEnd nya dulu sayangg",
      });
    }
  };
};

// Action to add a new movie (Create)
export const addMovie = (movieData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING" });

      const result = await Axios.post(
        "http://localhost:4000/v1/movie/post",
        movieData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (result.data && result.data.data) {
        dispatch({
          type: "ADD_MOVIE",
          payload: result.data.data,
        });
        return Promise.resolve(result.data);
      } else {
        throw new Error("Invalid response format from server");
      }
    } catch (error) {
      console.error("Error creating movie:", error);
      const errorMessage =
        error.response?.data?.message || error.message || "Failed to add movie";

      dispatch({
        type: "SET_ERROR",
        payload: errorMessage,
      });
      return Promise.reject(new Error(errorMessage));
    }
  };
};

// Action to update an existing movie (Update)
export const updateMovie = (id, movieData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const result = await Axios.put(
        `http://localhost:4000/v1/movie/posts/${id}`,
        movieData
      );
      dispatch({
        type: "UPDATE_MOVIE",
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.response?.data?.message || "Failed to update movie",
      });
    }
  };
};

// Action to delete a movie (Delete)
export const deleteMovie = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING" });
      await Axios.delete(`http://localhost:4000/v1/movie/post/${id}`); // Changed from posts to post
      dispatch({
        type: "DELETE_MOVIE",
        payload: id,
      });
      return Promise.resolve(); // Add this to properly handle the async operation
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.response?.data?.message || "Failed to delete movie",
      });
      return Promise.reject(error); // Add this to properly handle errors
    }
  };
};

// Action to get movie by ID
export const getMovieById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const result = await Axios.get(
        `http://localhost:4000/v1/movie/post/${id}` // Changed from posts to post
      );
      dispatch({
        type: "SET_CURRENT_MOVIE",
        payload: result.data.data,
      });
    } catch (error) {
      console.error("Error fetching movie:", error); // Add this for debugging
      dispatch({
        type: "SET_ERROR",
        payload:
          error.response?.data?.message || "Failed to fetch movie details",
      });
    }
  };
};

// Add this new action to fetch genres
export const fetchGenres = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const result = await Axios.get("http://localhost:4000/v1/genre");
      dispatch({
        type: "SET_GENRES",
        payload: result.data.data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.response?.data?.message || "Failed to fetch genres",
      });
    }
  };
};
