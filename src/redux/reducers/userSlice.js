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
        listManager:null,
        isFetching:false,
        error:false,  
        }
    },
    reducers:{
        getCustomeSuccess:(state,action)=>{
            state.customer.isFetching = false;
            state.customer.listCustomer = action.payload;
        },
        getCustomeFailed:(state)=>{
            state.customer.isFetching = false;
            state.customer.error = true;
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
    getCustomeSuccess,
    getCustomeFailed,
    getEmployerSuccess,
    getEmployerFailed,
    getManagerSuccess,
    getManagerFailed,
  } = userSlice.actions;
  
  export default userSlice.reducer;