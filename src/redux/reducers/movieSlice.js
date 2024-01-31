import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movie: {
      currentMovie: null,
      listMovie: null,
      listMovieSelect: [],
      listMovieByStatus: null,
      isFetching: false,
      error: null,
    },
  },
  reducers: {
    // findById :
    getMovieStart: (state) => {
      state.movie.isFetching = true;
    },
    getMovieSuccess: (state, action) => {
      state.movie.isFetching = false;
      state.movie.currentMovie = action.payload;
      state.movie.error = null;
    },
    getMovieFailed: (state, action) => {
      state.movie.isFetching = false;
      state.movie.error = action.payload;
    },
    // getAll :
    getAllMovieStart: (state) => {
      state.movie.isFetching = true;
    },
    getAllMovieSuccess: (state, action) => {
      state.movie.isFetching = false;
      state.movie.listMovie = action.payload;
      state.movie.error = null;
    },
    getAllMovieFailed: (state, action) => {
      state.movie.isFetching = false;
      state.movie.error = action.payload;
    },
    // getAllMovieSelect :
    getAllMovieSelectStart: (state) => {
      state.movie.isFetching = true;
    },
    getAllMovieSelectSuccess: (state, action) => {
      // console.log(action.payload);
      state.movie.isFetching = false;
      state.movie.listMovieSelect = action.payload;
      state.movie.error = null;
    },
    getAllMovieSelectFailed: (state, action) => {
      state.movie.isFetching = false;
      state.movie.error = action.payload;
    },
    // getALlMovieByStatus
    getALlMovieByStatusStart: (state) => {
      state.movie.isFetching = false;
    },
    getALlMovieByStatusSuccess: (state, action) => {
      state.movie.isFetching = false;
      state.movie.listMovieByStatus = action.payload;
      state.movie.error = null;
    },
    getALlMovieByStatusFailed: (state, action) => {
      state.movie.isFetching = false;
      state.movie.error = action.payload;
    },
    // createMovie :
    createMovieStart: (state) => {
      state.movie.isFetching = true;
    },
    createMovieSuccess: (state, action) => {
      state.movie.isFetching = false;
      state.movie.currentMovie = action.payload;
      state.movie.error = null;
    },
    createMovieFailed: (state, action) => {
      state.movie.isFetching = false;
      state.movie.error = action.payload;
    },
    // editMovie :
    editMovieStart: (state) => {
      state.movie.isFetching = true;
    },
    editMovieSuccess: (state, action) => {
      state.movie.isFetching = false;
      state.movie.currentMovie = action.payload;
      state.movie.error = null;
    },
    editMovieFailed: (state, action) => {
      state.movie.isFetching = false;
      state.movie.error = action.payload;
    },
    // deleteMovie :
    deleteMovieStart: (state) => {
      state.movie.isFetching = true;
    },
    deleteMovieSuccess: (state, action) => {
      state.movie.isFetching = false;
      state.movie.currentMovie = action.payload;
      state.movie.error = null;
    },
    deleteMovieFailed: (state, action) => {
      state.movie.isFetching = false;
      state.movie.error = action.payload;
    },
  },
});

export const {
  getMovieStart,
  getMovieSuccess,
  getMovieFailed,
  getAllMovieStart,
  getAllMovieSuccess,
  getAllMovieFailed,
  getALlMovieByStatusStart,
  getALlMovieByStatusSuccess,
  getALlMovieByStatusFailed,
  getAllMovieSelectStart,
  getAllMovieSelectSuccess,
  getAllMovieSelectFailed,
  createMovieStart,
  createMovieSuccess,
  createMovieFailed,
  editMovieStart,
  editMovieSuccess,
  editMovieFailed,
  deleteMovieStart,
  deleteMovieSuccess,
  deleteMovieFailed,
} = movieSlice.actions;

export default movieSlice.reducer;
