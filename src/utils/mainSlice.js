import { faL } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    showSideBar: true,
  },
  reducers: {
    toggleSlice: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    hideSlice: (state) => {
      state.showSideBar = false;
    },
    showSlice: (state) => {
      state.showSideBar = true;
    },
  },
});

export const { toggleSlice, hideSlice, showSlice } = mainSlice.actions;

export default mainSlice.reducer;
