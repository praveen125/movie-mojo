import { combineReducers } from "redux";
import movieCardReducer from "./movieCardReducer";
import trendingMoviesReducer from "./trendingMoviesReducer";

export default combineReducers({
  movieCard: movieCardReducer,
  trendingMovies: trendingMoviesReducer,
});
