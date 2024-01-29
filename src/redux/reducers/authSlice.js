import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login:{
      currentUser:null,
      isFetching:false,
      error:null
    },
    register:{
      error:false,
      success:false,
    },
    logout:{
      isFetching:false,
      error:false,
    },
    getMailling:{
      message:null,
      errorMail:null,
    },
    retrieval:{
      message:null,
      errorRetrieval:null,
    }

  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching=true;
      state.login.error = null;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser=action.payload;
      state.login.error= null;
    },
    loginFailed:(state,action) => {
      state.login.isFetching = false;
      state.login.error= action.payload;
    },
    resetError: (state) => {
      state.login.error = null;
    },
    registerSuccess:(state) => {
      state.register.success = true ;
    },
    registerFailed:(state) => {
      state.register.error = false;
    }
    ,
    logoutStart:(state)=>{
      state.logout.isFetching=true;
    },
    logoutSuccess: (state) => {
      state.logout.isFetching = false;
      state.login.currentUser= null;
      state.logout.error = false;
    },
    getMaillingSuccess:(state,action)=>{
      state.getMailling.message= action.payload;
    },
    getMaillingFailed:(state,action)=>{
      state.getMailling.errorMail= action.payload
    },
    retrievalSuccess:(state,action)=>{
      state.retrieval.message= action.payload;
    },
    retrievalFailed:(state,action)=>{
      state.getMailling.errorRetrieval= action.payload;
    }

  },
});

export const { 
  loginStart,loginSuccess,
  loginFailed,resetError ,
  registerSuccess,registerFailed,
  logoutStart,logoutSuccess,
  getMaillingSuccess,getMaillingFailed,
  retrievalSuccess,retrievalFailed,
} = authSlice.actions;
export default authSlice.reducer;