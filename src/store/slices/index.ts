import alertSliceReducer from "./alertSlice/alertSlice";
import moviesSliceReducer from "./movieSlice/index";

export const allReducers = {
  alert: alertSliceReducer,
  movies: moviesSliceReducer,
};
