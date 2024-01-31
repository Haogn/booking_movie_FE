import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    profile: {
      isFetching: false,
      userProfile: null,
      error: false,
    },
    changePassword: {
      isFetching: false,
      success: false,
      error: false,
    },
  },
  reducers: {
    getProfileStart: (state) => {
      state.profile.isFetching = true;
    },
    getprofileSuccess: (state, action) => {
      state.profile.isFetching = false;
      state.profile.userProfile = action.payload;
      state.profile.error = false;
    },
    getProfileFailed: (state) => {
      state.profile.isFetching = false;
      state.profile.error = true;
    },
    changePasswordStart: (state) => {
      state.changePassword.isFetching = true;
    },
    changePasswordSuccess: (state, action) => {
      state.changePassword.isFetching = false;
      state.changePassword.success = true;
      state.changePassword.error = false;
    },
    changePasswordFailed: (state) => {
      state.changePassword.isFetching = false;
      state.changePassword.success = false;
      state.changePassword.error = true;
    },
  },
});

export const {
  getProfileStart,
  getprofileSuccess,
  getProfileFailed,
  changePasswordStart,
  changePasswordSuccess,
  changePasswordFailed,
} = customerSlice.actions;
export default customerSlice.reducer;
