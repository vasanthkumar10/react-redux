import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
import bikeReducer from "../features/bike/bikeSlice";
import userReducer from "../features/user/userSlice";

import { createLogger } from "redux-logger";
const logger = createLogger();

const store = configureStore({
  reducer: {
    car: carReducer,
    bike: bikeReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
