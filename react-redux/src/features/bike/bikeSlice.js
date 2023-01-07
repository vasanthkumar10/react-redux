import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfBikes: 40,
};

const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    buyBike: (state, action) => {
      state.numOfBikes = state.numOfBikes - 1;
    },
    sellBike: (state, action) => {
      state.numOfBikes = state.numOfBikes + action.payload;
    },
  },
});

export default bikeSlice.reducer;
export const { buyBike, sellBike } = bikeSlice.actions;
