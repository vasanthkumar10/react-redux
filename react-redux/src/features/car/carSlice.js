import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCars: 10,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    buyCar: (state, action) => {
      state.numOfCars = state.numOfCars - 1;
    },
    sellCar: (state, action) => {
      state.numOfCars = state.numOfCars + action.payload;
    },
  },
});

export default carSlice.reducer;
export const { buyCar, sellCar } = carSlice.actions;
