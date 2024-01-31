import { createSlice } from "@reduxjs/toolkit";

const categoryClice = createSlice({
  name: "category",
  initialState: {
    ListCategory: null,
  },
  reducers: {
    getAllCategory: (state, action) => {
      state.ListCategory = action.payload;
      console.log(state.ListCategory);
    },
  },
});
export const { getAllCategory } = categoryClice.actions;
export default categoryClice.reducer;
