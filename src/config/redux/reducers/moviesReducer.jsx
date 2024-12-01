const initialState = {
  movies: [],
  totalPages: 1,
  currentPage: 1,
  limit: 8,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        limit: action.payload.limit,
      };
    default:
      return state;
  }
};

export default moviesReducer;
