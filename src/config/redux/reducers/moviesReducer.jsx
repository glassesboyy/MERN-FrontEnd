const initialState = {
  movies: [],
  currentMovie: null,
  totalPages: 1,
  currentPage: 1,
  limit: 8,
  loading: false,
  error: null,
  genres: [], // Add this new state
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        limit: action.payload.limit,
        loading: false,
        error: null,
      };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case "SET_CURRENT_MOVIE":
      return {
        ...state,
        currentMovie: action.payload,
        loading: false,
        error: null,
      };
    case "SET_GENRES":
      return {
        ...state,
        genres: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default moviesReducer;
