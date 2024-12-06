import Axios from "axios";

// Action to set movies (Read)
export const setMovies = (page) => {
  return (dispatch) => {
    Axios.get(`http://localhost:4000/v1/movie/posts?page=${page}&limit=8`)
      .then((result) => {
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
      })
      .catch((error) => {
        console.log("Error Api: ", error);
      });
  };
};

// Action to add a new movie (Create)
export const addMovie = (movieData) => {
  return (dispatch) => {
    Axios.post("http://localhost:4000/v1/movie/posts", movieData)
      .then((result) => {
        dispatch({
          type: "ADD_MOVIE",
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log("Error Api: ", error);
      });
  };
};

// Action to update an existing movie (Update)
export const updateMovie = (id, movieData) => {
  return (dispatch) => {
    Axios.put(`http://localhost:4000/v1/movie/posts/${id}`, movieData)
      .then((result) => {
        dispatch({
          type: "UPDATE_MOVIE",
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log("Error Api: ", error);
      });
  };
};

// Action to delete a movie (Delete)
export const deleteMovie = (id) => {
  return (dispatch) => {
    Axios.delete(`http://localhost:4000/v1/movie/posts/${id}`)
      .then((result) => {
        dispatch({
          type: "DELETE_MOVIE",
          payload: id,
        });
      })
      .catch((error) => {
        console.log("Error Api: ", error);
      });
  };
};
