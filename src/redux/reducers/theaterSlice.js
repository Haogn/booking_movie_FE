import { createSlice } from "@reduxjs/toolkit";

const theaterSlice = createSlice({
  name: "theaters",
  initialState: {
    theater: {
      currentTheater: null,
      listTheater: null,
      listTheaterSelect: null,
      isFetching: false,
      error: null,
    },
  },
  reducers: {
    // findById
    getTheaterStart: (state) => {
      state.theater.isFetching = true;
    },
    getTheaterSuccess: (state, action) => {
      state.theater.isFetching = false;
      state.theater.currentTheater = action.payload;
      state.theater.error = null;
    },
    getTheaterFailed: (state, action) => {
      state.theater.isFetching = false;
      state.theater.error = action.payload;
    },
    // getAll
    getAllTheaterStart: (state) => {
      state.theater.isFetching = true;
    },
    getAllTheaterSuccess: (state, action) => {
      state.theater.isFetching = false;
      state.theater.listTheater = action.payload;
      state.theater.error = null;
    },
    getAllTheaterFailed: (state, action) => {
      state.theater.isFetching = false;
      state.theater.error = action.payload;
    },
    // getAllLocationSelect
    getAllTheaterSelectStart: (state) => {
      state.theater.isFetching = false;
    },
    getAllTheaterSelectSuccess: (state, action) => {
      state.theater.isFetching = false;
      state.theater.listTheaterSelect = action.payload;
      state.theater.error = null;
    },
    getAllTheaterSelectFailed: (state, action) => {
      state.theater.isFetching = false;
      state.theater.error = action.payload;
    },
    // create
    createTheaterStart: (state) => {
      state.theater.isFetching = true;
    },
    createTheaterSuccess: (state, action) => {
      state.theater.isFetching = false;
      state.theater.currentTheater = action.payload;
      state.theater.error = null;
    },
    createTheaterFailed: (state, action) => {
      state.theater.isFetching = false;
      state.theater.error = action.payload;
    },
    //  edit
    editTheaterStart: (state) => {
      state.theater.isFetching = false;
    },
    editTheaterSuccess: (state, action) => {
      state.theater.isFetching = false;
      state.theater.currentTheater = action.payload;
      state.theater.error = null;
    },
    editTheaterFailed: (state, action) => {
      state.theater.isFetching = false;
      state.theater.error = action.payload;
    },
    // delete
    deleteTheaterStart: (state) => {
      state.theater.isFetching = true;
    },
    deleteTheaterSuccess: (state, action) => {
      state.theater.isFetching = false;
      state.theater.currentTheater = action.payload;
      state.theater.error = null;
    },
    deleteTheaterFailed: (state, action) => {
      state.theater.isFetching = false;
      state.theater.error = action.payload;
    },
  },
});

export const {
  getTheaterStart,
  getTheaterSuccess,
  getTheaterFailed,
  getAllTheaterStart,
  getAllTheaterSuccess,
  getAllTheaterFailed,
  getAllTheaterSelectStart,
  getAllTheaterSelectSuccess,
  getAllTheaterSelectFailed,
  createTheaterStart,
  createTheaterSuccess,
  createTheaterFailed,
  editTheaterStart,
  editTheaterSuccess,
  editTheaterFailed,
  deleteTheaterStart,
  deleteTheaterSuccess,
  deleteTheaterFailed,
} = theaterSlice.actions;

export default theaterSlice.reducer;
