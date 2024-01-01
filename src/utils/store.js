import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
// import

const store = configureStore({
  reducer: {
    mainSlice: mainSlice,
  },
});

export default store;
