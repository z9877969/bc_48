import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    type: "light",
  },
  reducers: {
    themeToggle(state) {
      state.type = state.type === "light" ? "dark" : "light";
    },
  },
});

export const { themeToggle } = themeSlice.actions;
export default themeSlice.reducer;
