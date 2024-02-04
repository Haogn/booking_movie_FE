import { createSlice } from "@reduxjs/toolkit";
import { tr } from "date-fns/locale";

const couponSlice = createSlice({
  name: "coupons",
  initialState: {
    coupon: {
      currentCount: null,
      listCouponSelect: null,
      listCoupon: null,
      error: null,
      isFetching: false,
    },
    
  },
  reducers: {
    // create
    createCouponStart: (state) => {
      state.coupon.isFetching = true;
    },
    createCouponSuccess: (state, action) => {
      state.coupon.isFetching = false;
      state.coupon.currentCount = action.payload;
    },
    createCouponFailed: (state, action) => {
      state.coupon.error = action.payload;
      state.coupon.isFetching = false;
    },
    // get all coupon
    getAllCouponStart: (state) => {
      state.coupon.isFetching = true;
    },
    getAllCouponSuccess: (state, action) => {
      state.coupon.isFetching = false;
      state.coupon.listCoupon = action.payload;
    },
    getAllCouponFailed: (state, action) => {
      state.coupon.error = action.payload;
      state.coupon.isFetching = false;
    },
    // use coupon
    useCouponStart: (state) => {
      state.coupon.isFetching = true;
    },
    useCouponSuccess: (state, action) => {
      state.coupon.isFetching = false;
      state.coupon.currentCount = action.payload;
    },
    useCouponFailed: (state, action) => {
      state.coupon.error = action.payload;
      state.coupon.isFetching = false;
    },
  },
 
});
export const {
  createCouponStart,
  createCouponSuccess,
  createCouponFailed,
  getAllCouponStart,
  getAllCouponSuccess,
  getAllCouponFailed,
  useCouponStart,
  useCouponSuccess,
  useCouponFailed,
} = couponSlice.actions;
export default couponSlice.reducer;
