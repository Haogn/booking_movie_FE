import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "times",
  initialState: {
    time: {
      currentTime: null,
      listTime: null,
      listTimeSelect: null,
      isFetching: false,
      error: null,
    },
  },
  reducers: {
    // findById
    getTimeStart: (state) => {
      state.time.isFetching = true;
    },
    getTimeSuccess: (state, action) => {
      state.time.isFetching = false;
      state.time.currentTime = action.payload;
      state.time.error = null;
    },
    getTimeFailed: (state, action) => {
      state.time.isFetching = false;
      state.time.error = action.payload;
    },
    // getAll
    getAllTimeStart: (state) => {
      state.time.isFetching = true;
    },
    getAllTimeSuccess: (state, action) => {
      state.time.isFetching = false;
      state.time.listTime = action.payload;
      state.time.error = null;
    },
    getAllTimeFailed: (state, action) => {
      state.time.isFetching = false;
      state.time.error = action.payload;
    },
    // getAllTimeSelect
    getAllTimeSelectStart: (state) => {
      state.time.isFetching = false;
    },
    getALlTimeSelectSuccess: (state, action) => {
      state.time.isFetching = false;
      state.time.listTimeSelect = action.payload;
      state.time.error = null;
    },
    getALlTimeSelectFailed: (state, action) => {
      state.time.isFetching = false;
      state.time.error = action.payload;
    },
    // create
    createTimeStart: (state) => {
      state.time.isFetching = true;
    },
    createTimeSuccess: (state, action) => {
      state.time.isFetching = false;
      state.time.currentTime = action.payload;
      state.time.error = null;
    },
    createTimeFailed: (state, action) => {
      state.time.isFetching = false;
      state.time.error = action.payload;
    },
    //  edit
    editTimeStart: (state) => {
      state.time.isFetching = false;
    },
    editTimeSuccess: (state, action) => {
      state.time.isFetching = false;
      state.time.currentTime = action.payload;
      state.time.error = null;
    },
    editTimeFailed: (state, action) => {
      state.time.isFetching = false;
      state.time.error = action.payload;
    },
    // delete
    deleteTimeStart: (state) => {
      state.time.isFetching = true;
    },
    deleteTimeSuccess: (state, action) => {
      state.time.isFetching = false;
      state.time.currentTime = action.payload;
      state.time.error = null;
    },
    deleteTimeFailed: (state, action) => {
      state.time.isFetching = false;
      state.time.error = action.payload;
    },
  },
});

export const {
  getTimeStart,
  getTimeSuccess,
  getTimeFailed,
  getAllTimeStart,
  getAllTimeSuccess,
  getAllTimeFailed,
  getAllTimeSelectStart,
  getALlTimeSelectSuccess,
  getALlTimeSelectFailed,
  createTimeStart,
  createTimeSuccess,
  createTimeFailed,
  editTimeStart,
  editTimeSuccess,
  editTimeFailed,
  deleteTimeStart,
  deleteTimeSuccess,
  deleteTimeFailed,
} = timeSlice.actions;

export default timeSlice.reducer;
