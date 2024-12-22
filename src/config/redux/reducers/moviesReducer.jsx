const initialState = {
  movies: [],
  currentMovie: null,
  totalItems: 0,
  totalPages: 1,
  currentPage: 1,
  limit: 8,
  loading: false,
  error: null,
  genres: [],
  selectedGenre: null,
  searchQuery: "",
  selectedYear: null,
  allMovies: [], // Add this new state
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
        totalItems: action.payload.totalItems,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        limit: action.payload.limit,
        selectedGenre: action.payload.selectedGenre,
        searchQuery: action.payload.searchQuery || "",
        selectedYear: action.payload.selectedYear,
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
    case "SET_ALL_MOVIES":
      return {
        ...state,
        allMovies: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
