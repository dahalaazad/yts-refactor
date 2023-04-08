import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieName: "MI 7",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export default movieSlice.reducer;
