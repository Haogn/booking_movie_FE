import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    event: {
      currentEvent: null,
      listEventSelect: null,
      listEvent: null,
      error: null,
      isFetching: false,
    },
  },
  reducers: {
    // findById
    getEventStart: (state) => {
      state.event.isFetching = true;
    },
    getEventSuccess: (state, action) => {
      state.event.isFetching = false;
      state.event.currentEvent = action.payload;
      state.event.error = null;
    },
    getEventFailed: (state, action) => {
      state.event.isFetching = false;
      state.event.error = action.payload;
    },
    //  selectAll phaan trang (page)
    selectAllEventStart: (state) => {
      state.event.isFetching = true;
    },
    selectAllEventSuccess: (state, action) => {
      state.event.isFetching = false;
      state.event.listEventSelect = action.payload;
    },
    selectAllEventFailed: (state, action) => {
      state.event.isFetching = false;
      state.event.error = action.payload;
    },
    // getAll ( list)
    getAllEventStart: (state) => {
      state.event.isFetching = true;
    },
    getAllEventSuccess: (state, action) => {
      state.event.isFetching = false;
      state.event.listEvent = action.payload;
      state.event.error = null;
    },
    getAllEventFailed: (state, action) => {
      state.event.isFetching = false;
      state.event.error = action.payload;
    },
    // create
    createEventStart: (state) => {
      state.event.isFetching = true;
    },
    createEventSuccess: (state, action) => {
      state.event.isFetching = false;
      state.event.currentEvent = action.payload;
    },
    createEventFailed: (state, action) => {
      state.event.isFetching = false;
      state.event.error = action.payload;
    },

    // edit
    editEventStart: (state) => {
      state.event.isFetching = true;
    },
    editEventSuccess: (state, action) => {
      state.event.isFetching = false;
      state.event.currentEvent = action.payload;
    },
    editEventFailed: (state, action) => {
      state.event.isFetching = false;
      state.event.error = action.payload;
    },
    // delete
    deleteEventStart: (state) => {
      state.event.isFetching = true;
    },
    deleteEventSuccess: (state, action) => {
      state.event.isFetching = false;
      state.event.currentEvent = action.payload;
    },
    deleteEventFailed: (state, action) => {
      state.event.isFetching = false;
      state.event.error = action.payload;
    },
  },
});
export const {
  getAllEventStart,
  getAllEventSuccess,
  getAllEventFailed,
  getEventFailed,
  getEventStart,
  getEventSuccess,
  createEventStart,
  createEventFailed,
  createEventSuccess,
  selectAllEventStart,
  selectAllEventSuccess,
  selectAllEventFailed,
  editEventStart,
  editEventSuccess,
  editEventFailed,
  deleteEventStart,
  deleteEventSuccess,
  deleteEventFailed,
} = eventSlice.actions;
export default eventSlice.reducer;
