import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    profile: {
      userProfile: null,
      error: false,
    },
    changePassword: {
      success: null,
      error: null,
    },
    changeAvatar: {
      messageAvatar: null,
      errorAvatar: null,
    },
    updateProfile: {
      messageProfile: null,
      errorProfile: null,
    },
  },
  reducers: {
    getprofileSuccess: (state, action) => {
      state.profile.userProfile = action.payload;
      state.profile.error = false;
    },
    getProfileFailed: (state) => {
      state.profile.error = true;
    },
    changePasswordSuccess: (state, action) => {
      state.changePassword.success = action.payload;
    },
    changePasswordFailed: (state, action) => {
      state.changePassword.error = action.payload;
    },
    changeAvatarSuccess: (state, action) => {
      state.changeAvatar.success = action.payload;
    },
    changeAvatarFailed: (state, action) => {
      state.changeAvatar.error = action.payload;
    },
    updateProfileSuccess: (state, action) => {
      state.updateProfile.messageProfile = action.payload;
    },
    updateProfileFailed: (state, action) => {
      state.updateProfile.errorProfile = action.payload;
    },
  },
});

export const {
  getprofileSuccess,
  getProfileFailed,
  changePasswordSuccess,
  changePasswordFailed,
  changeAvatarSuccess,
  changeAvatarFailed,
  updateProfileSuccess,
  updateProfileFailed,
} = customerSlice.actions;
export default customerSlice.reducer;
