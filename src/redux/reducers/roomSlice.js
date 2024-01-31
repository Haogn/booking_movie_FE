import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    room: {
      currentRoom: null,
      listRoom: null,
      listRoomSelect: null,
      listRoomByTheaterId: null,
      isFetching: false,
      error: null,
    },
  },
  reducers: {
    // findById :
    getRoomStart: (state) => {
      state.room.isFetching = true;
    },
    getRoomSuccess: (state, action) => {
      state.room.isFetching = false;
      state.room.currentRoom = action.payload;
      state.room.error = null;
    },
    getRoomFailed: (state, action) => {
      state.room.isFetching = false;
      state.room.error = action.payload;
    },
    // getAll :
    getAllRoomStart: (state) => {
      state.room.isFetching = true;
    },
    getAllRoomSuccess: (state, action) => {
      state.room.isFetching = false;
      state.room.listRoom = action.payload;
      state.room.error = null;
    },
    getAllRoomFailed: (state, action) => {
      state.room.isFetching = false;
      state.room.error = action.payload;
    },
    // getAllLocationSelect :
    getAllRoomSelectStart: (state) => {
      state.room.isFetching = true;
    },
    getAllRoomSelectSuccess: (state, action) => {
      state.room.isFetching = false;
      state.room.listRoomSelect = action.payload;
      state.room.error = null;
    },
    getAllRoomSelectFailed: (state, action) => {
      state.room.isFetching = true;
      state.room.error = action.payload;
    },
    // getAllRoomByTheaterId :
    getAllRoomByTheaterIdStart: (state) => {
      state.room.isFetching = false;
    },
    getAllRoomByTheaterIdSuccess: (state, action) => {
      console.log(action.payload);
      state.room.isFetching = false;
      state.room.listRoomByTheaterId = action.payload;
      state.room.error = null;
    },
    getAllRoomByTheaterIdFailed: (state, action) => {
      state.room.isFetching = false;
      state.room.error = action.payload;
    },
    // create :
    createRoomStart: (state) => {
      state.room.isFetching = true;
    },
    createRoomSuccess: (state, action) => {
      state.room.isFetching = false;
      state.room.currentRoom = action.payload;
      state.room.error = null;
    },
    // create :
    createRoomStart: (state) => {
      state.room.isFetching = true;
    },
    createRoomSuccess: (state, action) => {
      state.room.isFetching = false;
      state.room.currentRoom = action.payload;
      state.room.error = null;
    },
    createRoomFailed: (state, action) => {
      state.room.isFetching = false;
      state.room.error = action.payload;
    },
    //  edit :
    editRoomStart: (state) => {
      state.room.isFetching = false;
    },
    editRoomSuccess: (state, action) => {
      state.room.isFetching = false;
      state.room.currentRoom = action.payload;
      state.room.error = null;
    },
    editRoomFailed: (state, action) => {
      state.room.isFetching = false;
      state.room.error = action.payload;
    },
    // delete :
    deleteRoomStart: (state) => {
      state.room.isFetching = true;
    },
    deleteRoomSuccess: (state, action) => {
      state.room.isFetching = false;
      state.room.currentRoom = action.payload;
      state.room.error = null;
    },
    deleteRoomFailed: (state, action) => {
      state.room.isFetching = false;
      state.room.error = action.payload;
    },
  },
});

export const {
  getRoomStart,
  getRoomSuccess,
  getRoomFailed,
  getAllRoomStart,
  getAllRoomSuccess,
  getAllRoomFailed,
  getAllRoomSelectStart,
  getAllRoomSelectSuccess,
  getAllRoomSelectFailed,
  getAllRoomByTheaterIdStart,
  getAllRoomByTheaterIdSuccess,
  getAllRoomByTheaterIdFailed,
  createRoomStart,
  createRoomSuccess,
  createRoomFailed,
  editRoomStart,
  editRoomSuccess,
  editRoomFailed,
  deleteRoomStart,
  deleteRoomSuccess,
  deleteRoomFailed,
} = roomSlice.actions;

export default roomSlice.reducer;
