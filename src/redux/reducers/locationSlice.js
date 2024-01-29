import { createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const locationSlice = createSlice({
  name: "locations",
  initialState: {
    location: {
      currentLocation: null,
      listLocation: null,
      listLocationSelect: null,
      isFetching: false,
      error: null,
    },
  },
  reducers: {
    // findById
    getLocationStart: (state) => {
      state.location.isFetching = true;
    },
    getLocationSuccess: (state, action) => {
      state.location.isFetching = false;
      state.location.currentLocation = action.payload;
      state.location.error = null;
    },
    getLocationFailed: (state, action) => {
      state.location.isFetching = false;
      state.location.error = action.payload;
    },
    // getAll
    getAllLocationStart: (state) => {
      state.location.isFetching = true;
    },
    getAllLocationSuccess: (state, action) => {
      state.location.isFetching = false;
      state.location.listLocation = action.payload;
      state.location.error = null;
    },
    getAllLocationFailed: (state, action) => {
      state.location.isFetching = false;
      state.location.error = action.payload;
    },
    // getAllLocationSelect:
    getAllLocationSelectStart: (state) => {
      state.location.isFetching = true;
    },
    getAllLocationSelectSuccess: (state, action) => {
      state.location.isFetching = false;
      state.location.listLocationSelect = action.payload;
      state.location.error = null;
    },
    getAllLocationSelectFailed: (state, action) => {
      state.location.isFetching = false;
      state.location.error = action.payload;
    },
    // create
    createLocationStart: (state) => {
      state.location.isFetching = true;
    },
    createLocationSuccess: (state, action) => {
      state.location.isFetching = false;
      state.location.currentLocation = action.payload;
      state.location.error = null;
    },
    createLocationFailed: (state, action) => {
      state.location.isFetching = false;
      state.location.error = action.payload;
    },
    //  edit
    editLocationStart: (state) => {
      state.location.isFetching = true;
    },
    editLocationSuccess: (state, action) => {
      state.location.isFetching = false;
      state.location.currentLocation = action.payload;
      state.location.error = null;
    },
    editLocationFailed: (state, action) => {
      state.location.isFetching = false;
      state.location.error = action.payload;
    },
    // delete
    deleteLocationStart: (state) => {
      state.location.isFetching = true;
    },
    deleteLocationSuccess: (state, action) => {
      state.location.isFetching = false;
      state.location.currentLocation = action.payload;
      state.location.error = null;
    },
    deleteLocationFailed: (state, action) => {
      state.location.isFetching = false;
      state.location.error = action.payload;
    },
  },
});

export const {
  getLocationStart,
  getLocationSuccess,
  getLocationFailed,
  getAllLocationStart,
  getAllLocationSuccess,
  getAllLocationFailed,
  getAllLocationSelectStart,
  getAllLocationSelectSuccess,
  getAllLocationSelectFailed,
  createLocationStart,
  createLocationSuccess,
  createLocationFailed,
  editLocationStart,
  editLocationSuccess,
  editLocationFailed,
  deleteLocationStart,
  deleteLocationSuccess,
  deleteLocationFailed,
} = locationSlice.actions;
export default locationSlice.reducer;
