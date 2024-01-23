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
    }
  },
});

export const { loginStart,loginSuccess,loginFailed, registerStart,registerSuccess,registerFailed } = authSlice.actions;
export default authSlice.reducer;