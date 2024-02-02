import axios from "axios";
import {
  startBuySuccess,
  startBuyFailed,
  getLocationSuccess,
  getLocationFailed,
  getMovieInformationSuccess,
  getMovieInformationFailed,
  getChairStatusSuccess,
  getChairStatusFailed,
  getRoomMovieSuccess,
  getRoomMovieFailed,
  getPaymentVNPaySuccess,
  getPaymentVNPayFailed,
  createOrderSuccess,
  createOrderError,
  getTotalUserSuccess,
  getTotalUserError,
  getAllByUserSuccess,
  getAllByUserError,
} from "../../reducers/orderSlice";

export const bookingMovie = async (dispatch, token, orderForm) => {
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/orders",
      orderForm,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    dispatch(createOrderSuccess(res.data));
    return res.data;
  } catch (error) {
    dispatch(createOrderError(error.response));
  }
};

export const startBuy = async (
  dispatch,
  idMovie,
  selectDate,
  roomType,
  locationName
) => {
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/view/${idMovie}`,
      {
        params: {
          selectDate: selectDate,
          roomType: roomType,
          locationName: locationName,
        },
      }
    );
    dispatch(startBuySuccess(res.data));
  } catch (error) {
    dispatch(startBuyFailed(error.response));
  }
};

export const getLocation = async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/location/getLocation`
    );

    dispatch(getLocationSuccess(res.data));
  } catch (error) {
    dispatch(getLocationFailed(error.response));
  }
};

export const getMovieInform = async (dispatch, navigate, idMovie) => {
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/movie/${idMovie}`
    );
    console.log(res.data);
    dispatch(getMovieInformationSuccess(res.data));
    navigate("/booking");
  } catch (error) {
    dispatch(getMovieInformationFailed(error.response));
  }
};

export const getRoom = async (
  dispatch,
  idMovie,
  startTime,
  roomType,
  theaterName,
  selectDate
) => {
  try {
    const response = await axios.get(
      `http://localhost:6789/api/booking/v1/view/room`,
      {
        params: {
          idMovie: idMovie,
          startTime: startTime,
          roomType: roomType,
          theaterName: theaterName,
          selectDate: selectDate,
        },
      }
    );
    console.log("Phòng:", response.data);
    dispatch(getRoomMovieSuccess(response.data));
    return response.data; // Trả về dữ liệu phòng từ API
  } catch (error) {
    console.error("Lỗi khi lấy thông tin phòng:", error);
    dispatch(getRoomMovieFailed(error.response));
    return []; // Trả về một mảng rỗng nếu có lỗi
  }
};

export const getChair = async (dispatch, idRoom, startTime) => {
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/view/chair`,
      {
        params: {
          idRoom: idRoom,
          startTime: startTime,
        },
      }
    );
    console.log("ghế:");
    console.log(res.data);
    dispatch(getChairStatusSuccess(res.data));
  } catch (error) {
    dispatch(getChairStatusFailed(error.response));
  }
};

export const paymentVNPay = async (dispatch, total) => {
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/payments/createVNPay`,
      {
        params: {
          total: total,
        },
      }
    );
    console.log(res.data);
    dispatch(getPaymentVNPaySuccess(res.data));
    window.location.href = res.data.url;
  } catch (error) {
    dispatch(getPaymentVNPayFailed(error.response));
  }
};

// // lấy ra tổng số tiền người dùng đã chi tiêu
// export const getTotalUsers = async (dispatch, token) => {
//   try {
//     const res = await axios.get(
//       "http://localhost:6789/api/booking/v1/orders/oder-customer",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   } catch (error) {
//     dispatch(getTotalUserError(error.response));
//   }
// };

// lấy ra list lịch sử mua của người dùng
export const getAllByUser = async (dispatch, token, page) => {
  try {
    const res = await axios.get(
      "//localhost:6789/api/booking/v1/orders/history-customer",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: page,
        },
      }
    );
    dispatch(getAllByUserSuccess(res.data));
  } catch (err) {
    dispatch(getAllByUserError(err.response));
  }
};
