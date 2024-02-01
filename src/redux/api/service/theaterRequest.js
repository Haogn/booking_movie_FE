import axios from "axios";
import {
  createTheaterFailed,
  createTheaterStart,
  createTheaterSuccess,
  deleteTheaterFailed,
  deleteTheaterStart,
  deleteTheaterSuccess,
  editTheaterFailed,
  editTheaterStart,
  editTheaterSuccess,
  getAllTheaterFailed,
  getAllTheaterSelectFailed,
  getAllTheaterSelectStart,
  getAllTheaterSelectSuccess,
  getAllTheaterStart,
  getAllTheaterSuccess,
  getTheaterFailed,
  getTheaterStart,
  getTheaterSuccess,
} from "../../reducers/theaterSlice";

export const getTheater = async (dispatch, { token, id }) => {
  dispatch(getTheaterStart());
  console.log("ID: " + id);
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/theater/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getTheaterSuccess(res.data));
  } catch (error) {
    dispatch(getTheaterFailed(error.response));
  }
};

export const getAllTheater = async (dispatch, token, search, page) => {
  dispatch(getAllTheaterStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/theater",
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
    dispatch(getAllTheaterSuccess(res.data));
  } catch (error) {
    dispatch(getAllTheaterFailed(error.response));
  }
};

export const getAllTheaterSelect = async (dispatch, token) => {
  dispatch(getAllTheaterSelectStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/theater/getAll",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getAllTheaterSelectSuccess(res.data));
  } catch (error) {
    dispatch(getAllTheaterSelectFailed(error.response));
  }
};

export const createTheater = async (
  token,
  formTheater,
  dispatch,
  navigate,
  toast
) => {
  dispatch(createTheaterStart());
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/theater",
      formTheater,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(createTheaterSuccess(res.data));
    toast("😎 Thêm mới rạp chiếu nhập thành công!", {
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
      navigate("/admin/list-theater");
    }, 3000);
  } catch (error) {
    //   console.log("Tao moi that bai", error);
    dispatch(createTheaterFailed(error.response));
  }
};

export const editTheater = async (
  token,
  dispatch,
  id,
  formEditTheater,
  navigate,
  toast
) => {
  dispatch(editTheaterStart());
  try {
    const res = await axios.put(
      `http://localhost:6789/api/booking/v1/theater/${id}`,
      formEditTheater,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(editTheaterSuccess(res.data));
    toast("😎 Thay đổi thông tin rạp chiếu nhập thành công!", {
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
      navigate("/admin/list-theater");
    }, 3000);
  } catch (error) {
    dispatch(editTheaterFailed(error.response));
  }
};

export const deleteTheater = async (token, dispatch, id, toast) => {
  dispatch(deleteTheaterStart());
  try {
    const res = await axios.delete(
      `http://localhost:6789/api/booking/v1/theater/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(deleteTheaterSuccess(res.data));
    toast("😎 Thêm mới rạp chiếu nhập thành công!", {
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
    dispatch(deleteTheaterFailed(error.response));
  }
};
