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

export const getTime = async (dispatch, token, id) => {
  dispatch(getTimeStart());
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

export const createTime = async (token, formTime, dispatch, navigate) => {
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
    navigate("/admin/list-time");
  } catch (error) {
    //   console.log("Tao moi that bai", error);
    dispatch(createTimeFailed(error.response));
  }
};

export const editTime = async (token, dispatch, id, formEditTime, navigate) => {
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
    navigate("/admin/list-time");
  } catch (error) {
    dispatch(editTimeFailed(error.response));
  }
};

export const deleteTime = async (token, dispatch, id, navigate) => {
  dispatch(deleteTimeStart());
  try {
    const res = await axios.patch(
      `http://localhost:6789/api/booking/v1/timeSlot/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(deleteTimeSuccess(res.data));
    navigate("/admin/list-time");
  } catch (error) {
    dispatch(deleteTimeFailed(error.response));
  }
};
