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
      errorRegister: null,
      success: false,
      message: null,
    },
    logout: {
      isFetching: false,
      error: false,
    },
    getMailling: {
      message: null,
      errorMail: null,
    },
    retrieval: {
      message: null,
      errorRetrieval: null,
    },
  },
  reducers: {
    resetError: (state) => {
      state.login.error = null;
    },
    loginStart: (state) => {
      state.login.isFetching = true;
      state.login.error = null;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state, action) => {
      state.login.isFetching = false;
      state.login.error = action.payload;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.errorRegister = null;
      state.register.success = true;
      state.register.message = action.payload;
    },
    registerFailed: (state, action) => {
      state.register.isFetching = false;
      state.register.errorRegister = action.payload;
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
      state.retrieval.errorRetrieval = action.payload;
    },
    resetGetMailling:(state) => {
      state.getMailling.message = null;
      state.getMailling.errorMail = null;
    }
  },
});

export const {
  resetError,
  loginStart,
  loginSuccess,
  loginFailed,
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
  resetGetMailling,
} = authSlice.actions;
export default authSlice.reducer;