import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    customer: {
      listCustomer: null,
      isFetching: false,
      error: false,
    },
    employer: {
      listEmployer: null,
      isFetching: false,
      error: false,
    },
    manager: {
      listManager: null,
      isFetching: false,
      error: false,
    },
    changeStatus: {
      changeStatusSuccess: null,
      changeStatusFailed: null,
    },
    countUser: {
      count: null,
      error: null,
    },
  },
  reducers: {
    getCustomeSuccess: (state, action) => {
      state.customer.isFetching = false;
      state.customer.listCustomer = action.payload;
    },
    getCustomeFailed: (state) => {
      state.customer.isFetching = false;
      state.customer.error = true;
    },
    getEmployerSuccess: (state, action) => {
      state.employer.isFetching = false;
      state.employer.listEmployer = action.payload;
    },
    getEmployerFailed: (state) => {
      state.employer.isFetching = false;
      state.employer.error = true;
    },
    getManagerSuccess: (state, action) => {
      state.manager.isFetching = false;
      state.manager.listManager = action.payload;
    },
    getManagerFailed: (state) => {
      state.manager.isFetching = false;
      state.manager.error = true;
    },
    changeStatusSuccess: (state, action) => {
      state.changeStatus.changeStatusSuccess = action.payload;
    },
    changeStatusFailed: (state, action) => {
      state.changeStatus.changeStatusFailed = action.payload;
    },

    // count user
    countUserSuccess: (state, action) => {
      state.countUser.count = action.payload;
    },
    countUserFailed: (state, action) => {
      state.countUser.error = action.payload;
    },
  },
});

export const {
  getCustomeSuccess,
  getCustomeFailed,
  getEmployerSuccess,
  getEmployerFailed,
  getManagerSuccess,
  getManagerFailed,
  changeStatusSuccess,
  changeStatusFailed,
  countUserSuccess,
  countUserFailed,
} = userSlice.actions;

export default userSlice.reducer;
