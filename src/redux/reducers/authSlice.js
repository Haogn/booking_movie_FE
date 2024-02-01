import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: null,
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
      message: null,
    },
    logout: {
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
      state.login.error = null;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
      state.login.currentUser = action.payload;
      state.login.error = null;
    },
    loginFailed: (state, action) => {
      state.login.isFetching = false;
      state.login.error = action.payload;
    },
    resetError: (state) => {
      state.login.error = null;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
      state.register.message = action.payload;
    },
    registerFailed: (state, action) => {
      state.register.isFetching = false;
      state.register.error = action.payload;
      state.register.success = false;
    },
    logoutStart: (state) => {
      state.logout.isFetching = true;
    },
    logoutSuccess: (state) => {
      state.logout.isFetching = false;
      state.login.currentUser = null;
      state.logout.error = false;
    },

    logoutFailed: (state) => {
      state.logout.isFetching = false;
      state.logout.error = true;
      state.logout.success = false;
    },
    getMaillingSuccess: (state, action) => {
      state.getMailling.message = action.payload;
    },
    getMaillingFailed: (state, action) => {
      state.getMailling.errorMail = action.payload;
    },
    retrievalSuccess: (state, action) => {
      state.retrieval.message = action.payload;
    },
    retrievalFailed: (state, action) => {
      state.getMailling.errorRetrieval = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  resetError,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutStart,
  logoutSuccess,
  logoutFailed,
  getMaillingFailed,
  getMaillingSuccess,
  retrievalFailed,
  retrievalSuccess,
} = authSlice.actions;
export default authSlice.reducer;
