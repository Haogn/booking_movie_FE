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
    spenlingByYear:{
      spenling:0,
      spenlingError:null,
    },
    getNotifications:{
      listNotification:null,
      notificaationError:null,
    },
    readNotification:{
      success:false,
      error:false,
    }
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
    spenlingByYearSuccess: (state, action) => {
      state.spenlingByYear.spenling=action.payload;
    },
    spenlingByYearFailed: (state, action) => {
      state.spenlingByYear.spenlingError = action.payload;
    },
    getNotificationsSuccess: (state, action) => {
      state.getNotifications.listNotification = action.payload;
    },
    getNotificationFailed: (state, action) => {
      state.getNotifications.notificaationError = action.payload;
    },
    readNotification: (state) => {
      state.readNotification.success = true;
    },
    resetErrorChangePass:(state) => {
      state.changePassword.error = null;
    }
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
  spenlingByYearFailed,
  spenlingByYearSuccess,
  getNotificationsSuccess,
  getNotificationFailed,
  readNotification,
  resetErrorChangePass,
} = customerSlice.actions;
export default customerSlice.reducer;
