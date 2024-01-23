import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"customer",
    initialState:{
        customer:{
        allCustomer:null,
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
            state.customer.allCustomer = action.payload;
        },
        getCustomeFailed:(state)=>{
            state.customer.isFetching = false;
            state.customer.error = true;
        }
    }
})

export const {getCustomeStart,getCustomeSuccess,getCustomeFailed}= userSlice.actions;
export default createSlice.reducers;