import { createSlice } from "@reduxjs/toolkit";

const dishClice = createSlice({
  name: "dishs",
  initialState: {
    dish: {
      currentDish: null,
      listDishSelect: null,
      listDish: null,
      error: null,
      isFetching: false,
    },
  },
  reducers: {
    // findById
    getDishStart: (state) => {
      state.dish.isFetching = true;
    },
    getDishSuccess: (state, action) => {
      state.dish.isFetching = false;
      state.dish.currentDish = action.payload;
      state.dish.error = null;
    },
    getDishFailed: (state, action) => {
      state.dish.isFetching = false;
      state.dish.error = action.payload;
    },
    //  selectAll phaan trang (page)
    selectAllDishStart: (state) => {
      state.dish.isFetching = true;
    },
    selectAllDishSuccess: (state, action) => {
      state.dish.isFetching = false;
      state.dish.listDishSelect = action.payload;
    },
    selectAllDishFailed: (state, action) => {
      state.dish.isFetching = false;
      state.dish.error = action.payload;
    },
    // getAll ( list)
    getAllDishStart: (state) => {
      state.dish.isFetching = true;
    },
    getAllDishSuccess: (state, action) => {
      state.dish.isFetching = false;
      state.dish.listDish = action.payload;
      state.dish.error = null;
    },
    getAllDishFailed: (state, action) => {
      state.dish.isFetching = false;
      state.dish.error = action.payload;
    },
    // create
    createDishStart: (state) => {
      state.dish.isFetching = true;
    },
    createDishSuccess: (state, action) => {
      state.dish.isFetching = false;
      state.dish.currentDish = action.payload;
    },
    createDishFailed: (state, action) => {
      state.dish.isFetching = false;
      state.dish.error = action.payload;
    },

    // edit
    editDishStart: (state) => {
      state.dish.isFetching = true;
    },
    editDishSuccess: (state, action) => {
      state.dish.isFetching = false;
      state.dish.currentDish = action.payload;
    },
    editDishFailed: (state, action) => {
      state.dish.isFetching = false;
      state.dish.error = action.payload;
    },
    // delete
    deleteDishStart: (state) => {
      state.dish.isFetching = true;
    },
    deleteDishSuccess: (state, action) => {
      state.dish.isFetching = false;
      state.dish.currentDish = action.payload;
    },
    deleteDishFailed: (state, action) => {
      state.dish.isFetching = false;
      state.dish.error = action.payload;
    },
  },
});
export const {
  getDishStart,
  getDishSuccess,
  getDishFailed,
  selectAllDishStart,
  selectAllDishSuccess,
  selectAllDishFailed,
  getAllDishStart,
  getAllDishSuccess,
  getAllDishFailed,
  createDishStart,
  createDishSuccess,
  createDishFailed,
  editDishStart,
  editDishSuccess,
  editDishFailed,
  deleteDishStart,
  deleteDishSuccess,
  deleteDishFailed,
} = dishClice.actions;
export default dishClice.reducer;
