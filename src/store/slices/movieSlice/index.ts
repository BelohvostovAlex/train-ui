import { createSlice } from "@reduxjs/toolkit";

import { moviesImdbNew } from "@/constants/movies";

import { MovieState } from "./interfaces";

const initialState: MovieState = {
  data: moviesImdbNew,
  isLoading: false,
  isError: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export default movieSlice.reducer;
