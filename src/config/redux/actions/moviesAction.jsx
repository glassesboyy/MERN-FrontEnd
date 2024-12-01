import Axios from "axios";

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
