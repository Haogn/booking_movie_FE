import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:"order",
    initialState:{
        createOrder:{
            orderResponse: null,
            orderError:null,
        },
        startBuy:{
            informations:null,
            errorInform:null,
        },
        getLocation:{
            listLocation:null,
            errorLocation:null,
        },
        getOrderInform:{
            orderInform:null,
        },
        getMovieInform:{
            movieInform:null,
            errorMovie:null,
        },
        getChairStatus:{
            listChair:null,
            errorChair:null,
        },
        getRoomMovie:{
            roomResponse:null,
            errorRoom:null,
        }
    },
    reducers:{
        createOrderSuccess:(state,action) =>{
            state.createOrder.orderResponse=action.payload;
        },
        createOrderError:(state,action) =>{
            state.createOrder.orderResponse=action.payload;
        },
        startBuySuccess:(state,action) =>{
            state.startBuy.informations=action.payload;
        },
        startBuyFailed:(state,action) =>{
            state.startBuy.errorInform=action.payload;
        },
        getLocationSuccess:(state,action) =>{
            state.getLocation.listLocation=action.payload;
        },
        getLocationFailed:(state,action) =>{
            state.getLocation.errorLocation=action.payload;
        },
        getOrderInformations:(state,action) =>{
            state.getOrderInform.orderInform = action.payload;
        },
        getMovieInformationSuccess:(state,action) =>{
            state.getMovieInform.movieInform = action.payload;
        },
        getMovieInformationFailed:(state,action) =>{
            state.getMovieInform.errorMovie = action.payload;
        },
        getChairStatusSuccess:(state,action) =>{
            state.getChairStatus.listChair=action.payload;
        },
        getChairStatusFailed:(state,action) =>{
            state.getChairStatus.errorChair = action.payload;
        },
        getRoomMovieSuccess:(state,action) =>{
            state.getRoomMovie.roomResponse=action.payload;
        },
        getRoomMovieFailed:(state,action) =>{
            state.getRoomMovie.errorRoom=action.payload;
        }
    },
});
export const {
    createOrderSuccess,createOrderError,
    startBuySuccess,startBuyFailed,
    getLocationSuccess,getLocationFailed,
    getOrderInformations,
    getMovieInformationSuccess,getMovieInformationFailed,
    getChairStatusSuccess,getChairStatusFailed,
    getRoomMovieSuccess,getRoomMovieFailed,
} = orderSlice.actions;

export default orderSlice.reducer;