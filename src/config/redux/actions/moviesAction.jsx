import Axios from "axios";

export const setMovies = () => {
  return (dispatch) => {
    Axios.get("http://localhost:4000/v1/movie/posts?page=1&limit=4")
      .then((result) => {
        const responseAPI = result.data.data;
        dispatch({
          type: "SET_MOVIES",
          payload: responseAPI,
        });
      })
      .catch((error) => {
        console.log("Error Api: ", error);
      });
  };
};
