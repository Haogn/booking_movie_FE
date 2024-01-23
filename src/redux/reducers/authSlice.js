import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login:{
      currentUser:null,
      isFetching:false,
      error:false
    },
    register:{
      isFetching:false,
      error:false,
      success:false,
    },
    logout:{
      isFetching:false,
      error:false,
    }

  },
  reducers: {
    getCaptcha: (state,action)=>{
      return action.payload;
    },
    loginStart: (state) => {
      state.login.isFetching=true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser=action.payload;
      state.login.error= false;
    },
    loginFailed:(state, action) => {
      state.login.isFetching = false;
      state.login.error= true;
    },
    registerStart: (state) => {
      state.register.isFetching=true;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.error= false;
      state.register.success = true;
    },
    registerFailed:(state, action) => {
      state.register.isFetching = false;
      state.register.error= true;
      state.register.success = false;
    },
    logoutStart:(state)=>{
      state.logout.isFetching=true;
    },
    logoutSuccess: (state) => {
      state.logout.isFetching = false;
      state.login.currentUser= null;
      state.logout.error = false;
    },
    logoutFailed:(state) => {
      state.logout.isFetching = false;
      state.logout.error= true;
      state.logout.success = false;
    }
  },
});

export const { loginStart,loginSuccess,loginFailed,
   registerStart,registerSuccess,registerFailed,
  logoutStart,logoutSuccess,logoutFailed} = authSlice.actions;
export default authSlice.reducer;