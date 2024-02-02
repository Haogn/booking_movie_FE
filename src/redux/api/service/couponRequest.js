import axios from "axios";
import {
  createCouponFailed,
  createCouponStart,
  createCouponSuccess,
  getAllCouponFailed,
  getAllCouponStart,
  getAllCouponSuccess,
  useCouponFailed,
  useCouponStart,
  useCouponSuccess,
} from "../../reducers/couponSlice";

// get all by user
export const getAllCouponByUser = async (dispatch, token) => {
  dispatch(getAllCouponStart());
  try {
    const res = await axios.get("http://localhost:6789/api/booking/v1/coupon", {
      headers: { Authorization: "Bearer " + token },
    });
    dispatch(getAllCouponSuccess(res.data));
  } catch (e) {
    dispatch(getAllCouponFailed(e.response));
  }
};

// create coupon
export const createCoupon = async (coupon, dispatch, token, navigate) => {
  debugger;
  dispatch(createCouponStart());
  try {
    console.log(coupon);
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/coupon",
      coupon,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    console.log(res.data);
    dispatch(createCouponSuccess(res.data));
    navigate("/admin/list-customer");
  } catch (e) {
    dispatch(createCouponFailed(e.response));
  }
};

// use coupon

const useCouponUser = async (id, dispatch, token) => {
  dispatch(useCouponStart());
  try {
    const res = await axios.patch(
      `http://localhost:6789/api/booking/v1/coupon/${id}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    dispatch(useCouponSuccess(res.data));
  } catch (e) {
    dispatch(useCouponFailed(e.response));
  }
};
