import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:"order",
    initialState:{
        createOrder:{
            orderResponse: null,
            orderError:null,
        }
    },
    reducers:{
        createOrderSuccess:(state,action) =>{
            state.createOrder.orderResponse=action.payload;
        },
        createOrderError:(state,action) =>{
            state.createOrder.orderResponse=action.payload;
        }
    },
});
export const {
    createOrderSuccess,createOrderError

} = orderSlice.actions;

export default orderSlice.reducer;