import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    createOrder: {
      orderResponse: null,
      orderError: null,
    },
    startBuy: {
      informations: null,
      errorInform: null,
    },
    getLocation: {
      listLocation: null,
      errorLocation: null,
    },
    getOrderInform: {
      orderInform: null,
    },
    getMovieInform: {
      movieInform: null,
      errorMovie: null,
    },
    getChairStatus: {
      listChair: null,
      errorChair: null,
    },
    getRoomMovie: {
      roomResponse: null,
      errorRoom: null,
    },
    getListChair: {
      chairs: [],
    },
    paymentVNPay: {
      paymentResponse: null,
      paymentError: null,
    },
    addToMenu: {
      menu: [],
    },
    // tổng tiền đã chi tiêu
    getTotalUser: {
      totalResponse: 0,
      totalError: null,
    },
    createMenu:{
      createMenuResponse:null,
      createMenuError:null,
    },
    findOrder:{
      orderResponse:null,
      orderError:null,
    },
    findMenu:{
      menuResponse:[],
      menuError:null,
    },
    // lịch sử mua của user
    getAllByUser: {
      listOrderResponse: null,
      listOrderError: null,
    },
    pointApply:{
      point: 0,
    },
    couponApply:{
      coupon: 0,
    },
    getCouponOfUser:{
      listCoupon: null,
      errorCoupon: null,
    },
    checkCoupon:{
      couponResponse:null,
      couponError:null,
    }
  },
  reducers: {
    createOrderSuccess: (state, action) => {
      state.createOrder.orderResponse = action.payload;
    },
    createOrderError: (state, action) => {
      state.createOrder.orderResponse = action.payload;
    },
    startBuySuccess: (state, action) => {
      state.startBuy.informations = action.payload;
    },
    startBuyFailed: (state, action) => {
      state.startBuy.errorInform = action.payload;
    },
    getLocationSuccess: (state, action) => {
      state.getLocation.listLocation = action.payload;
    },
    getLocationFailed: (state, action) => {
      state.getLocation.errorLocation = action.payload;
    },
    getOrderInformations: (state, action) => {
      state.getOrderInform.orderInform = action.payload;
    },
    getMovieInformationSuccess: (state, action) => {
      state.getMovieInform.movieInform = action.payload;
    },
    getMovieInformationFailed: (state, action) => {
      state.getMovieInform.errorMovie = action.payload;
    },
    getChairStatusSuccess: (state, action) => {
      state.getChairStatus.listChair = action.payload;
    },
    getChairStatusFailed: (state, action) => {
      state.getChairStatus.errorChair = action.payload;
    },
    getRoomMovieSuccess: (state, action) => {
      state.getRoomMovie.roomResponse = action.payload;
    },
    getRoomMovieFailed: (state, action) => {
      state.getRoomMovie.errorRoom = action.payload;
    },
    getListChairSuccess: (state, action) => {
      state.getListChair.chairs = action.payload;
    },
    getPaymentVNPaySuccess: (state, action) => {
      state.paymentVNPay.paymentResponse = action.payload;
    },
    getPaymentVNPayFailed: (state, action) => {
      state.paymentVNPay.paymentError = action.payload;
    },
    addToMenuSuccess: (state, action) => {
      state.addToMenu.menu = action.payload;
    },
    getTotalUserSuccess: (state, action) => {
      state.getTotalUser.totalResponse = action.payload;
    },
    getTotalUserError: (state, action) => {
      state.getTotalUser.totalError = action.payload;
    },
    createMenuSuccess: (state, action)=>{
      state.createMenu.createMenuResponse = action.payload;
    },
    createMenuError: (state, action)=>{
      state.createMenu.createMenuError = action.payload;
    },
    findOrderSuccess: (state, action)=>{
      state.findOrder.orderResponse= action.payload;
    },
    findOrderFailed: (state, action)=>{
      state.findOrder.orderError= action.payload;
    },
    findMenuSuccess: (state, action)=>{
      state.findMenu.menuResponse= action.payload;
    },
    findMenuFailed: (state, action)=>{
      state.findMenu.menuError= action.payload;
    },
    getAllByUserSuccess: (state, action) => {
      state.getAllByUser.listOrderResponse = action.payload;
    },
    getAllByUserError: (state, action) => {
      state.getAllByUser.listOrderError = action.payload;
    },
    pointApply:(state, action) => {
      state.pointApply.point = action.payload;
    },
    couponApply:(state, action) => {
      state.couponApply.coupon = action.payload;
    },
    getCouponOfUserSuccess:(state, action) => {
      state.getCouponOfUser.listCoupon = action.payload;
    },
    getCouponOfUserFailed:(state, action) => {
      state.getCouponOfUser.errorCoupon = action.payload;
    },
    checkCouponSuccess: (state, action) => {
      state.checkCoupon.couponResponse=action.payload;
    },
    checkCouponFailed: (state, action) => {
      state.checkCoupon.couponError=action.payload;
    }
  },
});
export const {
  createOrderSuccess,
  createOrderError,
  startBuySuccess,
  startBuyFailed,
  getLocationSuccess,
  getLocationFailed,
  getOrderInformations,
  getMovieInformationSuccess,
  getMovieInformationFailed,
  getChairStatusSuccess,
  getChairStatusFailed,
  getRoomMovieSuccess,
  getRoomMovieFailed,
  getListChairSuccess,
  addToMenuSuccess,
  getPaymentVNPaySuccess,
  getPaymentVNPayFailed,
  getTotalUserSuccess,
  getTotalUserError,
  createMenuSuccess,
  createMenuError,
  findOrderSuccess,
  findOrderFailed,
  findMenuSuccess,
  findMenuFailed,
  getAllByUserSuccess,
  getAllByUserError,
  pointApply,
  couponApply,
  getCouponOfUserSuccess,
  getCouponOfUserFailed,
  checkCouponSuccess,
  checkCouponFailed,
} = orderSlice.actions;

export default orderSlice.reducer;
