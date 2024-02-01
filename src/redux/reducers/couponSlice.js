import { createSlice } from "@reduxjs/toolkit";

const couponSlice = createSlice({
  name: "coupons",
  initialState: {
    coupon: {
      currentCoupon: null,
      listCoupon: null,
      error: null,
      isFetching: false,
    },
  },
  reducers: {
    // get all by user
    getAllCouponStart: (state) => {
      state.coupon.isFetching = true;
    },
    getAllCouponSuccess: (state, action) => {
      state.coupon.isFetching = false;
      state.coupon.listCoupon = action.payload;
      state.coupon.error = null;
    },
    getAllCouponFailed: (state, action) => {
      state.coupon.isFetching = false;
      state.coupon.error = action.payload;
    },
  },
  // create
  createCouponStart: (state) => {
    state.coupon.isFetching = true;
  },
  createCouponSuccess: (state, action) => {
    state.coupon.isFetching = false;
    state.coupon.currentCoupon = action.payload;
    state.coupon.error = null;
  },
  createCouponFailed: (state, action) => {
    state.coupon.isFetching = false;
    state.coupon.error = action.payload;
  },

  //   use coupon
  useCouponStart: (state) => {
    state.coupon.isFetching = true;
  },
  useCouponSuccess: (state, action) => {
    state.coupon.isFetching = false;
    state.coupon.currentCoupon = action.payload;
    state.coupon.error = null;
  },
  useCouponFailed: (state, action) => {
    state.coupon.isFetching = false;
    state.coupon.error = action.payload;
  },
});
export const {
  getAllCouponStart,
  getAllCouponSuccess,
  getAllCouponFailed,
  createCouponStart,
  createCouponSuccess,
  createCouponFailed,
  useCouponStart,
  useCouponSuccess,
  useCouponFailed,
} = couponSlice.actions;
export default couponSlice.reducer;
