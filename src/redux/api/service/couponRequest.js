import axios from "axios";
import {
  createCouponFailed,
  createCouponStart,
  createCouponSuccess,
  getAllCouponFailed,
  getAllCouponStart,
  getAllCouponSuccess,
<<<<<<< HEAD
  showCustomerFailed,
  showCustomerSuccess,
  useCouponFailed,
  useCouponStart,
  useCouponSuccess,
} from "../../reducers/couponSlice";
=======
} from "../../reducers/couponSlice.js";

>>>>>>> 464b349acf8b190c2bd6dde8d2bbf928e0e79668

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
  coupon,
  dispatch,
  token,
  navigate,
  toast
) => {
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
    toast("😎 Thên mớ thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(createCouponSuccess(res.data));
    setTimeout(() => {
      navigate("/admin/list-customer");
    }, 3000);
  } catch (e) {
    dispatch(createCouponFailed(e.response));
  }
};


<<<<<<< HEAD
// export const useCouponUser = async (id, dispatch, token) => {
=======
// // use coupon
// const useCouponUser = async (id, dispatch, token) => {
>>>>>>> 464b349acf8b190c2bd6dde8d2bbf928e0e79668
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

// show coupon by customer
export const showCouponByCustomer = async (dispatch, token, id) => {
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/coupon/show-customer/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch(showCustomerSuccess(res.data));
  } catch (e) {
    dispatch(showCustomerFailed(e.response));
  }
};
