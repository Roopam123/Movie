import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  // initial statex
  initialState: {
    url: {name:"url"},
    genres: {name:"genras"},
  },
  // method
  reducers: {
    getApiConfigartion: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfigartion, getGenres } = homeSlice.actions;
export default homeSlice.reducer;