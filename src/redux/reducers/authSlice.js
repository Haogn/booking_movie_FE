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
      error: null,
      success: null,
    },
    logout: {
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getCaptcha: (state, action) => {
      return action.payload;
    },
    loginStart: (state) => {
      state.login.isFetching = true;
      state.login.error = null;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
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
      state.register.success = action.payload;
    },
    registerFailed: (state, action) => {
      state.register.isFetching = false;
      state.register.error = action.payload;
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
} = authSlice.actions;
export default authSlice.reducer;
