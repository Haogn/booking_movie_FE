import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        customer:{
        listCustomer:null,
        isFetching:false,
        error:false,
        },
        employer:{
        listEmployer:null,
        isFetching:false,
        error:false,
        },
        manager:{
        listEmployer:null,
        isFetching:false,
        error:false,  
        }
    },
    reducers:{
        getCustomeStart:(state)=>{
            state.customer.isFetching = true;
        },
        getCustomeSuccess:(state,action)=>{
            state.customer.isFetching = false;
            state.customer.listCustomer = action.payload;
        },
        getCustomeFailed:(state)=>{
            state.customer.isFetching = false;
            state.customer.error = true;
        },
        getEmployerStart:(state)=>{
            state.employer.isFetching = true;
        },
        getEmployerSuccess:(state,action)=>{
            state.employer.isFetching = false;
            state.employer.listEmployer = action.payload;
        },
        getEmployerFailed:(state)=>{
            state.employer.isFetching = false;
            state.employer.error = true;
        }
        ,
        getManagerStart:(state)=>{
            state.manager.isFetching = true;
        },
        getManagerSuccess:(state,action)=>{
            state.manager.isFetching = false;
            state.manager.listManager = action.payload;
        },
        getManagerFailed:(state)=>{
            state.manager.isFetching = false;
            state.manager.error = true;
        }
    }
})

export const {
    getCustomeStart,
    getCustomeSuccess,
    getCustomeFailed,
    getEmployerStart,
    getEmployerSuccess,
    getEmployerFailed,
    getManagerStart,
    getManagerSuccess,
    getManagerFailed,
  } = userSlice.actions;
  
  export default userSlice.reducer;