import axios from "axios";
import {
  createTimeFailed,
  createTimeStart,
  createTimeSuccess,
  deleteTimeFailed,
  deleteTimeStart,
  deleteTimeSuccess,
  editTimeFailed,
  editTimeStart,
  editTimeSuccess,
  getALlTimeSelectFailed,
  getALlTimeSelectSuccess,
  getAllTimeFailed,
  getAllTimeSelectStart,
  getAllTimeStart,
  getAllTimeSuccess,
  getTimeFailed,
  getTimeStart,
  getTimeSuccess,
} from "../../reducers/timeSlice";

export const getTime = async (dispatch, { token, id }) => {
  dispatch(getTimeStart());
  // console.log("ID: " + id);
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/timeSlot/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getTimeSuccess(res.data));
  } catch (error) {
    dispatch(getTimeFailed(error.response));
  }
};

export const getAllTime = async (dispatch, token, search, page) => {
  dispatch(getAllTimeStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/timeSlot",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          params: {
            search: search,
            page: page,
          },
        },
      }
    );
    // console.log(res.data);
    dispatch(getAllTimeSuccess(res.data));
  } catch (error) {
    dispatch(getAllTimeFailed(error.response));
  }
};

export const getAllTimeSelect = async (dispatch, token) => {
  dispatch(getAllTimeSelectStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/timeSlot/getAll",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getALlTimeSelectSuccess(res.data));
  } catch (error) {
    dispatch(getALlTimeSelectFailed(error.response));
  }
};

export const createTime = async (
  token,
  formTime,
  dispatch,
  navigate,
  toast
) => {
  dispatch(createTimeStart());
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/timeSlot",
      formTime,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(createTimeSuccess(res.data));
    toast("😎 Thêm mới khung giờ thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/admin/list-time");
    }, 3000);
  } catch (error) {
    //   console.log("Tao moi that bai", error);
    dispatch(createTimeFailed(error.response));
  }
};

export const editTime = async (
  token,
  dispatch,
  id,
  formEditTime,
  navigate,
  toast
) => {
  dispatch(editTimeStart());
  try {
    const res = await axios.put(
      `http://localhost:6789/api/booking/v1/timeSlot/${id}`,
      formEditTime,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(editTimeSuccess(res.data));
    toast("😎 Thay đổi thông tin khung giờ thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/admin/list-time");
    }, 3000);
  } catch (error) {
    dispatch(editTimeFailed(error.response));
  }
};

export const deleteTime = async (token, dispatch, id, toast) => {
  dispatch(deleteTimeStart());
  console.log("ID: " + id);
  try {
    const res = await axios.delete(
      `http://localhost:6789/api/booking/v1/timeSlot/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(deleteTimeSuccess(res.data));
    toast("😎 Xoá khung giờ thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    dispatch(deleteTimeFailed(error.response));
  }
};
