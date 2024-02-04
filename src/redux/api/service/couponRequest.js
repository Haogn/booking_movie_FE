import axios from "axios";
import {
  getAllCouponFailed,
  getAllCouponStart,
  getAllCouponSuccess,
  createCouponStart,
  createCouponSuccess,
  createCouponFailed,
  checkCouponSuccess,
  checkCouponFailed
} from "../../reducers/couponSlice.js";


// get all by user
export const  getAllCouponByUser = async (dispatch, token) => {
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
export const createCoupon = async (
  couponRequestDto,
  dispatch,
  token,
  navigate
) => {
  dispatch(createCouponStart());
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/coupon",
      couponRequestDto,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    dispatch(createCouponSuccess(res.data));
    navigate("");
  } catch (e) {
    dispatch(createCouponFailed(e.response));
  }
};



// // use coupon

// const useCouponUser = async (id, dispatch, token) => {
//   dispatch(useCouponStart());
//   try {
//     const res = await axios.patch(
//       `http://localhost:6789/api/booking/v1/coupon/${id}`,
//       {
//         headers: { Authorization: "Bearer " + token },
//       }
//     );
//     dispatch(useCouponSuccess(res.data));
//   } catch (e) {
//     dispatch(useCouponFailed(e.response));
//   }
// };
