import { createSlice, applyMiddleware } from "@reduxjs/toolkit";

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
    createMenu: {
      createMenuResponse: null,
      createMenuError: null,
    },
    findOrder: {
      orderResponse: null,
      orderError: null,
    },
    findMenu: {
      menuResponse: [],
      menuError: null,
    },
    // lịch sử mua của user
    getAllByUser: {
      listOrderResponse: null,
      listOrderError: null,
    },
    // danh thu hệ thống
    countAllPrice: {
      count: 0,
      error: null,
    },
    // danh thu theo năm
    countYear: {
      sumPrice: null,
      error: null,
    },
    // selectAllAmin
    selectAllAdmin: {
      listOrder: null,
      error: null,
    },
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
    createMenuSuccess: (state, action) => {
      state.createMenu.createMenuResponse = action.payload;
    },
    createMenuError: (state, action) => {
      state.createMenu.createMenuError = action.payload;
    },
    findOrderSuccess: (state, action) => {
      state.findOrder.orderResponse = action.payload;
    },
    findOrderFailed: (state, action) => {
      state.findOrder.orderError = action.payload;
    },
    findMenuSuccess: (state, action) => {
      state.findMenu.menuResponse = action.payload;
    },
    findMenuFailed: (state, action) => {
      state.findMenu.menuError = action.payload;
    },
    getAllByUserSuccess: (state, action) => {
      state.getAllByUser.listOrderResponse = action.payload;
    },
    getAllByUserError: (state, action) => {
      state.getAllByUser.listOrderError = action.payload;
    },
    // tổng giá trị
    countAllPriceSuccess: (state, action) => {
      state.countAllPrice.count = action.payload;
    },
    countAllPriceFailed: (state, action) => {
      state.countAllPrice.error = action.payload;
    },
    // tổng danh thu theo năm
    sumYearSuccess: (state, action) => {
      state.countYear.sumPrice = action.payload;
    },
    sumYearFailed: (state, action) => {
      state.countYear.error = action.payload;
    },
    selectAllAdminSuccess: (state, action) => {
      state.selectAllAdmin.listOrder = action.payload;
    },
    selectAllAdminFailed: (state, action) => {
      state.selectAllAdmin.error = action.payload;
    },
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
  countAllPriceSuccess,
  countAllPriceFailed,
  sumYearSuccess,
  sumYearFailed,
  selectAllAdminSuccess,
  selectAllAdminFailed,
} = orderSlice.actions;

export default orderSlice.reducer;
