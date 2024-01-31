import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
  name: "genres",
  initialState: {
    genre: {
      currentGenre: null,
      listGenre: null,
      listGenreSelect: null,
      isFetching: false,
      error: null,
    },
  },
  reducers: {
    // findById
    getGenreStart: (state) => {
      state.genre.isFetching = true;
    },
    getGenreSuccess: (state, action) => {
      state.genre.isFetching = false;
      state.genre.currentGenre = action.payload;
      state.genre.error = null;
    },
    getGenreFailed: (state, action) => {
      state.genre.isFetching = false;
      state.genre.error = action.payload;
    },
    // getAll
    getAllGenreStart: (state) => {
      state.genre.isFetching = true;
    },
    getAllGenreSuccess: (state, action) => {
      state.genre.isFetching = false;
      state.genre.listGenre = action.payload;
      state.genre.error = null;
    },
    getAllGenreFailed: (state, action) => {
      state.genre.isFetching = false;
      state.genre.error = action.payload;
    },
    // getAllLocationSelect:
    getAllGenreSelectStart: (state) => {
      state.genre.isFetching = true;
    },
    getAllGenreSelectSucess: (state, action) => {
      state.genre.isFetching = false;
      state.genre.listGenreSelect = action.payload;
      state.genre.error = null;
    },
    getAllGenreSelectFailed: (state, action) => {
      state.genre.isFetching = false;
      state.genre.error = action.payload;
    },
    // create
    createGenreStart: (state) => {
      state.genre.isFetching = true;
    },
    createGenreSuccess: (state, action) => {
      state.genre.isFetching = false;
      state.genre.currentGenre = action.payload;
      state.genre.error = null;
    },
    createGenreFailed: (state, action) => {
      state.genre.isFetching = false;
      state.genre.error = action.payload;
    },
    //  edit
    editGenreStart: (state) => {
      state.genre.isFetching = true;
    },
    editGenreSuccess: (state, action) => {
      state.genre.isFetching = false;
      state.genre.currentGenre = action.payload;
      state.genre.error = null;
    },
    editGenreFailed: (state, action) => {
      state.genre.isFetching = false;
      state.genre.error = action.payload;
    },
    // delete
    deleteGenreStart: (state) => {
      state.genre.isFetching = true;
    },
    deleteGenreSuccess: (state, action) => {
      state.genre.isFetching = false;
      state.genre.currentGenre = action.payload;
      state.genre.error = null;
    },
    deleteGenreFailed: (state, action) => {
      state.genre.isFetching = false;
      state.genre.error = action.payload;
    },
  },
});

export const {
  getGenreStart,
  getGenreSuccess,
  getGenreFailed,
  getAllGenreStart,
  getAllGenreSuccess,
  getAllGenreFailed,
  getAllGenreSelectStart,
  getAllGenreSelectSucess,
  getAllGenreSelectFailed,
  createGenreStart,
  createGenreSuccess,
  createGenreFailed,
  editGenreStart,
  editGenreSuccess,
  editGenreFailed,
  deleteGenreStart,
  deleteGenreSuccess,
  deleteGenreFailed,
} = genreSlice.actions;

export default genreSlice.reducer;
