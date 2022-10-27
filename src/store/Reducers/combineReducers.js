import { combineReducers } from "redux";

import favMovieReducer from "./favMovie";
import thunkMoviesReducer from "./movies";

export default combineReducers({
  favMovieReducer,
  thunkMoviesReducer,
});
