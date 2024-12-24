import Axios from "axios";

// Action to set movies (Read)
export const setMovies = (
  page = 1,
  genre = null,
  search = "",
  year = null,
  productionSeries = null
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING" });
      let url = `http://localhost:4000/v1/movie/posts?page=${page}&limit=8`;

      if (genre) {
        url += `&genre=${genre}`;
      }
      if (search) {
        url += `&search=${search}`;
      }
      if (year) {
        url += `&year=${year}`;
      }
      if (productionSeries) {
        url += `&productionSeries=${productionSeries}`;
      }

      const result = await Axios.get(url);
      console.log("API Response:", result.data); // Tambahkan log ini
      const responseAPI = result.data;

      dispatch({
        type: "SET_MOVIES",
        payload: {
          movies: responseAPI.data,
          totalItems: responseAPI.pagination.total_items,
          totalPages: responseAPI.pagination.total_pages,
          currentPage: responseAPI.pagination.current_page,
          limit: responseAPI.pagination.limit,
          selectedGenre: genre,
          searchQuery: search,
          selectedYear: year,
          selectedProductionSeries: productionSeries,
        },
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error.response?.data?.message ||
          "Error: Please check if the backend is running",
      });
    }
  };
};

// Action to add a new movie (Create)
export const addMovie = (movieData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING" });

      // Log the FormData contents for debugging
      for (let pair of movieData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

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
      console.error("Error response:", error.response?.data); // Add this for debugging
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
      await Axios.delete(`http://localhost:4000/v1/movie/post/${id}`);
      dispatch({
        type: "DELETE_MOVIE",
        payload: id,
      });
      return Promise.resolve();
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.response?.data?.message || "Failed to delete movie",
      });
      return Promise.reject(error);
    }
  };
};

// Action to get movie by ID
export const getMovieById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const result = await Axios.get(
        `http://localhost:4000/v1/movie/post/${id}`
      );
      dispatch({
        type: "SET_CURRENT_MOVIE",
        payload: result.data.data,
      });
    } catch (error) {
      console.error("Error fetching movie:", error);
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

// Add this new action
export const fetchAllMovies = () => {
  return async (dispatch) => {
    try {
      const result = await Axios.get(
        `http://localhost:4000/v1/movie/posts?limit=1000`
      );
      dispatch({
        type: "SET_ALL_MOVIES",
        payload: result.data.data,
      });
    } catch (error) {
      console.error("Error fetching all movies:", error);
    }
  };
};

// Add this new action
export const fetchProductionSeries = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const result = await Axios.get(
        "http://localhost:4000/v1/production-series"
      );
      dispatch({
        type: "SET_PRODUCTION_SERIES",
        payload: result.data.data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error.response?.data?.message || "Failed to fetch production series",
      });
    }
  };
};
