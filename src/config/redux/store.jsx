import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/moviesReducer";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
